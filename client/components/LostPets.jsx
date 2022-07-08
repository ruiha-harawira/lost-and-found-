import React from 'react'
import { useSelector } from 'react-redux'

import LostPet from './LostPet'


function lostPetList() {

const lostPets = useSelector((useLostPets) => useLostPets.lostPets)

return (
    <div className="lostPets">
      {lostPets.map((lostPet, i) => {
        return <LostPet key={i} lostPet={lostPet} />
      })}
    </div>
  )
}

export default lostPetList