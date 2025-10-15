2️⃣ Sharding (Horizontal Partitioning)

Purpose: Scale writes and handle huge datasets.

MongoDB feature: Sharded Cluster

Data is distributed across multiple shards based on a shard key.

Example:

// Shard a collection by userId
sh.enableSharding("myDB");
sh.shardCollection("myDB.users", { userId: 1 });


Use Case: User data grows to millions → distribute across multiple servers.