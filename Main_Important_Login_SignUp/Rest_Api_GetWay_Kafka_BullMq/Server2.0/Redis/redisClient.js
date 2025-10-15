const { createCluster } = require("redis");

// Define cluster nodes (use Docker network hostnames or actual IPs)
const clusterNodes = [
  { url: "redis://redis-7000:6379" },
  { url: "redis://redis-7001:6379" },
  { url: "redis://redis-7002:6379" },
];

// Create Redis Cluster instance
const redisCluster = createCluster({
  rootNodes: clusterNodes,
});

redisCluster.on("error", (err) => console.error("Redis Cluster error:", err));

// Connect to cluster
(async () => {
  try {
    await redisCluster.connect();
    console.log("✅ Connected to Redis Cluster");
  } catch (err) {
    console.error("❌ Redis Cluster connection failed:", err);
  }
})();

// Optional: Pub/Sub
const pubClient = redisCluster.duplicate();
const subClient = redisCluster.duplicate();

pubClient.on("error", (err) => console.error("Redis pub error:", err));
subClient.on("error", (err) => console.error("Redis sub error:", err));

(async () => {
  await pubClient.connect();
  await subClient.connect();
})();

module.exports = { redisCluster, pubClient, subClient };
