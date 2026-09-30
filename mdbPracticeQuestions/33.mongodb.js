use("ecommerce");

db.people.aggregate([
  {
    $unwind: "$hobbies",
  },
  {
    $group: {
      _id: "$hobbies",
      count: { $sum: 1 },
    },
  },
]);
