import mongoose from 'mongoose';
import { app } from './bootstrap/app.js';

import {
    DATABASE_CONNECTION_URI,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
    SERVICE_PORT
} from './config/index.js';

let db;
let heathCheck = false;

/* Define a health-check for services that depend on this service */
app.get('/health-check', (req, res) => {
    heathCheck ? res.send('OK') : res.status(503).send('Unavailable');
});

/* Start the Express server */
const server = app.listen(SERVICE_PORT, async () => {
    /* Initialize the MongoDB connection before starting the web service */
    db = await mongoose.connect(DATABASE_CONNECTION_URI, {
        user: DATABASE_USERNAME,
        pass: DATABASE_PASSWORD
    });

    /* Make the health-check available */
    heathCheck = true;

    console.info(`HTTP server listening on port ${SERVICE_PORT}`);
});

/**
 * Graceful shutdown routine. Stop accepting requests and disconnect from
 * the database.
 *
 * @param {string} signal
 * @returns {void}
 */
const shutdown = (signal) => {
    if (signal) {
        console.info(`${signal} received, shutting down`);
    }

    /* Any polling services will now get a 503 error */
    heathCheck = false;

    /* Stop after all I/O is done */
    setImmediate(() => server.close(() => {
        console.info('All requests stopped');

        if (db) {
            console.info('Disconnecting from the database');
            db.disconnect();
        }

        console.info('Bye bye');
        process.exit();
    }));
};

/* Handle Ctrl^C events */
process.on('SIGINT', shutdown);
/* Handle any regular shutdown signal */
process.on('SIGTERM', shutdown);
