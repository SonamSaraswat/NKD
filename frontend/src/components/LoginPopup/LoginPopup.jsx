import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
    const[currState,setCurrState]=useState("Login")

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        setShowLogin(false); // Close the popup after form submission
      };
  return (
    <div className='login-popup'>
        <form className='login-popup-container'  onSubmit={handleSubmit}>
            <div className='login-popup-title'>
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon}/>

            </div>
            <div className="login-popup-inputs">
                {currState==='Login'?<></>:
                <input type='text' placeholder='your name' required/>}
                <input type='email' placeholder='email' required/>
                <input type='password' placeholder='password' required/>

            </div>
            <button type='submit'>{currState==='Sign Up'?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By Continuing, I agree to the terms of use & privacy policy</p>
            </div>
            {currState==="Login"
            ?<p>Create a new Account? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
            :<p>Already Have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
            }
        </form>
        </div>
  )
}

export default LoginPopup