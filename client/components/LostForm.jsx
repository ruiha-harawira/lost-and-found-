import React, { useState } from 'react'
// IMPORT ADDLOSTPET FUNC 

function lostForm(props){

  const [formData, setFormData] = useState({
    name:'',
    species:'',
    photo: '',
  })

  const handleSubmit = (e) =>{
    e.preventDefault()
    const newLostPet = formData

    setFormData({
      name:'',
      species: '',
      photo: '',
    })
    addLostPet(newLostPet)
    //comes back from server side, then do something, in this case we don't care what it is.
    .then(()=>{
      
      props.refreshLostPets()
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
    <label htmlFor='name'>Pet Name:</label>
    <input id='name' name='name' type='text' value={formData.name} onChange={handleChange}/>
    <br/>
    <label htmlFor='species'>Species:</label>
    <input id='species' name='species' type='text' value={formData.species} onChange={handleChange}/>
    <br/>
    <label htmlFor='photo'>Upload image:</label>
    <input id='photo' name='photo' type='text' value={formData.photo} onChange={handleChange}/>
    <br/>
    <button>Find my lost pet</button>
  </form>
  </>

  )

}

export default lostForm