import ModelNotFoundError from '../errors/ModelNotFoundError.js';

/**
 * Define a custom top-level error handler
 *
 * @param {Error}    err
 * @param {object}   req
 * @param {object}   res
 * @param {Function} next
 *
 * @returns {void}
 */
export default function (err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }

    if (err instanceof ModelNotFoundError) {
        res.sendStatus(404);
    } else {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    }
}
