import React, { useEffect } from 'react'
import './Admin.css'
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { useState } from 'react';
import EventsServices from '../../Api/eventsServices';

function Admin() {
  const [events, setEvents] = useState([])
  console.log(events);
  useEffect(()=>{
    EventsServices.allEvents()
    .then((data)=>{setEvents(data)})
  },[])

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
            </div>
            {events.map((events)=>{
              return(
              <div className="dashBoardRow" >
                <p className="eventTitle line-clap">{events.title}</p>
                <p className="eventNivel line-clap">{events.degree}</p>
                <p className="eventCapacity  line-clap">{events.capacity}</p>
                <p className="eventCategory itemsNone line-clap"></p>
                <p className="eventDate itemsNone line-clap"></p>
                <p className="eventTime itemsNone line-clap"></p>
                <p className="eventHighlight itemsNone line-clap"></p>
                <FaPencilAlt/>
                <FaTrashAlt/>
              </div>

              )})
            }
          </div>
        </div>
      </main>
    </>
  )
}

export default Admin
