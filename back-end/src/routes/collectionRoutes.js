import { Router } from "express";
import {
    createCollection,
    getAllCollections,
    getCollectionByName,
    updateCollection,
    deleteCollection
} from '../controllers/collectionController.js'
import { verifyAdmin } from '../middlewares/verifyAdmin.js'

const router = Router();

router.post('/', verifyAdmin, createCollection);
router.get('/', getAllCollections);
router.get('/:name', verifyAdmin, getCollectionByName)
router.put('/:id', verifyAdmin, updateCollection);
router.delete('/:id', verifyAdmin, deleteCollection);

export default router;