import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";


import { Provider } from "react-redux";
import { reduxCrud } from "./lesson react/Redux Crud/store/index.js"; //! Redux Crud(Create,Read,Update,Delete)
import { reduxThunkStore } from "./lesson react/Redux Thunk/store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={reduxThunkStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
