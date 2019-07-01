import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <section className="menu-container">
      <div>
        <ul className="flowers-menu">
          <li className="rose-container">
            <Link to="/roses">Roses</Link>
          </li>
          <li>
            <Link to="/lilies">Lilies</Link>
          </li>
          <li>
            <Link to="/tulips">Tulips</Link>
          </li>
          <li>
            <Link to="/sunflowers">Sunflowers</Link>
          </li>
          <li>
            <Link to="/carnations">Carnations</Link>
          </li>{' '}
          <li>
            <Link to="/input">input</Link>
          </li>
        </ul>
      </div>
      <div className="drop-menus">
        <div className="dropdown">
          <button className="dropbtn">Price Range:</button>
          <div className="dropdown-content">
            {/* <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a> */}
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Sort By:</button>
          <div className="dropdown-content">
            {/* <a href="#">Link 4</a>
            <a href="#">Link 5</a>
            <a href="#">Link 6</a> */}
          </div>
        </div>
      </div>
    </section>
  )
}
