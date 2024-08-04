import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

// Header component: Contains the main navigation and user profile link
function Header() {
  return (
    <header className="header">
      {/* Logo or brand name */}
      <div className="logo">FinanceDash</div>
      
      {/* Main navigation menu */}
      <nav className="main-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/spending">Spending</Link></li>
          <li><Link to="/savings">Savings</Link></li>
          <li><Link to="/investments">Investments</Link></li>
        </ul>
      </nav>
      
      {/* User profile link/button */}
      <div className="user-profile">
        <Link to="/settings">Settings</Link>
      </div>
    </header>
  );
}

export default Header;