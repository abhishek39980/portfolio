import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import Loader from './components/ui/Loader';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import HeroSection from './components/sections/HeroSection';
import ProfileSection from './components/sections/ProfileSection';
import SkillsSection from './components/sections/SkillsSection';
import EducationSection from './components/sections/EducationSection';
import ProjectSection from './components/sections/ProjectSection';
import ExperienceSection from './components/sections/ExperienceSection';
import CertificationsSection from './components/sections/CertificationsSection';
import SocialLinks from './components/ui/SocialLinks';
import { motion } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar />

      {loading && <Loader onComplete={() => setLoading(false)} />}

      {!loading && (
        <main style={{ position: 'relative' }}>
          <div id="home">
            <HeroSection />
          </div>
          <div id="profile">
            <ProfileSection />
          </div>
          <div id="skills">
            <SkillsSection />
          </div>
          <div id="education">
            <EducationSection />
          </div>
          <div id="projects">
            <ProjectSection />
          </div>
          <div id="experience">
            <ExperienceSection />
          </div>
          <div id="certifications">
            <CertificationsSection />
          </div>
          <Footer />
        </main>
      )}
    </div>
  );
}

export default App;
