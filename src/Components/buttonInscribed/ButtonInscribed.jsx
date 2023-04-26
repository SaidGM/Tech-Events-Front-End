import React from 'react'
import { useNavigate } from 'react-router-dom';
import EventsServices from '../../Api/eventsServices';

function ButtonInscribed({id, isInscribedUser}) {

    const itemToken = localStorage.getItem("auth_token");

    const navigate = useNavigate()
    
    const handleInscribed = (id) =>{
        if (itemToken) {
          EventsServices.inscribedEvent(id)
          .then((res) => {console.log(res)})
          .then(document.location.reload())
          .catch((error) => {console.log(error)})
        }else{
          navigate('/login')
        }
      }

  return (
    <>
          {isInscribedUser === true
              ? <button className='ButtonApunt'>Inscrito</button>
              : <button className='ButtonApunt' onClick={() => handleInscribed(id)}>Apúntate</button>
          } 
    </>
  )
}

export default ButtonInscribed
