import Dropzone from 'react-dropzone'
import axios from 'axios'
import classNames from 'classnames'
import React, { useState, useEffect } from 'react'

export default function UploadImageFiles() {
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
        })
    })

    // Once all the files are uploaded
    axios.all(uploaders).then(() => {
      console.log('done')
    })
  }
  return (
    <Dropzone onDrop={onDrop}>
      {({ getRootProps, getInputProps, isDragActive }) => {
        return (
          <div
            {...getRootProps()}
            className={classNames('dropzone', {
              'dropzone--isActive': isDragActive
            })}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop files here...</p>
            ) : (
              <p>
                Try dropping some files here, or click to select files to
                upload.
              </p>
            )}
          </div>
        )
      }}
    </Dropzone>
  )
}
