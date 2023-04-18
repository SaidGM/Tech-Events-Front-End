import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const user = JSON.parse(localStorage.getItem("auth"));

  const logout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_email");
    localStorage.removeItem("auth_role");
    localStorage.removeItem("auth");
    window.location = "/login";
    document.location.reload();
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
            {user 
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
          <li  className='liNavbar'id="login">
          {user 
             ? <Link onClick={logout} >Log Out</Link>
             : <Link to={"/login"} >Log In</Link>
          }
          </li>
          <li  className='liNavbar'id="signup"><Link to={"/register"}>Register</Link></li>
        </ul>
      </div>
    </header>
    
  )
}

export default Navbar
