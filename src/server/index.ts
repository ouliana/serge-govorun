import express from 'express'
// import cors from 'cors'
import { api } from './api'

const app = express()

app.use(api)

// app.use(cors())
app.use(express.static(process.cwd() + '/dist'))

app.get('/api/ping', (_req, res) => res.send('pong'))

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
