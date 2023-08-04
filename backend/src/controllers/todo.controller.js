import { Todo } from '../todo.model.js';

/**
 * Get a listing of created Todo objects
 * 
 * @param {object} req 
 * @param {object} res
 * 
 * @returns {Promise<void>}
 */
export const index = async (req, res) => {
    res.json({ body: await Todo.find({}) });
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
    const task = await Todo.create(req.body);
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
    await Todo.findOneAndUpdate({ id: req.params.id }, req.body);
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
    await Todo.deleteOne({ id: req.params.id });
    res.sendStatus(204);
}