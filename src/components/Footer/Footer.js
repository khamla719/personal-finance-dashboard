import React from 'react';
import './Footer.css';

// Footer component: Contains links and social media icons
function Footer() {
  return (
    <footer className="footer">
      {/* Footer links section */}
      <div className="footer-links">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
        <a href="/contact">Contact Us</a>
      </div>
      {/* Social media links section */}
      <div className="social-links">
        {/* Add social media icons/links here */}
      </div>
    </footer>
  );
}

export default Footer;