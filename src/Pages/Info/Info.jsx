import React, { useEffect, useState } from 'react'
import "./Info.css"
import Footer from '../../Components/footer/Footer'
import EventsServices from '../../Api/eventsServices'
import { useParams } from 'react-router-dom'
import { Icon } from '@iconify/react';

function Info() {

  const [eventInfo, setEventInfo] = useState([])

  const {id} = useParams()
  console.log(eventInfo);

  useEffect(()=>{
    EventsServices.byIdEvents(id)
    .then((data)=>{setEventInfo(data)})
  },[])

  return (
    <>
      <main className='mainInfo'>
        <div className='containerFondo'>
            <div className='containerInfoTitle'>
                <img src={eventInfo.urlImage} alt="" className='imgInfo' />
                <div className='containerTitle'>
                   <h4 className='hDate'>{eventInfo.fecha} | {eventInfo.hora}</h4>
                   <h3 className='hTitle'>{eventInfo.title}</h3>
                   <h5 className='hAsistentes'>15 / {eventInfo.capacity} asistentes</h5>
                </div>
                <div className='containerFlex'>
                    <div className='containerInfo'>
                        <h2>Info</h2>
                        <h4 className='hInfo'>{eventInfo.description}</h4>
                    </div>
                    <div className='containerOptions'>
                        <div className='containerOnline containerBox'>
                            <h3>Evento Online :</h3>
                            <h3 className='hSpace'>
                              <Icon icon="tabler:brand-zoom" color="#152732" width="30" height="30"/>  
                              Zoom
                            </h3>
                        </div>
                        <div className='containerOnline'>
                            <h3>Nivel :</h3>
                            <h3 className='hSpace'>
                              <Icon icon="material-symbols:person" color="#152732" width="32" height="32" />
                              {eventInfo.nivel}
                            </h3>
                        </div>
                        <button className='ButtonApunt'>Apúntate</button>
                    </div>
                </div>
                <Footer/>
            </div>         
        </div>
      </main>
    </>
  )
}

export default Info
