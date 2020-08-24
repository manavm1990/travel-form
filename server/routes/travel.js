import { Router } from 'express';

import addTravel from '../db';

const router = new Router();

router.get('/', (_, res) => {
  res.send('<h1>You are at travels Get!</h1>');
});

router.post('/add', async ({ body }, res) => {
  const dbRes = await addTravel(body);
  res.status(201);
  res.json(dbRes);
});

export default router;
