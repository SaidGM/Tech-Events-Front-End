import React from 'react'
import "./Info.css"
import Footer from '../../Components/footer/Footer'

function Info() {
  return (
    <>
      <main className='mainInfo'>
        <div className='containerFondo'>
            <div className='containerInfoTitle'>
                <img src="https://1.bp.blogspot.com/-jw-FAFL2t-w/XrGCai-oyVI/AAAAAAAACOo/C46oP8cf7WcmrzAdhEteptt3Gbvt9xd3wCLcBGAsYHQ/s1600/maxresdefault.jpg" alt="" className='imgInfo' />
                <div className='containerTitle'>
                   <h4 className='hDate'>MARZO 11 2023 | 23:55 - 05:00</h4>
                   <h3 className='hTitle'>Taller de Buenas Practicas Javascript</h3>
                   <h5 className='hAsistentes'>15 / 25 asistentes</h5>
                </div>
                <div className='containerFlex'>
                    <div className='containerInfo'>
                        <h2>Info</h2>
                        <h4 className='hDate'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, dignissimos vitae inventore veniam quas provident, excepturi similique voluptate debitis voluptatibus alias obcaecati molestiae tempore quia beatae sed, in a error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa quaerat inventore reprehenderit dolorem sit sed labore consectetur? Debitis quas asperiores autem ad ipsum laudantium quod repellendus sequi voluptas quaerat.</h4>
                    </div>
                    <div className='containerOptions'>
                        <div className='containerOnline'>
                            <h3>Evento Online :</h3>
                            <h3 className='hSpace'>Zoom</h3>
                        </div>
                        <div className='containerOnline'>
                            <h3>Nivel :</h3>
                            <h3 className='hSpace'>Intermediate</h3>
                        </div>
                        <button className='ButtonApunt'>Apúntate</button>
                        
                    </div>
                    <Footer/>
                </div>
            </div>          
        </div>
      </main>
    </>
  )
}

export default Info
