import axios from "axios";
//action types
export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

// Actions Creators
// NB REQUEST senza data, solo type
const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};
// success ha come argomento i dati!
const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};
// failure ha come argomento gli errori!
const fetchDataFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  };
};
// THUNK ACTION Creators = usiamo il nostro middleware
export const fetchData = (query) => {
  // CHIAMATA CON AXIOS!
  // Quindi una chiamata con la promise, niente try solo then...
  // PARLIAMO DI UNA ACTION QUINDI USIAMO DISPATCH!
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios
      .get(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`)
      .then((response) => {
        const data = response.data;
        dispatch(fetchDataSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};
//axios > sintassi più semplice di try
