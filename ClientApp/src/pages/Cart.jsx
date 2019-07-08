import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Cart(props) {
  const currentCart = props.match.params.cartNumber

  useEffect(() => {
    axios.get('api/cart/cartNumber{}')
  })
}
