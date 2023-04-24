import React, { useEffect} from 'react'
import './FormAdd.css'
import { useForm } from 'react-hook-form';
import EventsServices from '../../Api/eventsServices';

function FormAdd({id}) {

    const {register, formState:{errors},setValue, watch , handleSubmit} = useForm({
        defaultValues:{
            title: '',
            degree: '',
            highlight: '',
            description: '',
            eventDate: '',
            eventTime: '',
            category: {
                id:''
            },
            urlImage: ''
        }
    })

    useEffect(()=>{
        if (id) {
            EventsServices.byIdEvents(id)
            .then((data) => {
                setValue('title', data.title)
                setValue('degree', data.degree)
                setValue('highlight', data.highlight)
                setValue('description', data.description)
                setValue('eventDate', data.eventDate)
                setValue('eventTime', data.eventTime)
                setValue('category.id', data.category.id)
                setValue('urlImage', data.urlImage)
            })
        }
    },[])

    const onSubmit = (data, e) => {
        // e.preventDefault();
        // if (id) { 
        //     console.log('Hola');
        // } else { 
        //     EventsServices.eventPost(data)
        // }
        console.log(data);
    }


  return (
      <form className='formAdd' onSubmit={handleSubmit(onSubmit)}>
        <div className='containerForm'>
          <div className='titleFormAdd'>
              <h3>Crear nuevo Evento</h3>
          </div>
          <div className='containerFormOne'>
              <div className='containerFlex'>
                  <label htmlFor="">Titulo del evento:</label>
                  <input 
                    name='title'
                    type="text"
                    {...register('title', {required: true})}/>
                  {errors.title?.type === "required" && <p>El campo es requerido</p>}
              </div>
              <div className='containerFlex'>
                  <label htmlFor="">Nivel:</label>
                  <select 
                    name="degree" 
                    id="" 
                    className='select' 
                    {...register('degree')}>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                  </select>
              </div>
              <div className='containerFlex'>
                  <label htmlFor="">Destacado:</label>
                  <select
                     name="highlight" 
                     id="" 
                     className='select' 
                     {...register('highlight')}>
                      <option value="true"> Si </option>
                      <option value="false"> No </option>
                  </select>
              </div>
          </div>
          <div className='containerFormTwo'>
              <div className='containerFlex'>
                  <label htmlFor="">Descripción:</label>
                  <input 
                  type="text" 
                  name='' 
                  id='inputDes' 
                  {...register('description', {required: true})}/>
                  {errors.description?.type === "required" && <p>El campo es requerido</p>}
              </div>
              <div className='containerFlex'>
                  <label htmlFor="">Fecha del evento:</label>
                  <input 
                  type="date" 
                  name='' 
                  {...register('eventDate', {required: true})}/>
                  {errors.eventDate?.type === "required" && <p>El campo es requerido</p>}
              </div>
              <div className='containerFlex'>
                  <label htmlFor="">Hora del evento:</label>
                  <input 
                  type="text" 
                  placeholder='08:30:00' 
                  {...register('eventTime', {required: true})}/>
                  {errors.eventTime?.type === "required" && <p>El campo es requerido</p>}
              </div>
              <div className='containerFlex'>
                  <label htmlFor="">Categoria:</label>
                  <select 
                  name="" id="" 
                  className='select' 
                  {...register('category.id')}>
                      <option value="1">Workshop</option>
                      <option value="2">Webinar</option>
                      <option value="3">Masterclass</option>
                  </select>
              </div>
              <div className='containerFlex containerFile'>
                  <label htmlFor="">Url de la imagen:</label>
                  <input 
                  type="text" 
                  name='' 
                  id='imageUrl' 
                  {...register('urlImage', {required: true})}/>
                  {errors.urlImage?.type === "required" && <p>El campo es requerido</p>}
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
