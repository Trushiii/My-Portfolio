// src/components/Projects.tsx
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-block content-container">
      <span className="section-eyebrow reveal">✦ Portfolio Matrix</span>
      <h2 className="section-header reveal">Featured <span className="gradient-text">Projects</span></h2>

      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <div key={project.id} className="glass-card reveal">
            <div className="project-video">
              <iframe 
                src={project.videoUrl} 
                width="100%" 
                height="100%" 
                allow="autoplay" 
                allowFullScreen 
                loading="lazy"
                title={project.title}
              ></iframe>
              <div className="video-overlay">
                <span className="video-badge">▶ Demo</span>
              </div>
            </div>
            
            <div>
              {project.tags.map((tag, idx) => (
                <span key={idx} className={`tag ${tag.type === 'mint' ? 'mint' : ''}`}>
                  {tag.text}
                </span>
              ))}
            </div>
            
            <h3 className="project-title">{project.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: project.desc }}></p>
            
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              {project.linkText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;