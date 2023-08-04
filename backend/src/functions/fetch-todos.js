import { Todo } from '../models/todo.js';

/**
 * Get all Todo items from the database
 *
 * @return {Promise<Array>}
 */
export default async function fetchTodos () {
    return await Todo.find({});
};
