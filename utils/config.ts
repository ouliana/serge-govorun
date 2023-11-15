import dotenv from 'dotenv';

dotenv.config();

export const config = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  PG_DATABASE_URL: process.env.CONNECTION_STRING,
  JWT_SECRET: process.env.JWT_SECRET,
};
