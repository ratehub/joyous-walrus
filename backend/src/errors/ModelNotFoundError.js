/* Define an error type that we can catch for handling top-level 404's */
export default class ModelNotFoundError extends Error {
    constructor (message) {
        super(message);
        this.name = 'ModelNotFoundError';
    }
}
