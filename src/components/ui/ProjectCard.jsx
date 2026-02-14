import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, tags, link, ctaLabel }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]); // Max 5 degrees
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

    const contentX = useTransform(mouseX, [-0.5, 0.5], [10, -10]); // Opposing 10px shift
    const contentY = useTransform(mouseY, [-0.5, 0.5], [10, -10]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;

        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            className="project-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
        >
            <motion.div
                className="project-content"
                style={{
                    x: contentX,
                    y: contentY,
                    translateZ: 20
                }}
            >
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="tags">
                    {tags.map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                    ))}
                </div>
                <div className="links">
                    {link ? (
                        <a href={link} target="_blank" rel="noopener noreferrer" data-hover>
                            {ctaLabel || "View Project"} {ctaLabel === "GitHub" ? <Github size={16} /> : <ExternalLink size={16} />}
                        </a>
                    ) : (
                        <span className="project-status">
                            {ctaLabel}
                        </span>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;
