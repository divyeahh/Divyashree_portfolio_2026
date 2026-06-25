import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>Designed &amp; built by Divyashree R &nbsp;·&nbsp; {new Date().getFullYear()}</p>
    </footer>
  );
}
