import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Dropzone from 'react-dropzone'
import classNames from 'classnames'

export default function Input() {
  const [flower, setFlower] = useState({})
  const [onDrop, setOnDrop] = useState({})

  const addNewFlower = e => {
    e.preventDefault()
    axios.post('/api/flower', flower).then(resp => {
      setFlower()
    })
  }

  const updateValue = e => {
    const name = e.target.name
    const value = e.target.value
    setFlower(data => {
      data[name] = value
      return data
    })
  }

  return (
    <section>
      <div>
        <form onSubmit={addNewFlower}>
          <label>
            Flower Type:
            <input type="text" name="name" onChange={e => updateValue(e)} />
          </label>
          <label>
            URL:
            <input type="file" name="url" onChange={e => updateValue(e)} />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              onChange={e => updateValue(e)}
            />
          </label>
          <label>
            Price:
            <input type="text" name="price" onChange={e => updateValue(e)} />
          </label>
          <label>
            Color:
            <input type="text" name="color" onChange={e => updateValue(e)} />
          </label>
          <label>
            Number In Stock:
            <input
              type="text"
              name="numberInStock"
              onChange={e => updateValue(e)}
            />
          </label>
          <button>Add</button>
        </form>
      </div>
    </section>
  )
}
