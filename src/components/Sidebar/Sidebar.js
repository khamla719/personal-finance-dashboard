import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

// Sidebar component: Contains secondary navigation links
function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Sidebar navigation menu */}
      <nav className="sidebar-nav">
        <ul>
          <li><Link to="/">Dashboard Overview</Link></li>
          <li><Link to="/reports">Reports</Link></li>
          <li><Link to="/notifications">Notifications</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;