import { Router } from "express";
import {
    createCategory,
    getAllCategory,
    getCategoryByName,
    updateCategory,
    deleteCategory
} from '../controllers/categoryController.js'
import { verifyAdmin } from '../middlewares/verifyAdmin.js'


const router = Router();

router.post('/', verifyAdmin, createCategory);
router.get('/', getAllCategory);
router.get('/:id', getCategoryByName);
router.put('/:id',verifyAdmin, updateCategory);
router.delete('/:id',verifyAdmin,deleteCategory);

export default router;