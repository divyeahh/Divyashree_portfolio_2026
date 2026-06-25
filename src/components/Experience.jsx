import React from 'react';
import { experience } from '../data/portfolio';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-label">Experience</div>
        <h2 className="section-heading">Where I've worked</h2>

        <div className="exp__list">
          {experience.map(({ period, company, companyLink, role, note, description }) => (
            <div key={company} className="exp__item">
              <div className="exp__meta">
                <div className="exp__period">{period}</div>
                {companyLink ? (
                  <a
                    className="exp__company"
                    href={companyLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {company}
                  </a>
                ) : (
                  <div className="exp__company">{company}</div>
                )}
              </div>
              <div className="exp__content">
                <div className="exp__role">{role}</div>
                {note && <div className="exp__note">{note}</div>}
                <p className="exp__desc">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
