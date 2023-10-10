import express from 'express';
import cors from 'cors';
import { config } from './utils/config';
// import ProjectRouter from './routes/projects';

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('dist'));

// app.use(api);
app.get('/api/pingi', (_req, res) => res.send('pong'));

// app.use('/api/projects', ProjectRouter);

const PORT = config.PORT || 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
