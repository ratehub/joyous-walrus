import ModelNotFoundError from '../errors/ModelNotFoundError.js';
import { Todo } from '../models/todo.js';
import throwIfEmpty from './throw-if-empty.js';

/**
 * Delete an existing Todo item from the database
 *
 * @param {Todo} item
 * @return {Promise<int>}
 */
export default async function deleteTodo (item) {
    return throwIfEmpty((await Todo.deleteOne(item)).deletedCount, new ModelNotFoundError());
};
