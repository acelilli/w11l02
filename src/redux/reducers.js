//importo le actions
import { GET_JOBS } from "./actions";

//settiamo la condizione iniziale

const initialState = {
  results: [],
}


// costruiamo lo switch
const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        results: action.payload,
      }
    default:
      return state
  }
}

export default reducer
