5️⃣ Indexing

Purpose: Faster query lookups.

Example: Create an index on email field:

db.users.createIndex({ email: 1 });


Benefit: Queries like db.users.find({ email: "test@example.com" }) are faster.

Note: Too many indexes can slow down writes.



