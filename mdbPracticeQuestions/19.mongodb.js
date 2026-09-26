use("ecommerce");

db.orders.find({
  orderedAt: { $lte: new Date("2026-09-30"), $gte: new Date("2026-09-01") },
});
