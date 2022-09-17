import React from 'react'
import './card.css'
const card = ({name,price,rating,image}) => {
  return (
    <div className='card'>
      <div className='imgcont'>
        <img src={image} className='img' alt="" />
      </div>

      <div className='cardbody'>
            <div className='info'>
            <h3> {name} </h3>
            </div>
            <h5>Rating: { rating} </h5>
      </div>

    </div>
  )}
export default card
