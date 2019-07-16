import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <section className="footer">
      <div className="made">
        <p>Made with 💜 at Suncoast Developers Guild</p>
      </div>
      <div className="footer-links">
        <a href="www.facebook.com">Facebook</a>
        <a href="www.linkedin">LinkedIn</a>
        <Link to="/inventory">Admin</Link>
      </div>
    </section>
  )
}
