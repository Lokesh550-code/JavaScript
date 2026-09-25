use("ecommerce");

// show("collections");

// prints every data inside the said collection
// db.contacts.find().pretty();

// prints products which are of category "Electronics";
// db.products.find({category: "Electronics"});

// Comparision Operators
// db.products.find({ price: { $gt: 1000, $lt: 4000 } });

// Logical operator
// db.products.find({ $or: [{ category: "Books", price: { $gt: 4000 } }] });

// Projection
// db.products.find({}, { name: 1, category: 1, price: 1, _id: 0 });

//  sorting and limiting
db.products
  .find({ category: "Books" })
  .projection({ name: 1, category: 1, price: 1, _id: 0 })
  .sort({ price: -1 })
  .limit(1);
