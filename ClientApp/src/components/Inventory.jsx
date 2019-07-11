import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Inventory() {
  const [allFlowers, setAllFlowers] = useState()

  useEffect(() => {
    axios.get('api/Flower').then(resp => {
      setAllFlowers(resp.data)
      console.log(resp.data)
    })
  }, [])

  return (
    <section>
      <ul>
        {allFlowers.map(flower => {
          return (
            <li>
              <p>{flower.numberInStock}</p>
              <p>{flower.description}</p>
              <p>{flower.price}</p>
              <p>{flower.url}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
