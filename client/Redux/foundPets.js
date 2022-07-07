import request from 'superagent'

//actions

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

// 
export function fetchFoundPets() {
  return (dispatch) => {
    dispatch(requestFoundPets())
    return request
      .get('/api/found')
      .then((res) => {
        console.log('i got found pets', res.body)
        dispatch(receiveFoundPets(res.body))
        return null
      })
      .catch((err) => {
        const errMsg = `Failed to fetch found pets: ${err.message}`
        console.log(errMsg)
      })
  }
}

export function postLostPet(pet) {
  return (dispatch) => {
    dispatch(requestFoundPets())
    return request
      .post('/api/found')
      .send(pet)
      .then((res) => {
        console.log('i got found pets', res.body)
        dispatch(addFoundPet(res.body))
        return null
      })
      .catch((err) => {
        const errMsg = `Failed to fetch found pet: ${err.message}`
        console.log(errMsg)
      })
  }
}

//
//reducer
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

export { selectFoundPets}
