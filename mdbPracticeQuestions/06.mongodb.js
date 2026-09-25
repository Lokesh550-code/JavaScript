use("ecommerce");

db.products.find({ tags: { $in: ["wireless"] } });
