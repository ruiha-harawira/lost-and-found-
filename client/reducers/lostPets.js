import { useSelector } from 'react-redux'
import request from 'superagent'

//
// Actions
//
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

export function addLostPet(pet) {
  return {
    type: ADD_LOST_PET,
    payload: pet,
  }
}

//
// Thunks
//
export function fetchLostPets() {
  return (dispatch) => {
    dispatch(requestLostPets())
    return request
      .get('/api/lost')
      .then((res) => {
        console.log('I got lost pets', res.body)
        dispatch(receiveLostPets(res.body))
        return null
      })
      .catch((err) => {
        const errMsg = `Failed to fetch lost pets: ${err.message}`
        console.warn(errMsg)
        console.log('TODO: Dispatch error action')
      })
  }
}

export function postLostPet(pet) {
  return (dispatch) => {
    dispatch(requestLostPets())
    return request
      .post('/api/lost')
      .send(pet)
      .then((res) => {
        console.log('I posted a lost pet', res.body)
        dispatch(addLostPet(res.body))
        return null
      })
      .catch((err) => {
        const errMsg = `Failed to post lost pet: ${err.message}`
        console.warn(errMsg)
        console.log('TODO: Dispatch error action')
      })
  }
}

//
// Reducer
//
export default function lostPetsReducer(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case RECEIVE_LOST_PETS:
      // replace current lostPetsReducer state with the array we received from the server
      // (using fetchLostPets)
      return payload
    case ADD_LOST_PET:
      // clone current lostPetsReducer state and add the pet
      return [...state, payload]
    default:
      return state
  }
}

export const lostPetsReducerName = 'lostPets'

//
// Selectors
//
// this selector gets the lostPetsReducer state (the lost pets array)
// from our combined reducer in index.js
const selectLostPets = (rootState) => rootState[lostPetsReducerName]

//
// Hooks
//
// this hook will return the array of lost pets (the lost pets reducer state)
export const useLostPets = () => useSelector(selectLostPets)
