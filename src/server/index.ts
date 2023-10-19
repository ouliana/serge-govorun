import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import { api } from './api';

const app = express();

app.use(helmet());
app.use(compression());

app.use(api);

app.use(express.static(process.cwd() + '/dist'));

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
