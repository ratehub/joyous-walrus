import { Router } from 'express';
import { index, create, update, destroy } from '../controllers/todo-controller.js';

const router = Router();

/* Todo API CRUD endpoints */
router.get('/', index);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', destroy);

export default router;
