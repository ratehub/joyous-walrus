import { Router } from 'express';
import { index, create, update, destroy } from '../controllers/todo-controller.js';
import todoValidator from '../validators/todo.js';
import validateRequest from '../middleware/validateRequest.js';

const router = Router();

/* Todo API CRUD endpoints */
router.get('/', index);
router.post('/', [todoValidator, validateRequest], create);
router.put('/:id', [todoValidator, validateRequest], update);
router.delete('/:id', destroy);

export default router;
