import React from 'react'

export default function Input() {
  return (
    <section>
      <div>
        <form>
          <label>
            Flower Type:
            <input type="text" />
          </label>
          <label>
            URL:
            <input type="text" />
          </label>
          <label>
            Description:
            <input type="text" />
          </label>
          <label>
            Price:
            <input type="text" />
          </label>
          <label>
            Number In Stock:
            <input type="text" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>
  )
}
