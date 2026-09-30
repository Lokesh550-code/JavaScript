use("ecommerce");

db.users.aggregate([
  {
    $match: {
      age: 30,
    },
  },
  { $project: { name: 1, age: 1, email: 1, _id: 0 } },
  {
    $sort: {
      name: -1,
    },
  },
]);
