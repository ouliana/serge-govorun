import express from 'express'
// import cors from 'cors'
import { api } from './api'
// import ProjectRouter from './routes/projects';

const app = express()

app.use(api)

// app.use(express.json())
// app.use(cors())
app.use(express.static(process.cwd() + '/dist'))

// app.use(api);
app.get('/api/ping', (_req, res) => res.send('pong'))

// app.use('/api/projects', ProjectRouter);

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
