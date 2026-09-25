use("ecommerce");

db.products.find(
  { price: { $gte: 5000, $lte: 15000 } },
  { name: 1, price: 1, brand: 1, _id: 0 },
);
