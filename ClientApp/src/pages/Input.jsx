import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Dropzone from 'react-dropzone'
import classNames from 'classnames'

export default function Input() {
  const [flower, setFlower] = useState({})
  const [flowerUrl, setFlowerUrl] = useState('')

  // const [onDrop, setOnDrop] = useState({})
  const onDrop = files => {
    console.log({ files })
    // Push all the axios request promise into a single array
    const uploaders = files.map(file => {
      // Initial FormData
      const formData = new FormData()
      formData.append('file', file)

      // Make an AJAX upload request using Axios
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
    e.preventDefault()

    const data = { ...flower, url: flowerUrl }
    // console.log({ flowerUrl, data })
    axios.post('/api/flower', data).then(resp => {
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
            {/* URL:
            <input type="file" name="url" onChange={e => updateValue(e)} /> */}
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
