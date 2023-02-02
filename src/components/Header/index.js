import React from 'react'

// styling and images
import './style.css'
import headerImage from '../../assets/images/bev-exp-header.webp';

function Header() {
    return (
        <>
            <header className='header-border'>
            <img 
                className='header-image'
                src={headerImage}
                alt='"We got a whole lotta beer" with Beverage Express store front.'
            />
            </header>
        </>
    );
};

export default Header;