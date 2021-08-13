import React from 'react';
import '../../Css/Homestyle/Offerslide.css';
import { Link } from 'react-router-dom';

const Offerslide = (props)=>{
    return(
        <div className='Offerslide__offerBox'>
            <div className='Offerslide__offerBoxtext'>
                <text>{props.offtitle}</text>
                <p>{props.offdescription}</p>
                <Link to='/offCollections'>
                    <button className='Offerslide__offerBoxbtn'>View Collection</button>
                </Link>
            </div>
            <div>
                <img className='Offerslide__offerBoximg' src={props.offimage} alt='Offered ' />
            </div>
        </div>
    )
}

export default Offerslide;