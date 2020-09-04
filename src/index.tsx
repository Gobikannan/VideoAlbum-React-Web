import React from "react";
import { render } from "react-dom";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store/configure-store";

const store = configureStore;
const rootElement = document.getElementById("root");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
