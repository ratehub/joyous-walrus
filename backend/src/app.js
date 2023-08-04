import Express from 'express';
import { index, create, update, destroy } from './controllers/todo.controller.js';

export const app = Express();

// NOTE: The frontend is passing data to the API without setting
//       the Content-Type header to application/json which would
//       normally invoke the JSON parser automatically. Because 
//       the todo API only has JSON endpoints, we will parse 
//       text/plain as JSON by default.
app.use(Express.json({ type: ['application/json', 'text/plain'] }));

app.get('/api', index);
app.post('/api', create);
app.put('/api/:id', update);
app.delete('/api/:id', destroy);