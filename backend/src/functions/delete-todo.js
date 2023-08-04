import { Todo } from '../models/todo.js';

/**
 * Delete an existing Todo item from the database
 *
 * @param {Todo} item
 * @return Promise<void>
 */
export default async function deleteTodo (item) {
    await Todo.deleteOne({ item });
};
