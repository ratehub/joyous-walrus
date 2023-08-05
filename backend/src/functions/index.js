export { default as createTodo } from './createTodo.js';
export { default as deleteTodo } from './deleteTodo.js';
export { default as fetchTodos } from './fetchTodos.js';
export { default as updateTodo } from './updateTodo.js';

/**
 * Throw an error if the supplied data is falsy, else return it
 *
 * @param {any}   data
 * @param {Error} err
 *
 * @return {void}
 */
export function throwIfEmpty (data, err) {
    if (!data) {
        throw err;
    }

    return data;
}
