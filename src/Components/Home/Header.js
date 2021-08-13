import React from 'react';
import HeadLocationBar from './HeadLocationBar';
import SearchBar from './SearchBar';
import NavLink from './NavLink';

const Header = ()=>{
    return(
        <div style={{ backgroundColor: 'white'}}>
            <div>
                <HeadLocationBar  />
            </div>
            <div style={{zIndex:'100', position:'sticky' }}> {/* Not Working zIndex */}
                <SearchBar />
            </div>
            <div>
                <NavLink/>
            </div>
        </div>
    )
}

export default Header;