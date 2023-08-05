import { checkSchema } from 'express-validator';

const schema = {
    id: {
        isUUID: true,
        notEmpty: true
    },
    name: {
        isString: true,
        notEmpty: true
    },
    isComplete: {
        isBoolean: true,
        optional: true
    }
};

export default checkSchema(schema, ['body']);
