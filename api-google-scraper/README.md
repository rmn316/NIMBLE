
# Database Configuration
Database is hosted on docker for efficiency. Username/Password credentials are the same as in database configuration for development mode.
```
docker run -d -p 5432:5432 --name scraper-postgres -e POSTGRES_USER=scraper -e POSTGRES_DB=scraper -e POSTGRES_PASSWORD=scraper postgres
```
To inspect the database:
```
docker exec -it scraper-postgres psql -U scraper
```
# Build the App
NPM scripts are enabled to get you up and running on the application.
```
npm install
```
Execute Migrations
```
npm run migrate
```
Execute Fixtures / Seeders
```
npm run seed
```
Build the application
```
npm run build
```
Run the application
```
npm start
```

To test the application
```
npm test
```