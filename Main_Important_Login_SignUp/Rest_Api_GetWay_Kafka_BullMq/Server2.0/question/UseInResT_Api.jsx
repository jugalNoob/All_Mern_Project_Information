// hybrid module, either works
import { LRUCache } from 'lru-cache'
// or:
const { LRUCache } = require('lru-cache')

const LRU = require("lru-cache");
const zlib = require("zlib");

// Create a local in-memory LRU cache
const localCache = new LRU({
  max: 500,        // max items
  ttl: 1000 * 30,  // 30 seconds
});

exports.ApigetQuearyAdavanceRedis = async (req, res) => {
  const {
    name, countrys, emailer, bloodG, gendering, ageEq,
    truess, hoobies, removes, ones, twos,
    prices, pricegreat, priceless,
    agelessValue, agegreatValues
  } = req.query;

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const TTL = 20; // Redis TTL in seconds
  const startTime = Date.now();

  const query = {
    ...(name && { name: { $regex: name, $options: "i" } }),
    ...(countrys && { country: { $regex: countrys, $options: "i" } }),
    ...(emailer && { email: { $regex: emailer, $options: "i" } }),
    ...(bloodG && { bloodGroup: { $regex: bloodG, $options: "i" } }),
    ...(ageEq !== undefined && { age: { $eq: Number(ageEq) } }),
    ...(gendering && { gender: { $eq: gendering } }),
    ...(truess && { isEligible: { $eq: truess === "true" } }),
    ...(hoobies && { hobbies: { $in: [hoobies] } }),
    ...(removes === "name" && { name: { $exists: false } }),
    ...(ones && twos && { hobbies: { $in: [ones, twos] } }),
    ...(prices && { price: { $eq: Number(prices) } }),
    ...(priceless !== undefined && pricegreat !== undefined && {
      price: { $gte: Number(priceless), $lte: Number(pricegreat) }
    }),
    ...(agelessValue !== undefined && agegreatValues !== undefined && {
      age: { $gte: Number(agelessValue), $lte: Number(agegreatValues) }
    }),
  };

  const cacheKey = `students:query:${Buffer.from(JSON.stringify({ query, page, limit })).toString("base64")}`;

  try {
    // 1️⃣ Check local LRU cache
    const localData = localCache.get(cacheKey);
    if (localData) {
      console.log("✅ [LOCAL CACHE HIT]");
      return res.status(200).json(localData);
    }

    // 2️⃣ Check Redis cache
    const cached = await redisClient.get(cacheKey);
    if (cached) {
      const decompressed = zlib.gunzipSync(Buffer.from(cached, "base64")).toString();
      const parsed = JSON.parse(decompressed);
      localCache.set(cacheKey, parsed); // store in local cache
      console.log("✅ [REDIS CACHE HIT]");
      return res.status(200).json(parsed);
    }
  } catch (err) {
    console.warn("⚠️ Cache error:", err.message);
  }

  // 3️⃣ Fetch from MongoDB
  try {
    const [data, total] = await Promise.all([
      RegisterGet.find(query).skip(skip).limit(limit).lean(),
      RegisterGet.countDocuments(query),
    ]);

    const payload = {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      data,
    };

    // Store in both caches
    const compressed = zlib.gzipSync(JSON.stringify(payload));
    await redisClient.setEx(cacheKey, TTL, compressed.toString("base64"));
    localCache.set(cacheKey, payload);

    console.log("🗂️ [CACHE MISS] Data fetched and cached");
    return res.status(200).json(payload);
  } catch (error) {
    console.error("❌ DB Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
