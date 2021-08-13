import React from 'react'
import "./CardDetails.css"
export default function CardDetails() {
    return (
        <div className = "carddetails__wrapper">
            <h1>Checkout</h1>
            <form className = "carddetails__form">
                <div className = "carddetails__namenandnumber">
                    <div className = "carddetails__name">
                        <label>Cardholder's Name</label><br/>
                        <input type = "text" />
                    </div>
                    <div className = "carddetails__cnumber">
                        <label>Card number</label><br/>
                        <input type = "number" />
                    </div>
                </div>
                <div className= "carddetails__expandcvv">
                    <div className = "carddetails__exp">
                        <label>Expiration Date</label><br/>
                        <input type = "date" />
                    </div>
                    <div className = "carddetails__cvv">
                        <label>CVV</label><br/>
                        <input type = "number" />
                    </div>
                </div>
                <button className = "btn carddetails__button ">Pay</button>
            </form>
        </div>
    )
}
