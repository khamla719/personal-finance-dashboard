import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">FinanceDash</div>
      <nav className="main-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/spending">Spending</Link></li>
          <li><Link to="/savings">Savings</Link></li>
          <li><Link to="/investments">Investments</Link></li>
        </ul>
      </nav>
      <div className="user-profile">
        <Link to="/settings">Settings</Link>
      </div>
    </header>
  );
}

export default Header;