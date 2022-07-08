import React from 'react'

export const LostPet = (props) => {
  return (
    <div className='onePetCard'>
      <h3>{props.name}</h3>
      <p>{props.species}</p>
      <img src={props.photo} alt={`Lost pet who goes by  ${props.name}`}/>
    </div>
  )
}

export default LostPet