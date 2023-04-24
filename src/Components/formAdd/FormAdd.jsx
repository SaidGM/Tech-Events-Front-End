import React from 'react'
import './FormAdd.css'
import { useForm } from 'react-hook-form';

function FormAdd() {

    const {eventData, habdleSubmit} = useForm();


  return (
      <form className='formAdd'>
        <div className='containerForm'>
          <div className='titleFormAdd'>
              <h3>Crear nuevo Evento</h3>
          </div>
          <div className='containerFormOne'>
              <div className='containerFlex'>
                  <label htmlFor="">Titulo del evento:</label>
                  <input type="text" name='' />
              </div>
              <div className='containerFlex'>
                  <label htmlFor="">Nivel:</label>
                  <select name="" id="" className='select'>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                  </select>
              </div>
              <div className='containerFlex'>
                  <label htmlFor="">Destacado:</label>
                  <input type="text" name='' />
              </div>
          </div>
          <div className='containerFormTwo'>
              <div className='containerFlex'>
                  <label htmlFor="">Descripción:</label>
                  <input type="text" name='' id='inputDes' />
              </div>
              <div className='containerFlex'>
                  <label htmlFor="">Fecha del evento:</label>
                  <input type="text" name='' />
              </div>
              <div className='containerFlex'>
                  <label htmlFor="">Hora del evento:</label>
                  <input type="text" name='' />
              </div>
              <div className='containerFlex'>
                  <label htmlFor="">Categoria:</label>
                  <select name="" id="" className='select'>
                      <option value="1">Workshop</option>
                      <option value="2">Webinar</option>
                      <option value="3">Masterclass</option>
                  </select>
              </div>
              <div className='containerFlex containerFile'>
                  <label htmlFor="">Url de la imagen:</label>
                  <input type="text" name='' id='imageUrl' />
              </div>
              <div className='buttonAddEvent'>
                  <button type='submit'>Añadir Evento</button>
              </div>
          </div>
        </div>
        <div className='containerFormPreview'>
            <div className='containerTitleArticle'>
                <h3>Previsualización</h3>
            </div>
            <div className='containerPreviewArticle'>

            </div>
        </div>
      </form>
  )
}

export default FormAdd
