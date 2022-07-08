import React, { useState } from 'react'
import { addFoundPet } from '../Redux/foundPets'

function foundForm(props) {

const [formData, setFormData] = useState({
    species:'',
    photo: ''
  })

  const handleSubmit = (e) =>{
    e.preventDefault()
    const newFoundPet = formData
    dispatchEvent(postFoundPet(newPet))

    setFormData({
      species: '',
      photo: '',
    })

    addFoundPet(newFoundPet)
   
    .then(()=>{
      
      props.refreshFoundPets()
    }).catch((err) => {
      console.error(err)
    })

  }
  const handleChange =(e) =>{
    console.log(e.target.name,e.target.value)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
  <>
  <form onSubmit={handleSubmit}>
    <label htmlFor='species'>Species:</label>
    <input id='species' name='species' type='text' value={formData.species} onChange={handleChange}/>
    <br/>
    <label htmlFor='photo'>Upload image:</label>
    <input id='photo' name='photo' type='text' value={formData.photo} onChange={handleChange}/>
    <br/>
    <button>Reunite this pet with their owner</button>
  </form>
  </>

  )

}

export default foundForm





