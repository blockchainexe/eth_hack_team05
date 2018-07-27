const initialState = {
  data: null
}

const destinationReducer = (state = initialState, action) => {
  if (action.type === 'DESTINATION_SEARCH')
  {
    return Object.assign({}, state, {
      data: action.payload
    })
  }

  return state
}

export default destinationReducer