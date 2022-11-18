import './Register.css'
import React, { useState, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import ApiCaller from "../Utills/ApiCaller";
const Register = () => {

const [ipFirstname,setIpFirstName] = useState("")
    const [ipLastName,setIpLasttName] = useState("")
    const [ipEmail,setIpEmail] = useState("")
    const [ipUserName,setIpUserName] = useState("")
    const [ipPass,setIpPass] = useState("")
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
            alert("Đăng kí thành công !")
        }).catch(e => {
            alert("Đăng kí không thành công !")
        })
    }
    function onChangeFirstName(e){      
        setIpFirstName(e.target.value)
    }
    function onChangeLasttName(e){      
        setIpLasttName(e.target.value)
    }
    function onChangePass(e){      
        setIpPass(e.target.value)
    }
    function onChangeEmail(e){      
        setIpEmail(e.target.value)
    }
    function onChangeUserName(e){      
        setIpUserName(e.target.value)
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
                        required value={ipFirstname} 
                        onChange={ (e) => onChangeFirstName(e)}
                        />
                    </div>
                    <div className='Use-Pass'>
                        <input  
                        className="lastNameSignup"
                        placeholder="LastName" 
                        type="text" 
                        required value={ipLastName} 
                        onChange={ (e) => onChangeLasttName(e)}
                        />
                    </div>
                    {/*  */}
                    <div className='Use-Pass'>
                        <input
                        className="emailSignup"
                        placeholder="Email" 
                        type="email" 
                        required value={ipEmail} 
                        onChange={ (e) => onChangeEmail(e)}
                        />
                    </div>
                    <div className='Use-Pass'>
                        <input 
                        className="usernameSignup"
                        placeholder="Usename" 
                        type="text"  
                        required value={ipUserName} 
                        onChange={ (e) => onChangeUserName(e)}
                        />
                    </div>
                    <div className='Use-Pass'>
                        <input 
                        className="passwordSignup"
                        placeholder="Password" 
                        type="password"  
                        required value={ipPass} 
                        onChange={ (e) => onChangePass(e)}
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
