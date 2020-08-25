import { Router } from 'express';

import { addTravel, deleteAllTravels, showTravels } from '../db';

const router = new Router();

router.get('/', (_, res) => {
  res.send('<h1>You are at travels Get!</h1>');
});

router.post('/add', async ({ body }, res) => {
  try {
    const dbRes = await addTravel(body);
    res.status(201);
    res.json(dbRes);
  } catch (error) {
    error.message = 'Database error!';
    res.status(500).send(error);
  }
});

router.delete('/delete', async (_, res) => {
  const dbRes = await deleteAllTravels();
  // TODO: Double check for other possible codes
  res.status(200);
  res.json(dbRes);
});

router.post('/show', async ({ body: { email } }, res) => {
  // TODO: Add try-catch
  const dbRes = await showTravels(email);
  res.status(200);
  res.json(dbRes);
});

export default router;
