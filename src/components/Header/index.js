import React from 'react'

// styling and images
import './style.css';
import headerImagePhone from '../../assets/images/bev-exp-header-phone.webp';
import headerImage from '../../assets/images/bev-exp-header.webp';

function Header() {
    if (window.innerWidth <= 500 ) {
        return (
            <>
            <header className='header-border'>
            <img 
                className='header-image'
                src={headerImagePhone}
                alt='"We got a whole lotta beer" with Beverage Express store front.'
            />
            </header>
        </>
        );
    } else if (window.innerWidth >= 500) {
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
};

export default Header;