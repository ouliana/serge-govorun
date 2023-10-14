import { remultExpress } from 'remult/remult-express';
import { createPostgresConnection } from 'remult/postgres';
import { Video } from '../shared/Video';
import { Brand } from '../shared/Brand';
import { Category } from '../shared/Category';
import { Format } from '../shared/Format';

export const api = remultExpress({
  entities: [Video, Format, Brand, Category],
  dataProvider: createPostgresConnection({
    connectionString:
      process.env.CONNECTION_STRING,
  }),
});
