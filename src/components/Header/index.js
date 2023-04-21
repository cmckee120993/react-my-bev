import React from 'react'

// styling and images
import './style.css';
import headerImagePhone from '../../assets/images/bev-exp-header-phone.webp';
import headerImage from '../../assets/images/bev-exp-header.webp';
import beerLogo from '../../assets/images/bev-exp-logo.webp';

function Header() {
    function mobileHeader() {
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

    return (
        <>
        <div className='header-title'>

            <div className='header-logo'>
                <img 
                    src={beerLogo}
                    alt='Beverage Express Name Beer Logo'
                />
            </div>

            <div className='locale'>
                <a href='tel:7172412337' className='phone-number link' target='_blank' rel='noreferrer'>
                    717-241-2337
                </a>
                <div className='address-div'>
                    <address>
                        <a className='address-link link' href='https://goo.gl/maps/YNwHwsxJ5qvTzRaXA' target='blank' rel='noreferrer'>
                            1021 Ritner Highway Carlisle, PA 17013
                        </a>
                    </address>
                </div>
            </div>
        </div>
        {mobileHeader()}
        </>
    )
};

export default Header;