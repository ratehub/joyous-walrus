# Getting Started
## Running locally
Docker via NPM script:
```bash
npm run serve
```
Docker Compose:
```bash
docker-compose build --no-cache
docker-compose up -d
```

## Running in development
Automated:
```bash
npm install
npm run dev
```

Manual:
```bash
npm install
cat .env.example > .env.local
docker-compose -f docker-compose.dev.yml up -d
nodemon -r dotenv/config src/index.js dotenv_config_path=.env.local
```
## Running tests
```bash
npm install
npm run test
```
# Engineering Notes
### Implementation
- While I haven’t used MongoDB extensively, I opted to use the Mongoose ODM because it seemed well recommended by the community and the official Mongo documentation. It simplified a lot of the connection and document management. Schema versioning and integrity are also beneficial to prevent document fragmentation and maintain optimal performance in a NoSQL database.
- This application was built using a TDD approach. After bootstrapping, I created an initial suite of tests to meet the MVP spec defined in the instructions and implemented the minimum amount of functionality to make the tests pass. Once the MVP was passing and I confirmed that it was working as expected by the front end React app, I created some additional tests to simulate several errors that would commonly occur in a production environment. I then refactored the code to stabilize it and added additional validation and error-handling logic to increase the application's reliability.
- Because of the small scale of this particular application, the testing approach I opted for was writing HTTP tests using popular libraries Jest and Supertest. Assertions were made on the response statuses, response bodies, and the database state. To ensure the tests remained portable and performant, I opted to use an in-memory database server.
- A health check was added for container orchestrators and other services to assess the operation of the application. Monitoring services can also poll it for availability analytics, reporting, triggering events, and other workflows. HTTP access logging has also been provided–with the option to configure the level of logging or disable it entirely. By default, all HTTP requests are logged in development. 
### Future Considerations
- In a micro-service environment, the application would ideally connect to other services (like the database) over a secure TLS-encrypted connection.
- The frontend typically wouldn’t connect directly to the services. Instead, it would likely pass through some form of gateway such as a reverse proxy or load balancer before reaching the desired service.
- Assuming identity and authentication are already taken care of, a plausible need in the future would be a way for user data to be associated with a particular todo item (authors, editors, access control, etc). This would require interacting with some form of user provider. An option would be to bundle the relevant information about a user and access control with their particular todo items. However, depending on the implementation, coupling the service to user data and authorization may violate SRP. Another option is to create a new service that is responsible for managing the relationship between users and todos that would sit between the user provider and the todo service. Careful consideration would be required to effectively understand the trade-offs between different approaches and must be tempered through the context of current and anticipated future needs.
### Other improvements
The React frontend could be enhanced in several ways to boost the overall user experience.
- A checkbox could be added to completed todo items to give the user the ability to uncheck todo items.
- A delete button could be added to the completed todo items so that those tasks can be cleared by the user.
- A button could be added to clear all completed todo items.
- The user should be notified when an error has occurred.
- API requests triggered by keyup events should be debounced until the user has finished typing to reduce calls to the server.
- Rather than initializing a todo with a default title and immediately saving it, initialize it empty and do not attempt to save until the user has provided input.
