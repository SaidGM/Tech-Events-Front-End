import React from 'react'
import './LogIn.css'
import Footer from '../../Components/footer/Footer'
import { Link } from 'react-router-dom'

function LogIn() {
  return (
      <>
          <section className='sectionLogin'>
              <div class="form-box">
                  <div class="form-value">
                      <form action="" className='formLogIn'>
                          <h2 className='htmlFor'>Login</h2>
                          <div class="inputbox">
                              <input type="email" required />
                              <label htmlFor="">Email</label>
                          </div>
                          <div class="inputbox">
                              <input type="password" required></input>
                              <label for="">Password</label>
                          </div>
                          <button className='buttonLogIn'>Log in</button>
                          <div class="register">
                              <p>Don't have a account <Link to={'/register'}>Register</Link></p>
                          </div>
                      </form>
                  </div>
              </div>
          </section>
          <Footer />
      </>
  )
}

export default LogIn
