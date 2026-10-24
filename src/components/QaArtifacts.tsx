// src/components/QaArtifacts.tsx
import React from 'react';
import { QA_ARTIFACTS } from '../constants';
import { FileCheck, CheckCheck, ShieldAlert, ArrowUpRight, FileText } from 'lucide-react';

const QaArtifacts: React.FC = () => {
  
  const renderIcon = (iconName: string, size = 18) => {
    switch(iconName) {
      case 'FileCheck': return <FileCheck size={size} />;
      case 'CheckCheck': return <CheckCheck size={size} />;
      case 'ShieldAlert': return <ShieldAlert size={size} />;
      default: return <FileCheck size={size} />;
    }
  };

  return (
    <section id="qa-artifacts" className="section-block content-container">
      <span className="section-eyebrow">✦ Evidence of Work</span>
      <h2 className="section-header">QA <span className="gradient-text">Artifacts</span></h2>

      <div className="artifacts-layout">
        <div className="laptop-mockup">
          <div className="laptop-header">
            <div className="laptop-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <span className="laptop-title">~/qa-artifacts/evidence</span>
          </div>

          <div className="laptop-body">
            <p className="laptop-intro">Select an artifact to inspect the documentation:</p>
            
            <div className="artifact-list">
              {QA_ARTIFACTS.map((artifact) => (
                <a 
                  key={artifact.id} 
                  href={artifact.pdf} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="artifact-row"
                >
                  <div className="artifact-row-icon">
                    {renderIcon(artifact.icon, 20)}
                  </div>
                  
                  <div className="artifact-row-content">
                    <div className="artifact-row-title-group">
                      <h3 className="artifact-row-title">{artifact.title}</h3>
                      <span className="artifact-row-type">{artifact.type}</span>
                    </div>
                    <p className="artifact-row-desc">{artifact.subtitle} — {artifact.desc}</p>
                  </div>
                  
                  <div className="artifact-row-action">
                    <FileText size={16} />
                    <span>Open PDF</span>
                    <ArrowUpRight size={14} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QaArtifacts;