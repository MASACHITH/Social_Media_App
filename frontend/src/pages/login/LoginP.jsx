import React from 'react'
import "./loginp.css"

export default function LoginP() {
  return (
    <div>
         <div>
      <div className="login">
        <div className="loginWrapper">
            <div className="liginLeft">
                <h3 className="loginLogo">Lamasocial</h3>
                <span className="loginDesc">
                    Connect with friends and the world around you on Lamasocial.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Email' className="liginInput" />
                    <input placeholder='Password' className="liginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password</span>
                    <button className="loginRegisterButton">Create a New Account</button>
                </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}
