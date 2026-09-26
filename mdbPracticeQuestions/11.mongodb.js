use("ecommerce");

db.products.update({ name: "Samsung T7 Shield 1TB" }, { $inc: { stock: 10 } });
