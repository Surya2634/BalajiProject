import React from 'react'
import "./CartItem.css"
export default function CartItem() {
    return (
        <div className = "cartitem__wrapper">
            <div className = "cartitem__pic">
                <div className = "cartitem_image">
                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcKE9UGSYNleJZ-Pewvn2mQRma3DcifLzdzQ&usqp=CAU" alt="Tshirt"/>
                </div> 
                <div className = "cartitem_qty">
                    <button>+</button>
                    <input type = "text" placeholder = "1"/> 
                    <button>-</button>
                </div>
            </div>
            <div className = "cartitem__details">
                <div className = "cartitem__name">Nike T-shirt Men XL</div>
                <div className = "cartitem__price">₹3500 <span id = "crossed">₹5000</span></div>
                <div className = "cartitem__remove"><strong>Remove</strong></div>    
            </div>
            <div>
                <p>Will be delivered by Tue Jan 12</p>
            </div> 
        </div>
    )
}
