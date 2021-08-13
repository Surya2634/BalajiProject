import React from 'react';
import { BiSearch } from "react-icons/bi";
import { IoBasketOutline } from "react-icons/io5";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { IconButton } from '@material-ui/core';
import '../../Css/Homestyle/SearchBar.css';
import { Link } from 'react-router-dom';

const SearchBar = ()=>{
    return(
        <div className='SearchBar__Container'>
            <div>
                <img src="https://bonik-react.vercel.app/assets/images/logo.svg" alt='Logo' />
            </div>
            <div className='SearchBar__search'>
                <BiSearch className='SearchBar__searchIcon'/>
                <input type="text" placeholder='Search here and hit enter...'/> 
            </div>
            <div className='SearchBar__cartWrapper'>
                <IconButton>
                    <AccountCircleOutlinedIcon />
                </IconButton>
                <Link to='/cart'>
                    <IconButton>
                        <IoBasketOutline /><p className='SearchBar__Num'>2</p>
                    </IconButton>
                </Link>
            </div>
        </div>
    )
}

export default SearchBar;