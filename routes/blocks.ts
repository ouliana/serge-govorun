import express from 'express';
import { blocksService } from '../controllers';

const blocksRouter = express.Router();

blocksRouter.get('/', async (_req, res) => {
  const brands = await blocksService.getAll();
  res.json(brands);
});

blocksRouter.get('/:name', async (req, res) => {
  try {
    const brand = await blocksService.getByName(req.params.name);
    res.json(brand);
  } catch (err) {
    return res.status(400).json({ err });
  }
});

blocksRouter.post('/', async (req, res) => {
  try {
    const brand = await blocksService.create(req.body);
    res.json(brand);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

blocksRouter.put('/:id', async (req, res) => {
  try {
    await blocksService.update(req.params.id, req.body);
    return res.status(204).end();
  } catch (error) {
    return res.status(400).json({ error });
  }
});

export default blocksRouter;
