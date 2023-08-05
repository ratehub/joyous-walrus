/* Define the database name */
export const DATABASE_NAME = process.env.DATABASE_NAME || 'todo';

/* Define the database service hostname */
export const DATABASE_HOST = process.env.DATABASE_HOST || '127.0.0.1';

/* Define the database service port */
export const DATABASE_PORT = process.env.SERVICE_PORT || 27017;

/* Define the database username */
export const DATABASE_USERNAME = process.env.DATABASE_USERNAME;

/* Define the database password */
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;

/* Define the database connection URI */
export const DATABASE_CONNECTION_URI = `mongodb://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}?authSource=admin`;
