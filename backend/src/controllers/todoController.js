import {
    createTodo,
    deleteTodo,
    fetchTodos,
    updateTodo
} from '../functions/index.js';

/**
 * Get a listing of created Todo objects
 *
 * @param {object}   req
 * @param {object}   res
 * @param {Function} next
 *
 * @returns {Promise<void>}
 */
export const index = async (req, res, next) => {
    try {
        res.send({ body: await fetchTodos() });
    } catch (e) {
        return next(e);
    }
};

/**
 * Create a new Todo item and return its URI to the client in the Location header
 *
 * @param {object}   req
 * @param {object}   res
 * @param {Function} next
 *
 * @returns {Promise<void>}
 */
export const create = async (req, res, next) => {
    try {
        const task = await createTodo(req.body);
        res.location(`/api/${task.id}`).status(201).end();
    } catch (e) {
        return next(e);
    }
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

    res.status(200).end();
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

    res.status(204).end();
};
