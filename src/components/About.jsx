import React from 'react';
import { personal } from '../data/portfolio';
import './About.css';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-label">About</div>
        <h2 className="section-heading">Who I am</h2>

        <div className="about__grid">
          <div className="about__text">
            {personal.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="about__facts">
            {personal.facts.map(({ label, value, highlight, tag }) => (
              <div key={label} className="fact-card">
                <div className="fact-card__label">{label}</div>
                <div className="fact-card__content">
                  <div className="fact-card__value">
                    {highlight ? (
                      <>
                        <span className="fact-card__highlight">
                          {value.startsWith(highlight)
                            ? highlight
                            : value.slice(0, value.indexOf(highlight) + highlight.length).replace(highlight, '')}
                        </span>
                        {value.startsWith(highlight)
                          ? value.slice(highlight.length)
                          : value.replace(highlight, <span className="fact-card__highlight">{highlight}</span>)}
                      </>
                    ) : (
                      value
                    )}
                  </div>
                  {tag && <div className="fact-card__tag">{tag}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
