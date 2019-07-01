import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class FeaturedArrangements extends Component {
  render() {
    return (
      <section>
        <h1>Im a featured arrangement</h1>
        {/* this is a test */}
        <div className="header-container">
          <section className="name-search">
            <Link to="/">This is going to take me home again Dorothy</Link>
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
      </section>
    )
  }
}

export default FeaturedArrangements
