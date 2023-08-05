import Express from 'express';
import routes from '../routes/api.js';
import errorHandler from '../middleware/errorHandler.js';

export const app = Express();

// NOTE: The frontend is passing data to the API without setting
//       the Content-Type header to application/json which would
//       normally invoke the JSON parser automatically. Because
//       the todo API only has JSON endpoints, we will parse
//       text/plain as JSON by default.
app.use(Express.json({ type: ['application/json', 'text/plain'] }));

/* Register our API routes with Express */
app.use('/api', routes);

/* Handle errors in a consistent way */
app.use(errorHandler);
