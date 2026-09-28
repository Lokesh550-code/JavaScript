use("ecommerce")

db.products.updateMany({name: "Samsung T7 Shield 1TB"}, {$inc: {stock: -1}});