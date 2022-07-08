import request from 'superagent'

//  A C T I O N S  //

//Typically, these actions have lived in the '/client/actions' folder

export const REQUEST_LOST_PETS = 'REQUEST_LOST_PETS'
export const RECEIVE_LOST_PETS = 'RECEIVE_LOST_PETS'
export const ADD_LOST_PET = 'ADD_LOST_PET'

export function requestLostPets() {
  return {
    type: REQUEST_LOST_PETS,
  }
}

export function receiveLostPets(pets) {
  return {
    type: RECEIVE_LOST_PETS,
    payload: pets,
  }
}

export function postLostPet(pet) {
  return {
    type: ADD_LOST_PET,
    payload: pet,
  }
}

//   T H U N K S   //

// Typically, these actions have lived in the '/client/actions' folder
// Thunks are how our backend code will reach our front end....
// look at the components/LostPetSelector file in components to find
// the hook, used in the front end to return an array of lost pets from the DB

export function fetchLostPets() {
  return (dispatch) => {
    dispatch(requestLostPets())
    return request
      .get('/api/lost')
      .then((res) => {
        dispatch(receiveLostPets(res.body))
        return null
      })
      .catch((err) => {
        const errMsg = `Failed to fetch lost pets: ${err.message}`
        console.warn(errMsg)
      })
  }
}

export function addLostPet(pet) {
  return (dispatch) => {
    dispatch(requestLostPets())
    return request
      .post('/api/lost')
      .send(pet)
      .then((res) => {
        dispatch(postLostPet(res.body))
        return null
      })
      .catch((err) => {
        const errMsg = `Failed to post lost pet: ${err.message}`
        console.warn(errMsg)
      })
  }
}

//  REDUCERS   //

export default function lostPetsReducer(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case RECEIVE_LOST_PETS:
      return payload
    case ADD_LOST_PET:
      return [...state, payload]
    default:
      return state
  }
}

export const lostPetsReducerName = 'lostPets'

//  SELECTORS //

const selectLostPets = (rootState) => rootState[lostPetsReducerName]

export { selectLostPets }
