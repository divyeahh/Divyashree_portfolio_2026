import React from 'react';
import { personal } from '../data/portfolio';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero_grid">
        <div>
          <img src='/Mask group.svg' className="hero__image" alt="Hero illustration" />
        </div>

        <div className="container hero__inner">
          <div className="hero__eyebrow">{personal.title}</div>

          <h1 className="hero__name">
            {personal.name.split(' ')[0]}{' '}
            <em>{personal.name.split(' ').slice(1).join(' ')}</em>
          </h1>

          <p className="hero__tagline">{personal.tagline}</p>

          {/* <p className="hero__bio">
          Software engineer based in Bengaluru, specialising in large-scale
          frontend systems, micro-frontend architecture, and thoughtfully crafted
          user interfaces. 3+ years of end-to-end experience, from pixels to APIs.
        </p> */}

          <div className="hero__cta">
            <a href="#projects" className="btn btn-primary">View work</a>
            <a href="/Divyashree_Resume_2026_Recent.pdf" className="btn btn-outline" download>Download Resume</a>
          </div>

          <div className="hero__social">
            <a href={personal.links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={personal.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={personal.links.medium} target="_blank" rel="noreferrer">Medium</a>
            <a href={`mailto:${personal.links.email}`}>{personal.links.email}</a>
          </div>
        </div> 
      </div>

    </section>
  );
}
