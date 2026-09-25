use("ecommerce");

db.products.find().sort({ price: 1 }).limit(5);
