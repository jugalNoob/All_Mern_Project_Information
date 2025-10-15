1️⃣ Queue (Point-to-Point)
Definition:

Messages are sent to a queue.

Each message is consumed by only one consumer.

Typical pattern: Producer → Queue → Consumer.

Use Case / When to Use:

Task processing (background jobs, emails, order processing).

Load leveling (buffer requests during spikes).

Scenarios where each message should be processed only once.

Key Features:

One-to-one communication.

Supports acknowledgment (ACK) for reliability.

Can be persistent (disk) or in-memory.



| Tool       | Notes                                  |
| ---------- | -------------------------------------- |
| RabbitMQ   | Supports durable queues, ACKs, routing |
| Amazon SQS | Managed queue, FIFO option available   |
| ActiveMQ   | JMS compatible, reliable               |
| IBM MQ     | Enterprise-grade, transactional        |



Why Use Queue?

Ensures exactly one consumer processes each message.

Handles asynchronous task execution and reliability.





1️⃣ Queue (Point-to-Point)


1::: --Why it’s important for system design:

Reliable task processing: Ensures each task/message is handled exactly once.

Asynchronous decoupling: Producers and consumers don’t need to interact in real time.

Load leveling: Handles traffic spikes gracefully by buffering tasks.

2::: -->Key Concepts to Remember:

Producer → Queue → Consumer

ACKs for reliability.

Persistent vs transient queues.

3:: --->> Best Tools for System Design Examples:

RabbitMQ: Classic queue system, widely known.

Amazon SQS: Cloud-native, managed, supports FIFO queues.




