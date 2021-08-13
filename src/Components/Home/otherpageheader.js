import React,{ useState} from 'react';
import HeadLocationBar from './HeadLocationBar';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import Homenavigation from './Homenavigation';
import { IoIosArrowForward,IoIosArrowDown,IoIosAlbums } from "react-icons/io";
import '../../Css/Homestyle/otherpageheader.css'

const Allpageheader =()=>{
    const [ click , setClick ] = useState(<IoIosArrowDown />)
    
    function Icon(){
        if(click===<IoIosArrowForward />){
            setClick(<IoIosArrowDown />)
        }
        else{
            setClick(<IoIosArrowForward />)
        }
    }


    return(
        <div style={{ backgroundColor: 'white'}}>
            <HeadLocationBar  />
            <SearchBar />
            <div className="NavLink__Container">
                <div>
                    <button className='NavLink__Btn' onClick={Icon}>
                        <IoIosAlbums/>&emsp;Category&emsp;<IoIosArrowDown />
                    </button>
                </div>     
            <Homenavigation />
            </div>
            <div className='opheader__licontainer'>
                <Link to=''>
                    <div className=''>
                        <li>Mens</li>
                        <IoIosArrowForward />
                    </div>
                </Link>
                <Link to=''>
                    <div className=''>
                        <li>Womens</li>
                        <IoIosArrowForward />
                    </div>
                </Link>
                <Link to=''>
                    <div className=''>
                        <li>Kids</li>
                        <IoIosArrowForward />
                    </div>
                </Link>
                <Link>
                    <div className=''>
                        <li>T-shirt</li>
                        <IoIosArrowForward />
                    </div>
                </Link>
                <Link>
                    <div className=''>
                        <li>Pants</li>
                        <IoIosArrowForward />
                    </div>
                </Link>
                <Link>
                    <div className=''>
                        <li>Shirts</li>
                        <IoIosArrowForward />
                    </div>
                </Link>
            </div>
        </div>
    )
} 

export default Allpageheader;