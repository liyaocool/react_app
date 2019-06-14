import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./router";
import store from "./store/index";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
