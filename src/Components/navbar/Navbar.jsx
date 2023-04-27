import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import "./Navbar.css"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const user = JSON.parse(localStorage.getItem("auth"));
  const role = localStorage.getItem("auth_role");
  
  const logout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_email");
    localStorage.removeItem("auth_role");
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
          {user
            ?
            <li className='home'>
              <Icon icon="material-symbols:event-available" className='icons' />
              <Link to={"/eventsUser"}>Mis eventos</Link>
            </li>
            : ''
          }
          {role === "ADMIN"
            ? <li className='home'>
              <Icon icon="eos-icons:admin" className='icons' />
              <Link to={"/admin"}>Administrador</Link>
            </li>
            : ""
          }
          <li className='home'>
            <Icon icon="material-symbols:home-app-logo" className='icons' />
            <Link to={"/"}>Home</Link>
          </li>
          {user
            ?
            <li className='home'>
              <Icon icon="material-symbols:person-off" className='icons' />
              <Link onClick={logout}>Log Out</Link>
            </li>
            :
            <li className='home'>
              <Icon icon="material-symbols:person-search" className='icons' />
              <Link to={"/login"} >Log In</Link>
            </li>
          }

          {user
            ? ''
            : <li className='home'>
              <Icon icon="material-symbols:person-add" className='icons' />
              <Link to={"/register"}>Register</Link>
            </li>
          }

        </ul>
      </nav>
      <div className={`hamburger-icon ${isOpen && "open"}`}
        onClick={() => { setIsOpen(!isOpen) }}>
        <div className="bar1" ></div>
        <div className="bar2" ></div>
        <div className="bar3" ></div>
        <ul className="mobile-menu">
          <li className='liNavbar home'>
            <Icon icon="material-symbols:home-app-logo" className='icons' />
            <Link to="/">Home</Link>
          </li>
          {user
          ? <li className='liNavbar home' id="login">
             <Icon icon="material-symbols:person-off" className='icons' />
              <Link onClick={logout}>Log Out</Link>
            </li>
          : <li className='liNavbar home' id="login">
              <Icon icon="material-symbols:person-search" className='icons' />
              <Link to={"/login"} >Log In</Link>
            </li>
          }
          {user
          ? ''
          : <li className='liNavbar home' id="signup">
              <Icon icon="material-symbols:person-add" className='icons' />
              <Link to={"/register"}>Register</Link>
            </li>
          }
          {user
          ? <li className='liNavbar home' id="signup">
              <Icon icon="material-symbols:event-available" className='icons' />
              <Link to={"/eventsUser"}>Mis eventos</Link>
            </li>
          : ''
          }
          {role === "ADMIN"
          ? <li className='liNavbar home'>
              <Icon icon="eos-icons:admin" className='icons' />
              <Link to={"/admin"}>Administrador</Link>
            </li>
          : <></>
          }
        </ul>
      </div>
    </header>
  )
}

export default Navbar
