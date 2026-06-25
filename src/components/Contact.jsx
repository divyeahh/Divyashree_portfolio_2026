import React from 'react';
import { contactLinks, personal } from '../data/portfolio';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-label">Contact</div>
        <h2 className="section-heading">Let's connect</h2>

        <div className="contact__inner">
          <div className="contact__left">
            <p>
              Whether it's a collaboration, an opportunity, or just a chat - I'd love to hear from you. 
              You can also find me writing on Medium
              or exploring projects on GitHub.
            </p>
            <a
              href={`mailto:${personal.links.email}`}
              className="btn btn-primary"
            >
              Send an email
            </a>
          </div>

          <div className="contact__links">
            {contactLinks.map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className="contact-link"
              >
                <div className="contact-link__icon">{icon}</div>
                <div>
                  <div className="contact-link__label">{label}</div>
                  <div className="contact-link__value">{value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
