import React, { useEffect, useState } from 'react'
import './ContainerEvents.css'
import EventsServices from '../../Api/eventsServices'
import { Link } from 'react-router-dom'

function ContainerEvents() {

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        EventsServices.allCategories()
        .then((data)=>{setCategories(data)})
    },[])

  return (
      <div className='containerEvents'>
          <h4 className='events'>Eventos:</h4>
        {categories.map((i, index)=>{
            return(
                <Link key={i.id} to={`/categorie/${i.id}`}>
                <button className='buttonStyle' key={index}>{i.name}</button>
                </Link>
            )
        })}
      </div>
  )
}

export default ContainerEvents
