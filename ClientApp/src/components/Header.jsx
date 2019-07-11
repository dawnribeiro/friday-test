import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  // const currentCartItems = props.match.params.cart.items

  return (
    <header>
      <hr />
      <div className="header-container">
        <Link to="/" className="header-name">
          <i className="fas fa-leaf" />
          Violet Dawn
        </Link>

        <section className="contact-cart">
          <p className="contact">
            306 Jefferson Ave S<br />
            Oldsmar, FL 34677
            <br />
          </p>
          <div className="cart">
            <Link to="/Cart">
              <i className="fas fa-shopping-cart fa-3x" />
            </Link>
            {/* <p>{currentCartItems}</p> */}
            <br />
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
