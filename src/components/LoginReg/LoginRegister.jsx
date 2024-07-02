import React, { useState } from 'react'
import './LoginRegister.css'
import { FaEnvelope, FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginRegister = () => {

    const[action, setAction] = useState('')

    const registerLink = ()=>{
        setAction(' active')
    }
    const loginLink = ()=>{
        setAction('')
    }

    const [data,getData] = useState(
        {
            "name":"",
            "email":"",
            "password":"",
            "cPassword":""
        }
    )

    const inputHandler = (event)=>{
        getData({...data,[event.target.name]:event.target.value})
    }

    const regReadValue = (event)=>{
        event.preventDefault()
        if (data.password === data.cPassword) {
            axios.post("http://localhost:8080/signup",data).then(
                (response)=>{
                    if (response.data.status === "success") {
                        alert("Registration Success")
                        window.location.reload()
                    } else {
                        alert("Email already exist")
                    }
                }
            ).catch(
                (error)=>{
                    alert(error)
                    console.log(error)
                }
            )
        } else {
            alert("Password doesn't match") 
        }
    }

    let navigate = useNavigate()

    const logReadValue = (event)=>{
        event.preventDefault()
        axios.post("http://localhost:8080/signin",data).then(
            (response)=>{
                if (response.data.status === "success") {
                    // sessionStorage.setItem("token",response.data.token)
                    // sessionStorage.setItem("token",response.data.userId)
                    navigate("/dashboard")
                } else {
                    alert(response.data.status)
                }
            }
        ).catch(
            (error)=>{
                alert(error.message)
            }
        )
    }


  return (
    <div className={`wrapper${action}`}>
        <div className="form-box login">
            <form action="" onSubmit={logReadValue}>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="email" placeholder='Email' name='email' value={data.email} onChange={inputHandler} required/>
                    <FaEnvelope className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' name='password' value={data.password} onChange={inputHandler} required/>
                    <FaLock className='icon'/>
                </div>
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" />
                        Remember me
                    </label>
                    <Link className='link-tag' to="/forgot">Forgot Password?</Link>
                </div>
                <button type='submit'>Login</button>
                <div className="register-link">
                    <p>Don't have an account? <Link className='link-tag' to='/' onClick={registerLink}>Register</Link></p>
                </div>
            </form>
        </div>

        <div className="form-box register">
            <form action="" onSubmit={regReadValue}>
                <h1>Registration</h1>
                <div className="input-box">
                    <input type="text" placeholder='Full Name' name='name' value={data.name} onChange={inputHandler} required/>
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="email" placeholder='Email' name='email' value={data.email} onChange={inputHandler} required/>
                    <FaEnvelope className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' name='password' value={data.password} onChange={inputHandler} required/>
                    <FaLock className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Confirm Password' name='cPassword' value={data.cPassword} onChange={inputHandler} required/>
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
                    <p>Already have an account? <Link className='link-tag' to='/' onClick={loginLink}>Login</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginRegister