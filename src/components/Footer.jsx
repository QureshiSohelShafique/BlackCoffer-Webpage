import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          {/* <h4>About</h4> */}
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">About Founder</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Locations</a></li>
          </ul>
        </div>

        <div className="footer-section">
          {/* <h4>Resources</h4> */}
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">Our Process</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Get In Touch</h4>
          <p className="footer-text">
            Taking seamless key<br />
            performance indicators offline<br />
            to maximise the long tail.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon facebook">
              <img src="/facebook.png" alt="Facebook" />
            </a>
            <a href="#" className="social-icon youtube">
              <img src="/youtube.png" alt="YouTube" />
            </a>
            <a href="#" className="social-icon linkedin">
              <img src="/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="#" className="social-icon twitter">
              <img src="/twiter.png" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
