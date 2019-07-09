import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Cart() {
  const [items, setItems] = useState([])
  let currentCart = localStorage.getItem('cartNumber')

  useEffect(() => {
    axios.get(`api/cart/cartNumber/${currentCart}`).then(resp => {
      setItems(resp.data.cartItems)
      console.log(resp.data.cartItems)
    })
  }, [currentCart])

  return (
    <section>
      <ul>
        {items.map(item => {
          return <li>{item.flowerId}</li>
        })}
      </ul>
    </section>
  )
}
