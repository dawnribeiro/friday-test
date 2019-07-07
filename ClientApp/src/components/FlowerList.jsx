import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function FlowerList(props) {
  const [flowers, setFlowers] = useState([])
  const [cartItem, setCartItem] = useState([])

  const currentFlowerType = props.match.params.flowerType

  useEffect(() => {
    axios.get(`api/flower/name/${currentFlowerType}`).then(resp => {
      setFlowers(resp.data)
      console.log(resp.data)
    })
  }, [currentFlowerType])

  const onClick = e => {
    axios.post(`api/cart`).then(resp => {
      console.log(resp.data)
      return setCartItem(resp.data)
    })
  }

  return (
    <section>
      <h1 className="flower-name">{currentFlowerType}</h1>
      <ul className="flowers-list">
        {flowers.map(flower => {
          return (
            <li key={flower.id}>
              <img className="list-img" src="{flower.url}" alt="" />
              <p>{flower.description}</p>
              <p>${flower.price}</p>
              <button onClick={onClick}>Add to Cart</button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
