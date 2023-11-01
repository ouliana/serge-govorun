import { remultExpress } from 'remult/remult-express';
import { createPostgresConnection } from 'remult/postgres';
import { Video } from '../shared/Video';
import { Brand } from '../shared/Brand';
import { Category } from '../shared/Category';
import { AboutParagraph } from '../shared/AboutParagraph';

export const api = remultExpress({
  entities: [Video, Brand, Category, AboutParagraph],
  dataProvider: createPostgresConnection({
    connectionString: process.env.CONNECTION_STRING,
  }),
});
