import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import Header from '../../components/Header'
import Product from '../../components/Product'

import './styles.css'

interface Product {
  id: number
  title: string
  description: string
  avaibleSizes: string[]
  style: string
  prince: number
  isFreeShipping: boolean
}

interface Data {
  message: string
  products: Product[]
  amount: number
}

const Home = () => {
  const [success, setSuccess] = useState(false)
  const [request, setRequest] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const [amount, setAmount] = useState(0)

  useEffect(() => {
    api.get('products').then(({ data }) => {
      const { products, amount } = data
      setProducts(products)
      setAmount(amount)
    })
  }, [])

  const generator = () => {
    const productArray = []

    for (let i = 0; i < 15; i++) {
      productArray.push(<Product key={i} />)
    }

    return productArray
  }

  return (
    <>
      <Header />
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
            <p className="search-text">"Camisa Íbis"</p>
            <p className="search-amount">1 - 15 | 99 resultados</p>
          </div>
        </section>
      ) : (
        <section className="warning-container">
          <p>
            Desculpe não encontramos o produto{' '}
            <strong>"Camisa do mundial do Palmeiras"</strong> em nossa
            lista. :/
          </p>
        </section>
      )}
      <section>
        <div className="product-list">
          {products.map((product) => (
            <Product />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
