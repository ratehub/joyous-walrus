import ModelNotFoundError from '../errors/ModelNotFoundError.js';
import { Todo } from '../models/todo.js';
import { throwIfEmpty } from './index.js';

/**
 * Update an existing Todo in the database
 *
 * @param {Todo}   item
 * @param {object} update
 *
 * @return {Promise<Todo|null>}
 */
export default async function updateTodo (item, update) {
    return throwIfEmpty(await Todo.findOneAndUpdate(item, update), new ModelNotFoundError());
};
