import request from 'supertest';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { randomUUID } from 'crypto';
import { app } from '../src/app.js';
import { Todo } from '../src/todo.model.js';

let mongo;

/* Declare seed data for testing */
const todoList = [
    {
        id: randomUUID(),
        name: 'example todo',
        isComplete: true
    }
];

/* Initialize an in-memory server for testing our endpoints with */
beforeAll(async () => {
    mongo = await MongoMemoryServer.create();
    await mongoose.connect(mongo.getUri());
});

/* Cleanup, close the database connection, and stop the Mongo server */
afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongo.stop();
});

/* Seed the database for each test */
beforeEach(async () => {
    await Todo.insertMany(todoList);
});

/* Drop and changes that may have been made to the collection during a test */
afterEach(async () => {
    await mongoose.connection.db.dropCollection('todos');
});

describe('GET /api', () => {
    it('should return a list of todos', async () => {
        const res = await request(app).get('/api');

        /* 200-OK for getting collections */
        expect(res.statusCode).toBe(200);

        /* Assert that we are getting our seed data back */
        expect(res.body).toMatchObject(todoList);
    });
});

describe('POST /api', () => {
    it('should create a new todo', async () => {
        const data = { id: randomUUID(), name: 'new todo' };
        const res = await request(app).post('/api').send(data);

        /* 201-Created for creating a new resource */
        expect(res.statusCode).toBe(201);

        /* Assert that the Location header is set with the new resource URI */
        expect(res.headers['Location']).toBe(`/api/${data.id}`);

        /* Assert that a new incomplete todo was created */
        const newTodo = await Todo.findOne(data);
        expect(newTodo.id).toBe(data.id);
        expect(newTodo.name).toBe(data.name);
        expect(newTodo.isComplete).toBe(false);
    })
});

describe('PUT /api/:id', () => {
    it('should update an existing todo', async () => {
        const data = { ...todoList[0], name: 'updated todo', isComplete: true };
        const res = await request(app).put(`/api/${data.id}`).send(data);

        /* 200-OK for updating existing resource */
        /* 204-No Content could also be used if there's no response body */
        expect(res.statusCode).toBe(200);

        /* Assert that the todo was updated */
        const updatedTodo = await Todo.findOne(data);
        expect(updatedTodo.name).toBe(data.name);
        expect(updatedTodo.isComplete).toBe(data.isComplete);
    })
});

describe('DELETE /api/:id', () => {
    it('should delete a todo', async () => {
        const res = await request(app).delete(`/api/${todoList[0].id}`);

        /* 204-No Content for deleting a resource */
        /* 200-OK could also be used */
        expect(res.statusCode).toBe(204);

        /* Assert that we are getting nothing back */
        expect(res.body).toBeUndefined();
    });
});

