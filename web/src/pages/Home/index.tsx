import React, { useState } from 'react'
import Header from '../../components/Header'

import './styles.css'

const Home = () => {
  const [success, setSuccess] = useState(false)

  return (
    <div>
      <Header />
      {success ? (
        <div className="slogan-container">
          <h2 className="slogan-title ">
            A maior loja online de artigos esportivos
          </h2>
          <h3 className="slogan-subtitle ">Procurou, achou, comprou!</h3>
        </div>
      ) : (
        <div className="warning-container">
          <p>
            Desculpe não encontramos o produto{' '}
            <strong>"Camisa do mundial do Palmeiras"</strong> em nossa
            lista. :/
          </p>
        </div>
      )}
    </div>
  )
}

export default Home
