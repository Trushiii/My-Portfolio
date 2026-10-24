// src/components/Certifications.tsx
import React, { useState } from 'react';
import { CERTIFICATES } from '../constants';
import { Award, ChevronLeft, ChevronRight, ShieldCheck, Building2, Calendar, FileText, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCert = () => setCurrentIndex((prev) => (prev + 1) % CERTIFICATES.length);
  const prevCert = () => setCurrentIndex((prev) => (prev - 1 + CERTIFICATES.length) % CERTIFICATES.length);

  const cert = CERTIFICATES[currentIndex];

  return (
    <section id="certifications" className="section-block content-container">
      <span className="section-eyebrow reveal">✦ Verified Credentials</span>
      <h2 className="section-header reveal">Certifications <span className="gradient-text">&amp; Credentials</span></h2>

      <div className="brochure-wrapper reveal">
        <div className="brochure-card glass-card">
          
          <div className="brochure-topbar">
            <div className="brochure-meta-left">
              <span className="brochure-badge">{cert.category}</span>
              <span className="brochure-verif-pill"><ShieldCheck size={13} /> Verified Credential</span>
            </div>
            <div className="brochure-counter">
              <span className="brochure-current">{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className="brochure-sep">/</span>
              <span className="brochure-total">{String(CERTIFICATES.length).padStart(2, '0')}</span>
            </div>
          </div>

          <div className="brochure-spread slide-in-right" key={currentIndex}>
            <div className="brochure-doc-stage" onClick={nextCert}>
              <div className="brochure-doc-frame">
                <img src={cert.image} alt={cert.title} className="brochure-doc-img" />
              </div>
              <div className="brochure-seal">
                <Award size={13} /> <span>CERTIFIED</span>
              </div>
            </div>

            <div className="brochure-info-pane">
              <div className="brochure-issuer-row">
                <div className="brochure-issuer-badge"><Building2 size={14} /> {cert.issuer}</div>
                <div className="brochure-date-badge"><Calendar size={14} /> {cert.date}</div>
              </div>
              
              <h3 className="brochure-title">{cert.title}</h3>
              <p className="brochure-desc">{cert.desc}</p>
              
              <div className="brochure-skills-tags">
                {cert.skills.map((skill, idx) => (
                  <span key={idx} className="brochure-skill-chip">{skill}</span>
                ))}
              </div>

              <div className="brochure-actions">
                <a href={cert.pdf} target="_blank" rel="noopener noreferrer" className="brochure-pdf-btn">
                  <FileText size={14} /> <span>View Verified PDF</span> <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

          <div className="brochure-controls">
            <button onClick={prevCert} className="brochure-nav-btn"><ChevronLeft size={16} /> Previous</button>
            <div className="brochure-pagination-dots">
              {CERTIFICATES.map((_, idx) => (
                <button 
                  key={idx} 
                  className={`brochure-dot ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to certificate ${idx + 1}`}
                />
              ))}
            </div>
            <button onClick={nextCert} className="brochure-nav-btn">Next <ChevronRight size={16} /></button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;