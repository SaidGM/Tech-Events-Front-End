import React from 'react'
import "./Article.css"

function Article({img, date,titleArticle,capacity, id}) {
  return (
    <>   
      <article className='articleEvent' id={id} key={id}>
          <img src={img} alt="" className='imgEvent' />
          <h5 className='eventDate marginLeft'>{date}</h5>
          <h4 className='titleEvent marginLeft'>{titleArticle}</h4>
          <h5 className='assistantsEvent marginLeft'> 1 / {capacity} asistentes</h5>
      </article>
    </>
  )
}

export default Article
