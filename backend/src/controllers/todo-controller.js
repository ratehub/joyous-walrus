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
    res.json({ body: await fetchTodos() });
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
 * @param {object} req
 * @param {object} res
 *
 * @returns {Promise<void>}
 */
export const update = async (req, res) => {
    await updateTodo({ id: req.params.id }, req.body);
    res.sendStatus(200);
};

/**
 * Delete a Todo item
 *
 * @param {object} req
 * @param {object} res
 *
 * @returns {Promise<void>}
 */
export const destroy = async (req, res) => {
    await deleteTodo({ id: req.params.id });
    res.sendStatus(204);
};
