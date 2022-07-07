import { useSelector } from 'react-redux'
import request from 'superagent'

// Actions

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

// Thunks

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

// Reducer

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

// Selectors

const selectLostPets = (rootState) => rootState[lostPetsReducerName]

// Hooks

export const useLostPets = () => useSelector(selectLostPets)
