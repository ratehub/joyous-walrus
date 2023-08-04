import mongoose from 'mongoose';
import { app } from './app.js';
import { DATABASE_CONNECTION_URI, SERVICE_PORT } from './config.js';

/* Start the Express server */
app.listen(SERVICE_PORT, async () => {
    await mongoose.connect(DATABASE_CONNECTION_URI);
    console.log(`HTTP server listening on port ${SERVICE_PORT}`);
});