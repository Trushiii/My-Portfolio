// src/components/Contact.tsx
import React from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  // Inside src/components/Contact.tsx
  return (
    <section id="contact" className="section-block content-container">
      <span className="section-eyebrow reveal">✦ Let's Connect</span>
      
      <h2 className="section-header reveal" style={{ marginBottom: '40px' }}>
        Get <span className="gradient-text">&amp;</span> In Touch
      </h2>

      <div className="contact-layout">
        {/* LEFT: Info Card */}
        <div className="contact-info-card glass-card reveal">
          <div className="contact-info-list">
            {/* Email */}
            <a href="mailto:tharugandarawaththa@gmail.com" className="contact-info-item" data-brand="email">
              <span className="contact-info-icon">
                <img src="https://cdn.simpleicons.org/gmail/EA4335" alt="Email" loading="lazy" />
              </span>
              <span className="contact-info-text">
                <span className="contact-info-label">Email</span>
                <span className="contact-info-value">tharugandarawaththa@gmail.com</span>
              </span>
            </a>

            {/* Phone */}
            <a href="tel:+94711664484" className="contact-info-item" data-brand="phone">
              <span className="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </span>
              <span className="contact-info-text">
                <span className="contact-info-label">Phone</span>
                <span className="contact-info-value">+94 71 166 4484</span>
              </span>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/94711664484" target="_blank" rel="noopener noreferrer" className="contact-info-item" data-brand="whatsapp">
              <span className="contact-info-icon">
                <img src="https://cdn.simpleicons.org/whatsapp/25D366" alt="WhatsApp" loading="lazy" />
              </span>
              <span className="contact-info-text">
                <span className="contact-info-label">WhatsApp</span>
                <span className="contact-info-value">+94 71 166 4484</span>
              </span>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/tharushi-gandarawaththa-2144122a9/" target="_blank" rel="noopener noreferrer" className="contact-info-item" data-brand="linkedin">
              <span className="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="#0A66C2" style={{ width: '22px', height: '22px' }}>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </span>
              <span className="contact-info-text">
                <span className="contact-info-label">LinkedIn</span>
                <span className="contact-info-value">/in/tharushi-gandarawaththa</span>
              </span>
            </a>

            {/* GitHub */}
            <a href="https://github.com/Trushiii" target="_blank" rel="noopener noreferrer" className="contact-info-item" data-brand="github">
              <span className="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px', display: 'block' }}>
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </span>
              <span className="contact-info-text">
                <span className="contact-info-label">GitHub</span>
                <span className="contact-info-value">@Trushiii</span>
              </span>
            </a>

            {/* Medium */}
            <a href="https://medium.com/@tharugandarawaththa" target="_blank" rel="noopener noreferrer" className="contact-info-item" data-brand="medium">
              <span className="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px', display: 'block' }}>
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </span>
              <span className="contact-info-text">
                <span className="contact-info-label">Medium</span>
                <span className="contact-info-value">@tharugandarawaththa</span>
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT: Direct Message Form */}
        <div className="message-form-wrapper glass-card reveal">
          <h3 className="message-form-title">Send a Direct Message</h3>
          <form action="https://formspree.io/f/xwlpzale" method="POST" className="message-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="you@example.com" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="What is this about?" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Write your message here..." required></textarea>
            </div>
            <button type="submit" className="message-submit-btn">
              <Send size={16} /> Send Message
            </button>
          </form>
        </div>
      </div>
           {/* Modern CTA Banner */}
      <div className="modern-cta-banner reveal active">
        <span className="cta-icon">📬</span>
        <p>Open to internship opportunities, collaboration, and QA discussions.</p>
      </div>
    </section>
  );
};

export default Contact;