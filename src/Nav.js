import React, { useEffect, useState } from 'react'
import './Nav.css'
const Nav = () => {

  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else {
        handleShow(false)
      }
    })
    return () => {
      window.removeEventListener("scroll", show)
    }
  }, [])


  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav_logo"
        src="https://res.cloudinary.com/dz4tt9omp/image/upload/v1623686778/Netflix_Logo_RGB.png"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://res.cloudinary.com/dz4tt9omp/image/upload/v1623687943/avatar.jpg"
        alt="Netflix Logo"
      />
    </div>
  )
}

export default Nav
