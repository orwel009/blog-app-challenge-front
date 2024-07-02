import React from 'react'
import './LoginRegister.css'
import { FaEnvelope, FaUser, FaLock } from "react-icons/fa";

const LoginRegister = () => {
  return (
    <div className='wrapper'>
        <div className="form-box login">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Email' required/>
                    <FaEnvelope className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required/>
                    <FaLock className='icon'/>
                </div>
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" />
                        Remember me
                    </label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button type='submit'>Login</button>
                <div className="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>

        <div className="form-box register">
            <form action="">
                <h1>Registration</h1>
                <div className="input-box">
                    <input type="text" placeholder='Full Name' required/>
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Email' required/>
                    <FaEnvelope className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required/>
                    <FaLock className='icon'/>
                </div>
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" />
                        I agree to the terms & conditions
                    </label>
                </div>
                <button type='submit'>Register</button>
                <div className="register-link">
                    <p>Already have an account? <a href="#">Login</a></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginRegister