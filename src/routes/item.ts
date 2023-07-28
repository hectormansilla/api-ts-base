import { Request, Response, Router } from 'express';
import { deleteItem, getItem, getItems, postItems, updateItem } from '../controllers/item';

const router = Router();

/**
 * http://localhost:3002/items [GET]
 */

router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', postItems);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export { router };