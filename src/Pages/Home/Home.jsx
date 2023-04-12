import React from 'react'
import "./Home.css"

function Home() {
  return (
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
                      <div className='sectionEvent'>
                          <article className='articleEvent'>
                              <img src="https://1.bp.blogspot.com/-jw-FAFL2t-w/XrGCai-oyVI/AAAAAAAACOo/C46oP8cf7WcmrzAdhEteptt3Gbvt9xd3wCLcBGAsYHQ/s1600/maxresdefault.jpg" alt="" className='imgEvent' />
                              <h5 className='eventDate marginLeft'>MARZO 11 2023 | 23:55 - 05:00</h5>
                              <h4 className='titleEvent marginLeft'>Taller de Buenas Prácticas JavaScript</h4>
                              <h5 className='assistantsEvent marginLeft'> 15 / 25 asistentes</h5>
                          </article>
                      </div>
                  </div>
                  <div className='containerFather'>
                      <div className='title'>
                          <h2>Eventos Destacados</h2>
                          <h4 className='h4'>The best events of the week</h4>
                      </div>
                      <div className='sectionEvent'>
                          <article className='articleEvent'>
                              <img src="https://1.bp.blogspot.com/-jw-FAFL2t-w/XrGCai-oyVI/AAAAAAAACOo/C46oP8cf7WcmrzAdhEteptt3Gbvt9xd3wCLcBGAsYHQ/s1600/maxresdefault.jpg" alt="" className='imgEvent' />
                              <h5 className='eventDate marginLeft'>MARZO 11 2023 | 23:55 - 05:00</h5>
                              <h4 className='titleEvent marginLeft'>Taller de Buenas Prácticas JavaScript</h4>
                              <h5 className='assistantsEvent marginLeft'> 15 / 25 asistentes</h5>
                          </article>
                      </div>
                  </div>
            </section>       
      </div>
    </main>
  )
}

export default Home
