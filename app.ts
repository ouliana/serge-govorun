import { config } from './utils/config';
import express from 'express';
import { middleware } from './utils/middleware';
import dbInit from './db/init';
import routes from './routes';

dbInit();

const app = express();
app.use(express.json());

if (config.NODE_ENV === 'production') {
  app.use(express.static(process.cwd() + '/client/dist'));
}

app.use('/api', routes);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

export default app;
