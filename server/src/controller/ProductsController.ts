import { Request, Response } from 'express'

import allProducts from '../database/products.json'

interface ProductInterface {
  index: (req: Request, res: Response) => void
}

const Product = () => {
  const product = {} as ProductInterface

  product.index = (req, res) => {
    const { search } = req.query

    if (!search) {
      return res.json({
        message: 'all products',
        products: allProducts.products,
      })
    }

    const mainSearch = (search as string).split(' ')[0].toLowerCase()
    const productsList = allProducts.products
    const result = []

    for (const productItem of productsList) {
      const compare = productItem.title.toLocaleLowerCase()
      if (compare.includes(mainSearch)) {
        result.push(productItem)
      }
    }

    return res.json({
      message: '[Prod-index] all products',
      products: result,
      amount: result.length,
    })
  }

  return product
}

export default Product()
