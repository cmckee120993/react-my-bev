import React from 'react';

// email listserv signup form
import { useForm, ValidationError } from '@formspree/react';

// home styling and images
import '../styles/Home.css';
import News from '../assets/images/bev-exp-news.webp';
import headerImage from '../assets/images/bev-exp-header.webp'


function Home() {
    // formspree form code
    const [state, handleSubmit] = useForm('xayzykgr');
    function clear() {
        let name = document.querySelector('.listserv-name');
        let email = document.querySelector('.listserv-email');

        name.value = '';
        email.value = '';
    }
    return (
        <>
            {/* page title and description */}
            <h1 className='home-header'>Welcome to Beverage Express!</h1>
            <div className='header-div'>
                <img 
                    className='header-image'
                    src={headerImage}
                    fetchPriority='high'
                    alt='"We got a whole lotta beer" with Beverage Express store front.'                    
                />
                <p className="home-description">
                    We are proud to be Carlisle's family-run, locally-owned beer
                    distributor. We boast the best selection of domestic, craft, and import
                    beer in the area at some of the best prices.
                </p>
            </div>
            {/* content on home page */}
            <div className="home-content">
                {/* email listserv */}
                <div className="email-listserv">
                    <h2 className="listserv-header">Sign Up for Our Newsletter</h2>
                    <p className="listserv-description">
                        We are very active on social media, but if being social isn't your
                        thing, sign up to join our email listserv. We will be sending out
                        our ads, publicity, product features, and information about special
                        events. You will receive about one to two emails a month (so it
                        won't take up too much space in your inbox).
                        To contact us with a question, head to our <a className='link' href='/contact'>Contact Page</a>.
                    </p>
                    <form className="listserv-form" onSubmit={handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <input className='listserv-name' id="name" type="text" name="name" />
                        
                        <label htmlFor="email">Email</label>
                        <input className='listserv-email' id="email" type="email" name="email" />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <div className='button-div'>
                            <button className='button' onClick={clear} type="submit" disabled={state.submitting}>
                            Submit
                            </button>
                        </div>
                    </form>
                </div>
                
                {/* store news */}
                 <div className='store-news'>
                    <h3 className='news-title'>New on Tap at Bev Exp!</h3>
                    <p className='news-description'>
                
                    Check <a className='link' href='https://www.facebook.com/wholelottabeer' target='_blank' rel='noreferrer'>Facebook</a>, &nbsp; 
                    <a className='link' href='https://www.instagram.com/bevexcarlisle/'>Instagram</a>, or our website each week for what's new!
                    </p>
                    <img 
                    loading='lazy'
                    className='recent-news'
                    src={News}
                    alt='Beverage Express Logo'
                    />
                </div>
            </div>
        </>
    );
};

export default Home;