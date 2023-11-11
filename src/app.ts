import brendsRouter from './api/routes/brands';
import { config } from './utils/config';
import express from 'express';
import { middleware } from './utils/middleware';

const app = express();
app.use(express.json());

if (config.NODE_ENV === 'production') {
  app.use(express.static(process.cwd() + '/client/dist'));
}

app.use('/api/brands', brendsRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

export default app;
