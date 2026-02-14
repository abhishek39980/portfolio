import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Loader.css';

const Loader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        // Simulate loading progress
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setIsReady(true);
                    setTimeout(onComplete, 1500); // Wait a bit before unmounting
                    return 100;
                }
                return prev + Math.random() * 5;
            });
        }, 50);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <div className="loader-container">
            <div className="loader-content">
                <AnimatePresence>
                    {isReady && (
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="system-ready"
                        >
                            SYSTEM_READY
                        </motion.h1>
                    )}
                </AnimatePresence>
                <div className="progress-bar-bg">
                    <motion.div
                        className="progress-bar-fill"
                        style={{ width: `${progress}%` }}
                        transition={{ ease: "linear" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Loader;
