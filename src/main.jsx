import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./styles/main.scss";

import store from "./store";

import App from "./components/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
