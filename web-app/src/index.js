import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import reducers from "./reducers";
import "./styles/custom.scss";
import "./styles/index.scss";

const store = createStore(reducers, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
