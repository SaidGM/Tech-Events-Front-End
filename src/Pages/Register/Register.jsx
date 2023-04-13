import React from 'react'
import './Register.css'
import Footer from '../../Components/footer/Footer'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <>
      <section className='sectionRegister'>
        <div class="form-box-register">
          <div class="form-value">
            <form action="" className='formRegister'>
              <h2 className='htmlFor'>Register</h2>
              <div class="inputbox inputbox-register">
                <input type="email" required />
                <label htmlFor="">Nombre</label>
              </div>
              <div class="inputbox inputbox-register">
                <input type="email" required />
                <label htmlFor="">Email</label>
              </div>
              <div class="inputbox inputbox-register">
                <input type="password" required></input>
                <label for="">Password</label>
              </div>
              <button className='buttonLogIn'>Log in</button>
              <div class="register">
                <p>If you have an account <Link to={'/login'}>Log In</Link></p>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Register
