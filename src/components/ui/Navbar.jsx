import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [navColor, setNavColor] = useState('transparent');
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);

            // Change colors based on scroll position
            const scrollPercent = latest / document.documentElement.scrollHeight;

            if (scrollPercent < 0.15) {
                setNavColor('yellow'); // Hero/Profile section
            } else if (scrollPercent < 0.35) {
                setNavColor('pink'); // Skills/Education section
            } else if (scrollPercent < 0.55) {
                setNavColor('blue'); // Projects section
            } else if (scrollPercent < 0.75) {
                setNavColor('green'); // Experience section
            } else {
                setNavColor('purple'); // Certifications/Footer section
            }
        } else {
            setIsScrolled(false);
            setNavColor('transparent');
        }
    });

    return (
        <motion.nav
            className={`navbar ${isScrolled ? 'scrolled' : ''} navbar-${navColor} ${isOpen ? 'nav-open' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <div className="nav-content">
                <div className="logo">AS.</div>

                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#profile" onClick={() => setIsOpen(false)}>Profile</a></li>
                    <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
                    <li><a href="#education" onClick={() => setIsOpen(false)}>Education</a></li>
                    <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
                    <li><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
                    <li><a href="#certifications" onClick={() => setIsOpen(false)}>Certifications</a></li>
                    <li>
                        <a href="/assets/final-resume.pdf" className="resume-btn" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                            Download Resume
                        </a>
                    </li>
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
