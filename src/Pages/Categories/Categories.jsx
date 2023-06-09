import React, { useEffect, useState } from 'react'
import './Categories.css'
import { Link, useParams } from 'react-router-dom'
import ContainerEvents from '../../Components/containerEvents/ContainerEvents'
import Footer from '../../Components/footer/Footer'
import Article from '../../Components/sectionArticle/Article'
import EventsServices from '../../Api/eventsServices'

function Categories() {
    
    const [events, setEvent] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        EventsServices.categoryById(id)
        .then((data)=>{setEvent(data)})
      },[])

    
      
  return (
    <>
    <main className='mainCategorie'>
      <div className='categoriesContainer'>
        <ContainerEvents />
        <div className='mainPageCategories'>
          <div className='containerFatherCategories'>
            <div className='titleCategorie'>
              <h2 className='titleAll'>Todos los eventos</h2>
              <h4 className='h4Categorie'>Lista completa de todos los eventos</h4>
            </div>
            <section className='sectionEventCategorie' >
              {events.map((i) => {
                if (i.active) {
                  return (
                    <Link to={`/infoEvent/${i.id}`} key={i.id} className='linkInfoCategorie'>
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
              {events.map((i) => {
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
          </div>
          <Footer />
        </div>
      </div>
    </main>
  </>
  )
}

export default Categories
