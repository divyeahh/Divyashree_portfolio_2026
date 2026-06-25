import React from 'react';
import { skills } from '../data/portfolio';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-label">Skills</div>
        <h2 className="section-heading">Tech stack</h2>

        <div className="skills__grid">
          {skills.map(({ group, tags, muted }) => (
            <div key={group} className="skill-group">
              <div className="skill-group__title">{group}</div>
              <div className="skill-group__tags">
                {tags.map((tag) => (
                  <span key={tag} className={`tag ${muted ? 'tag-muted' : ''}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
