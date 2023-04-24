import React from 'react'
import './AddForm.css'
import FormAdd from '../../Components/formAdd/FormAdd'
import Footer from '../../Components/footer/Footer'

function AddForm() {
  return (
    <>
      <main className='mainHomeAdd'>
        <div className='addBackground'>
          <div className='titleAdd'>
            <h1>Administrador</h1>
          </div>
          <div className='mainPageAdd'>
              <FormAdd/>
              <Footer/>
          </div>
        </div>
      </main>
    </>
  )
}

export default AddForm
