import React, { useEffect } from 'react'
import './Admin.css'
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { useState } from 'react';
import EventsServices from '../../Api/eventsServices';
import Footer from '../../Components/footer/Footer';

function Admin() {
  const [events, setEvents] = useState([])
  // console.log(events);

  useEffect(()=>{
    EventsServices.allEvents()
    .then((data)=>{setEvents(data)})
  },[])

  const handleDelete = (id) => {
    let isDelete = window.confirm(
      `Quieres eliminar el evento con id: ${id}?`
    );
    if (isDelete) {
      EventsServices.deleteByIdEvent(id)
        .then(document.location.reload())
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <main className='mainHomeAdmin'>
        <div className='adminBackground'>
          <div className='titleAdmin'>
            <h1>Administrador</h1>
            <button className='addEvent'>Añadir evento</button>
          </div>
          <div className='mainPageAdmin'>
            <div className='titles'>
              <p className='pTitles titleForm'>Titulo</p>
              <p className='pTitles nivelForm'>Nivel</p>
              <p className='pTitles capacityForm'>Capacidad</p>
              <p className='pTitles capacityForm itemsNone'>Categoria</p>
              <p className='pTitles capacityForm itemsNone'>Fecha</p>
              <p className='pTitles capacityForm itemsNone'>Hora</p>
              <p className='pTitles capacityForm itemsNone'>Destacado</p>
            </div>
            {events.map((events)=>{
              return(
              <div className="dashBoardRow" key={events.id}>
                <p className="eventTitle line-clap">{events.title}</p>
                <p className="eventNivel line-clap">{events.degree}</p>
                <p className="eventCapacity  line-clap">{events.capacity}</p>
                <p className="eventCategory  itemsNone line-clap">{events.category.name}</p>
                <p className="eventDate itemsNone line-clap">{events.eventDate}</p>
                <p className="eventTime itemsNone line-clap">{events.eventTime}</p>
                <p className="eventHighlight itemsNone line-clap">
                  {events.highlight 
                    ? "Si"
                    : "No"
                  }
                  </p>
                <FaPencilAlt className='editEvent' />
                <FaTrashAlt className='deleteEvent' onClick={() => handleDelete(events.id)}/>
              </div>

              )})
            }
            <Footer/>
          </div>
        
        </div>
      </main>
    </>
  )
}

export default Admin
