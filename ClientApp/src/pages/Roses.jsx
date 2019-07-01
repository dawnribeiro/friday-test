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
              <h3>{flower.name}</h3>
              <a href="{flower.url}" />
              <p>{flower.description}</p>
              <p>{flower.price}</p>
              <p>{flower.color}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
