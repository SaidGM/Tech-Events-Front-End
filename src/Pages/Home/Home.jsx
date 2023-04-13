import React, { useEffect, useState } from 'react'
import "./Home.css"
import Footer from '../../Components/footer/Footer'
import Article from '../../Components/sectionArticle/Article'
import EventsServices from '../../Api/eventsServices'
import { Link } from 'react-router-dom'
import ContainerEvents from '../../Components/containerEvents/ContainerEvents'

function Home() {
  const [itemEvents, setItemEvents] = useState([])
  const [itemHighlights, setItemsHighlights] = useState([])
  
  useEffect(()=>{
    EventsServices.allEvents()
    .then((data)=>{setItemEvents(data)})
    EventsServices.allEventsHighlight()
    .then((data)=>{setItemsHighlights(data)})
  },[])
  
  return (
    <>
      <main className='mainHome'>
          <div className='categories'>
              <ContainerEvents/>
              <div className='mainPage'>
                  <div className='containerFather'>
                      <div className='title'>
                          <h2>Eventos Destacados</h2>
                          <h4 className='h4'>The best events of the week</h4>
                      </div>
                      <section className='sectionEvent' >
                        {itemHighlights.map((i)=>{
                        return(
                          <Link to={`/infoEvent/${i.id}`} key={i.id} className='linkInfo'>
                          <Article
                              active={i.active}
                              key={i.id}
                              id={i.id}
                              date={`${i.eventDate} | ${i.eventTime}`}
                              capacity={i.capacity}
                              titleArticle={i.title}
                              img={i.urlImage}
                            />
                          </Link>
                        )})}
                      </section>
                      <div className='title'>
                          <h2 className='titleAll'>Todos los eventos</h2>
                          <h4 className='h4'>Complete list the best events</h4>
                      </div>
                      <section className='sectionEvent' >
                        {itemEvents.map((i)=>{
                          return(
                            <Link to={`/infoEvent/${i.id}`} key={i.id} className='linkInfo'>
                              <Article
                                active={i.active}
                                key={i.id}
                                id={i.id}
                                date={`${i.eventDate} | ${i.eventTime}`}
                                capacity={i.capacity}
                                titleArticle={i.title}
                                img={i.urlImage}
                              />
                            </Link> 
                          )
                        })}
                      </section>
                  </div>
                  <Footer />
              </div>
          </div>
      </main>
    </>
  )
}

export default Home
