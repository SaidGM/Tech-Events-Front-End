import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
// import { Icon } from '@iconify/react';
import { serviceApi } from '../../Api/serviceApi'
import { AuthService } from '../../Api/AuthService'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const user = AuthService.isAuth
  const logout = () => {
    //TODO REFACATOR AUTH LOCALSTORAGE
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_email");
    localStorage.removeItem("auth");
    window.location = "/login";
    
  };
  return (
    <header>
      <Link to={'/'} className='brandA'>
        <h1 id="brand">EvenCoding {"<>"}</h1>
      </Link>
      <nav>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/admin"}>Administrador</Link></li>
          <li id="login">
            { user 
             ? <Link onClick={logout} >Log Out</Link>
             : <Link to={"/login"} >Log In</Link>
            }
          </li>
          <li id="signup"><Link to={"/register"}>Register</Link></li>
        </ul>
      </nav>
      <div className={`hamburger-icon ${isOpen && "open"}`}
           onClick={()=>{setIsOpen(!isOpen)}}>
        <div className="bar1" ></div>
        <div className="bar2" ></div>
        <div className="bar3" ></div>
        <ul className="mobile-menu">
          <li className='liNavbar'><Link to="/">Home</Link></li>
          <li className='liNavbar'><Link to="/">Administrador</Link></li>
          <li  className='liNavbar'id="login"><Link to={"/login"} >Login</Link></li>
          <li  className='liNavbar'id="signup"><Link to={"/register"}>Register</Link></li>
        </ul>
      </div>
    </header>
    
  )
}

export default Navbar
