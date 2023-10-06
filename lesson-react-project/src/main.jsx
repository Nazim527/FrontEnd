import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { redux } from "./lesson react/Redux/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={redux}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
