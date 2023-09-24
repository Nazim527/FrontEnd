import React from "react";
import { Outlet } from "react-router-dom";
import HeaderContext from "../../components/header/header";
import { useAuthContext } from "../../store/authContent";

const Public = () => {
  const {auth, setAuth} = useAuthContext()
  console.log("Here is Public area");
  return (
    <>
      <HeaderContext auth={auth} setAuth={setAuth} />
      {/* //!Ve gelib artiq Headeri bura yaza bilerem cunki butun "Public" sehifelerimde buranin yeni Headerin gorunmesini isdeyirem */}
      <Outlet />{" "}
      {/*//! Bunun yeni outletin mentiqi ondan ibaretdir ki hemin bu routen altinda yatan hansi Url deyemse o Url Componentin qaytarir */}
    </>
  );
};

export default Public;
