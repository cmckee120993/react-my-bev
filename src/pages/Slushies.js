import React, { useState } from 'react';
import axios from 'axios';

// imports required for slideshow
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../styles/Slushies.css';

// The slushies for the slideshow
import mxdRed from "../assets/images/mxd-red.webp";
import jooseBlue from "../assets/images/joose-blue.webp";
import mxdGreen from "../assets/images/mxd-green.webp";
import danielsPeach from "../assets/images/daniels-peach.webp";
import seagramsPink from "../assets/images/seagrams-pink.webp";
import mxdOrange from "../assets/images/mxd-orange.webp";
import neonPurple from "../assets/images/neon-burst-purple.webp";
import mangoOrange from "../assets/images/mangorita-orange.webp";
import mxdTea from "../assets/images/mxd-tea.webp";
import rebelCream from "../assets/images/rebel-cream.webp";
import joosePurple from "../assets/images/joose-purple.webp";
import springgatePurple from "../assets/images/springgate.webp";

// BX logo for header
import sixPack from '../assets/images/bx-six-pack.webp';

function Slushies() {


    // const untappd = function () {
    //     const [data, setData] = useState([]);

    //     // fetch request
    //     const options = {
    //         method: 'GET',
    //         url:'https://api.untappd.com/v4/method_name?client_id=CLIENTID&client_secret=CLIENTSECRET',
    //     };

    //     axios  
    //         .request(options)
    //         .then(function(response) {
    //             console.log(response);
    //             setData(response.data);
    //         })
    //         .catch(function(error) {
    //             console.error(error);
    //         });
    // };

    // image array for slideshow
    const images = [
        mxdRed,
        jooseBlue,
        mxdGreen,
        danielsPeach,
        seagramsPink,
        mxdOrange,
        neonPurple,
        mangoOrange,
        mxdTea,
        rebelCream,
        joosePurple,
        springgatePurple
    ];

    return (
        <>
            {/* page title */}
                <div className='slushy-title-div'>
                    <h2 className='slushy-title'>Adult Slushies</h2>
                    <img
                        className='slushy-header-image'
                        src={sixPack}
                        alt='Beverage Express Six Pack Logo'
                    />
                </div>

            <div className='slushy-menu'>
                <img
                    src={`${images[0]}`}
                    alt='MXD Strawberry Daquiri'
                    className='slushy-img'
                />
                <img
                     src={`${images[1]}`}
                    alt='Joose Blue Lemonade'
                    className='slushy-img'
                />
                 <img
                     src={`${images[2]}`}
                    alt='MXD Margarita'
                    className='slushy-img'
                />
                 <img
                     src={`${images[3]}`}
                    alt="Jack Daniel's Peach"
                    className='slushy-img'
                />
                 <img
                     src={`${images[4]}`}
                    alt='Seagrams Escapes Jamaican Me Happy'
                    className='slushy-img'
                />
                 <img
                     src={`${images[5]}`}
                    alt='MXD Mai Tai'
                    className='slushy-img'
                />
                 <img
                     src={`${images[6]}`}
                    alt='Joose Grape Blowout'
                    className='slushy-img'
                />
                 <img
                     src={`${images[7]}`}
                    alt='Bud Light Mango-O-Rita'
                    className='slushy-img'
                />
                 <img
                     src={`${images[8]}`}
                    alt='MXD Long Island Iced Tea'
                    className='slushy-img'
                />
                 <img
                     src={`${images[9]}`}
                    alt='Rebel Irish Cream Latte'
                    className='slushy-img'
                />
                 <img
                     src={`${images[10]}`}
                    alt='Joose Blackberry'
                    className='slushy-img'
                />
                 <img
                     src={`${images[11]}`}
                    alt='SpringGate Concord Grape'
                    className='slushy-img'
                />
            </div>

            {/* slushy slideshow
            <Slide className="slushy-slideshow">
                <div className="each-slide-effect">
                    <div
                        className="slushy-image"
                        style={{
                        backgroundImage: `url(${images[0]})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "left",
                        }}
                    >
                    </div>
                </div>

                <div className="each-slide-effect">
                    <div
                        className="slushy-image"
                        style={{
                        backgroundImage: `url(${images[1]})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "left",
                        }}
                    >
                    </div>
                </div>

                <div className="each-slide-effect">
                    <div
                        className="slushy-image"
                        style={{
                        backgroundImage: `url(${images[2]})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "left",
                        }}
                    >
                    </div>
                </div>

                <div className="each-slide-effect">
                    <div
                        className="slushy-image"
                        style={{
                        backgroundImage: `url(${images[3]})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "left",
                        }}
                    >
                    </div>
                </div>

                <div className="each-slide-effect">
                    <div
                        className="slushy-image"
                        style={{
                        backgroundImage: `url(${images[4]})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "left",
                        }}
                    >
                    </div>
                </div>

                <div className="each-slide-effect">
                    <div
                        className="slushy-image"
                        style={{
                        backgroundImage: `url(${images[5]})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "left",
                        }}
                    >
                    </div>
                </div>

                <div className="each-slide-effect">
                    <div
                        className="slushy-image"
                        style={{
                        backgroundImage: `url(${images[6]})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "left",
                        }}
                    >
                    </div>
                </div>

                <div className="each-slide-effect">
                    <div
                        className="slushy-image"
                        style={{
                        backgroundImage: `url(${images[7]})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "left",
                        }}
                    >
                    </div>
                </div>

                <div className="each-slide-effect">
                    <div
                        className="slushy-image"
                        style={{
                        backgroundImage: `url(${images[8]})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "left",
                        }}
                    >
                    </div>
                </div>

                <div className="each-slide-effect">
                    <div
                        className="slushy-image"
                        style={{
                        backgroundImage: `url(${images[9]})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "left",
                        }}
                    >
                    </div>
                </div>

                <div className="each-slide-effect">
                    <div
                        className="slushy-image"
                        style={{
                        backgroundImage: `url(${images[10]})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "left",
                        }}
                    >
                    </div>
                </div>

                <div className="each-slide-effect">
                    <div
                        className="slushy-image"
                        style={{
                        backgroundImage: `url(${images[11]})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "left",
                        }}
                    >
                    </div>
                </div>
            </Slide> */}
            <p className='other-products'>To see a list of our other products, please go to our <a href='/search' className='internal-link'>Search Page</a>.</p>
        </>
    )
}  ;

export default Slushies;