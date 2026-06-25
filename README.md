# Divyashree R — Portfolio

A clean, production-ready React portfolio built with CRA (Create React App).

## Project Structure

```
src/
├── data/
│   └── portfolio.js        ← All your content lives here. Edit this to update the site.
├── components/
│   ├── Navbar.jsx / .css
│   ├── Hero.jsx / .css
│   ├── About.jsx / .css
│   ├── Skills.jsx / .css
│   ├── Experience.jsx / .css
│   ├── Projects.jsx / .css
│   ├── Contact.jsx / .css
│   └── Footer.jsx / .css
├── App.jsx
├── index.js
└── index.css               ← Global CSS variables, resets, shared utilities
```

## Getting Started

```bash
# Install dependencies
npm install

# Run locally
npm start

# Build for production
npm run build
```

## Customising Content

All text content (bio, skills, experience, projects, links) is in one file:

```
src/data/portfolio.js
```

Edit it without touching any component code.

## Adding Your Logo

1. Place your logo file in `src/` (e.g. `logo.svg` or `logo.png`)
2. In `src/components/Navbar.jsx`, replace the `D` text with:

```jsx
import logo from '../logo.svg'; // adjust path/extension

// inside the component, replace the anchor content:
<a className="navbar__logo" href="#hero">
  <img src={logo} alt="Divyashree R" />
</a>
```

3. In `Navbar.css`, the commented block shows the img sizing:
```css
.navbar__logo img {
  width: 28px;
  height: 28px;
  object-fit: contain;
}
```

## Adding Project Links

In `src/data/portfolio.js`, set the `link` field on any project:

```js
{
  num: '01',
  title: 'My Project',
  link: 'https://github.com/divyeahh/my-project',
  ...
}
```

## Deploying to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# Add homepage to package.json:
"homepage": "https://divyeahh.github.io/divyashree-portfolio"

# Deploy
npm run deploy
```

## Tech Stack

- React 18
- CSS (custom properties, no CSS-in-JS)
- Google Fonts: DM Serif Display, DM Sans, JetBrains Mono
- Zero external UI libraries
