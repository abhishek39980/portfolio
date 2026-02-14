import React from 'react';
import './SkillsSection.css';

const skills = [
    "C++", "Python", "Java", "SQL", "Dart",
    "Flutter", "Flask", "React.js", "Node.js",
    "Pandas", "NumPy", "OpenCV", "Power BI",
    "SQLite", "MongoDB", "Firebase", "Werkzeug",
    "DSA", "DBMS", "OS", "Computer Networks",
    "Git", "SAS", "VS Code", "OpenAI", "Three.js", "Tableau", "Unity"
];

const SkillsSection = () => {
    return (
        <section className="skills-section">
            <h2 className="section-title">Technical Arsenal</h2>
            <div className="skills-content">
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <span className="skill-text">{skill}</span>
                            <div className="skill-highlight"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
