import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import router from './routes/index';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
