1️⃣ Replication in MongoDB

Purpose: Scale reads and provide high availability.

MongoDB feature: Replica Set

One primary node handles writes.

Multiple secondary nodes replicate data and can serve reads.

Example:

// Connect to MongoDB replica set
const mongoose = require("mongoose");
mongoose.connect("mongodb://primaryHost,secondaryHost1,secondaryHost2/myDB?replicaSet=rs0");


Use Case: Even if primary fails, a secondary can be promoted → high availability.