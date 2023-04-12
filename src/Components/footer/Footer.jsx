import React from 'react'
import "./Footer.css"
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
      <div className='linea'></div>
      <div className='box-father'>
        <div className='box-letters-top'>
          <h4>Marca</h4>
          <h4 className='h4Work'>Trabaja con <br/> nosotros </h4>
          <h4>Privacidad</h4>
        </div>
        <div className='box-letters-bottom'>
          <h4>Ayuda</h4>
          <h4>Cookies</h4>
          <h4>Términos</h4>
        </div>
      </div>
      <div className='linea'></div>
      <div className='container-logo'>
        <h1 className="brand">EvenCoding {"<>"}</h1>
      </div>
      <div className='networks'>
        <Link to={""}><Icon icon="ri:instagram-line" color="#152732" width="30" height="30" /></Link>
        <Link to={""}><Icon icon="ri:facebook-fill" color="#152732" width="30" height="30" /></Link>
        <Link to={""}><Icon icon="mdi:twitter" color="#152732" width="30" height="30" /></Link>
        <Link to={""}><Icon icon="mdi:youtube" color="#152732" width="33" height="33" /></Link>
        <Link to={""}><Icon icon="akar-icons:linkedin-v2-fill" color="#152732" width="30" height="30" /></Link>
        <Link to={""}><Icon icon="ri:spotify-fill" color="#152732" width="30" height="30" /></Link>
        <Link to={""}><Icon icon="ic:baseline-tiktok" color="#152732" width="30" height="30" /></Link>
      </div>
    </footer>
  )
}

export default Footer
