import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import '../../Css/Homestyle/HeadLocationBar.css'

const HeadLocationBar = ()=>{
    return(
        <>
            <div className="headLocationBar__Container">
                <div className="headLocationBar__PMwrapper">
                    <span className="headLocationBar__Phone">
                        <FiPhoneCall className='headLocationBar__icon' />
                        <p>+88012 3456 7894</p>
                    </span>
                    <span className="headLocationBar__Mail">
                        <AiOutlineMail className='headLocationBar__icon'/>
                        <p>+88012 3456 7894</p>
                    </span>
                    <span className="headLocationBar__location">
                        <IoLocationOutline className='headLocationBar__icon'/>
                        <p>Here the Loaction is...</p>
                    </span>
                </div>
                <div className='headLocationBar__BtnWarpper'>
                    <button className="headLocationbar__button">Get a Quote</button>
                </div>
            </div>
        </>
    )
}

export default HeadLocationBar;