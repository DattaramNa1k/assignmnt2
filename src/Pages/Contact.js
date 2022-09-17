import React from 'react'
import Header from '../components/Header/Header'
import Form from '../components/Form/Form'
import './style.css'
const Contact = () => {
  document.title ="Contact Us"
  return (
    
    <div>
      <Header/>
      <div className='body'>
      <Form/>
      </div>
    </div>
  )
}

export default Contact
