import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoModalOpen, setLogoModalOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (event) => {
      if (menuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav ref={navRef} className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <button
          className="navbar__logo"
          type="button"
          aria-haspopup="dialog"
          aria-expanded={logoModalOpen}
          onClick={() => setLogoModalOpen(true)}
        >
          <img src="/Logo.png" alt="Logo" />
        </button>
        <button className="navbar__hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a href={href} onClick={closeMenu}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {logoModalOpen && (
        <div className="modal show" style={{ display: 'block', overflowY: 'hidden' }} tabIndex="-1" role="dialog" onClick={() => setLogoModalOpen(false)}>
          <div className="modal-dialog modal-dialog-centered" role="document" onClick={(event) => event.stopPropagation()}>
            <div className="modal-content" style={{backgroundColor: '#292925', color: '#D9D9D9'}}>
              <div className="modal-header">
                <h5 className="modal-title">About the theme</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={() => setLogoModalOpen(false)} />
              </div>
              <div className="modal-body">
                <div><svg
                width="139"
                height="50"
                viewBox="0 0 139 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginBottom: "10px" }}
              >
                <rect width="25" height="50" fill="#292925" />
                <rect x="114" width="25" height="50" fill="#D9D9D9" />
                <rect x="38" width="25" height="50" fill="#C895E0" />
                <rect x="76" width="25" height="50" fill="#C0C0C0" />
              </svg>
              <p>
                I carefully curated a combination of black and purple, as they
                evoke an air of mystery and ignite curiosity within users.
                However, I also wanted to infuse a warm and welcoming ambience,
                which led me to temper the purple with a soothing lavender. This
                blend creates an alluring environment that invites users to
                explore and engage.
              </p>
            </div>
            <div>
              <h3 style={{ color: "#c896e0", marginBottom: "5px" }}>
                About the logo
              </h3>

              <p
                style={{
                  fontWeight: "bold",
                  fontStretch: "extra-expanded",
                  fontSize: "18px",
                }}
              >
                The letter (c):
              </p>
              <svg
                width="91"
                height="30"
                viewBox="0 0 91 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_273_103"
                  // style="mask-type:luminance"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="30"
                  height="30"
                >
                  <path d="M30 0H0V30H30V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_273_103)">
                  <path
                    d="M15 30C6.75 30 0 23.4625 0 15.4722V14.5278C0 6.53751 6.75 0 15 0C23.25 0 30 6.53751 30 14.5278V15.4722C30 23.4625 23.25 30 15 30Z"
                    fill="#C895E0"
                  />
                  <path
                    d="M14.9678 19.1331L11.1428 15.138L14.9678 11.1428H18.9428L15.1178 15.2106L18.9428 19.2058H14.9678V19.1331Z"
                    fill="#141414"
                  />
                </g>
                <mask
                  id="mask1_273_103"
                  // style="mask-type:luminance"
                  maskUnits="userSpaceOnUse"
                  x="61"
                  y="0"
                  width="30"
                  height="30"
                >
                  <path d="M91 0H61V30H91V0Z" fill="white" />
                </mask>
                <g mask="url(#mask1_273_103)">
                  <path
                    d="M76 30C67.75 30 61 23.4625 61 15.4722V14.5278C61 6.53751 67.75 0 76 0C84.25 0 91 6.53751 91 14.5278V15.4722C91 23.4625 84.25 30 76 30Z"
                    fill="#C895E0"
                  />
                </g>
                <path
                  d="M81.4 7.32301V4.80005H73V25.8H81.2923C80.4308 25.7258 79.6769 25.2064 79.6769 24.5386C79.6769 24.1675 79.8923 23.8707 80.2154 23.6481C80.5385 23.4255 80.8615 23.3513 81.2923 23.2771H77.3077V7.32301H81.4Z"
                  fill="#141414"
                />
                <path
                  d="M45.4999 6.92847C46.0916 6.92847 46.5713 7.40816 46.5713 7.9999V14.4285H52.9999C53.5916 14.4285 54.0713 14.9082 54.0713 15.4999C54.0713 16.0916 53.5916 16.5713 52.9999 16.5713H46.5713V22.9999C46.5713 23.5916 46.0916 24.0713 45.4999 24.0713C44.9082 24.0713 44.4285 23.5916 44.4285 22.9999V16.5713H37.9999C37.4082 16.5713 36.9285 16.0916 36.9285 15.4999C36.9285 14.9082 37.4082 14.4285 37.9999 14.4285H44.4285V7.9999C44.4285 7.40816 44.9082 6.92847 45.4999 6.92847Z"
                  fill="black"
                />
              </svg>
              <p style={{ marginTop: "10px" }}>
                The letter (c) represents "creativity" and "coding", embodying
                both the aspects of frontend development.
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontStretch: "extra-expanded",
                  fontSize: "18px",
                }}
              >
                The letter (d):
              </p>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_266_55"
                  // style="mask-type:luminance"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="30"
                  height="30"
                >
                  <path d="M30 0H0V30H30V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_266_55)">
                  <path
                    d="M15 30C6.75 30 0 23.4625 0 15.4722V14.5278C0 6.53751 6.75 0 15 0C23.25 0 30 6.53751 30 14.5278V15.4722C30 23.4625 23.25 30 15 30Z"
                    fill="#C895E0"
                  />
                  <path
                    d="M9.5999 24.4795L5.7749 20.4844L9.5999 16.4893H13.5749L9.7499 20.557L13.5749 24.5522H9.5999V24.4795Z"
                    fill="#141414"
                  />
                  <path
                    d="M20.1 6.46485V3.99512H14.25V24.552H20.025C19.425 24.4794 18.9 23.9709 18.9 23.3172C18.9 22.954 19.05 22.6634 19.275 22.4455C19.5 22.2276 19.725 22.1549 20.025 22.0823H17.25V6.46485H20.1Z"
                    fill="#141414"
                  />
                  <path
                    d="M21.6 24.4795C20.925 24.4795 20.325 23.8984 20.325 23.2446C20.325 22.5909 20.925 22.0098 21.6 22.0098C22.275 22.0098 22.875 22.5909 22.875 23.2446C22.875 23.971 22.35 24.4795 21.6 24.4795Z"
                    fill="#141414"
                  />
                </g>
              </svg>
              <p style={{ marginTop: "10px" }}>
                The c's together depict the letter "d", which also represents
                the first letter of my name Divyashree.
              </p>
              {/* <footer style={{ fontStyle: "italic", fontSize: "10px" }}>
                *The app has been developed with React.js, HTML, CSS, Bootstrap,
                Figma and VS Code.
              </footer> */}
            </div>
              </div>
              
            </div>
          </div>
          <div className="modal-backdrop show"></div>
        </div>
      )}
    </>
  );
}
