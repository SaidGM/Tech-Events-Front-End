import React, { useState } from 'react'
import './Register.css'
import Footer from '../../Components/footer/Footer'
import { Link, useNavigate} from 'react-router-dom'
import EventsServices from '../../Api/eventsServices';
import { AuthService } from '../../Api/AuthService';




function Register() {

  const initialRegister = {
    name: "",
    email: "",
    password: ""
  };

  const [register, setRegister] = useState(initialRegister);
  const navigate = useNavigate() 
  // console.log(register);
    const onChangeInput = e => {
      e.persist();
      setRegister({...register,[e.target.name]: e.target.value});
    }

    const registerSubmit = (e) => {
      e.preventDefault();
      const data = {
          name: register.name,
          email: register.email,
          password: register.password
      }

      EventsServices.registerByData(data);
      navigate("/login")
    }

  
  return (
    <>
      <section className='sectionRegister'>
        <div className="form-box-register">
          <div className="form-value">
            <form onSubmit={registerSubmit} action=""  className='formRegister'>
              <h2 className='htmlFor'>Register</h2>
              <div className="inputbox inputbox-register">
                <input type="name" name='name' required  onChange={onChangeInput}/>
                <label htmlFor="">Nombre</label>
              </div>
              <div className="inputbox inputbox-register">
                <input type="email" name='email' required   onChange={onChangeInput}/>
                <label htmlFor="">Email</label>
              </div>
              <div className="inputbox inputbox-register">
                <input type="password" name='password' required   onChange={onChangeInput}></input>
                <label htmlFor="">Password</label>
              </div>
              <button className='buttonLogIn' type='submit'>Register</button>
              <div className="register">
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
