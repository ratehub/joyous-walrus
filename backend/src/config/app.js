/* Define the port that the web service should listen on */
export const SERVICE_PORT = process.env.SERVICE_PORT || 3001;

/* Set the logging level of detail for requests */
/* none, common, combined, short, tiny, dev */
export const LOG_LEVEL = process.env.LOG_LEVEL || (process.env.NODE_ENV === 'development' ? 'dev' : 'combined');
