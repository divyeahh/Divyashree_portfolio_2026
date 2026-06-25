import React from 'react';
import { projects } from '../data/portfolio';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-label">Projects</div>
        <h2 className="section-heading">Selected work</h2>

        <div className="projects__grid">
          {projects.map(({ num, featured, title, description, tags, link }) => (
            <div
              key={num}
              className={`project-card ${featured ? 'project-card--featured' : ''}`}
            >
              <div className="project-card__num">
                {num}{featured ? ' — Featured' : ''}
              </div>
              <div className="project-card__title">{title}</div>
              <p className="project-card__desc">{description}</p>
              <div className="project-card__tags">
                {tags.map((tag) => (
                  <span key={tag} className="tag" style={{ fontSize: '11px', padding: '3px 8px' }}>
                    {tag}
                  </span>
                ))}
              </div>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card__link"
                >
                  View project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
