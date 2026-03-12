const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  store: String,
  item: String,
  price: Number,
  color: String,
  stock: Number,
  floor: Number,
  x: Number,
  y: Number
});

module.exports = mongoose.model("Inventory", inventorySchema);