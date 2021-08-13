import React from 'react';
import '../../Css/Homestyle/Footer.css';
import { AiOutlineFacebook, AiOutlineInstagram,AiOutlineYoutube } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

const Footer = ()=>{
    return(
        <div className='Footer__Container'>
            <div className='Footer__imgContainer'>
                <img src="https://bonik-react.vercel.app/assets/images/logo.svg" alt='Logo' />
                <p>Lorem Ipsum is Lorem Ipsum is </p>
            </div>
            <div className='Footer__aboutUs'>
                <h2>About Us</h2>
                <ul>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                    <li>Timing : 9Am - 10Pm </li>
                    <li>Place : The location is ....</li>
                    <li>Lorem Ipsum</li>
                </ul>
            </div>
            <div className='Footer__Contact'>
                <h2>Contact Us</h2>
                <ul>
                    <li>Timing : 9Am - 10Pm </li>
                    <li>Place : The location is ....</li>
                    <li>Lorem Ipsum</li>
                </ul>
                <div className='Footer__Icons'>
                    <AiOutlineFacebook />
                    <AiOutlineInstagram/>
                    <FiTwitter />
                    <AiOutlineYoutube />
                </div>
            </div>
        </div>
    )
}

export default Footer;