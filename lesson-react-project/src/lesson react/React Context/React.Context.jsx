import React from "react";
import { Routes,Route } from "react-router-dom";
import HeaderContext from "./components/header/header";
import Payment from "./pages/Payment";
import Home from "./pages/Home";
import Login from "./pages/auth/login";

const ReactContext = () => {
  const [auth,setAuth] = React.useState(
    localStorage.getItem('access') || false
  )

  return (
    <>
    <HeaderContext auth={auth} setAuth={setAuth}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/login" element={<Login auth={auth} setAuth={setAuth}/>}/>
      </Routes>
    </>
  );
};

export default ReactContext;
