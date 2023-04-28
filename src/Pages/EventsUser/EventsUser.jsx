import React, { useEffect, useState } from 'react'
import "./EventsUser.css"
import Footer from '../../Components/footer/Footer'
import Article from '../../Components/sectionArticle/Article'
import EventsServices from '../../Api/eventsServices'
import { Link } from 'react-router-dom'
import ContainerEvents from '../../Components/containerEvents/ContainerEvents'

function EventsUser() {
  const [itemEvents, setItemEvents] = useState([])
  const [item, setItem] = useState([])
  
  useEffect(()=>{
      EventsServices.allEventsToken()
      .then((data)=>{setItemEvents(data.filter((item) => {
        return item.isInscribedUser === true
      }))})
      EventsServices.myEvents()
      .then((data)=>{setItem(data)})
  },[])
  
  return (
    <>
      <main className='mainHome'>
        <div className='categories'>
          <ContainerEvents />
          <div className='mainPage'>
            <div className='containerFather'>
              <div className='title'>
                <h2 className='titleAll'>Eventos inscritos</h2>
                <h4 className='h4'>Lista completa de todos los eventos</h4>
              </div>
            { itemEvents.length === 0 
                ? <section className='anuncio'>
                    <h1>No estas inscrito en ningún evento</h1>
                  </section>

                :
                <section className='sectionEvent' >
                  {itemEvents.map((i) => {
                    if (i.active) {
                    return (
                      <Link to={`/infoEvent/${i.id}`} key={i.id} className='linkInfo'>
                        <Article
                          active={i.active}
                          key={i.id}
                          id={i.id}
                          date={`${i.eventDate} | ${i.eventTime}`}
                          capacity={i.capacity}
                          titleArticle={i.title}
                          img={i.urlImage}
                          inscribedUsersCount={i.inscribedUsersCount}
                        />
                      </Link>
                    )}
                    return null;
                  })}
                  {itemEvents.map((i) => {
                    if (!i.active) {
                      return (
                        <Link to={`/infoEvent/${i.id}`} key={i.id} className='linkInfo'>
                          <Article
                            active={i.active}
                            key={i.id}
                            id={i.id}
                            date={`${i.eventDate} | ${i.eventTime}`}
                            capacity={i.capacity}
                            titleArticle={i.title}
                            img={i.urlImage}
                            inscribedUsersCount={i.inscribedUsersCount}
                          />
                        </Link>
                      )
                    }
                    return null
                  })}
                </section>
              }
            </div>
            <Footer />
          </div>
        </div>
      </main>
    </>
  )
}

export default EventsUser
