import React from 'react';
import { Link } from 'react-router-dom';

const Homenavigation = ()=>{
    return(
        <>
            <div className='NavLink__Navitems'>
                <Link to='/' className='NavLink__Link'>
                    <span className='NavLink__NavItem'>Home</span>
                </Link>
                <Link to='' className='NavLink__Link'>
                    <span className='NavLink__NavItem'>Contact</span>
                </Link>
                <Link to='' className='NavLink__Link'>
                    <span className='NavLink__NavItem'>My Order</span>
                </Link>
                <Link to='' className='NavLink__Link'>
                    <span className='NavLink__NavItem'> Top Produtcs</span>
                </Link>
            </div><br/><br/><br/>
        </>
    )
}

export default Homenavigation;