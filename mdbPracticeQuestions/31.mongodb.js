use("ecommerce");

db.products.aggregate([
  {
    $group: {
      _id: "$category",
      max: { $max: "$price" },
    },
  },
]);
