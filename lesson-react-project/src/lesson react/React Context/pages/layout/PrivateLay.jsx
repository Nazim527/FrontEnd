import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import HeaderContext from "../../components/header/header";
import { useAuthContext } from "../../store/authContent";

const Private = () => {
  const {auth, setAuth} = useAuthContext()
  console.log("Here is Private area");
  return (
    <>
      <HeaderContext auth={auth} setAuth={setAuth} />
      {/* //!Ve gelib artiq Headeri bura yaza bilerem cunki butun "Public" sehifelerimde buranin yeni Headerin gorunmesini isdeyirem */}
      {auth ? <Outlet/> : <Navigate to={'/'}/> } {/*//? Bunu yaziram deyirem eger auth true dusa yeni isdifadeci daxil olubsa Outletimi gosder eks halda icaze verme ve ana sehifeme yonelt*/}
      {/*//! Bunun yeni outletin mentiqi ondan ibaretdir ki hemin bu routen altinda yatan hansi Url deyemse o Url Componentin qaytarir */}
    </>
  );
};

export default Private;
