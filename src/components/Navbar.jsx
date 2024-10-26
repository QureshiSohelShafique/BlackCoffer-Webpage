import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo"></div> 
            <ul className="nav-links">
                <li><a href="#">Who we are <span className="arrow">&gt;</span></a></li>
                <li><a href="#">What we do <span className="arrow">&gt;</span></a></li>
                <li><a href="#">Insights <span className="arrow">&gt;</span></a></li>
                <li><a href="#">Careers <span className="arrow">&gt;</span></a></li>
            </ul>
            <div className="nav-right">
                <button className="search-bttn">⌕</button>
                <button className="contact-us">📞 Contact Us</button>
            </div>
        </nav>
    );
};

export default Navbar;
