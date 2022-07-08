import { useSelector } from 'react-redux'
import { selectFoundPets } from '../Redux/foundPets'

export const useFoundPets = () => useSelector(selectFoundPets)