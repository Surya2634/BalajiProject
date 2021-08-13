import React from 'react'
// import {FcGoogle} from "react-icons/fc"
// import {FaFacebookF,FaTwitter} from "react-icons/fa"
import "./Signup.css"
export default function Signup() {
    return (
<div className = "signup__wrapper">
            <div className = "signup__container">
                <div className = "signup__right"> </div>
                <div className=  "signup__left">
                    <div className = "signup__heading">
                        <h1>Sign Up</h1>
                    </div>
                    <div className= "signup__form">
                        <form className ="signup__input">
                            <input type = "text" placeholder = "Name" />
                            <input type = "email" placeholder = "Email"/>
                            <input type = "password" placeholder = "Enter Password"/>
                            <input type = "password" placeholder = "Confirm Password"/>
                        </form>
                    </div>
                    <div className = "signup__buttons">
                        <button className = "signup__button different">Sign In</button>
                        <button className = "signup__button">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
