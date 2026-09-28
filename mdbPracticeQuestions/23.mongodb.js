use("ecommerce");

db.products.find(
  { tags: "wireless", tags: "bluetooth" },
  { name: 1, brand: 1, category: 1, tags: 1, _id: 0 },
);
