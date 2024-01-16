import React from "react";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import App from "./App";

ReactDom.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
