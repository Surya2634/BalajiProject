import React from 'react'
import "./Pricing.css"
export default function Pricing() {
    return (
        <div className = "pricing__wrapper">
            <h4>PRICE DETAILS</h4>
            <hr/>
            <table>
                <tr>
                    <td>Price(2)</td>
                    <td>₹10000</td>
                </tr>
                <tr>
                    <td>Discount</td>
                    <td>₹3000</td>
                </tr>
                <tr>
                    <td>Delivery Charges</td>
                    <td>Free</td>
                </tr>
                <tr>
                    <td><b>Total Amount</b></td>
                    <td><b>₹7000</b></td>
                </tr>
            </table>
        </div>
    )
}
