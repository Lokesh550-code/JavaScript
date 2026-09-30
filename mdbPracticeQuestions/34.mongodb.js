use("ecommerce");

// db.customers.insertMany([
//   { userId: 1, name: "Alice" },
//   { userId: 2, name: "Bob" },
//   { userId: 3, name: "Charlie" },
// ]);

db.orders.aggregate([
  {
    $lookup: {
      from: "customer",
      localField: "userId",
      foreignField: "userId",
      as: "customer",
    },
  },
]);
