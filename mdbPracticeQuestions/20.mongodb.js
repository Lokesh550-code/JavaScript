use("ecommerce");

db.products.find({ discount: { $exists: true } });
