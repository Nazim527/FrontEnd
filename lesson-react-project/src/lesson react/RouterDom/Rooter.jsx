import React from "react";
import { Header } from "./components";
import { About, CharacterDetail, Home } from "./pages";
import { Routes, Route, useLocation, Link } from "react-router-dom"; //! UseLocation bize oldugum sehifenin obyekd halinda mueyyen datalarin verir bize bredcrumps ucun pathname lazimdir
import style from "./style.module.css";

const Rooter = () => {
  const { pathname } = useLocation(); 

  return (
    <>
      <Header />

       <div>{/* //! breadCrumps yaradmaq */}
        {pathname.split("/").map((p) => {
          return (
            <Link to={`${p}`}>
                {p}
            </Link>
          );
        })}
      </div>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/characters/:id" element={<CharacterDetail/>}/> //! ":"-bu ifade dinamik root gonderirem deye mesaj gonderir, bes bu id ni hardan goture bilerem bunun icin "CharacterDetail" filena bax
      </Routes>
    </>
  );
};

export default Rooter;
