4️⃣ Aggregation

Purpose: Analytics, metrics, reporting.

MongoDB feature: Aggregation Pipeline

Example: Count users per country:

db.users.aggregate([
  { $group: { _id: "$country", totalUsers: { $sum: 1 } } },
  { $sort: { totalUsers: -1 } }
]);


Use Case: Dashboard showing users by country.