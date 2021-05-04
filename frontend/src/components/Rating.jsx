import React from 'react'
import {FaStar, FaStarHalf} from 'react-icons/fa'


const Rating = ({ value, text, color = 'yellow' }) => {
    const stars = new Array(5).fill(0);
    for(let i = 0; i < stars.length; i++){
        if(i < Math.floor(value*2 / 2)) 
            stars[i] = 1;
     }

  return (
    <div className='rating'>
      {stars.map( (v, idx) =>
          v === 0 ? <FaStar key = {idx} color = '#ccc'/> : <FaStar key = {idx} color = 'gold' /> 
      )}
      <span>{text}</span>
    </div>
  )
}


export default Rating
