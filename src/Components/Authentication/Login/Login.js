import {FcGoogle} from "react-icons/fc"
import {FaFacebookF,FaTwitter} from "react-icons/fa"
import React from 'react'
import "./Login.css"
export default function Login() {
    return (
        <div className = "login__wrapper">
            <div className = "login__container">
                <div className=  "login__left">
                    <div className = "login__heading">
                        <h1>Login</h1>
                    </div>
                    {/* <div className= "login__instructions">Login with</div> */}
                    <div className = "login__social">
                        <div><FcGoogle/></div>
                        <div><FaFacebookF/></div>
                        <div><FaTwitter/></div>
                    </div>
                    <div className= "login__instructions">or login with email and password</div>
                    <div className= "login__form">
                        <form className ="login__input">
                            <input type = "email" placeholder = "Email"/>
                            <input type = "password" placeholder = "Password"/>
                        </form>
                    </div>
                    <div className = "login__buttons">
                        <button className = "login__button different">Sign Up</button>
                        <button className = "login__button">Sign In</button>
                    </div>
                </div>
                <div className = "login__right"> </div>
            </div>
        </div>
    )
}
