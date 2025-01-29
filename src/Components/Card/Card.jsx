import React from 'react'
import "./card.css"
const Card = (props) => {
    console.log(props)
    
    
  return (
    <div className='frequnt-cards'>
        <h5 >{props.name}</h5>
        <p className='text'>{props.dis}</p>
        <a href="" className='get'>get started </a>
    </div>
  )
}

export default Card
