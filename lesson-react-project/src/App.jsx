import React from "react";
import { ReactDOM } from "react";
import "./App.css";
import UseRef from "./lesson react/useRef"; //! Useref
import RestApi from "./lesson react/Rest Api/RestApi"; //!RestApi
import Rooter from "./lesson react/RouterDom/Rooter";
import ReactContext from "./lesson react/React Context/React.Context";
import AuthProvider from "./lesson react/React Context/store/authContent";

import ReduxTool from "./lesson react/Redux/redux";
import ReduxCrud from "./lesson react/Redux Crud/Redux Crud";

import { persistor } from "./lesson react/Redux Crud/store";
import { PersistGate } from "redux-persist/integration/react";
import Reduxthunk from "./lesson react/Redux Thunk/Reduxthunk";
import RtkQuery from "./lesson react/RTK Query/RtkQuery";
  
function App() {
  return (
    // <RestApi/>
    // <Rooter/>
    // <AuthProvider> {/*//! Bunu ona gore yaziriq ki ReactContetximizi bunun icinde daxil olan isdenilen componentin icine dasimaq ucun*/}
    //   <ReactContext/>
    // </AuthProvider>
    // <ReduxTool/>
    // <PersistGate persistor={persistor}> //!Persistor bize localstorge vezifesini gorur ve isimizi cox rahatlasdiri 
    //   <ReduxCrud/>
    // </PersistGate>
    // <Reduxthunk/>
    <RtkQuery/>
  )
}

export default App;
