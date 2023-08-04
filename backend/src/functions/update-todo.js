import { Todo } from '../models/todo.js';

/**
 * Update an existing Todo in the database
 *
 * @param {Todo}   item
 * @param {object} update
 *
 * @return {Promise<Todo>}
 */
export default async function updateTodo (item, update) {
    return await Todo.findOneAndUpdate(item, update);
};
