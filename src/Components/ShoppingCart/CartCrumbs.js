import React,{useState,useEffect} from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import "./CartCrumbs.css"
export default function CartCrumbs() {
    const url = useLocation();
    const [pathNumber, setpathNumber] = useState(1)
    const findRoute = () =>{
    if (url.pathname === "/cart"){
        setpathNumber(1)
    } 
    else if (url.pathname === "/cart/confirmaddress"){
        setpathNumber(2)
    }

    else if (url.pathname === "/cart/payment"){
        setpathNumber(3)
    }
}

useEffect(() => {
    findRoute()
    }
)
    return (
        <div className = "cartcrumbs__wrapper">
            <div className = "cartcrumbs__pills crumbSelected"><NavLink to ="/cart">1.Cart</NavLink> </div>
            <span className={pathNumber === 2||pathNumber === 3||pathNumber === 4 ?"cartcrumbs__line crumbSelected":"cartcrumbs__line"}></span>
            <div className ={pathNumber === 2 ||pathNumber === 3||pathNumber === 4 ? "cartcrumbs__pills crumbSelected":"cartcrumbs__pills "}><NavLink to ="/cart/confirmaddress">2.Details</NavLink></div>
            <span className={pathNumber === 3||pathNumber === 4?"cartcrumbs__line crumbSelected":"cartcrumbs__line"}></span>
            <div className ={pathNumber === 3||pathNumber === 4? "cartcrumbs__pills crumbSelected":"cartcrumbs__pills "}><NavLink to ="/cart/payment">3.Payment</NavLink></div>
            {/* <span className={pathNumber == 4?"cartcrumbs__line crumbSelected":"cartcrumbs__line"}></span>
            <div className = "cartcrumbs__pills"><NavLink to ="/cart">4.Review</NavLink></div> */}
        </div>
    )
}
