use("ecommerce");

db.products.find({
  $and: [{ price: { $gt: 5000 } }, { rating: { $gte: 4.5 } }],
});
