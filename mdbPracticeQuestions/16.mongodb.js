use("ecommerce");

db.orders.find({ "items.productId": 3 });
