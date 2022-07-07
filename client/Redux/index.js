import { combineReducers } from 'redux'

import auth from './auth'
import lostPetsReducer, { lostPetsReducerName } from './lostPets'

export default combineReducers({
  auth: auth,
  [lostPetsReducerName]: lostPetsReducer,
})
