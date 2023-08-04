import request from 'supertest';
import { app } from '../src/app.js';

describe('GET /api', () => {
    it('Should return a list of TODOs', async () => {
        const res = await request(app).get('/api');
        expect(res.statusCode).toBe(200);
        expect(res.body).toMatchObject([]);
    });
});

describe('POST /api', () => {
    it('Should create a new TODO', async () => {

    })
});

describe('PUT /api/:id', () => {
    it('Should update an existing TODO', async () => {

    })
});

describe('DELETE /api/:id', () => {
    it('Should delete a TODO', async () => {

    });
});

