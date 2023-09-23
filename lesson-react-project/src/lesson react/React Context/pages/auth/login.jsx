import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({auth, setAuth}) => {
  const navigation = useNavigate();
  const [value, setValue] = React.useState("");

  const handleSubmit = () => {

    setAuth(true)
    navigation('/')
    localStorage.setItem('access', auth)
  }
  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Login;
