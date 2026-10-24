// src/components/Hero.tsx
import React, { useState, useEffect } from 'react';
import { Briefcase, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['QA Engineer', 'Automation Enthusiast', 'Bug Hunter', 'Requirements Analyst', 'UAT Coordinator'];

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
      setTypingSpeed(isDeleting ? 30 : 100);

      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        timer = setTimeout(() => {}, 300);
      } else {
        timer = setTimeout(handleType, typingSpeed);
      }
    };
    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-content reveal active">
        <span className="eyebrow">✦ QA &amp; AUTOMATION INTERN CANDIDATE</span>
        <h1>Hi, I'm <i className="gradient-text">Tharushi</i> <br /><i className="gradient-text">Gandarawaththa.</i></h1>
        <div className="hero-rotator">
          <span className="hero-rotator-prefix">I'm a</span>
          <span className="hero-rotator-text">{text}</span>
        </div>
        <p className="hero-desc">
          QA &amp; Automation focused Computing Honours Undergraduate specializing in Information Systems. Building test frameworks with Playwright, Postman, and AI agents (Playwright MCP).
        </p>
        <div className="hero-actions">
          <a href="#projects" className="cv-button"><Briefcase size={17} /> View Projects</a>
          <a href="#contact" className="secondary-button"><MessageCircle size={17} /> Let's Talk</a>
        </div>
      </div>
      
      <div className="hero-image reveal active">
        <div className="image-wrapper">
          <img src="/Formal.jpg" alt="Tharushi Gandarawaththa" />
          <div className="image-glow"></div>
          <div className="image-badge">
            <div className="badge-status-row">
              <span className="badge-dot"></span>
              <span className="badge-status-label">Open to Work</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={scrollToAbout} role="button" tabIndex={0}>
        <span>Scroll Down</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;