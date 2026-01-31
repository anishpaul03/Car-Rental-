import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>CAR RENTAL</h3>
          <p>Premium drives for premium people.</p>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <p>Email: support@carrental.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Car Rental Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;