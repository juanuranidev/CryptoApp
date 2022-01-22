import React from 'react';
import { Link } from 'react-router-dom';
import './_Navbar.scss'

const Navbar = () => {
  return (
    <nav className="nav">
        <Link to="/" className="nav_logo">Crypto Hunter</Link>
        <Link to="/watchlist" className="nav_a"><button className="nav_a_button">Watchlist</button></Link>
    </nav>
  );
};

export default Navbar;
