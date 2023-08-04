import Express from 'express';

export const app = Express();

app.get('/api', (req, res) => res.send([]));
