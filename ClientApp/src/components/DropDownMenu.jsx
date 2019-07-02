import React from 'react'
import { Link } from 'react-router-dom'

export default function DropDownMenu() {
  return (
    <section className="drop-menus">
      <div className="dropdown">
        <button className="dropbtn">Price Range:</button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Sort By:</button>
        <div className="dropdown-content">
          <a href="#">Link 4</a>
          <a href="#">Link 5</a>
          <a href="#">Link 6</a>
        </div>
      </div>
    </section>
  )
}
