import { Router } from 'express';

import loginRouter from './login';
import blocksRouter from './blocks';
import brandsRouter from './brands';
import categoriesRouter from './categories';
import videosRouter from './videos';
import usersRouter from './users';

const router = Router();

router.use('/auth', loginRouter);
router.use('/users', usersRouter);
router.use('/blocks', blocksRouter);
router.use('/brands', brandsRouter);
router.use('/categories', categoriesRouter);
router.use('/videos', videosRouter);

export default router;
