import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Dropzone from 'react-dropzone'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

export default function Inventory() {
  const [flower, setFlower] = useState([])
  const [flowerUrl, setFlowerUrl] = useState('')
  const [allFlowers, setAllFlowers] = useState([])
  const [addToFlower, setAddToFlower] = useState('')

  useEffect(() => {
    axios.get('/api/flower').then(resp => {
      setAllFlowers(resp.data)
      console.log(resp.data)
    })
  }, [])

  const onDrop = files => {
    console.log({ files })
    const uploaders = files.map(file => {
      const formData = new FormData()
      formData.append('file', file)

      return axios
        .post('/api/image', formData, {
          // using
          headers: {
            'content-type': 'multipart/form-data',
            accept: 'application/json'
          }
        })
        .then(response => {
          console.log({ response })
          setFlowerUrl(response.data.image.url)
        })
    })

    // Once all the files are uploaded
    axios.all(uploaders).then(() => {
      console.log('done')
    })
  }

  const addNewFlower = e => {
    // e.preventDefault()

    const data = { ...flower, url: flowerUrl }
    axios.post('/api/flower', data).then(resp => {
      setFlower()
      console.log(resp.data, 'im from input')
    }, [])
    e.target.reset()
  }

  const updateValue = e => {
    const name = e.target.name
    const value = e.target.value
    setFlower(data => {
      data[name] = value
      return data
    })
  }

  const deleteFlower = flower => {
    let deletedFlower = flower.id
    axios.delete(`api/flower/${deletedFlower}`).then(resp => {
      setAllFlowers(oldAllFlowers =>
        oldAllFlowers.filter(f => f.id !== flower.id)
      )
    })
  }

  const addOneFlower = flower => {
    let updatedFlower = flower.id
    axios
      .patch(`api/flower/${updatedFlower}`, {
        NumberInStock: +1
      })
      .then(resp => {
        setAddToFlower(resp.data)
        console.log(resp.data)
        // const newInStock = (updatedFlower.NumberInStock = { ValueToAdd: +1 })
        // return newInStock
      })
  }

  return (
    <section>
      <div>
        <form onSubmit={addNewFlower} className="input-form">
          <label>
            Flower Type:
            <input type="text" name="name" onChange={e => updateValue(e)} />
          </label>
          <label>
            <Dropzone onDrop={onDrop}>
              {({ getRootProps, getInputProps, isDragActive }) => {
                return (
                  <div
                    {...getRootProps()}
                    className={classNames('dropzone', {
                      'dropzone--isActive': isDragActive
                    })}
                  >
                    <input type="file" {...getInputProps()} />
                    {isDragActive ? (
                      <p>Add Files Here</p>
                    ) : (
                      <p className="file-drop">Add Files Here</p>
                    )}
                  </div>
                )
              }}
            </Dropzone>
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
      <div>
        <Link to="/allCarts">
          <button>All Carts</button>
        </Link>
        <ul>
          {allFlowers.map(flower => {
            return (
              <li key={flower.id}>
                <p>{flower.description}</p>
                <p>{flower.price}</p>
                <img src="{flower.url}" alt="" />
                <p>{flower.numberInStock}</p>
                <button onClick={() => deleteFlower(flower)}>Delete</button>
                <button onClick={() => addOneFlower(flower)}>+</button>
                <button>-</button>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
