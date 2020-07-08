import React, { useState, ChangeEvent, FormEvent } from 'react'
import { FiSearch, FiUser } from 'react-icons/fi'
import { FaShoppingBag } from 'react-icons/fa'

import './style.css'

interface HeaderProps {
  handleSearch: (term: string) => void
}

const Header: React.FC<HeaderProps> = ({ handleSearch }) => {
  const [search, setSearch] = useState('')

  const handleSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    console.log(value)
    setSearch(value)
  }

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault()
    handleSearch(search)
  }

  return (
    <header className="container">
      <div className="logo">
        <p>SOMESHOES</p>
      </div>

      <form className="search" onSubmit={handleFormSubmit}>
        <input
          className="search-input"
          type="text"
          name="search"
          id="search"
          placeholder="O que você precisa?"
          onChange={handleSearchTerm}
        />
        <div>
          <FiSearch
            color="#EAEAEA"
            className="search-button"
            onClick={() => {}}
          />
        </div>
      </form>

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
