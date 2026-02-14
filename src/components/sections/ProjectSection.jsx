import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';
import './ProjectSection.css';

const projects = [
    {
        title: "Autonomous Finance Agent",
        description: "A lightweight, autonomous AI agent that analyzes bank statements, categorizes transactions using Local LLMs (Mistral-7b), and generates insightful financial dashboards. Features specific PDF parsing for Indian bank formats and privacy-first local processing.",
        tags: ["Python", "Local LLMs", "PDF Parsing", "React"],
        link: "https://github.com/abhishek39980/autonomous-finance-agent",
        ctaLabel: "GitHub",
        image: "/assets/project1.png"
    },
    {
        title: "NMIMS Hostel Management System",
        description: "A comprehensive dual-role mobile application for digitizing hostel operations. Features a Student Hub for complaints and mess menus, and a Warden Dashboard for administration. Built with Flutter and a Python Flask backend.",
        tags: ["Flutter", "Flask", "SQLite", "Dart"],
        link: "https://github.com/Neelanshdosi/Hostel-App",
        ctaLabel: "GitHub",
        image: "/assets/project2.jpg"
    },
    {
        title: "Self-Balancing Robot",
        description: "A sophisticated autonomous system maintaining vertical stability using PID control and Sensor Fusion (MPU-9250). Features obstacle avoidance with ultrasonic sensors and real-time telemetry via Wi-Fi/Bluetooth.",
        tags: ["C++", "Arduino", "PID Control", "IoT"],
        link: "",
        ctaLabel: "Live Demo",
        image: "/assets/project3.jpg"
    }
];

const ProjectSection = () => {
    return (
        <motion.section
            className="project-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <h2 className="section-title project-section-title">FEATURED PROJECTS</h2>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </motion.section>
    );
};

export default ProjectSection;
