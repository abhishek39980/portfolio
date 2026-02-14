import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section footer-brand">
                    <h2 className="footer-title">ABHISHEK SONI.</h2>
                    <p className="footer-description">
                        Building intelligent systems with code. Passionate about AI, Robotics, and building the future.
                    </p>
                </div>

                <div className="footer-section">
                    <h3 className="footer-heading">SITEMAP</h3>
                    <ul className="footer-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#projects">Works</a></li>
                        <li><a href="#profile">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3 className="footer-heading">SOCIALS</h3>
                    <div className="footer-socials">
                        <a href="https://www.linkedin.com/in/abhishek-soni-043212279/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="ri-linkedin-fill"></i>
                        </a>
                        <a href="https://github.com/abhishek39980" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <i className="ri-github-fill"></i>
                        </a>
                        <a href="https://www.instagram.com/abhxshek27/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <i className="ri-instagram-fill"></i>
                        </a>
                        <a href="mailto:abhisheksoniofficial07@gmail.com" aria-label="Email">
                            <i className="ri-mail-line"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 ABHISHEK SONI. ALL RIGHTS RESERVED.</p>
            </div>

            <div className="footer-background-text">SYSTEM</div>
        </footer>
    );
};

export default Footer;
