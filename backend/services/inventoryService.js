import Inventory from "../models/Inventory.js";

async function searchInventory(product, color, budget) {
  return await Inventory.find({
    item: { $regex: product, $options: "i" },
    color: color,
    price: { $lte: budget }
  });
}

export { searchInventory };