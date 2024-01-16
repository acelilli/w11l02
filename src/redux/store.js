import { createStore, applyMiddleWare } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleWare(thunk));

export default store;

// ROOTREDUCER combina i reducers -> hook che ce mette tutti assieme
