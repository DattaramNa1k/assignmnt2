import React from 'react'
import Header from '../components/Header/Header'
import Card from '../components/Card/card'


const info= [{"name":"Brazil", "Rating":"⭐⭐⭐⭐⭐" ,"Image":"https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Brazilian_Football_Confederation_logo.svg/170px-Brazilian_Football_Confederation_logo.svg.png"},
{"name":"Germany", "Rating":"⭐⭐⭐⭐⭐" ,"Image":"https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/DFBEagle.svg/1200px-DFBEagle.svg.png"},
{"name":"France", "Rating":"⭐⭐⭐⭐⭐" ,"Image":"https://pbs.twimg.com/profile_images/1027517292870098944/LV2Egmm6_400x400.jpg"},
{"name":"Italy", "Rating":"⭐⭐⭐⭐" ,"Image":"https://m.media-amazon.com/images/M/MV5BNzQxM2MzMTUtNWQzMS00ZDM4LWJlNjAtZDZmNzc0MGY0YTk2XkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg"}]

const Teams = () => {
  document.title ="Teams"
  console.log(info)
  return (
    <div>
      <Header/>
  
      <div className='body'>
        <div className='plates'>
          {info.map((value,index)=>{
              return <Card name={value.name} price={value.Price} rating={value.Rating} image={value.Image}/> 

          })}

        </div>
      </div>
    </div>
  )
}

export default Teams
