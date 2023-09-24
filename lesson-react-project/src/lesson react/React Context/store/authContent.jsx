import React, { createContext, useContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [auth, setAuth] = React.useState(
        localStorage.getItem("access") || false
    ); 

    const initalValue = {
        auth,
        setAuth
    }
    return (
        <AuthContext.Provider value={initalValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

//!Action Creater
export const useAuthContext = () => { 
    return useContext(AuthContext)
}