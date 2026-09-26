use("ecommerce");

db.orders.find({ totalAmount: { $gt: 20000 } });
