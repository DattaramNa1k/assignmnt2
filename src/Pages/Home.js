import React from 'react'
import Header from '../components/Header/Header'
import Paragraph from '../components/Paragraph/Paragraph';
import "./style.css" 
const Home = () => {
  document.title ="Home"
    return (
    <div>
      <div>
         <Header></Header>  
      </div>
    
    
     <div className='hb'>
     <h1>FIFA</h1>
         <Paragraph></Paragraph>
     
        
  

    
     </div>
    </div>
  )
}

export default Home
