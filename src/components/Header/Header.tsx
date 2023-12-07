import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css';

const Header: React.FC = () => {
    return (
        <header>
            <Link className="site-logo" to="/">LOGO PUT HERE</Link>
            <nav>
                <NavLink to="/">Main Page</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contacts">Contact</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/recenze">Recenze</NavLink>
            </nav>
        </header>
    );
};

export default Header;
