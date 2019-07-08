import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function TestCart() {
  return (
    <section>
      <h1>Test Cart</h1>
      <ul>
        <li>
          <p>Rose</p>
          <p>6</p>
        </li>
        <li>
          <p>Tulip</p>
          <p>6</p>
        </li>
        <li>
          <p>Lily</p>
          <p>6</p>
        </li>
      </ul>
      <button>Checkout</button>
    </section>
  )
}
