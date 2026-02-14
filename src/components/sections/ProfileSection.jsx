import React from 'react';
import { motion } from 'framer-motion';
import './ProfileSection.css';

const ProfileSection = () => {
    return (
        <motion.section
            className="profile-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <div className="profile-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Profile
                </motion.h2>
                <motion.div
                    className="profile-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>About Me</h3>
                    <p style={{ marginBottom: '1rem' }}>
                        I am a passionate <strong>Computer Engineering student</strong> and software developer with
                        a deep love for building scalable systems and solving complex problems. My journey began
                        with simple scripts and has evolved into architecting full-stack applications and exploring
                        the frontiers of <strong>Artificial Intelligence</strong>.
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                        I’m passionate about developing intelligent systems and autonomous agents that transform complex
                        challenges into practical, real-world solutions. I’m driven by curiosity and a desire to push
                        technology toward becoming a true partner in decision-making and productivity. Beyond coding,
                        I’m a car enthusiast and enjoy keeping up with the latest technology trends, new products, and
                        innovations shaping the future of AI and engineering.
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ProfileSection;
