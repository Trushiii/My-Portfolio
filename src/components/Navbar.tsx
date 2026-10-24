// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { ArrowUp, Moon, Sun, FileCheck, Menu } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav>
      <a href="#top" className="logo">
        <span className="logo-bracket">⟨</span> T<span>.</span>G <span className="logo-bracket">⟩</span>
      </a>

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
        <a href="#certifications" onClick={() => setIsMenuOpen(false)}>Certifications</a>
        <a href="#blog" onClick={() => setIsMenuOpen(false)}>Blog</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
      </div>

      <div className="nav-actions">
        <button className={`nav-scroll-top ${showScrollTop ? 'show' : ''}`} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <ArrowUp size={16} />
        </button>
        
        <button className="nav-theme-btn" onClick={toggleTheme}>
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <a href="/Tharushi_Gandarawaththa - CV.pdf" target="_blank" rel="noopener noreferrer" className="nav-cv-btn">
          <FileCheck size={16} /> My CV
        </a>

        <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu size={24} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;