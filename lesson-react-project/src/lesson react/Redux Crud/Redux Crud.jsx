import React from "react";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import TableFrom from "./pages/form";


import {Route, Routes, } from 'react-router-dom'
import { routes } from "./routes";

const ReduxCrud = () => {
  return (
    <div className="container">
      <h1>Admin Panel</h1>
      <Routes>
        <Route path={routes.HOME} element={<Home/>}/>
        <Route path={routes.CREATE} element={<TableFrom/>}/>
      </Routes>
    </div>
  );
};

export default ReduxCrud;
