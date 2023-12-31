import { Request, Response, Router } from 'express';
import { deleteItem, getItem, getItems, postItems, updateItem } from '../controllers/controller.item';
import { logMiddleware } from '../middlewares/middleware.log';

const router = Router();

router.get('/', getItems);
router.get('/:id', logMiddleware,getItem);
router.post('/', postItems);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export { router };