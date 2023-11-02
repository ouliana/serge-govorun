import 'dotenv/config';
import express from 'express';
// import helmet from 'helmet';
import compression from 'compression';
import { api } from './api';
import session from 'cookie-session';
import { auth } from './auth';

const app = express();
app.use(
  session({
    secret: process.env['SESSION_SECRET'] || 'my secret',
  })
);

app.use(auth);
// app.use(
//   helmet({
//     contentSecurityPolicy: false,
//   })
// );

// app.use(helmet());

// app.use(
//   helmet.contentSecurityPolicy({
//     // useDefaults: true,
//     directives: {
//       'script-src': ["'self'", 'https://www.youtube.com/iframe_api'],
//       'style-src': null,
//       'img-src': ["'self'", 'https: data:'],
//       'media-src': ["'self'", 'https: data:'],
//     },
//   })
// );

app.use(compression());

app.use(api);

app.use(express.static(process.cwd() + '/dist'));

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
