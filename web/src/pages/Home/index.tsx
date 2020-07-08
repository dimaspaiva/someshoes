import React, { useState, useEffect, ChangeEvent } from 'react'

import api from '../../services/api'

import Header from '../../components/Header'
import Product from '../../components/Product'

import './styles.css'

interface ProductProps {
  id: number
  title: string
  description: string
  avaibleSizes: string[]
  style: string
  price: number
  isFreeShipping: boolean
}

interface Data {
  message: string
  products: ProductProps[]
  amount: number
}

const Home = () => {
  const [success, setSuccess] = useState(false)
  const [request, setRequest] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const [amount, setAmount] = useState(0)
  const [term, setTerm] = useState('')

  useEffect(() => {
    api.get('products').then(({ data }) => {
      const { products, amount } = data
      setProducts(products)
      setAmount(amount)
    })
  }, [])

  const handleSearch = async (newTerm: string) => {
    const singleTerm = term.split(' ')[0]
    if (newTerm === '' || newTerm === term) {
      return
    }

    setTerm(newTerm)

    api.get(`products/?search=${singleTerm}`).then(({ data }) => {
      const { products, amount } = data
      if (!products[0]) {
        setSuccess(false)
        setRequest(true)
        setAmount(0)
        return setProducts([])
      }

      setRequest(true)
      setSuccess(true)
      setProducts(products)
      setAmount(amount)
    })
  }

  return (
    <>
      <Header handleSearch={handleSearch} />
      {!request ? (
        <section className="slogan-container">
          <h2 className="slogan-title ">
            A maior loja online de artigos esportivos
          </h2>
          <h3 className="slogan-subtitle ">Procurou, achou, comprou!</h3>
        </section>
      ) : success ? (
        <section>
          <div className="search-results">
            <p className="search-text">"{term}"</p>
            <p className="search-amount">
              1 - {amount} | {amount} resultados
            </p>
          </div>
        </section>
      ) : (
        <section className="warning-container">
          <p>
            Desculpe não encontramos o produto
            <strong> "{term}"</strong> em nossa lista. :/
          </p>
        </section>
      )}

      <section>
        <div className="product-list">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
