import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { redux } from "./lesson react/Redux/Store"; //!Redux Intro
import { reduxCrud } from "./lesson react/Redux Crud/store/index.js"; //! Redux Crud(Create,Read,Update,Delete)

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={reduxCrud}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
