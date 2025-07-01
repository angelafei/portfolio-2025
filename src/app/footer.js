"use client"; // This is a client component

import React from 'react';
import './footer.css';

const Footer = () => (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3 className="logo">Angela Fei</h3>
          <p className="tagline">Crafting with simplicity</p>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="mailto:future2931@gmail.com">Contact</a></li>
          </ul>
        </div>
        {/* <div className="footer-column">
          <h4>Contact</h4>
          <p>Email: <a href="mailto:future2931@gmail.com">future2931@gmail.com</a></p>
        </div> */}
      </div>
      <div className="footer-bottom">
        <p>© 2025 Angela Fei. All rights reserved.</p>
      </div>
    </footer>
  );
  
  export default Footer;