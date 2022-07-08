import request from 'superagent'

//  A C T I O N S  //

//Typically, these actions have lived in the '/client/actions' folder

export const REQUEST_FOUND_PETS = 'REQUEST_FOUND_PETS'
export const RECEIVE_FOUND_PETS = 'RECEIVE_FOUND_PETS'
export const ADD_FOUND_PET = 'ADD_FOUND_PET'

export function requestFoundPets() {
  return {
    type: REQUEST_FOUND_PETS,
  }
}

export function receiveFoundPets(pets) {
  return {
    type: RECEIVE_FOUND_PETS,
    payload: pets,
  }
}

export function addFoundPet(pet) {
  return {
    type: ADD_FOUND_PET,
    payload: pet,
  }
}

//   T H U N K S   //

// Typically, these actions have lived in the '/client/actions' folder
// Thunks are how our backend code will reach our front end....
// look at the components/LostPetSelector file in components to find
// the hook, used in the front end to return an array of lost pets from the DB

export function fetchFoundPets() {
  return (dispatch) => {
    dispatch(requestFoundPets())
    return request
      .get('/api/lost')
      .then((res) => {
        dispatch(receiveFoundPets(res.body))
        return null
      })
      .catch((err) => {
        const errMsg = `Failed to fetch lost pets: ${err.message}`
        console.warn(errMsg)
      })
  }
}

export function addFoundPets() {
  return (dispatch) => {
    dispatch(requestFoundPets())
    return request
      .post('/api/found')
      .then((res) => {
        dispatch(addFoundPets(res.body))
        return null
      })
      .catch((err) => {
        const errMsg = `Failed to fetch found pets: ${err.message}`
        console.log(errMsg)
      })
  }
}

//
// REDUCER
//

export default function foundPetsReducer(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case RECEIVE_FOUND_PETS:
      return payload
    case ADD_FOUND_PET:
      return [...state, payload]
    default:
      return state
  }
}

export const foundPetsReducerName = 'foundPets'
const selectFoundPets = (rootState) => rootState[foundPetsReducerName]

export { selectFoundPets }
