// src/components/Blog.tsx
import React, { useRef } from 'react';
import { BLOGS } from '../constants';
import { ChevronLeft, ChevronRight, Clock, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth * 0.8;
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="blog" className="section-block content-container">
      <div className="blog-header-row">
        <div className="blog-header-titles">
          <span className="section-eyebrow reveal">✦ Thoughts &amp; Writeups</span>
          <h2 className="section-header reveal" style={{ marginBottom: 0 }}>Writing <span className="gradient-text">&amp; Blog</span></h2>
        </div>
        <div className="blog-slider-nav reveal">
          <button className="blog-nav-arrow blog-prev-arrow" onClick={() => scroll('left')} aria-label="Previous articles">
            <ChevronLeft size={18} />
          </button>
          <button className="blog-nav-arrow blog-next-arrow" onClick={() => scroll('right')} aria-label="Next articles">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="blog-carousel-wrapper reveal">
        <div className="blog-carousel-track" ref={scrollRef}>
          {BLOGS.map((blog, idx) => (
            <article key={idx} className="blog-tile glass-card">
              <div className="blog-tile-image-frame">
                <img src={blog.image} alt={blog.title} className="blog-tile-img" />
                <span className="blog-tile-readtime"><Clock size={11} /> {blog.readTime}</span>
              </div>
              <div className="blog-tile-body">
                <span className="blog-tile-category">{blog.category}</span>
                <h3 className="blog-tile-title">{blog.title}</h3>
                <a href={blog.link} target="_blank" rel="noopener noreferrer" className="blog-tile-link">
                  <span>Read Blog</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;