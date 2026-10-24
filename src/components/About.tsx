// src/components/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-block content-container">
      <span className="section-eyebrow reveal active">✦ WHO AM I?</span>
      <h2 className="section-header reveal active">Bridging Development <span className="gradient-text">&amp; Quality Assurance</span></h2>

      <div className="about-grid">
        <div className="glass-card bio-card reveal active">
          <p className="bio-lead" style={{ fontSize: '1.15rem', fontWeight: 500, marginBottom: '16px' }}>
            I'm a <strong>Bachelor of Computing Honours in Information Systems</strong> undergraduate at the University of Sri Jayewardenepura, specializing in Quality Assurance and Requirements Analysis.
          </p>
          <p style={{ marginBottom: '16px', color: 'var(--text-sub)' }}>
            I focus on the intersection of software development and verification — translating product requirements into structured test cases, mapping API payloads, and validating systems end to end. Through my academic and personal projects, I've built three automation frameworks (Playwright for UI, Postman/Newman for API, and an AI-powered QA agent using Playwright MCP), authored 71 manual test cases across 15 modules, and run automated suites in CI/CD pipelines via GitHub Actions.
          </p>
          <p style={{ color: 'var(--text-sub)' }}>
            I'm committed to continuous learning with a clear goal: to become a highly skilled QA Engineer who helps teams ship secure, high-quality software that users trust.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;