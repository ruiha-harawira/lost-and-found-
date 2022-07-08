import { selectLostPets } from '../Redux/lostPets'
import { useSelector } from 'react-redux'

// HOOK

// this hook is how the front end accessess data in the back end
//(communicating with the THUNK middleware to retreive and post data to/from the db)

export const useLostPets = () => useSelector(selectLostPets)
