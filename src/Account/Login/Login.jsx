import "./Login.css";
import React, { useState, useRef, useContext } from "react";
import { connect, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from "react-router-dom";
import ApiCaller from "../Utills/ApiCaller";
import LoginSlice, { loginSuccess } from "../../Stores/LoginSlice";
import { useDispatch } from 'react-redux'
import { tuple } from "antd/lib/_util/type";
import { Redirect } from 'react-router-dom';
import Header from "../../Pages/Header/Header";
const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const chosePage = (event) => {
    window.scrollTo(0, 0);
  };
  function handleLogin(e) {
    e.preventDefault()
    const newUse = {
      username: username,
      password: password,
    }
    ApiCaller("/login/", 'POST', newUse).then(res => {
      dispatch(loginSuccess(res.data))
      alert("Đăng nhập thành công !")
      navigate("/Shop")
      setUsername("")
      setPassword("")
    }).catch(e => {
      alert("Tên đăng nhập hoặc tài khoản không chính xác")
    })
  }
  const user = useSelector(state => state.login.login.currenUser)
  function onChangeUsername(e) {
    setUsername(e.target.value)
  }
  function onChangePass(e) {
    setPassword(e.target.value)
  }
  return (
    <>
    <Header />
    <div className="Background">
    <img src="https://www.leoasher.dev/static/media/bannerFooter.4b09af08.png"/>
      {/* <div className="Div_login"> */}
        <form className="Login" onSubmit={(e) => handleLogin(e)} >
          <div className="Login_Header">
            <span className="Title">Login</span>
            <div className="Div_Exit">
              <span className="Login_Exit">
                <Link to="/">
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
                required
                value={username}
                onChange={(e) => onChangeUsername(e)}
              />
            </div>
            <div className="Use-Pass">
              <input
                name="password"
                placeholder="password"
                type="password"
                id="password"
                className="form-control"
                required
                value={password}
                onChange={(e) => onChangePass(e)}
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
              <Link to="/Register" onClick = {chosePage}>
                Do not have an account? Register
              </Link>
            </div>
            <div className="forgot-password">Forgot password?</div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
