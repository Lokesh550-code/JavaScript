use("ecommerce");

db.products.find({ rating: { $gt: 4.5 } });
