import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import userReducer from './reducers/userReducer'
import destinationReducer from './reducers/destinationReducer'

const reducer = combineReducers({
  routing: routerReducer,
  user: userReducer,
  destination: destinationReducer
})

export default reducer
