import { Router } from "express";
import { verifyAdmin } from "../middlewares/verifyAdmin.js";
import { createSale, getAllSales, getSaleById } from "../controllers/saleController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/", authMiddleware,verifyAdmin, createSale);
router.get("/", authMiddleware, verifyAdmin, getAllSales);
router.get("/:id", authMiddleware,verifyAdmin, getSaleById);

export default router;

