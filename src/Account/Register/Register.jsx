import './Register.css'
import React, { useState, useRef, useContext } from 'react'
const Register = () => {
    let check = true
    return (
        <div className="Background">
            <form className='Register'  style={{display: check ? "block" : "none"}}>
                <div className='Register_Header'>
                    <span className='Title'>
                        Register
                    </span>
                    <div className='Div_Exit'>
                        <span className='Register_Exit'>x</span>
                    </div>
                </div>
                <div className='Register_Body'>
                    <div className='Use-Pass'>
                        <input name="firstName" 
                        placeholder="firstName" 
                        type="text" 
                        id="firstName" 
                        className="form-control"/>
                    </div>
                    <div className='Use-Pass'>
                        <input name="lastName" 
                        placeholder="lastName" 
                        type="text" 
                        id="lastName" 
                        className="form-control"/>
                    </div>
                    {/*  */}
                    <div className='Use-Pass'>
                        <input name="email" 
                        placeholder="email" 
                        type="text" 
                        id="email" 
                        className="form-control"/>
                    </div>
                    <div className='Use-Pass'>
                        <input name="usename" 
                        placeholder="usename" 
                        type="text" 
                        id="usename" 
                        className="form-control"/>
                    </div>
                    <div className='Use-Pass'>
                        <input name="password" 
                        placeholder="password" 
                        type="password" 
                        id="password" 
                        className="form-control"/>
                    </div>
                    {/*  */}
                    
                </div>
                <div className='Register_Action'>
                    <button 
                        type="submit" 
                        class="btn_submit">
                        Register
                    </button>
                    <div className='Register_With'>
                        <div className='separate'></div>
                        <div className='separate_text'>or</div>
                        <div className='separate'></div>
                    </div>
                    <button 
                        type="submit" 
                        class="Register_Gg">
                        Register with Google
                    </button>
                    <button 
                        type="submit" 
                        class="Register_Fb">
                        Register with Facebook
                    </button>
                </div>
                <div className='Register_footer'>
                    <div className="change-to-register" >Already have an account? Login</div>
                </div>
            </form>
        </div>
    )
}
export default Register
