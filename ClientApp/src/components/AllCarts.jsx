import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function AllCarts() {
  const [carts, setCarts] = useState([])

  useEffect(() => {
    // if (auth.isAuthenticated()) {
    //   axios.defaults.headers.common = {
    //     Authorization: auth.authorizationHeader()
    //   }
    // }
    axios.get('/api/cart').then(resp => {
      setCarts(resp.data)
      console.log(resp.data)
    })
  }, [])

  return (
    <section className="carts">
      <h1>All Carts</h1>
      <ul key={carts.id} className="carts-list">
        {carts.map(cart => {
          return (
            <li>
              <h4>Cart {cart.id}</h4>
              <ol key={cart.cartItems.id}>
                {cart.cartItems.map(item => {
                  return (
                    <li>
                      <p>{item.flower.description}</p>
                    </li>
                  )
                })}
              </ol>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
