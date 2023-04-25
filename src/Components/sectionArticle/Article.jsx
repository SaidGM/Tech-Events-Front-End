import React from 'react'
import "./Article.css"

function Article({img, date,titleArticle,capacity, id, active,inscribedUsersCount}) {
  

  return (
    <>   
      <article className='articleEvent' id={id} key={id}>
          <img src={img} alt="" className={`imgEvent ${active ? '' : 'imgOpacity'}`}/>
          <h1 className={active ? 'caducateNone' : 'caducate'}>Caducada</h1>
          <h5 className='eventDate marginLeft'>{date}</h5>
          <h4 className='titleEvent marginLeft'>{titleArticle}</h4>
          <h5 className='assistantsEvent marginLeft'> {inscribedUsersCount} / {capacity} asistentes</h5>
      </article>
    </>
  )
}

export default Article
