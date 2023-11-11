import express from 'express';
import { categoriesService } from '../controllers';

const categoryRouter = express.Router();

categoryRouter.get('/', async (_req, res) => {
  const categories = await categoriesService.getAll();
  res.json(categories);
});

categoryRouter.get('/:id', async (req, res) => {
  try {
    const category = await categoriesService.getById(req.params.id);
    res.json(category);
  } catch (err) {
    return res.status(400).json({ err });
  }
});

categoryRouter.post('/', async (req, res) => {
  try {
    const category = await categoriesService.create(req.body);
    res.json(category);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

categoryRouter.put('/:id', async (req, res) => {
  try {
    await categoriesService.update(req.params.id, req.body);
    return res.status(204).end();
  } catch (error) {
    return res.status(400).json({ error });
  }
});

export default categoryRouter;
