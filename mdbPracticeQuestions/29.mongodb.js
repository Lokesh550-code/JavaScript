use("ecommerce");

// db.users.createIndex({age:1, name: 1})

db.users
  .find({
    name: "Alice",
  })
  .explain("executionStats");
