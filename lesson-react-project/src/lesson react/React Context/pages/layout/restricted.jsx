import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../store/authContent";

const Restricted = () => {
  const {auth} = useAuthContext()
  console.log("Here is Restricted area");
  return (auth ? <Navigate to={'/'}/> : <Outlet/>)
};

export default Restricted;
