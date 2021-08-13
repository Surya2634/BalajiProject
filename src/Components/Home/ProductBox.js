import React from 'react';
import '../../Css/Homestyle/ProductBox.css';
import { FiShoppingCart } from "react-icons/fi";
import { BiRupee } from "react-icons/bi";

const ProductBox = (props)=>{
    return(
        <div className="ProductBox__container">
            <div className="ProductBox__box">
                <img src={props.productImage} alt='Products'/> 
                <h1>{props.productName}</h1>
                <div className="ProductBox__pricecart">
                    <div className="ProductBox__price">
                        <BiRupee className="icon2"/>
                        <h1>{props.Price}</h1><h3><del>{props.OriginalPrice}</del> </h3>
                    </div>
                    <FiShoppingCart className="icon" />
                </div>
            </div>
        </div>
    )
}

export default ProductBox;