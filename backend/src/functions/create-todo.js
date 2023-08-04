import { Todo } from '../models/todo.js';

/**
 * Create a new Todo item in the database
 *
 * @param {Todo} item
 * @returns {Promise<Todo>}
 */
export default async function createTodo (item) {
    return await Todo.create(item);
};
