import express from 'express'
import cors from 'cors'

const app = express()

app.get('/', (req, res) => {
  res.json({
    name: '[APP]',
    message: 'Up!',
    whatami: 'Static server to provide data to frontend',
    data: 'Products infos',
  })
})

app.use(cors())

export default app
