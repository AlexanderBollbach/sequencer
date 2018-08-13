import { render } from "react-dom";
import React from "react";
import App from "Components/App";
import { Provider } from "react-redux";
import store from "Redux/Store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
