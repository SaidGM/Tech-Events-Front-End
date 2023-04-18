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
  function isFeatured(data){
    return data == "true";
  }

  // const filterFeature = itemEvents.filter(isFeatured)
  // console.log(filterFeature);
  
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
                          <h4 className='h4'>Los mejores eventos de la semana</h4>
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
                        {/* {itemHighlights.filter(isFeatured)
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
                          } */}
                        
                      </section>
                      <div className='title'>
                          <h2 className='titleAll'>Todos los eventos</h2>
                          <h4 className='h4'>Lista completa de todos los eventos</h4>
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
