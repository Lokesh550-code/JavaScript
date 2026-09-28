use("ecommerce");

db.products.find({
  $and: [
    { category: "Electronics" },
    { $or: [{ brand: "Sony" }, { brand: "Samsung" }] },
    { rating: { $gt: 4.5 } },
  ],
});
