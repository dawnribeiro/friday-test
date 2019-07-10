import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Cart() {
  const [items, setItems] = useState([])

  let currentCart = localStorage.getItem('cartNumber')
  let removeItem = useEffect(() => {
    axios.get(`api/cart/cartNumber/${currentCart}`).then(resp => {
      setItems(resp.data.cartItems)
      console.log(resp.data.cartItems)
    })
  }, [currentCart])

  const onClick = item => {
    let removeItem = item.id
    axios.delete(`api/cart/${removeItem}`).then(resp => {
      console.log(resp.data)
    })
  }

  return (
    <section>
      <h1>Cart</h1>
      <ul className="cart-list">
        {items.map(item => {
          // cartCount = item.length
          return (
            <li key={item.id} className="cart-items">
              {item.flower.description}
              <img className="cart-img" src={item.flower.url} alt="" />
              <button onClick={() => onClick(item)}>Remove Item</button>
            </li>
            // <p>{cartCount}</p>
          )
        })}
      </ul>
    </section>
  )
}
