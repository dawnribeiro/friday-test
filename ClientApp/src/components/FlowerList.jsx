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

  const onClick = flower => {
    axios
      .post(`api/cart`, {
        cartNumber: localStorage.getItem('cartNumber'),
        flowerId: flower.id
      })
      .then(resp => {
        console.log('flower data')
        console.log(resp.data.cartNumber)
        localStorage.setItem('cartNumber', resp.data.cartNumber)
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
              <button onClick={() => onClick(flower)}>Add to Cart</button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
