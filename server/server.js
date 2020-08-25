import cors from 'cors';
import express from 'express';

import travel from './routes/travel';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
}));

app.use(express.json());

app.use('/travel', travel);

app.use((_, res) => {
  res.status(404).send("Sorry can't find that!");
});

app.listen(5000);
