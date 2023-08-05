import { Todo } from '../models/todo.js';
import { throwIfEmpty } from './index.js';

/**
 * Create a new Todo item in the database
 *
 * @param {Todo} item
 * @returns {Promise<Todo>}
 */
export default async function createTodo (item) {
    return throwIfEmpty(await Todo.create(item), new Error('Error saving item'));
};
