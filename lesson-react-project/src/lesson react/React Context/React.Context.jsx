import React from "react";
import { Routes, Route } from "react-router-dom";
import Payment from "./pages/Payment";
import Home from "./pages/Home";
import Login from "./pages/auth/login";
import Private from "./pages/layout/PrivateLay";
import Public from "./pages/layout/PublicLay";
import Restricted from "./pages/layout/restricted";


//! Esas mesele ve problem olan bizim hazirda olan props trelling yeni desme gorunduyu kimi biz "Auth" bir cok yerde props kimi gonderirik ve bu bizim icin qarisiqlik ve kod problemine getirib cixara biler bunu onlemek ucun ise React-Context mentiqinden isdifade ediriq ve bunun ucun "Store" deye folder olusdurub ve bizim basqa sehifelerde use oluna bilen propslarimizi yaziriq


const ReactContext = () => {

  return (
    <>
      <Routes>
        {/* //!Bizim meselen ola biler ki Login sehifemizde Header Hissesi yoxdu ve ya deyek ziyaretcinin web sehifemizde Private ve Public olan hisseler var ki oralara gire bilib bilmemesi ucun esasen Route icinde Route mentiqi isdifade edirik yeni */}

         <Route element={<Public/>}>  {/*//! Outlet yazdigda gelir URL "/" bunun URl sin geri donderir mene/}

          {/*  //! Element yazaraqda deyirem ki gel Home icine girememisden qabaq menim <Private> olan componentimin icinden kec */}
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<Private/>}>
          <Route path="/payment" element={<Payment />} />
        </Route>
        <Route element={<Restricted/>}>
          <Route
            path="/login"
            element={<Login/>}
          />
        </Route>
      </Routes>
    </>
  );
};

export default ReactContext;

