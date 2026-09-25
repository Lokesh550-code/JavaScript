use("ecommerce");

// db.products.find({}, { name: 1, price: 1, brand: 1, stock: 1, _id: 0 });

db.products.deleteMany({ brand: "Logitech" });