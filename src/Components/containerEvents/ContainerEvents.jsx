import React, { useEffect, useState } from 'react'
import './ContainerEvents.css'
import EventsServices from '../../Api/eventsServices'

function ContainerEvents() {

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        EventsServices.allCategories()
        .then((data)=>{setCategories(data)})
    },[])

  return (
      <div className='containerEvents'>
          <h4 className='events'>Events:</h4>
        {categories.map((i)=>{
            return(
                <button className='buttonStyle'>{i.name}</button>
            )
        })}
      </div>
  )
}

export default ContainerEvents
