const { searchInventory } = require("../services/inventoryService");

async function getInventory(req, res) {
  try {
    const { product, color, budget } = req.query;

    const results = await searchInventory(product, color, budget);

    res.json(results);
  } catch (error) {
    res.status(500).json({ message: "Error searching inventory" });
  }
}

module.exports = { getInventory };