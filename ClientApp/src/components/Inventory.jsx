import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Inventory() {
  const [allFlowers, setAllFlowers] = useState([])

  useEffect(() => {
    if (auth.isAuthenticated()) {
      axios.defaults.headers.common = {
        Authorization: auth.authorizationHeader()
      }
    }
    axios.get('/api/flower').then(resp => {
      setAllFlowers(resp.data)
      console.log(resp.data)
    })
  }, [])

  const deleteFlower = flower => {
    let deletedFlower = flower.id
    axios.delete(`api/flower/${deletedFlower}`).then(resp => {
      setAllFlowers(oldAllFlowers =>
        oldAllFlowers.filter(f => f.id !== flower.id)
      )
    })
  }

  const addOneFlower = flower => {
    // axios.patch
  }

  return (
    <section>
      <h1>Inventory</h1>
      <ul>
        {allFlowers.map(flower => {
          return (
            <li>
              <p>{flower.description}</p>
              <p>{flower.numberInStock}</p>
              <p>{flower.price}</p>
              <img src={flower.url} alt="" />
              <button onClick={() => deleteFlower(flower)}>Delete</button>
              <button onClick={() => addOneFlower(flower)}>+</button>
              <button>-</button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
