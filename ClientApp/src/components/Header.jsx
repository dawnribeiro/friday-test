import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <hr />
      <div className="header-container">
        <section className="name-search">
          <Link to="/">Violet Dawn</Link>
          <input type="search" />
        </section>
        <section className="contact-cart">
          <p className="contact">
            306 Jefferson Ave S<br />
            Oldsmar, FL 34677
            <br />
          </p>
          <div>SHOPPING CART</div>
        </section>
      </div>
      <hr />
    </header>
  )
}
