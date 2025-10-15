6️⃣ Caching

Purpose: Reduce DB load, improve latency.

MongoDB + Redis: Cache frequent queries.

Example:

// Pseudo-code
let cacheData = await redis.get("user:123");
if (!cacheData) {
  cacheData = await db.users.findOne({ userId: 123 });
  await redis.set("user:123", JSON.stringify(cacheData), "EX", 60); // expire 60s
}


Use Case: Frequently accessed user profiles.