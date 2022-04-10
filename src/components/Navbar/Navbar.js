import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="nav_logo">CRYPTO HUNTER</Link>
      <Link to="/watchlist" className="nav_watchlist"><button className="nav_watchlist_button">Watchlist</button></Link>
    </nav>
  );
};

export default Navbar;