import express from 'express'
import Product from '../controller/ProductsController'

const routes = express.Router()

routes.get('/', (req, res) => {
  res.json({
    name: '[APP]',
    message: 'Up!',
    whatami: 'Static server to provide data to frontend',
    data: 'Products infos',
  })
})

routes.get('/products', Product.index)
routes.get('/products/:id', (req, res) => {})

export default routes
