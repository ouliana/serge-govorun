import 'dotenv/config';
import express from 'express';
import compression from 'compression';
import { api } from './api';
import session from 'cookie-session';
import { auth } from './auth';
import { readFileSync } from 'fs';
import * as https from 'https';

const app = express();
app.use(
  session({
    secret: process.env['SESSION_SECRET'] || 'my secret',
  })
);

app.use(auth);

app.use(compression());

app.use(api);

app.use(express.static(process.cwd() + '/dist'));

const PORT = process.env.PORT;

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

if (process.env.SSL === 'nossl') {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
} else {
  const options = {
    key: readFileSync('/etc/letsencrypt/live/oulianakotik.com/privkey.pem'),
    cert: readFileSync('/etc/letsencrypt/live/oulianakotik.com/cert.pem'),
  };
  https.createServer(options, app).listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
