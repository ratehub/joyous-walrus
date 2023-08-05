## How to Run
Docker via NPM script:
```bash
npm run serve
```
Docker manually:
```bash
docker-compose up -d
```

## Running in development
Automated:
```bash
npm install
npm run dev
```

Manually:
```bash
npm install
cat .env.example > .env.local
docker-compose -f docker-compose.dev.yml up -d
nodemon -r dotenv/config src/index.js dotenv_config_path=.env.local
```
