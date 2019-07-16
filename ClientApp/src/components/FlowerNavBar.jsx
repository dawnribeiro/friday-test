import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function FlowerNavBar() {
  const [flowers, setFlowers] = useState([])

  useEffect(() => {
    // if (auth.isAuthenticated()) {
    //   axios.defaults.headers.common = {
    //     Authorization: auth.authorizationHeader()
    //   }
    // }
    axios.get('/api/flower/types').then(resp => {
      setFlowers(resp.data)
    })
  }, [])
  return (
    <section>
      <ul className="flowers-menu">
        {flowers
          .filter(
            flower =>
              flower !== 'Featured Arrangement' &&
              flower !== 'FeaturedArrangements'
          )
          .map(flower => {
            return (
              <li key={flower}>
                <Link to={`/${flower}`}>{flower}</Link>
              </li>
            )
          })}
      </ul>
    </section>
  )
}
