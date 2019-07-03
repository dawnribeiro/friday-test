import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function SingleFlower(props) {
  const [flowers, setFlowers] = useState([])
  const currentFlowerType = props.match.params.flowerType

  // useEffect(() => {
  //   axios.get('api/name/{currentFlowerType}').then(resp => {
  //     setFlowers(resp.data)
  //     console.log(flowers)
  //   })
  // })

  props.axios.get()

  return <>Hellllllooooooo, {currentFlowerType}</>
}
