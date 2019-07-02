import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <hr />
      <div className="header-container">
        <Link to="/" className="header-name">
          <i class="fas fa-leaf" />
          Violet Dawn
        </Link>

        <section className="contact-cart">
          <p className="contact">
            306 Jefferson Ave S<br />
            Oldsmar, FL 34677
            <br />
          </p>
          <div className="cart">
            <h3>SHOPPING CART</h3>
            <input
              type="search"
              placeholder="Search"
              className="search-input"
            />
          </div>
        </section>
      </div>
      <hr />
    </header>
  )
}
