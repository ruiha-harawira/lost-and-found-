import { selectLostPets } from '../Redux/lostPets'
import { useSelector } from 'react-redux'

// Hook

export const useLostPets = () => useSelector(selectLostPets)
