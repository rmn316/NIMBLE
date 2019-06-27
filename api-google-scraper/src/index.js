import dotenv from 'dotenv';
import express from 'express';
import router from './routes/index';

dotenv.config();

const app = express();

app.use(express.json());
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});