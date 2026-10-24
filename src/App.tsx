// src/App.tsx
import React, { useState, useEffect } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import QaArtifacts from './components/QaArtifacts';
import Certifications from './components/Certifications';
import Research from './components/Research';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  useScrollReveal(loading); 

  useEffect(() => {
    document.body.classList.remove('preload');
    document.body.classList.add('loaded');
  }, []);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <div id="top">
      <div className="grid-bg"></div>
      <div className="glow-orb glow-orb-1"></div>
      <div className="glow-orb glow-orb-2"></div>
      <div className="glow-orb glow-orb-3"></div>
      <div className="glow-orb glow-orb-4"></div>

      <div className="qa-icons-bg">
        <div className="qa-icon" style={{ '--x': '3%', '--y': '14%', '--size': '52px', '--rot': '-12deg', '--dur': '26s', '--delay': '0s' } as React.CSSProperties}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg" alt="" /></div>
        <div className="qa-icon" style={{ '--x': '93%', '--y': '18%', '--size': '44px', '--rot': '10deg', '--dur': '22s', '--delay': '-3s' } as React.CSSProperties}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="" /></div>
        <div className="qa-icon" style={{ '--x': '5%', '--y': '56%', '--size': '48px', '--rot': '8deg', '--dur': '28s', '--delay': '-7s' } as React.CSSProperties}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" alt="" /></div>
        <div className="qa-icon" style={{ '--x': '92%', '--y': '60%', '--size': '54px', '--rot': '-6deg', '--dur': '24s', '--delay': '-11s' } as React.CSSProperties}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg" alt="" /></div>
        <div className="qa-icon" style={{ '--x': '9%', '--y': '82%', '--size': '42px', '--rot': '14deg', '--dur': '30s', '--delay': '-5s' } as React.CSSProperties}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt="" /></div>
        <div className="qa-icon" style={{ '--x': '88%', '--y': '84%', '--size': '46px', '--rot': '-10deg', '--dur': '27s', '--delay': '-15s' } as React.CSSProperties}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" alt="" /></div>
      </div>

      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main id="web-layout">
        <Hero />
        <Metrics />
        <About />
        <Skills />
        <Projects />
        <QaArtifacts />
        <Certifications />
        <Research />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;