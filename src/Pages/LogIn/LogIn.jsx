import React, { useState } from 'react'
import './LogIn.css'
import Footer from '../../Components/footer/Footer'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { AuthService } from '../../Api/AuthService';
import EventsServices from '../../Api/eventsServices';

function LogIn() {
    const initialLogin = {
        email: "",
        password: ""
      };

    const [login, setLogin] = useState(initialLogin);
    let navigate = useNavigate();
    // console.log(login);
    
    const handleInput = (e) => {
    e.persist();
    setLogin({
        ...login,
        [e.target.name]: e.target.value,
    });
    };
    
    const loginSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: login.name,
            email: login.email,
            password: login.password,
        };

        EventsServices.loginByData(data)
            .then((res) => {
                console.log(res);

                const authUser = {
                    token: res.token,
                    email: res.email,
                    // id: res.id,
                };

                localStorage.setItem("auth_token", res.token);
                localStorage.setItem("auth_email", res.email);
                // localStorage.setItem("auth_id", res.id);

                AuthService.saveAuthUser(authUser);

                navigate("/");
            })
            .catch((err) => console.error(err));
    };

  return (
      <>
          <section className='sectionLogIn'>
              <div className="form-box-login">
                  <div className="form-value">
                      <form action="" className='formLogIn' onSubmit={loginSubmit}>
                          <h2 className='htmlFor'>Login</h2>
                          <div className="inputbox">
                              <input onChange={handleInput} name='email' type="email" required />
                              <label htmlFor="">Email</label>
                          </div>
                          <div className="inputbox">
                              <input onChange={handleInput} name='password' type="password" required ></input>
                              <label htmlFor="">Password</label>
                          </div>
                          <button className='buttonLogIn'>Log in</button>
                          <div className="register">
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
