import React, { useState } from 'react'

import Header from '../../components/Header'
import Product from '../../components/Product'

import './styles.css'

const Home = () => {
  const [success, setSuccess] = useState(true)
  const [request, setRequest] = useState(false)

  const generator = () => {
    const productArray = []

    for (let i = 0; i < 15; i++) {
      productArray.push(<Product />)
    }

    return productArray
  }

  return (
    <>
      <Header />
      {request && (
        <section className="slogan-container">
          <h2 className="slogan-title ">
            A maior loja online de artigos esportivos
          </h2>
          <h3 className="slogan-subtitle ">Procurou, achou, comprou!</h3>
        </section>
      )}
      {success ? (
        <section>
          <div className="search-results">
            <p className="search-text">"Camisa Íbis"</p>
            <p className="search-amount">1 - 15 | 99 resultados</p>
          </div>

          <div className="product-list">{generator()}</div>
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
    </>
  )
}

export default Home
