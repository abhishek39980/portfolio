import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';
import './CertificationsSection.css';

const certifications = [
    {
        title: "NPTEL: Artificial Intelligence",
        subtitle: "Concepts and Techniques",
        year: "2025",
        tags: ["Search Algorithms", "Logic", "Knowl. Rep."],
        link: "/assets/cert1.pdf"
    },
    {
        title: "Google Cloud Certifications",
        subtitle: "Cloud Computing & GenAI",
        year: "2024",
        tags: ["Cloud Infra", "GenAI Studio", "Security", "Prompt Eng."],
        link: "/assets/cert2.pdf"
    },
    {
        title: "Udemy Bootcamp",
        subtitle: "The Complete Full Stack Web Development",
        year: "2024",
        tags: ["MERN Stack", "Web Dev", "APIs", "Authentication"],
        link: "/assets/cert3.pdf"
    }
];

const CertificationsSection = () => {
    return (
        <motion.section
            className="certifications-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <h2 className="section-title">Certifications</h2>
            <div className="cert-grid">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        className="cert-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                    >
                        <h3>{cert.title}</h3>
                        <p><strong>{cert.subtitle}</strong></p>
                        <p className="cert-year">{cert.year}</p>

                        <div className="cert-tags">
                            {cert.tags.map((tag, i) => (
                                <span key={i} className="cert-tag">{tag}</span>
                            ))}
                        </div>

                        <div className="cert-actions">
                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-btn">
                                <FileText size={16} style={{ marginRight: '5px' }} /> View Certificate
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default CertificationsSection;
