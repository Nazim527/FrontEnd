import React, { useContext } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../store/authContent";


const HeaderContext = ({ auth, setAuth }) => {
    const navigation = useNavigate();
    const AuthContext = useAuthContext()
    console.log(AuthContext);

    const handleLogout = () => {
        localStorage.clear()
        setAuth(false)
        navigation('/')
    }

  return (
    <header>
      <div className="headerLogo">Characters</div>
      <ul className="navElems">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        {auth && (
          <li>
            <Link to={"/payment"}>Payment</Link>
          </li>
        )}
        {auth ? (
          <li onClick={handleLogout}>Logout</li>
        ) : (
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        )}
      </ul>
    </header>
  );
};

export default HeaderContext;
