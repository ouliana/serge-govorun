import { Router } from 'express';
import aboutParagraphsRouter from './aboutParagraphs';
import brandsRouter from './brands';
import categoriesRouter from './categories';
import videosRouter from './videos';

const router = Router();

router.use('/about', aboutParagraphsRouter);
router.use('/brands', brandsRouter);
router.use('/categories', categoriesRouter);
router.use('/videos', videosRouter);

export default router;
