use("ecommerce");

db.products
  .find(
    { category: "Electronics" },
    { name: 1, category: 1, price: 1, brand: 1, _id: 0 },
  )
  .sort({ price: -1 })
  .limit(5);
