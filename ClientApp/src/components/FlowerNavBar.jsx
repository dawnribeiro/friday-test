import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function FlowerNavBar() {
  const [flowers, setFlowers] = useState([])

  useEffect(() => {
    axios.get('/api/flower/types').then(resp => {
      setFlowers(resp.data)
      console.log(resp.data)
    })
  }, [])
  return (
    <section>
      <div>
        <ul className="flowers-menu">
          {flowers.map(flower => {
            console.log(flower)
            return (
              <li key={flower}>
                <Link to={`/${flower}`}>{flower}</Link>
              </li>
            )
          })}
        </ul>
      </div>
      {/* <div>
        {flowers.map(type => {
          console.log(type)
          return <Link to={`/${type.name}`}>{type.name}</Link>
        })}
      </div> */}
      {/* <ul className="flowers-menu">
        <li className="rose-container">
          <Link to="/roses">Roses</Link>
        </li>
        <li>
          <Link to="/lilies">Lilies</Link>
        </li>
        <li>
          <Link to="/tulips">Tulips</Link>
        </li>
        <li>
          <Link to="/sunflowers">Sunflowers</Link>
        </li>
        <li>
          <Link to="/carnations">Carnations</Link>
        </li>{' '}
        <li>
          <Link to="/input">input</Link>
        </li>
      </ul> */}
    </section>
  )
}
