import React from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import './DashboardLayout.css';

function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      <Header />
      <div className="main-container">
        <Sidebar />
        <main className="content-area">{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default DashboardLayout;