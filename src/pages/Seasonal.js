import React from 'react';

import '../styles/Seasonal.css';
import sixPack from '../assets/images/bx-six-pack.webp';

function Seasonal() {
    return(
        <>
            <div className='untappd-title-div'>
                        <h2 className='untappd-title'>What's On Tap?</h2>
                        <img
                            className='untappd-header-image'
                            src={sixPack}
                            alt='Beverage Express Six Pack Logo'
                        />
            </div>

            <div id="menu-container"></div>
        </>
    )
};

export default Seasonal;