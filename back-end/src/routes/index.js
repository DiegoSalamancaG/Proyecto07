import { Router } from 'express';

import authRouter from './authRoutes.js';
import userRouter from './userRoutes.js';
import productRouter from './productRoutes.js';
import saleRoutes from "./saleRouter.js";

const router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/products', productRouter);
router.use("/sales", saleRoutes);

export default router;