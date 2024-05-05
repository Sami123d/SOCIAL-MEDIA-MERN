import { useRef, useContext } from "react";
import "./login.css";
import {loginCall} from "../../apiCalls.js";
import {AuthContext} from "../../context/AuthContext.jsx"
function Login() {
  const { user, isFetching, dispatch } = useContext(AuthContext);
  const email = useRef();
  const password = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
    console.log(user, password.current.value, email.current.value)
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h2 className="loginLogo"> Lamasocial</h2>
          <span className="loginDesc">
            Connect with friends and the world around you using Lamasocial
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
               ref={email}
              required
              type="email"
              className="loginInput"
            />
            <input
              placeholder="Password"
              ref={password}
              minLength="4"
              required
              type="password"
              className="loginInput"
            />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
