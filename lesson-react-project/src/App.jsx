import React from "react";
import "./App.css";
import UseRef from "./lesson react/useRef"; //! Useref
import RestApi from "./lesson react/Rest Api/RestApi"; //!RestApi
import Rooter from "./lesson react/RouterDom/Rooter";
import RouterClone from "./lesson react/RouterDomClone/routerClone";
import ReactContext from "./lesson react/React Context/React.Context";
import AuthProvider from "./lesson react/React Context/store/authContent";

function App() {
  return (
    // <RestApi/>
    // <Rooter/>
    // <RouterClone/> //! Yarimciqdi tamamlamaq lazimdir
    <AuthProvider> {/*//! Bunu ona gore yaziriq ki ReactContetximizi bunun icinde daxil olan isdenilen componentin icine dasimaq ucun*/}
      <ReactContext/>
    </AuthProvider>
  )
}

export default App;
