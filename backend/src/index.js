import { SERVICE_PORT } from './config.js';
import { app } from './app.js';

/** Start the Express server */
app.listen(SERVICE_PORT, () => {
    console.log(`HTTP server listening on port ${SERVICE_PORT}`);
});
