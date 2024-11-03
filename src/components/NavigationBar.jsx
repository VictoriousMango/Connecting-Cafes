import React from 'react';
import '../assets/CSS/NavigationBar.css';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function NavigationBar() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="navigationBar">
            {/* <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        
                        React Bootstrap
                    </Navbar.Brand>
                </Container>
            </Navbar> */}
            
                {/* Logo */}
                <Link to="/">
                    <img src="../Logo.png" alt="" className="navigationBar__logo" />
                </Link>
                <h1>Connecting Cafes</h1>
            
            {/* Search Bar */}
            <div className="navigationBar__searchBar">
                <input type="text" className="navigationBar__searchInput" />
                <img src="/Search.png" className="navigationBar__searchlogo" alt="" />
            </div>
            {/* Nav Elements */}
            <div className="navigationBar__navElements">
                {/* Login */}
                <Link to="./login">
                    <img src="/LogIn.png" alt="" className="navigationBar__navElementLogin"/>
                </Link>
                {/* History */}
                <Link to="./history">
                    <img src="/History.png" alt="" className="navigationBar_navElementHistory"/>
                </Link>
                {/* Membership */}
                <Link to="./premium">
                    <img src="/Membership.png" alt="" className="navigationBar__navElementMembership"/>
                </Link>
                {/* Wishlist */}
                <Link  to="./wishlist">
                    <img src="/Wishlist.png" alt="" className="navigationBar__navElementWishlist"/>
                </Link>
                {/* Number of items in wishlist */}
                <span className="navigationBar__navElementWishlist navigationBar_wishlistCount">{basket.length}</span>
            </div>
            
        </div>
    )
}

export default NavigationBar;