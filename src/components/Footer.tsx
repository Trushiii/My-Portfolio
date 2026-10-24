// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="modern-footer">
      <div className="footer-left">
        <div className="footer-logo">
          <span className="logo-bracket">⟨</span> T<span>.</span>G <span className="logo-bracket">⟩</span>
        </div>
        <p className="footer-text">© 2026 Tharushi Gandarawaththa.</p>
        <p className="footer-subtext">Crafted with precision for Quality &amp; Verification.</p>
      </div>
      
      <div className="footer-right">
        <button onClick={scrollToTop} className="footer-top-btn">
          ↑ Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;