import express from 'express';
import { aboutParagraphsService } from '../controllers';

const aboutParagraphsRouter = express.Router();

aboutParagraphsRouter.get('/', async (_req, res) => {
  const brands = await aboutParagraphsService.getAll();
  res.json(brands);
});

aboutParagraphsRouter.get('/:id', async (req, res) => {
  try {
    const brand = await aboutParagraphsService.getById(req.params.id);
    res.json(brand);
  } catch (err) {
    return res.status(400).json({ err });
  }
});

aboutParagraphsRouter.post('/', async (req, res) => {
  try {
    const brand = await aboutParagraphsService.create(req.body);
    res.json(brand);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

aboutParagraphsRouter.put('/:id', async (req, res) => {
  try {
    await aboutParagraphsService.update(req.params.id, req.body);
    return res.status(204).end();
  } catch (error) {
    return res.status(400).json({ error });
  }
});

export default aboutParagraphsRouter;
