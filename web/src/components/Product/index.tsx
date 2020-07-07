import React from 'react'

import shirt from '../../images/shirt007.png'

import './styles.css'

const Product = () => {
  return (
    <div className="product-container">
      <div className="img-container">
        <img className="product-img" src={shirt} alt="product-name" />
      </div>

      <p className="product-name">
        Camiseta oficial Íbis Sport Club Clássica
      </p>
      <div className="separator" />
      <p className="product-price">
        R$ <strong className="product-price-focus">49</strong>,99
      </p>
    </div>
  )
}

export default Product
