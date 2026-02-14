import React from 'react';
import { motion } from 'framer-motion';
import './EducationSection.css';

const educationData = [
    {
        id: 1,
        degree: "B.Tech in Computer Engineering",
        institution: "SVKM NMIMS, Indore",
        year: "2023 - Present",
        grade: ""
    },
    {
        id: 2,
        degree: "Class XII",
        institution: "Delhi Public School, Bhopal",
        year: "2022",
        grade: "77.4%"
    },
    {
        id: 3,
        degree: "Class X",
        institution: "Delhi Public School, Bhopal",
        year: "2020",
        grade: "92%"
    }
];

const EducationSection = () => {
    return (
        <motion.section
            className="education-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="education-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Education
                </motion.h2>

                <div className="education-timeline">
                    <motion.div
                        className="timeline-line"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        style={{ transformOrigin: "top" }}
                    />
                    {educationData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={`education-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="education-card">
                                <h3>{item.degree}</h3>
                                <p><strong>{item.institution}</strong></p>
                                <p>{item.year} {item.grade && `| ${item.grade}`}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default EducationSection;
