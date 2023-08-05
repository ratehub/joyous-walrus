import {
    createTodo,
    deleteTodo,
    fetchTodos,
    updateTodo
} from '../functions/index.js';

/**
 * Get a listing of created Todo objects
 *
 * @param {object} req
 * @param {object} res
 *
 * @returns {Promise<void>}
 */
export const index = async (req, res) => {
    res.send({ body: await fetchTodos() });
};

/**
 * Create a new Todo item and return its URI to the client in the Location header
 *
 * @param {object} req
 * @param {object} res
 *
 * @returns {Promise<void>}
 */
export const create = async (req, res) => {
    const task = await createTodo(req.body);
    res.location(`/api/${task.id}`);
    res.sendStatus(201);
};

/**
 * Update and existing Todo item and save it to the database
 *
 * @param {object}   req
 * @param {object}   res
 * @param {Function} next
 *
 * @returns {Promise<void>}
 */
export const update = async (req, res, next) => {
    try {
        await updateTodo({ id: req.params.id }, req.body);
    } catch (e) {
        return next(e);
    }

    res.sendStatus(200);
};

/**
 * Delete a Todo item
 *
 * @param {object}   req
 * @param {object}   res
 * @param {Function} next
 *
 * @returns {Promise<void>}
 */
export const destroy = async (req, res, next) => {
    try {
        await deleteTodo({ id: req.params.id });
    } catch (e) {
        return next(e);
    }

    res.sendStatus(204);
};
