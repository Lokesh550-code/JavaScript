use("ecommerce");

// db.products.updateMany(
//   { name: "Samsung T7 Shield 1TB" },
//   { $pull: { tags: "sale" } },
// );

db.products.find({ name: "Samsung T7 Shield 1TB" });
