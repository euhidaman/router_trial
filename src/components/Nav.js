import React from 'react';
import './Nav.css';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div >
            <ul className="nav">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </div>
    )
}

export default Nav;