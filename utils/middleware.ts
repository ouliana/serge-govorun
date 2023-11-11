import { Express, Request, Response, NextFunction } from 'express';
import { logger } from './logger';

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  logger.info('Method:', req.method);
  logger.info('Path:  ', req.path);
  logger.info('Body:  ', req.body);
  logger.info('---');
  next();
};

const unknownEndpoint = (_req: Request, res: Response, next: NextFunction) => {
  res.status(404).send({ error: 'unknown endpoint' });
  next();
};

const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.name) {
    switch (err.name) {
      case 'NotFoundError':
        res.status(404).end();
        break;
      default:
        res.status(500).end();
    }
  }

  next(err);
};

export const middleware = {
  unknownEndpoint,
  requestLogger,
  errorHandler,
};
