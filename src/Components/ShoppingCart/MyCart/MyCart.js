import React from 'react'
import CartItem from './CartItem'
// import "./MyCart.css"
export default function MyCart() {
    return ( 
        <>
        
        <div className = "mycart__wrapper">
            <div className = "mycart__heading">
                <h2>My Cart(2)</h2>
                <hr/>
            </div>
            <div className = "mycart__content">
                <CartItem/>
                <hr/>
                <CartItem/>
                <hr/>
                <CartItem/>
            </div>
            <div className = "mycart__placeorder">
                <button>Place Order</button>
            </div>
        </div>
        </>
    )
}
