import { Router } from 'express';
import blocksRouter from './blocks';
import brandsRouter from './brands';
import categoriesRouter from './categories';
import videosRouter from './videos';

const router = Router();

router.use('/blocks', blocksRouter);
router.use('/brands', brandsRouter);
router.use('/categories', categoriesRouter);
router.use('/videos', videosRouter);

export default router;
