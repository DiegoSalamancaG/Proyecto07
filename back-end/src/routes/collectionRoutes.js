import { Router } from "express";
import {
    createCollection,
    getAllCollections,
    getCollectionByName,
    updateCollection,
    deleteCollection
} from '../controllers/collectionController.js'
import { verifyAdmin } from '../middlewares/verifyAdmin.js'
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

router.post('/', authMiddleware, verifyAdmin, createCollection);
router.get('/', getAllCollections);
router.get('/:name', getCollectionByName)
router.put('/:id', authMiddleware, verifyAdmin, updateCollection);
router.delete('/:id', authMiddleware, verifyAdmin, deleteCollection);

export default router;