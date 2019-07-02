import React, { useState, useEffect } from 'react'
import axios from 'axios'

import roseImage from '../Images/roses-red.jpg'

export default function Roses() {
  const [flowers, setFlowers] = useState([])

  useEffect(() => {
    axios.get('/api/flower').then(resp => {
      setFlowers(resp.data)
    })
  }, [])

  return (
    <section>
      <ul className="flowers-list">
        {flowers.map(flower => {
          return (
            <li className="flowers" key={flower.id}>
              <img className="flower-img" src={roseImage} alt="roses" />
              <p>{flower.description}</p>
              <p>${flower.price}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
