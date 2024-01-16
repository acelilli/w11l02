//importo le actions
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "./actions";

//settiamo la condizione iniziale

const initialState = {
  data: [],
  query: "",
  isLoading: false,
  error: null,
};

// costruiamo lo switch
const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        query: action.payload,
        isLoading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        query: "",
        data: action.payload,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        query: "",
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
