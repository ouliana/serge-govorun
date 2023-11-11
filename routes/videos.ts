import express from 'express';
import { videoService } from '../controllers';

const videosRouter = express.Router();

videosRouter.get('/', async (_req, res) => {
  const videos = await videoService.getAll();
  res.json(videos);
});

videosRouter.get('/:id', async (req, res) => {
  try {
    const video = await videoService.getById(req.params.id);
    res.json(video);
  } catch (err) {
    return res.status(400).json({ err });
  }
});

videosRouter.post('/', async (req, res) => {
  try {
    const video = await videoService.create(req.body);
    res.json(video);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

videosRouter.put('/:id', async (req, res) => {
  try {
    await videoService.update(req.params.id, req.body);
    return res.status(204).end();
  } catch (error) {
    return res.status(400).json({ error });
  }
});

export default videosRouter;
