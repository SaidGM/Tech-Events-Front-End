import React, { useState } from 'react'
import './LogIn.css'
import Footer from '../../Components/footer/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { AuthService } from '../../Api/AuthService';
import EventsServices from '../../Api/eventsServices';
import validateEmail from '../../Components/validation/EmailValidation';
import validatePass from '../../Components/validation/PasswordValidation';


function LogIn() {

    const initialLogin = {
        email: "",
        password: ""
      };

    const [login, setLogin] = useState(initialLogin);
    let navigate = useNavigate();

    const onChangeInput = (e) => {
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
            token: login.token
        };
        EventsServices.loginByData(data)
            .then((res) => {
                const authUser = {
                    token: res.token,
                    email: res.email,
                    role: res.role,
                };
                localStorage.setItem("auth_token", res.token);
                localStorage.setItem("auth_email", res.email);
                localStorage.setItem("auth_role", res.role);
                AuthService.saveAuthUser(authUser);
                navigate("/");
                document.location.reload();
            })
            .catch((err) =>
                console.error(err)
            )
    }

  return (
      <>
          <section className='sectionLogIn'>
              <div className="form-box-login">
                  <div className="form-value">
                      <form action="" name="Form" onSubmit={loginSubmit} className='formLogIn' >
                          <h2 className='htmlFor'>Login</h2>
                          <div className="inputbox">
                              <input onChange={onChangeInput} id="user-email" name='email' type="email" required onKeyUp={validateEmail} />
                              <label htmlFor="">Email</label>
                          </div>
                          <span id="error-msg"></span>
                          <div className="inputbox">
                              <input onChange={onChangeInput} name='password' type="password" required onKeyUp={validatePass} maxLength="30"></input>
                              <label htmlFor="">Password</label>
                          </div>
                          <span id="error-password"></span>
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
