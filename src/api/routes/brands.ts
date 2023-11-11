import express from 'express';
import { Brand } from '../../db/models';
import { getAll } from '../../db/dal/brand';

const brandsRouter = express.Router();

brandsRouter.get('/', async (_req, res) => {
  const brands = await getAll();
  res.json(brands);
});

brandsRouter.get('/:id', async (req, res) => {
  try {
    const brand = await Brand.findByPk(req.params.id);
    res.json(brand);
  } catch (err) {
    return res.status(400).json({ err });
  }
});

brandsRouter.post('/', async (req, res) => {
  try {
    const brand = await Brand.create(req.body);
    res.json(brand);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

brandsRouter.put('/:id', async (req, res) => {
  const brand = await Brand.findByPk(req.params.id);
});

export default brandsRouter;
