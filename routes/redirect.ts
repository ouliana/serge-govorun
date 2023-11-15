import express from 'express';

const othersRouter = express.Router();

othersRouter.get('/admin', async (req, res) => {
  res.redirect('/');
});

export default othersRouter;
