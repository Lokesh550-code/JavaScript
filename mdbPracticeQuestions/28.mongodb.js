use("ecommerce");

db.users.find({ age: 25 }).explain("executionStats");
