import React, { useEffect, useState } from 'react'
import "./Home.css"
import Footer from '../../Components/footer/Footer'
import Article from '../../Components/sectionArticle/Article'
import EventsServices from '../../ApiServicies/eventsServices'

function Home() {
  const [item, setItem] = useState([])

  useEffect(()=>{
    EventsServices.allEvents()
    .then((data)=>{setItem(data)})
  },[])

  console.log(item);
  return (
    <>
          <main>
              <div className='categories'>
                  <div className='containerEvents'>
                      <h4 className='events'>Events:</h4>
                      <button className='buttonStyle'>Talleres</button>
                      <button className='buttonStyle'>Master Class</button>
                      <button className='buttonStyle'>Webinar</button>
                  </div>
                  <section className='mainPage'>
                      <div className='containerFather'>
                          <div className='title'>
                              <h2>Eventos Destacados</h2>
                              <h4 className='h4'>The best events of the week</h4>
                          </div>
                          <div className='sectionEvent' >
                            <Article
                              date="MARZO 11 2023 | 23:55 - 05:00"
                              capacity="20"
                              titleArticle="Taller de Buenas Prácticas JavaScript"
                              img="https://1.bp.blogspot.com/-jw-FAFL2t-w/XrGCai-oyVI/AAAAAAAACOo/C46oP8cf7WcmrzAdhEteptt3Gbvt9xd3wCLcBGAsYHQ/s1600/maxresdefault.jpg"
                            />
                          </div>
                          <div className='title'>
                              <h2 className='titleAll'>Todos los eventos</h2>
                              <h4 className='h4'>Complete list the best events</h4>
                          </div>
                          <div className='sectionEvent' >
                            {item.map((i)=>{
                              return(
                                <Article
                                  key={i.id}
                                  id={i.id}
                                  date={`${i.fecha} | ${i.hora}`}
                                  capacity={i.capacity}
                                  titleArticle={i.title}
                                  img={i.urlImage}
                                />
                              )
                            })}
                          </div>
                      </div>
                      <Footer />
                  </section>
              </div>
          </main>
    </>
  )
}

export default Home
