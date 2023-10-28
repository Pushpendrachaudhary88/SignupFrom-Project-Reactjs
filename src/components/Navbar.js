import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Signup</NavLink>
      <NavLink to="/Login">Login</NavLink>
    
    </div>
  )
}

export default Navbar