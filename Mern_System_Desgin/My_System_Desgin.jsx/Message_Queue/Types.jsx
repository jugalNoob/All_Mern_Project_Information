6. Popular Message Queue Systems


| MQ System    | Type / Model          | Notes                                   |
| ------------ | --------------------- | --------------------------------------- |
| RabbitMQ     | Queue (PTP) + Pub/Sub | Supports ACK, durable queues            |
| Apache Kafka | Pub/Sub (Partitioned) | High throughput, ordered by key         |
| Amazon SQS   | PTP (Standard/FIFO)   | Fully managed, cloud-native             |
| Redis        | Queue + Pub/Sub       | In-memory, fast, optional persistence   |
| ActiveMQ     | PTP + Pub/Sub         | JMS compatible, flexible delivery modes |
| IBM MQ       | PTP + Transactional   | Enterprise-grade, persistent            |




3️⃣ When to Use MQ

Use MQ in these scenarios:


| Scenario                      | MQ Benefit                                               |
| ----------------------------- | -------------------------------------------------------- |
| High-traffic web applications | Decouple request handling and processing, buffer traffic |
| Microservices communication   | Loosely couple services, allow independent scaling       |
| Background jobs               | Offload time-consuming tasks asynchronously              |
| Event-driven systems          | Trigger actions across multiple services reliably        |
| Fault tolerance required      | Persist messages so they aren’t lost during downtime     |
| Load leveling                 | Smooth out bursts of incoming requests                   |





Queue → Use for background tasks and exactly-once processing.

Pub/Sub → Use for broadcasting events to multiple services.

Stream → Use for durable, replayable, high-throughput pipelines and real-time analytics.


| Feature         | Queue (PTP)         | Pub/Sub                 | Stream                             |
| --------------- | ------------------- | ----------------------- | ---------------------------------- |
| Delivery        | One-to-one          | One-to-many             | One-to-many (ordered)              |
| Message Storage | Optional/persistent | Optional/persistent     | Persistent (log)                   |
| Message Replay  | No                  | Sometimes (depends)     | Yes                                |
| Use Case        | Task queues         | Notifications, events   | Event sourcing, analytics          |
| Typical Tools   | RabbitMQ, SQS       | Kafka, Redis Pub/Sub    | Kafka, Kinesis, Redpanda           |
| Order Guarantee | Optional            | Usually none            | Strong (per partition)             |
| Scalability     | Moderate            | High (many subscribers) | Very high (throughput + retention) |



5️⃣ Key Takeaways

Queue → Use for background tasks and exactly-once processing.

Pub/Sub → Use for broadcasting events to multiple services.

Stream → Use for durable, replayable, high-throughput pipelines and real-time analytics.


