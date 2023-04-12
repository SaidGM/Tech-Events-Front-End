import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
// import { Icon } from '@iconify/react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header>
      <h1 id="brand">EvenCoding {"<>"}</h1>
      <nav>
        <ul>
          <li><Link to={"/home"}>Contacto</Link></li>
          <li><Link to={"/about"}>Administrador</Link></li>
          <li id="login"><Link to={"/login"} >Login</Link></li>
          <li id="signup"><Link to={"/signup"}>Register</Link></li>
        </ul>
      </nav>
      <div className={`hamburger-icon ${isOpen && "open"}`}
           onClick={()=>{setIsOpen(!isOpen)}}>
        <div className="bar1" ></div>
        <div className="bar2" ></div>
        <div className="bar3" ></div>
        <ul className="mobile-menu">
          <li className='liNavbar'><Link to="/"> Home</Link></li>
          <li className='liNavbar'><Link to="/">Administrador</Link></li>
          <li  className='liNavbar'id="login"><Link to={"/login"} >Login</Link></li>
          <li  className='liNavbar'id="signup"><Link to={"/signup"}>Register</Link></li>
        </ul>
      </div>
    </header>
    
  )
}

export default Navbar
