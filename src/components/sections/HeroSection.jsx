import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import SocialLinks from '../ui/SocialLinks';
import TypewriterText from '../ui/TypewriterText';
import ScrambleText from '../ui/ScrambleText';
import './HeroSection.css';
import './hero-shapes.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
            {/* Additional decorative shapes */}
            <div className="hero-shape hero-shape-1"></div>
            <div className="hero-shape hero-shape-2"></div>
            <div className="hero-shape hero-shape-3"></div>

            <div className="hero-container">
                <div className="hero-title-wrapper">
                    <h1 className="hero-title" style={{ cursor: 'help' }}>
                        <ScrambleText
                            phrases={[
                                'ABHISHEK SONI',
                                'DEVELOPER',
                                'ENGINEER',
                                'BUILDER'
                            ]}
                        />
                    </h1>
                </div>

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <span className="subtitle-static">I'm a </span>
                    <TypewriterText
                        phrases={[
                            "Software Developer",
                            "Full-Stack Engineer",
                            "AI Enthusiast",
                            "Problem Solver"
                        ]}
                        typingSpeed={80}
                        deletingSpeed={40}
                        pauseDuration={2000}
                    />
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}
                >
                    <SocialLinks />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;

