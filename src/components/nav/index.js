import React from 'react';
import "./nav.css";
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navStyle">
            <ul>
                <li><Link to="/website/">Home</Link></li>
                <li><Link to="/website/Projects">Projects</Link></li>
                <li><Link to="/website/About">About</Link></li>
                <li><Link to="/website/Contact">Contact</Link></li>
            </ul>
        </nav>
    )
};

export default Nav;



