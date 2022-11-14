import "./Login.css";
import React, { useState, useRef, useContext } from "react";
import { connect } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import * as actions from '../action/index';
import ApiCaller from "../Utills/ApiCaller";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const Login = (props) => {
  let check = true;
  let change = () => {
    if (check === true) check = false;
    if (check === false) check = true;
  };
  // const navigate = useNavigate();
  //   const [inputUserName, setInputUsername] = useState("")
  //   const [inputPassWord, setInputPassWord] = useState("")
  //   const [isLoading,setLoading] = useState(false)
  //   const MySwal = withReactContent(Swal)
  //   async function HandlerSubmit(e) {
  //       e.preventDefault();
  //       let user = {
  //           username: inputUserName,
  //           password: inputPassWord
            
  //       }
  //       setLoading(true)
  //       ApiCaller('/login/', 'POST', user).then(res => {
  //           setLoading(false)
  //           props.onLogin(res.data.token)
  //           props.onCHangeStatus(true)
  //           setInputUsername("")
  //           setInputPassWord("")
  //           MySwal.fire({
  //               title: <strong>Thành Công!</strong>,
  //               html: <i>You clicked the button!</i>,
  //               icon: 'success'
  //           })
  //           navigate("/")
  //       })
  //           .catch(err => {
  //               setLoading(false)
  //               MySwal.fire({
  //                   title: <strong>Tài khoản mật khẩu không chính xác!</strong>,
  //                   html: <i>You clicked the button!</i>,
  //                   icon: 'error'
  //               })
  //           })
  //   }
  //   function onChange(e) {
  //       if (e.target.name === "username") {
  //           setInputUsername(e.target.value)
  //       } else {
  //           setInputPassWord(e.target.value)
  //       }
  //   }
  return (
    <div className="Background">
      <form className="Login" style={{ display: check ? "block" : "none" }} >
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
// const mapStateToProps = (state) => {
//   return {

//   }
// }
// const mapDispatchToProps = (dispatch, props) => {
//   return {
//       onLogin: (token) => {
//           dispatch(actions.saveLogin(token))
//       },
//       onCHangeStatus : (status) => {
//           dispatch(actions.changeStatus(status))
//       }
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Login)