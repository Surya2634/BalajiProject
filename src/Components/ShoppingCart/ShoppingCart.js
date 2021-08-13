import React from 'react'
import { Route } from 'react-router'
import Header from '../Home/Header'
import CartCrumbs from './CartCrumbs'
import GetAddress from './GetAddress/GetAddress'
import MyCart from './MyCart/MyCart'
import CardDetails from './Payment/CardDetails'
import Pricing from './Pricing'
import "./ShoppingCart.css"

export default function ShoppingCart() {
    return (
        <>
        <Header/>
        <div className = "shoppingcart__newwrapper">
            <CartCrumbs/>
        <div className = "shoppingcart__wrapper">
            <div className = "shoppingcart__mycart">
                <Route exact path = "/cart" component = {MyCart}/>
                <Route exact path = "/cart/confirmaddress" component = {GetAddress}/>
                <Route exact path = "/cart/payment" component = {CardDetails}/>
                </div> 
            <div className = "shoppingcart__pricing"><Pricing/></div>
        </div>
        </div>
        </>
    )
}
