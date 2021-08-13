import React from 'react';
import '../../Css/Homestyle/CategoryList.css'
import { IoIosArrowForward } from "react-icons/io";
import Offerslide from './Offerslides';


const CategoryList = ()=>{
    return(
        <div className='CategoryList__Container'>
            <div className='CategoryList__listContainer'>
                <div className='CategoryList__list'>
                    <li>Mobile</li>
                    <IoIosArrowForward />
                </div>
                <div className='CategoryList__list'>
                    <li>Laptop</li>
                    <IoIosArrowForward />
                </div>
                <div className='CategoryList__list'>
                    <li>Top Brands</li>
                    <IoIosArrowForward />
                </div>
                <div className='CategoryList__list'>
                    <li>Accessories</li>
                    <IoIosArrowForward />
                </div>
                <div className='CategoryList__list'>
                    <li>Tab</li>
                    <IoIosArrowForward />
                </div>
                <div className='CategoryList__list'>
                    <li>Others</li>
                    <IoIosArrowForward />
                </div>
            </div>
            <div className='CategoryList__slides'>
                <figure>
                    <Offerslide offtitle='50% Off is going on every products' offdescription='Lorem Ipsum is simply dummy text on the Internet and is therefore not suitable forLorem Ipsum is simply dummy text on the Internet and is therefore not suitable for' offimage='https://images.pexels.com/photos/1786433/pexels-photo-1786433.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                    <Offerslide offtitle='60% Off is going on every products' offdescription='Lorem Ipsum is simply dummy text on the Internet and is therefore not suitable forLorem Ipsum is simply dummy text on the Internet and is therefore not suitable for' offimage='https://images.pexels.com/photos/1786433/pexels-photo-1786433.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                    <Offerslide offtitle='70% Off is going on every products' offdescription='Lorem Ipsum is simply dummy text on the Internet and is therefore not suitable forLorem Ipsum is simply dummy text on the Internet and is therefore not suitable for' offimage='https://images.pexels.com/photos/1786433/pexels-photo-1786433.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                    <Offerslide offtitle='20% Off is going on every products' offdescription='Lorem Ipsum is simply dummy text on the Internet and is therefore not suitable forLorem Ipsum is simply dummy text on the Internet and is therefore not suitable for' offimage='https://images.pexels.com/photos/1786433/pexels-photo-1786433.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                    <Offerslide offtitle='50% Off is going on every products' offdescription='Lorem Ipsum is simply dummy text on the Internet and is therefore not suitable forLorem Ipsum is simply dummy text on the Internet and is therefore not suitable for' offimage='https://images.pexels.com/photos/1786433/pexels-photo-1786433.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                </figure>
                {/* <div>
                    <input type='radio' checked id='r1'/>
                    <input type='radio' id='r2'/>
                    <input type='radio' id='r3'/>
                    <input type='radio' id='r4'/>
                    <input type='radio' id='r5'/>
                </div> */}
            </div>
        </div>
    )
}

export default CategoryList;