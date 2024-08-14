
import React, { useState } from 'react';
import './Header.css';
// import mainlogo from './main.png';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { Button, Menu, MenuItem } from '@mui/material';
import { VscAccount } from 'react-icons/vsc'; // Ensure you have this library installed
import Login from '../../Login/Login';
import Register from '../../Register/Register';


const Header = () => {
  const { user, setUser } = useUser();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleLoginModal = () => {
    setShowLogin(!showLogin);
    setShowRegister(false); // Ensure Register is closed
    setAnchorEl(null); // Close menu
  };

  const toggleRegisterModal = () => {
    setShowRegister(!showRegister);
    setShowLogin(false); // Ensure Login is closed
    setAnchorEl(null); // Close menu
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/'); // Redirect to home or login page
    setAnchorEl(null); // Close menu
  };

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="gal-hm-header">
      <div className="gal-hm-logo-container">
        <a onClick={scrollToTop}>
          {/* <img src={mainlogo} alt="Logo" className="gal-hm-logo" /> */}
        </a>
      </div>
      <nav className="gal-hm-navbar">
        <ul className="gal-hm-nav-links">
          <li>
            <Link to="/" className="gal-hm-nav-link">Landing</Link>
          </li>
          <li>
            <Link to="/home" className="gal-hm-nav-link">Home</Link>
          </li>
          <li>
            <Link to="/contact" className="gal-hm-nav-link">Contact</Link>
          </li>
          <li>
            <Link to="/galary" className="gal-hm-nav-link">Gallery</Link>
          </li>
          <li>
            <Link to="/cart" className="gal-hm-nav-link">Cart</Link>
          </li>
          <li>
            <Button onClick={handleProfileClick}>
              <VscAccount  className='opop'/>
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {user ? (
                <>
                  <MenuItem onClick={handleMenuClose}>
                    <Link to="/Profile">My Profile</Link>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </>
              ) : (
                <>
                  <MenuItem onClick={toggleLoginModal}>Login</MenuItem>
                  <MenuItem onClick={toggleRegisterModal}>Register</MenuItem>
                </>
              )}
            </Menu>
          </li>
        </ul>
      </nav>
      {showLogin && <Login onClose={toggleLoginModal} onRegister={toggleRegisterModal} />}
      {showRegister && <Register onClose={toggleRegisterModal} onLogin={toggleLoginModal} />}
    </header>
  );
};

export default Header;
