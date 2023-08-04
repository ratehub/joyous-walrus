import { Schema, model } from 'mongoose';

const todoSchema = Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    isComplete: {
        type: Boolean,
        default: false // New todo items are not complete by default
    }
});

/* Export the defined Todo model for use in tests and the API */
export const Todo = model('Todo', todoSchema);