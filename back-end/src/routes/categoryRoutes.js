import { Router } from "express";
import {
    createCategory,
    getAllCategory,
    getCategoryByName,
    updateCategory,
    deleteCategory
} from '../controllers/categoryController.js'
import { verifyAdmin } from '../middlewares/verifyAdmin.js'
import { authMiddleware } from "../middlewares/authMiddleware.js";


const router = Router();

router.post('/', authMiddleware, verifyAdmin, createCategory);
router.get('/', getAllCategory);
router.get('/:id', getCategoryByName);
router.put('/:id',authMiddleware, verifyAdmin, updateCategory);
router.delete('/:id',authMiddleware, verifyAdmin, deleteCategory);

export default router;