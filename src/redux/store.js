import { configureStore, combineReducers } from '@reduxjs/toolkit'
import favouriteReducer from '../reducers/favourite'
import jobReducer from '../reducers/job'

const allReducer = combineReducers({
  favourite: favouriteReducer,
  job: jobReducer,
})

const store = configureStore({
  reducer: allReducer,
})

export default store