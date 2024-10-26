import React from 'react';
import './styles/NavBar.css';
import { FiShoppingCart } from 'react-icons/fi'; // Using react-icons for the cart
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to = '/'>ZProducts</Link>
      </div>
      <div className="cart-icon">
        <Link to = '/cart'><FiShoppingCart /></Link>
      </div>
    </div>
  );
};

export default NavBar;
