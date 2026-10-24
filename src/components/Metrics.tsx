// src/components/Metrics.tsx
import React from 'react';

const Metrics: React.FC = () => {
  return (
    <section className="metrics-band content-container">
      <div className="metrics-grid">
        <div className="metric-item reveal">
          <div className="metric-number gradient-text">10+</div>
          <div className="metric-label">Projects Delivered</div>
        </div>
        <div className="metric-item reveal">
          <div className="metric-number gradient-text">3+</div>
          <div className="metric-label">Automation Frameworks</div>
        </div>
        <div className="metric-item reveal">
          <div className="metric-number gradient-text">6+</div>
          <div className="metric-label">Certifications</div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;