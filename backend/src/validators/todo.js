import { checkSchema } from 'express-validator';

const schema = {
    id: {
        isUUID: true,
        notEmpty: true,
        errorMessage: 'Must be a valid UUID v4'
    },
    name: {
        isString: true,
        notEmpty: true,
        errorMessage: 'Must be text'
    },
    isComplete: {
        isBoolean: true,
        optional: true,
        errorMessage: 'Must either be true of false'
    }
};

export default checkSchema(schema, ['body']);
