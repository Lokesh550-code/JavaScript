use("ecommerce");

db.products.find({price: {$gt: 10000}}, {name: 1, price: 1, _id: 0})