import { Router } from 'express';

const router = new Router();

router.get('/', (_, res) => {
  res.send('<h1>You are at travels Get!</h1>');
});

router.post('/add', ({ body }, res) => {
  res.json(body);
});

export default router;
