import express from 'express';
import { brandsService } from '../controllers';

const brandsRouter = express.Router();

brandsRouter.get('/', async (_req, res) => {
  const brands = await brandsService.getAll();
  res.json(brands);
});

brandsRouter.get('/:id', async (req, res) => {
  try {
    const brand = await brandsService.getById(req.params.id);
    res.json(brand);
  } catch (err) {
    return res.status(400).json({ err });
  }
});

brandsRouter.post('/', async (req, res) => {
  try {
    const brand = await brandsService.create(req.body);
    res.json(brand);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

brandsRouter.put('/:id', async (req, res) => {
  try {
    await brandsService.update(req.params.id, req.body);
    return res.status(204).end();
  } catch (error) {
    return res.status(400).json({ error });
  }
});

export default brandsRouter;
