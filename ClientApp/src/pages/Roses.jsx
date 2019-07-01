import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Roses() {
  const [flowers, setFlowers] = useState([])

  useEffect(() => {
    axios.get('/api/flower').then(resp => {
      setFlowers(resp.data)
    })
  }, [])

  return (
    <section>
      <ul>
        {flowers.map(flower => {
          return (
            <li className="flowers" key={flower.id}>
              {flower.name} {flower.description} {flower.url} {flower.price}
              {flower.color}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
