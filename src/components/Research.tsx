// src/components/Research.tsx
import React from 'react';
import { BookOpen, Eye } from 'lucide-react';

const Research: React.FC = () => {
  return (
    <section id="research" className="section-block content-container">
      <span className="section-eyebrow reveal">✦ Academic Contribution</span>
      <h2 className="section-header reveal">Research <span className="gradient-text">&amp; Publications</span></h2>

      <div className="glass-card reveal research-card">
        <div className="research-content">
          <h3 className="project-title" style={{ marginTop: 0 }}>
            Systematic Review of Ontology-Based Clinical Decision Support Systems for Breast Cancer Care
          </h3>
          <p style={{ color: 'var(--text-sub)', marginBottom: '14px' }}>
            J'PURA Computing Symposium (JCoS) 2026 · Published &amp; Presented
          </p>
          <div className="research-actions">
            <a href="https://orcid.org/my-orcid?orcid=0009-0008-4222-3030" className="project-link" target="_blank" rel="noopener noreferrer">
              <BookOpen size={15} /> ORCID Profile →
            </a>
          </div>
        </div>
        <div className="research-certificate">
          <div className="research-cert-wrapper">
            <img src="/certificates/jcos.jpg" alt="JCoS 2026 Publication Certificate" className="cert-thumb" />
            <div className="research-cert-overlay">
              <a href="/certificates/jcos.pdf" target="_blank" rel="noopener noreferrer" className="cert-view-btn">
                <Eye size={15} /> View
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;