import React from 'react';
import './Nav.css';
import { Link } from "react-router-dom";

// use this code snippet to remove underlines from Link tag -->
//     style={ { textDecoration: 'none' } }

const Nav = () => {
    return (
        <div >
            <ul className="nav">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <li>Home</li>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none' }}>
                    <li>About</li>
                </Link>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                    <li>Contact</li>
                </Link>
            </ul>
        </div>
    )
}

export default Nav;