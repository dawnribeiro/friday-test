import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Cart() {
  const [items, setItems] = useState([])

  let currentCart = localStorage.getItem('cartNumber')

  useEffect(() => {
    // if (auth.isAuthenticated()) {
    //   axios.defaults.headers.common = {
    //     Authorization: auth.authorizationHeader()
    //   }
    // }
    axios.get(`api/cart/cartNumber/${currentCart}`).then(resp => {
      setItems(resp.data.cartItems)
      console.log(resp.data.cartItems)
    })
  }, [currentCart])

  const onClick = item => {
    let removeItem = item.id
    axios.delete(`api/cart/${removeItem}`).then(resp => {
      setItems(oldItems => oldItems.filter(f => f.id !== item.id))
    })
  }

  // let cartCount = items.length
  return (
    <section>
      <h1 className="cart-name">Cart</h1>
      <ul className="cart-list">
        {items.map(item => {
          return (
            <li key={item.id}>
              <img className="cart-img" src={item.flower.url} alt="" />
              <p>{item.flower.description}</p>
              <button onClick={() => onClick(item)}>Remove Item</button>
            </li>
          )
        })}
        {/* <p>{cartCount}</p> */}
      </ul>
    </section>
  )
}
