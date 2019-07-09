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

  // axios call to delete item
  const onClick = item => {
    let removeItem = item.id
    axios.delete(`api/cart/${removeItem}`).then(resp => {
      console.log(resp.data)
    })
  }

  return (
    <section>
      <ul>
        {items.map(item => {
          return (
            <li key={item.id} className="cart-items">
              {item.flower.description}
              <button onClick={() => onClick(item)}>Remove Item</button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
