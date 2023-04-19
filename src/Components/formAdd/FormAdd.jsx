import React from 'react'
import './FormAdd.css'
// import { useForm } from 'react-hook-form';

function FormAdd() {

    // const {eventData, habdleSubmit} = useForm();


  return (
    <form className='formAdd'>
      <div className='containerFormOne'>
        <div className='containerFlex'>
            <label htmlFor="">Titulo del evento:</label>
            <input type="text" name=''/>
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
            <input type="text" name=''/>
        </div>
      </div>
      <div className='containerFormTwo'>
        <div className='containerFlex'>
            <label htmlFor="">Descripción:</label>
            <input type="text" name=''/>
        </div>
        <div className='containerFlex'>
            <label htmlFor="">Fecha del evento:</label>
            <input type="text" name=''/>
        </div>
        <div className='containerFlex'>
            <label htmlFor="">Hora del evento:</label>
            <input type="text" name=''/>
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
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
            <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
        </div>
        <div className='buttonAddEvent'>
            <button type='submit'>Añadir Evento</button>
        </div>
      </div>
    </form>
  )
}

export default FormAdd
