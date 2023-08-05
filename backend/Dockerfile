FROM node:18

# Default Node ENV to production
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

# Copy the Node application source code
COPY src /app/src

# Copy package.json and package-lock.json to /app
COPY package* /app/

# Set the working directory to /app
WORKDIR /app

# Install all NPM packages require to run the application
RUN npm install

# Define service ports to expose by default
EXPOSE "3001"

# Start the service
CMD ["node", "src/index.js"]