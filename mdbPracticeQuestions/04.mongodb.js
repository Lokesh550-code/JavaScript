use("ecommerce");

db.products.find({ $or: [{ brand: "Sony" }, { brand: "JBL" }] });
