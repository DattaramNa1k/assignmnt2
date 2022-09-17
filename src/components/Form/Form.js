import React from 'react'
import './Form.css'
const Form = () => {
  return (
    
      <div className='formbody'> 
      <h1 className='heading'>CONTACT US</h1>
      <form >
        <div className='labels' >
        {/* <h3 className='labels'>Email</h3> */}
        <input type="text" placeholder='Enter your Name'/>
        <input type="email" placeholder='Enter your Email'/>
        {/* <h3 className='labels'>Feedback</h3> */}
        </div>
        <textarea className='feedback' rows={7} cols={60} placeholder='Enter Feedback'/><br/><br/>
        
        

      </form>
      <button className='but' >Submit</button>
      </div> 
    
  )
}

export default Form
