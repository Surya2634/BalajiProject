import React from 'react';
import '../../Css/Homestyle/NavLink.css'
import { IoIosArrowDown,IoIosAlbums } from "react-icons/io";
import Homenavigation from './Homenavigation';

const NavLink = ()=>{
    return (
        <>
            <div className="NavLink__Container">
                <div>
                    <button className='NavLink__Btn'>
                        <IoIosAlbums/>&emsp;Category&emsp;<IoIosArrowDown />
                    </button>
                </div>     
                <Homenavigation />
            </div>
         </>
    )
}

export default NavLink;