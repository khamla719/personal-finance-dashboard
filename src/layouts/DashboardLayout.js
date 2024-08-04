import React from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import './DashboardLayout.css';

// DashboardLayout component: Provides the overall structure for the dashboard
function DashboardLayout({ children }) {
  return (
    // Main container for the entire dashboard
    <div className="dashboard-layout">
      {/* Header component: Contains navigation and user info */}
      <Header />
      
      {/* Main container: Holds sidebar and main content */}
      <div className="main-container">
        {/* Sidebar component: Contains secondary navigation */}
        <Sidebar />
        
        {/* Main content area: Renders the active page/route */}
        <main className="content-area">{children}</main>
      </div>
      
      {/* Footer component: Contains links and additional info */}
      <Footer />
    </div>
  );
}

export default DashboardLayout;