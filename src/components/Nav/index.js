// burger menu
import { bubble as Menu } from 'react-burger-menu';

// styling and images
import './style.css';
import bottle from '../../assets/images/bx-beer-bottle.webp';

function Navbar() {
    return (
        <Menu>
            <a className='menu-item' href='/'>
                Home
            </a>
            {/* <a className='menu-item' href='/slushies'>
                Slushies
            </a> */}
            <a className='menu-item' href='/seasonal'>
                What's On Tap?
            </a>
            <a className='menu-item' href='/search'>
                Search
            </a>
            <a className='menu-item' href='/contact'>
                Contact
            </a>
            <img 
                src={bottle}
                alt="Beverage Express Beer Bottle Logo"
                className="nav-logo"
            />
        </Menu>
    )
};

export default Navbar;