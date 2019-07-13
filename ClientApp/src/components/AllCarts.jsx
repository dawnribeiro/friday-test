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
    <section>
      <p>hi</p>
      <ul key={carts.id}>
        {carts.map(cart => {
          return (
            <li>
              <p>{cart.id}</p>
              <ul key={cart.cartItems.id}>
                {cart.cartItems.map(item => {
                  return (
                    <li>
                      <p>{item.flower.description}</p>
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
