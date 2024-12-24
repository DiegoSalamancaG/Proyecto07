import { Router } from 'express';

import { authMiddleware } from '../middlewares/authMiddleware.js';
import { deleteUser, getAllUsers, getUserById, restoreUser, updateUser, updateUserImage } from '../controllers/userController.js';
import { uploadPhotoMiddleware } from '../middlewares/uploadFileMiddlewares.js';

const router = Router();

router.get('/', authMiddleware, getAllUsers);
router.get('/:id', authMiddleware, getUserById);
router.put('/:id', authMiddleware, updateUser);
router.put('/:id/image', authMiddleware, uploadPhotoMiddleware('usuarios', 'file'), updateUserImage);
router.delete('/:id', authMiddleware, deleteUser);
router.patch('/:id/restore', authMiddleware, restoreUser);

export default router;