import React from 'react'
import Header from '../../components/Header'

import './styles.css'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="slogan-container">
        <h2 className="slogan-title ">
          A maior loja online de artigos esportivos
        </h2>
        <h3 className="slogan-subtitle ">Procurou, achou, comprou!</h3>
      </div>
    </div>
  )
}

export default Home
