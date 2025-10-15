3️⃣ Connection Pooling

Purpose: Efficiently handle many simultaneous connections.

Example with Node.js & Mongoose:

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  poolSize: 10 // Max 10 connections in the pool
});


Benefit: Reuses connections → avoids overhead of creating new connections per request.