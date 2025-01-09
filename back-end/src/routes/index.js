import { Router } from 'express';

import authRouter from './authRoutes.js';
import userRouter from './userRoutes.js';
import productRouter from './productRoutes.js';
import saleRoutes from "./saleRouter.js";
import categoryRoutes from "./categoryRoutes.js"
import collectionRoutes from "./collectionRoutes.js";

const router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/products', productRouter);
router.use("/sales", saleRoutes);
router.use("/categories", categoryRoutes)
router.use("/collections",collectionRoutes)

export default router;