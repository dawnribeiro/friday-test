import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function FlowerList(props) {
  const [flowers, setFlowers] = useState([])

  const currentFlowerType = props.match.params.flowerType

  useEffect(() => {
    axios.get(`api/flower/name/${currentFlowerType}`).then(resp => {
      setFlowers(resp.data)
      console.log(resp.data)
    })
  }, [currentFlowerType])

  return (
    <section>
      <h1>{currentFlowerType}</h1>
      {/* <ul>
        {currentFlowerType.map(flowers => {
          return <li>{flowers}</li>
        })}
      </ul> */}
      <ul className="flowers-menu">
        {flowers.map(flower => {
          return (
            <li key={flower}>
              <img className="list-img" src={flower.url} alt="" />
              <p>{flower.description}</p>
              <p>${flower.price}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
