import { validationResult as validate } from 'express-validator';

/**
 * Applies validation rules, returns any validation errors to the client
 *
 * @param {object}   req
 * @param {object}   res
 * @param {Function} next
 *
 * @returns {void}
 */
export default function (req, res, next) {
    const result = validate(req);

    if (!result.isEmpty()) {
        res.status(400).send({ errors: result.array() });
    } else {
        next();
    }
};
