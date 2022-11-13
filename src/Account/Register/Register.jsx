import './Register.css'
import React, { useState, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import ApiCaller from "../Utills/ApiCaller";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const Register = () => {

const [ipFirstname,setIpFirstName] = useState("")
    const [ipLastName,setIpLasttName] = useState("")
    const [ipEmail,setIpEmail] = useState("")
    const [ipUserName,setIpUserName] = useState("")
    const [ipPass,setIpPass] = useState("")
    const MySwal = withReactContent(Swal)
    function handleSubmit(e){
        e.preventDefault()
        let res = {
            first_name: ipFirstname,
            last_name: ipLastName,
            email: ipEmail,
            username: ipUserName,
            password: ipPass
        }
        ApiCaller("/register/",'POST',res).then(e => {
            setIpFirstName("")
            setIpLasttName("")
            setIpPass("")
            setIpEmail("")
            setIpUserName("")
            // MySwal.fire({
            //     title: <strong>Thành Công!</strong>,
            //     html: <i>You clicked the button!</i>,
            //     icon: 'success'
            // })
            alert("Đăng kí thành công !")
        }).catch(e => {
            // MySwal.fire({
            //     title: <strong>Lỗi không đăng ký được!</strong>,
            //     html: <i>You clicked the button!</i>,
            //     icon: 'error'
            // })
            alert("Đăng kí không thành công !")
        })
    }
    function onChange(e){
       
        if(e.target.className === "firstNameSignup"){
            setIpFirstName(e.target.value)
        }
        else if(e.target.className === "lastNameSignup"){
            setIpLasttName(e.target.value)
        }else if(e.target.className === "emailSignup"){
            setIpEmail(e.target.value)
        }else if(e.target.className === "usernameSignup"){
            setIpUserName(e.target.value)
        }else if(e.target.className === "passwordSignup"){
            setIpPass(e.target.value)
        }
    }
//
    return (
        <div className="Background">
            <form className='Register' onSubmit={(e) => handleSubmit(e)}>
                <div className='Register_Header'>
                    <span className='Title'>
                        Register
                    </span>
                    <div className='Div_Exit'>
                        <span className='Register_Exit'>
                            <Link to="/Shop">
                            x
                            </Link>
                        </span>
                    </div>
                </div>
                <div className='Register_Body'>
                    <div className='Use-Pass'>
                        <input
                        className="firstNameSignup"
                        placeholder="FirstName" 
                        type="text" 
                        // className="form-control firstName"
                        required value={ipFirstname} 
                        onChange={ (e) => onChange(e)}
                        />
                    </div>
                    <div className='Use-Pass'>
                        <input  
                        className="lastNameSignup"
                        placeholder="LastName" 
                        type="text" 
                        // className="form-control lastName"
                        required value={ipLastName} 
                        onChange={ (e) => onChange(e)}
                        />
                    </div>
                    {/*  */}
                    <div className='Use-Pass'>
                        <input
                        className="emailSignup"
                        placeholder="Email" 
                        type="email" 
                        // className="form-control email"
                        required value={ipEmail} 
                        onChange={ (e) => onChange(e)}
                        />
                    </div>
                    <div className='Use-Pass'>
                        <input 
                        className="usernameSignup"
                        placeholder="Usename" 
                        type="text"  
                        // className="form-control usename"
                        required value={ipUserName} 
                        onChange={ (e) => onChange(e)}
                        />
                    </div>
                    <div className='Use-Pass'>
                        <input 
                        className="passwordSignup"
                        placeholder="Password" 
                        type="password"  
                        // className="form-control password"
                        required value={ipPass} 
                        onChange={ (e) => onChange(e)}
                        />
                    </div>
                    {/*  */}
                    
                </div>
                <div className='Register_Action'>
                    <button 
                        type="submit" 
                        className="btn_submit">
                        Register
                    </button>
                    <div className='Register_With'>
                        <div className='separate'></div>
                        <div className='separate_text'>or</div>
                        <div className='separate'></div>
                    </div>
                    <button 
                        type="submit" 
                        className="Register_Gg">
                        Register with Google
                    </button>
                    <button 
                        type="submit" 
                        className="Register_Fb">
                        Register with Facebook
                    </button>
                </div>
                <div className='Register_footer'>
                    <div className="change-to-register" >
                        <Link to="/Login">
                        Already have an account? Login
                        </Link>
                        </div>
                </div>
            </form>
        </div>
    )

}
export default Register
