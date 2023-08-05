import mongoose from 'mongoose';
import { app } from './bootstrap/app.js';

import {
    DATABASE_CONNECTION_URI,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
    SERVICE_PORT
} from './config/index.js';

/* Start the Express server */
app.listen(SERVICE_PORT, async () => {
    /* Initialize the MongoDB connection before starting the web service */
    await mongoose.connect(DATABASE_CONNECTION_URI, {
        user: DATABASE_USERNAME,
        pass: DATABASE_PASSWORD
    });

    console.log(`HTTP server listening on port ${SERVICE_PORT}`);
});
