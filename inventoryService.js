async function searchInventory(product, color, budget) {
  return await Inventory.find({
    item: { $regex: product, $options: "i" },
    color: color,
    price: { $lte: budget }
  });
}
