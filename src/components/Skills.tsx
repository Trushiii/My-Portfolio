// src/components/Skills.tsx
import React, { useState } from 'react';
import { Layers, Cpu, Code, Wrench, ShieldCheck, Terminal, Bot, Sparkles, Workflow, CheckCircle2, Search, ShieldAlert, ClipboardList, RefreshCw } from 'lucide-react';

const Skills: React.FC = () => {
  const [filter, setFilter] = useState('all');

  return (
    <section id="skills" className="section-block content-container">
      <span className="section-eyebrow reveal">✦ Technical Capabilities</span>
      <h2 className="section-header reveal">Tech Stack <span className="gradient-text">&amp; Engineering Toolkit</span></h2>

      <div className="tech-stack-wrapper reveal">
        <div className="tech-filter-bar">
          <button className={`tech-filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}><Layers size={14}/> All Technologies</button>
          <button className={`tech-filter-btn ${filter === 'automation' ? 'active' : ''}`} onClick={() => setFilter('automation')}><Cpu size={14}/> QA &amp; Automation</button>
          <button className={`tech-filter-btn ${filter === 'languages' ? 'active' : ''}`} onClick={() => setFilter('languages')}><Code size={14}/> Languages &amp; Runtime</button>
          <button className={`tech-filter-btn ${filter === 'tools' ? 'active' : ''}`} onClick={() => setFilter('tools')}><Wrench size={14}/> Tools &amp; CI/CD</button>
          <button className={`tech-filter-btn ${filter === 'practices' ? 'active' : ''}`} onClick={() => setFilter('practices')}><ShieldCheck size={14}/> Core QA Practices</button>
        </div>

        <div className="tech-bento-grid">
          
          {/* Card 1: Automation */}
          {(filter === 'all' || filter === 'automation') && (
            <div className="tech-bento-card">
              <div className="tech-bento-header">
                <div className="tech-bento-title-wrap"><div className="tech-bento-icon"><Cpu size={18} /></div><h3 className="tech-bento-title">Test Automation &amp; QA</h3></div>
                <span className="tech-bento-count">6 Frameworks</span>
              </div>
              <div className="tech-chips-grid">
                <div className="tech-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg" className="tech-chip-logo" alt=""/><div className="tech-chip-info"><span className="tech-chip-name">Playwright</span><span className="tech-chip-tag">E2E Automation</span></div></div>
                <div className="tech-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" className="tech-chip-logo" alt=""/><div className="tech-chip-info"><span className="tech-chip-name">Postman</span><span className="tech-chip-tag">API Testing</span></div></div>
                <div className="tech-chip"><Terminal className="tech-chip-icon" /><div className="tech-chip-info"><span className="tech-chip-name">Newman</span><span className="tech-chip-tag">CLI Collection Runner</span></div></div>
                <div className="tech-chip"><Bot className="tech-chip-icon" /><div className="tech-chip-info"><span className="tech-chip-name">Playwright MCP</span><span className="tech-chip-tag">AI Agent Exploration</span></div></div>
                <div className="tech-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" className="tech-chip-logo" alt=""/><div className="tech-chip-info"><span className="tech-chip-name">Swagger / OpenAPI</span><span className="tech-chip-tag">Schema Validation</span></div></div>
                <div className="tech-chip"><Sparkles className="tech-chip-icon" /><div className="tech-chip-info"><span className="tech-chip-name">GitHub Copilot</span><span className="tech-chip-tag">AI Test Synthesis</span></div></div>
              </div>
            </div>
          )}

          {/* Card 2: Languages */}
          {(filter === 'all' || filter === 'languages') && (
            <div className="tech-bento-card">
              <div className="tech-bento-header">
                <div className="tech-bento-title-wrap"><div className="tech-bento-icon"><Code size={18} /></div><h3 className="tech-bento-title">Languages &amp; Scripting</h3></div>
                <span className="tech-bento-count">6 Languages</span>
              </div>
              <div className="tech-chips-grid">
                <div className="tech-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="tech-chip-logo" alt=""/><div className="tech-chip-info"><span className="tech-chip-name">Java</span><span className="tech-chip-tag">OOP &amp; Test Logic</span></div></div>
                <div className="tech-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="tech-chip-logo" alt=""/><div className="tech-chip-info"><span className="tech-chip-name">Python</span><span className="tech-chip-tag">Scripting &amp; ML</span></div></div>
                <div className="tech-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="tech-chip-logo" alt=""/><div className="tech-chip-info"><span className="tech-chip-name">JavaScript</span><span className="tech-chip-tag">Node.js &amp; Web</span></div></div>
                <div className="tech-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="tech-chip-logo" alt=""/><div className="tech-chip-info"><span className="tech-chip-name">SQL</span><span className="tech-chip-tag">Database QA</span></div></div>
                <div className="tech-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="tech-chip-logo" alt=""/><div className="tech-chip-info"><span className="tech-chip-name">HTML5 &amp; CSS3</span><span className="tech-chip-tag">DOM &amp; Selectors</span></div></div>
                <div className="tech-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" className="tech-chip-logo" alt=""/><div className="tech-chip-info"><span className="tech-chip-name">Kotlin</span><span className="tech-chip-tag">Android Apps</span></div></div>
              </div>
            </div>
          )}

          {/* Card 3: Tools */}
          {(filter === 'all' || filter === 'tools') && (
            <div className="tech-bento-card">
              <div className="tech-bento-header">
                <div className="tech-bento-title-wrap"><div className="tech-bento-icon"><Workflow size={18} /></div><h3 className="tech-bento-title">Tools &amp; CI/CD Pipelines</h3></div>
                <span className="tech-bento-count">6 Tools</span>
              </div>
              <div className="tech-chips-grid">
                <div className="tech-chip"><Workflow className="tech-chip-icon" /><div className="tech-chip-info"><span className="tech-chip-name">GitHub Actions</span><span className="tech-chip-tag">CI/CD Automation</span></div></div>
                <div className="tech-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="tech-chip-logo" alt=""/><div className="tech-chip-info"><span className="tech-chip-name">Git &amp; GitHub</span><span className="tech-chip-tag">Version Control</span></div></div>
                <div className="tech-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" className="tech-chip-logo" alt=""/><div className="tech-chip-info"><span className="tech-chip-name">Jira</span><span className="tech-chip-tag">Defect Tracking</span></div></div>
                <div className="tech-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" className="tech-chip-logo" alt=""/><div className="tech-chip-info"><span className="tech-chip-name">Android Studio</span><span className="tech-chip-tag">Mobile Testing</span></div></div>
                <div className="tech-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="tech-chip-logo" alt=""/><div className="tech-chip-info"><span className="tech-chip-name">Figma</span><span className="tech-chip-tag">UI/UX &amp; Spec QA</span></div></div>
                <div className="tech-chip"><svg className="tech-chip-logo" viewBox="0 0 24 24" fill="currentColor" style={{color:'#FF4B4B'}}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg><div className="tech-chip-info"><span className="tech-chip-name">Streamlit</span><span className="tech-chip-tag">Data Dashboard QA</span></div></div>
              </div>
            </div>
          )}

          {/* Card 4: Practices */}
          {(filter === 'all' || filter === 'practices') && (
            <div className="tech-bento-card">
              <div className="tech-bento-header">
                <div className="tech-bento-title-wrap"><div className="tech-bento-icon"><ShieldCheck size={18} /></div><h3 className="tech-bento-title">Core QA Disciplines</h3></div>
                <span className="tech-bento-count">6 Practices</span>
              </div>
              <div className="tech-chips-grid">
                <div className="tech-chip"><CheckCircle2 className="tech-chip-icon" /><div className="tech-chip-info"><span className="tech-chip-name">Test Case Design</span><span className="tech-chip-tag">Equivalence / Boundary</span></div></div>
                <div className="tech-chip"><Search className="tech-chip-icon" /><div className="tech-chip-info"><span className="tech-chip-name">Exploratory Testing</span><span className="tech-chip-tag">Heuristic Defect Hunt</span></div></div>
                <div className="tech-chip"><ShieldAlert className="tech-chip-icon" /><div className="tech-chip-info"><span className="tech-chip-name">Security QA</span><span className="tech-chip-tag">SQLi &amp; XSS Verification</span></div></div>
                <div className="tech-chip"><Layers className="tech-chip-icon" /><div className="tech-chip-info"><span className="tech-chip-name">Page Object Model</span><span className="tech-chip-tag">Maintainable POM Design</span></div></div>
                <div className="tech-chip"><ClipboardList className="tech-chip-icon" /><div className="tech-chip-info"><span className="tech-chip-name">Requirements BA</span><span className="tech-chip-tag">User Stories &amp; UAT</span></div></div>
                <div className="tech-chip"><RefreshCw className="tech-chip-icon" /><div className="tech-chip-info"><span className="tech-chip-name">Agile &amp; Scrum</span><span className="tech-chip-tag">Sprint Testing Cycle</span></div></div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Skills;