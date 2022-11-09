import "./Login.css";
import React, { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  let check = true;
  let change = () => {
    if (check === true) check = false;
    if (check === false) check = true;
  };
  return (
    <div className="Background">
      <form className="Login" style={{ display: check ? "block" : "none" }}>
        <div className="Login_Header">
          <span className="Title">Login</span>
          <div className="Div_Exit">
            <span className="Login_Exit">
            <Link to="/Shop">
              x
            </Link>
            </span>
          </div>
        </div>
        <div className="Login_Body">
          <div className="Use-Pass">
            <input
              name="username"
              placeholder="username"
              type="text"
              id="username"
              className="form-control"
            />
          </div>
          <div className="Use-Pass">
            <input
              name="password"
              placeholder="password"
              type="password"
              id="password"
              className="form-control"
            />
          </div>
          <div className="Remember">
            <div className="TickRemember">
              <input
                type="checkbox"
                id="formBasicCheckbox"
                className="form-check-input"
              />
              <label
                title=""
                for="formBasicCheckbox"
                className="form-check-label"
              >
                RememberPassword
              </label>
            </div>
          </div>
        </div>
        <div className="Login_Action">
          <button type="submit" className="btn_submit">
            Login
          </button>
          <div className="Login_With">
            <div className="separate"></div>
            <div className="separate_text">or</div>
            <div className="separate"></div>
          </div>
          <button type="submit" className="Login_Gg">
            Login with Google
          </button>
          <button type="submit" className="Login_Fb">
            Login with Facebook
          </button>
        </div>
        <div className="Login_footer">
          <div className="change-to-register">
          <Link to="/Register">
          Do not have an account? Register
          </Link>
          </div>
          <div className="forgot-password">Forgot password?</div>
        </div>
      </form>
    </div>
  );
};
export default Login;
