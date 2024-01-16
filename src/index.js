import React from "react";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
