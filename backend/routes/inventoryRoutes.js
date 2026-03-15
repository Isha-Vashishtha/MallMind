import express from "express";
import { getInventory, addInventory } from "../controllers/inventoryController.js";

const router = express.Router();

router.get("/search", getInventory);
router.post("/add", addInventory);

export default router;