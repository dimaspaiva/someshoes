import React from 'react'

import shirt1 from '../../images/shirt001.png'
import shirt2 from '../../images/shirt002.png'
import shirt3 from '../../images/shirt003.png'
import shirt4 from '../../images/shirt004.png'
import shirt5 from '../../images/shirt005.png'
import shirt6 from '../../images/shirt006.png'
import shirt7 from '../../images/shirt007.png'

import './styles.css'

const Product = () => {
  const shirts = [shirt1, shirt2, shirt3, shirt4, shirt5, shirt6, shirt7]
  const random = Math.round(Math.random() * 6)

  return (
    <div className="product-container">
      <div className="img-container">
        <img
          className="product-img"
          src={shirts[random]}
          alt="product-name"
        />
      </div>

      <p className="product-name">
        Camiseta oficial Íbis Sport Club Clássica {random}
      </p>
      <div className="separator" />
      <p className="product-price">
        R$ <strong className="product-price-focus">49</strong>,99
      </p>
    </div>
  )
}

export default Product
