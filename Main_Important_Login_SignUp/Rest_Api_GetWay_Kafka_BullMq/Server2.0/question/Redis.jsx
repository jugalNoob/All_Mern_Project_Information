2️⃣ How to fix it in Docker
Option A: Use Docker network

Create a network:

docker network create redis-cluster-net


Run Redis nodes on this network:


docker network create redis-cluster-net

docker run -d --name redis-7000 --net redis-cluster-net redis:7 redis-server --cluster-enabled yes --cluster-config-file nodes.conf --appendonly yes
docker run -d --name redis-7001 --net redis-cluster-net redis:7 redis-server --cluster-enabled yes --cluster-config-file nodes.conf --appendonly yes
docker run -d --name redis-7002 --net redis-cluster-net redis:7 redis-server --cluster-enabled yes --cluster-config-file nodes.conf --appendonly yes


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

  