import { Router } from "express";
import { createProduct, deleteProduct, getAllProduct, getProductById, updateProduct, updateProductImage } from "../controllers/productController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { verifyAdmin } from "../middlewares/verifyAdmin.js";
import { uploadPhotoMiddleware } from "../middlewares/uploadFileMiddlewares.js";


const router = Router()

router.post('/', authMiddleware, verifyAdmin, uploadPhotoMiddleware('productos', 'file') , createProduct);
router.get('/', getAllProduct);
router.get('/:id', getProductById);
router.put('/:id', authMiddleware,verifyAdmin, updateProduct);
router.put("/:id/image", authMiddleware,verifyAdmin, uploadPhotoMiddleware("productos", "file"), updateProductImage);
router.delete('/:id',verifyAdmin, deleteProduct);

export default router;