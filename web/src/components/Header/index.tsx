import React from 'react'
import { FiSearch, FiUser } from 'react-icons/fi'
import { FaShoppingBag } from 'react-icons/fa'

import './style.css'

const Header = () => {
  return (
    <header className="container">
      <div className="logo">
        <p>SOMESHOES</p>
      </div>

      <div className="search">
        <input
          className="search-input"
          type="text"
          name="search"
          id="search"
          placeholder="O que você precisa?"
        />
        <FiSearch color="#EAEAEA" />
      </div>

      <div className="menu">
        <div className="menu-option">
          <FiUser color="#EAEAEA" size={32} />
          <div className="notification">
            <label className="notification-text">+9</label>
          </div>
        </div>

        <div className="menu-option">
          <FaShoppingBag color="#EAEAEA" size={32} />
          <div className="notification">
            <label className="notification-text">+9</label>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
