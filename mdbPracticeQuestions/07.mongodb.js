use("ecommerce");

db.products.find({}, { name: 1, price: 1, brand: 1, _id: 0 });
