import { Router } from 'express';
import { registerUser } from '../services/auth/register.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { verifyAdmin } from '../middlewares/verifyAdmin.js';;
import { 
        deleteUser, 
        getAllUsers, 
        getUserById, 
        restoreUser, 
        updateUser, 
        updateUserImage } from '../controllers/userController.js';
import { uploadPhotoMiddleware } from '../middlewares/uploadFileMiddlewares.js';

const router = Router();

router.post('/',registerUser)
router.get('/', authMiddleware,verifyAdmin, getAllUsers);
router.get('/:id', authMiddleware, verifyAdmin, getUserById);
router.put('/:id', authMiddleware, verifyAdmin, updateUser);
router.put('/:id/image', authMiddleware, verifyAdmin, uploadPhotoMiddleware('usuarios', 'file'), updateUserImage);
router.delete('/:id', authMiddleware, verifyAdmin, deleteUser);
router.patch('/:id/restore', authMiddleware, verifyAdmin, restoreUser);

export default router;