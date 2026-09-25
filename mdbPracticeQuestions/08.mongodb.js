use("ecommerce");

db.products.find({}).sort({ price: -1 });
