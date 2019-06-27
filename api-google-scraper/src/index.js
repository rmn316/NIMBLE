import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const index = express();

index.get('/', (request, response) => {
  response.send('Working!');
});

index.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});