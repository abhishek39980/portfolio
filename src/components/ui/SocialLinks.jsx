import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import './SocialLinks.css';

const SocialLinks = ({ className = '' }) => {
    return (
        <div className={`social-links ${className}`}>
            <a href="https://github.com/abhishek39980" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/abhishek-soni-043212279/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/abhxshek27/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Instagram size={20} />
            </a>
            <a href="mailto:abhisheksoniofficial07@gmail.com" className="social-icon">
                <Mail size={20} />
            </a>
        </div>
    );
};

export default SocialLinks;
