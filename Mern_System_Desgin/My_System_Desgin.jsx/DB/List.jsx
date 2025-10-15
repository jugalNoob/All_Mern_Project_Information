2️⃣ Quick Table: Scalability Concepts

| Concept            | Purpose / Use Case                  | Notes                         |
| ------------------ | ----------------------------------- | ----------------------------- |
| Replication        | Scale reads, HA                     | Master-slave vs master-master |
| Sharding           | Scale writes, handle huge datasets  | Partition by shard key        |
| Connection Pooling | Efficiently handle many connections | Reduces overhead              |
| Aggregation        | Analytics, metrics, reporting       | GROUP BY, pipelines           |
| Indexing           | Faster query lookups                | Can slow writes               |
| Caching            | Reduce DB load, improve latency     | Redis/Memcached               |
| Partitioning       | Performance for large tables        | Similar to sharding           |
| Materialized Views | Precomputed query results           | Fast reads, periodic refresh  |
| CQRS               | Separate read/write paths           | Improves scalability          |
| WAL / Logging      | Durability & crash recovery         | Used in relational DBs        |



7️⃣ Partitioning

Purpose: Improve performance for large collections.

In MongoDB, sharding = partitioning across nodes, but you can also partition data logically:

// Example: partition orders by month
db.orders.find({ month: "2025-10" });


Benefit: Smaller subset queries → faster reads/writes.

8️⃣ Materialized Views

Purpose: Precompute query results for fast reads.

MongoDB doesn’t have native materialized views, but you can simulate with a collection updated by aggregation:

db.createCollection("userStats");
db.userStats.insertMany(
  db.users.aggregate([
    { $group: { _id: "$country", totalUsers: { $sum: 1 } } }
  ]).toArray()
);


Use Case: Dashboards updated every hour → read from userStats instead of aggregating live.

9️⃣ CQRS (Command Query Responsibility Segregation)

Purpose: Separate read and write models for scalability.

MongoDB Implementation:

Write model: Users collection (insert/update).

Read model: Pre-aggregated userStats collection for reads.

Example:

// Write
db.users.insert({ userId: 1, country: "IN", name: "Jugal" });

// Read
db.userStats.find({ _id: "IN" });


Benefit: Writes don’t block reads, reads are fast.

🔟 WAL / Logging

Purpose: Durability & crash recovery.

MongoDB feature: Oplog (operation log) in replica sets

Stores all changes to replicate to secondaries.

Use Case: Crash recovery, replication, and replication lag tracking.