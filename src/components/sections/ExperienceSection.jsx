import React from 'react';
import { motion } from 'framer-motion';
import './ExperienceSection.css';

const experiences = [
    {
        id: 1,
        role: "Creative & Technical Team Member",
        company: "Club Malhar, SVKM NMIMS",
        date: "2023 - Present",
        description: "Contributed to event logistics, creative design, and technical setups for the annual college fest. Collaborated with cross-functional teams to ensure seamless event execution.",
        tech: ["Event Management", "Technical Setup", "Creative Design"]
    },
    {
        id: 2,
        role: "IT Support / Networking Intern",
        company: "Netcom, Bhopal",
        date: "May - June 2025",
        description: "Assisted in enterprise LAN setup and TCP/IP troubleshooting. Maintained network uptime for 50+ client systems.",
        tech: ["Networking", "TCP/IP", "LAN Setup"]
    },
    {
        id: 3,
        role: "Mental Health Awareness Specialist",
        company: "Sewa Bharti NGO, Bhopal",
        date: "May - July 2023",
        description: "Led outreach campaigns impacting 1,000+ individuals in rural areas. Improved access to mental health resources by 25% through community workshops.",
        tech: ["Public Speaking", "Community Outreach", "Social Impact"]
    },
    {
        id: 4,
        role: "Core Team Lead",
        company: "Aalochak Club, SVKM NMIMS",
        date: "Aug 2023 - Present",
        description: "Leading a team of 30+ members to organize literary and debating events. Increased club engagement and event participation by 40% year-over-year.",
        tech: ["Leadership", "Event Planning", "Team Management"]
    },
    {
        id: 5,
        role: "Technical Core Team Member",
        company: "GDSC, SVKM NMIMS",
        date: "2024 - 2025",
        description: "Organized hackathons and technical workshops for over 100+ students. Mentored peers in Google Cloud technologies and web development.",
        tech: ["Google Cloud", "Web Development", "Mentorship"]
    }
];

const ExperienceCard = ({ exp, index }) => {
    return (
        <motion.div
            className="experience-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
        >
            <div className="exp-date">{exp.date}</div>
            <div className="exp-content">
                <h3 className="exp-role">{exp.role}</h3>
                <h4 className="exp-company">{exp.company}</h4>
                <p className="exp-desc">{exp.description}</p>
                <div className="exp-tech">
                    {exp.tech.map((t, i) => (
                        <span key={i} className="tech-badge">{t}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const ExperienceSection = () => {
    return (
        <motion.section
            className="experience-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <h2 className="section-title">Experience</h2>
            <div className="experience-timeline">
                <motion.div
                    className="timeline-line"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    style={{ transformOrigin: "top" }}
                />
                {experiences.map((exp, index) => (
                    <ExperienceCard key={exp.id} exp={exp} index={index} />
                ))}
            </div>
        </motion.section>
    );
};

export default ExperienceSection;
