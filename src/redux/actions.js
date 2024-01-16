import axios from "axios";

//action types
export const GET_JOBS = "GET_JOBS";
//----------------------------------
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";

// Actions Creators
// NB REQUEST senza data, solo type
//Senza i case?
// THUNK ACTION Creators = usiamo il nostro middleware
export const getJobsAction = (query) => {
  // CHIAMATA CON AXIOS! => Siamo tornati a TRY per vedere gli errori!

  // PARLIAMO DI UNA ACTION QUINDI USIAMO DISPATCH!
  return async (dispatch) => {
    try {
      const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// PARTE DEI FAVE
export const addToFavourite = (company) => ({
  type: ADD_TO_FAVOURITE,
  payload: company,
});

export const removeFromFavourite = (company) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: company,
});
