// ── All portfolio content lives here ──
// Edit this file to update your portfolio without touching any component code.
const currentDate = new Date();
const customDate = new Date("2022-11-14");
const specificYear = customDate.getFullYear();

let totalMonths =
  currentDate.getFullYear() * 12 + currentDate.getMonth() -
  (customDate.getFullYear() * 12 + customDate.getMonth());
if (currentDate.getDate() < customDate.getDate()) {
  totalMonths -= 1;
}
const experienceYears = Math.floor(totalMonths / 12);
const experienceMonths = totalMonths % 12;
const experienceDuration = `${experienceYears}.${experienceMonths ? ` ${experienceMonths}` : ''} years`;

export const personal = {
  name: 'Divyashree R',
  title: 'Software Engineer',
  tagline: "Explore LocalHost:3000: where my creativity finds its port(folio)",
  bio: [
    "Hello! I am Divyashree R, a Software Engineer based in Bengaluru. I thrive on blending technology and creativity, which led me to specialise as a Frontend Engineer.",
    `With over ${experienceDuration} of experience building scalable, high-performance web applications in the banking and media domains, I have worked extensively with micro-frontend architecture to build modular and maintainable applications. My hands-on exposure to backend development also gives me a strong end-to-end perspective.`,
    "Beyond work, I'm an avid reader who enjoys writing blogs and content. I am also a trained classical Carnatic singer and immerse myself in it during my spare time.",
  ],
  facts: [
    { label: 'Location', value: 'Bengaluru, India' },
    { label: 'Experience', value: experienceDuration, highlight: experienceDuration },
    { label: 'Specialisation', value: 'Frontend Engineering' },
    { label: 'Currently', value: 'Professional Services Engineer II at FIS Global', highlight: 'Professional Services Engineer II', tag: 'Transitioned to Cognizant payroll from Apr 2026 as part of organisational restructuring' },
  ],
  links: {
    email: 'div5353@gmail.com',
    linkedin: 'https://linkedin.com/in/divyashree-lochan',
    github: 'https://github.com/divyeahh',
    medium: 'https://medium.com/@div5353',
  },
};

export const skills = [
  {
    group: 'Frontend',
    tags: ['React.js', 'Redux', 'JavaScript', 'HTML', 'CSS', 'MUI', 'Bootstrap'],
  },
  {
    group: 'Backend',
    tags: ['Node.js', 'MongoDB'],
  },
  {
    group: 'Architecture & Concepts',
    tags: ['Micro Frontends', 'REST API', 'Component Design'],
  },
  {
    group: 'Tools & Platforms',
    tags: ['Git', 'Postman', 'BrowserStack', 'JIRA', 'DBVisualizer'],
  },
  {
    group: 'Familiar',
    tags: ['Angular', 'Python'],
    muted: true,
  },
];

export const experience = [
  {
    period: 'Jan 2025 — Present',
    company: 'FIS Global',
    companyLink: 'https://www.fisglobal.com',
    role: 'Professional Services Engineer II',
    note: 'Transitioned to Cognizant payroll from Apr 2026 as part of organisational restructuring',
    description:
      'Working on the Retail Internet Banking Platform using micro-frontend architecture. Building and maintaining reusable UI components with React.js, Redux, and MUI across a platform with 150+ features. Owning production deployments and resolving high-priority release blockers.',
  },
  {
    period: 'Nov 2022 — Jan 2025',
    company: 'Riversilica',
    companyLink: 'https://www.riversilica.com',
    role: 'Software Engineer',
    note: null,
    description:
      'Worked across frontend and backend projects including a CMS migration from Angular to React and a video wall system for monitoring 300+ live channels.',
  },
];

export const projects = [
  {
    num: '01',
    featured: true,
    title: 'Retail Internet Banking Platform',
    description:
      'Large-scale banking platform built with micro-frontend architecture. Developed and maintained reusable UI components across 150+ features, owned production deployments, resolved high-priority issues, and collaborated with backend and core banking integration teams.',
    tags: ['React.js', 'Redux', 'MUI', 'Micro Frontends', 'CBS Integration'],
    link: null,
  },
  {
    num: '02',
    featured: false,
    title: 'Profile CBS Upgrade',
    description:
      'Modernised a core banking system for a UK-based bank, upgrading legacy Struts modules to Spring Boot. Implemented bank-specific customisations and collaborated across cross-functional teams.',
    tags: ['Spring Boot', 'Core Banking'],
    link: null,
  },
  {
    num: '03',
    featured: false,
    title: 'CMS Migration — Angular to React',
    description:
      'Migrated a large-scale OTT content management system from Angular to React.js, improving maintainability and performance. Built responsive UI components supporting Web, Android, iOS, and TV.',
    tags: ['React.js', 'Redux', 'JavaScript', 'Bootstrap'],
    link: null,
  },
  {
    num: '04',
    featured: false,
    title: 'Video Wall System',
    description:
      'Designed and developed a real-time video wall on Linux monitoring 300+ live channels with audio level tracking. Built 20 video grids (16 channels each). Delivered end-to-end from PoC to production — solo.',
    tags: ['Python', 'Kivy', 'Linux'],
    link: null,
  },
  {
    num: '05',
    featured: false,
    title: 'Streamer',
    description:
      'Video streaming and packaging platform supporting HLS, DASH, and DRM. Built scalable backend APIs and frontend features end-to-end.',
    tags: ['React.js', 'Redux', 'Node.js', 'MongoDB'],
    link: null,
  },
];

const mailIcon = <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M0 6C0 4.34315 1.34315 3 3 3H21C22.6569 3 24 4.34315 24 6V18C24 19.6569 22.6569 21 21 21H3C1.34315 21 0 19.6569 0 18V6ZM3 4.5C2.17157 4.5 1.5 5.17157 1.5 6V6.32536L12 12.6254L22.5 6.32536V6C22.5 5.17157 21.8284 4.5 21 4.5H3ZM22.5 8.07464L15.4379 12.3119L22.5 16.6578V8.07464ZM22.4494 18.3879L13.9887 13.1814L12 14.3746L10.0113 13.1814L1.55065 18.3879C1.72162 19.0283 2.30573 19.5 3 19.5H21C21.6943 19.5 22.2784 19.0283 22.4494 18.3879ZM1.5 16.6578L8.56211 12.3119L1.5 8.07464V16.6578Z"
    fill="#C895E0"
  />
</svg>

const linkedInIcon = <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M24 20.6667C24 22.508 22.508 24 20.6667 24H3.33333C1.49267 24 0 22.508 0 20.6667V3.33333C0 1.492 1.49267 0 3.33333 0H20.6667C22.508 0 24 1.492 24 3.33333V20.6667Z"
    fill="#C895E0"
  />
  <path
    d="M5 8.375H8.125V19H5V8.375ZM6.55312 7.125H6.53562C5.60312 7.125 5 6.43 5 5.56187C5 4.675 5.62187 4 6.57125 4C7.52187 4 8.1075 4.675 8.125 5.56187C8.125 6.42937 7.52187 7.125 6.55312 7.125ZM20 19H16.875V13.3131C16.875 11.9394 16.1094 11.0019 14.88 11.0019C13.9419 11.0019 13.4344 11.6344 13.1881 12.2456C13.0981 12.4644 13.125 13.0694 13.125 13.375V19H10V8.375H13.125V10.01C13.5756 9.3125 14.2813 8.375 16.0863 8.375C18.3225 8.375 19.9994 9.78125 19.9994 12.9213L20 19Z"
    fill="#1E1C16"
  />
</svg>
const gitHubIcon = <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 0C5.37 0 0 5.50583 0 12.3035C0 17.7478 3.435 22.3463 8.205 23.9765C8.805 24.0842 9.03 23.715 9.03 23.3921C9.03 23.0999 9.015 22.131 9.015 21.1005C6 21.6696 5.22 20.347 4.98 19.6549C4.845 19.3012 4.26 18.2092 3.75 17.917C3.33 17.6863 2.73 17.1173 3.735 17.1019C4.68 17.0865 5.355 17.9939 5.58 18.363C6.66 20.2239 8.385 19.701 9.075 19.3781C9.18 18.5783 9.495 18.04 9.84 17.7325C7.17 17.4249 4.38 16.3637 4.38 11.6576C4.38 10.3196 4.845 9.21226 5.61 8.35102C5.49 8.04343 5.07 6.78232 5.73 5.09058C5.73 5.09058 6.735 4.76762 9.03 6.3517C9.99 6.07487 11.01 5.93645 12.03 5.93645C13.05 5.93645 14.07 6.07487 15.03 6.3517C17.325 4.75224 18.33 5.09058 18.33 5.09058C18.99 6.78232 18.57 8.04343 18.45 8.35102C19.215 9.21226 19.68 10.3042 19.68 11.6576C19.68 16.3791 16.875 17.4249 14.205 17.7325C14.64 18.1169 15.015 18.8552 15.015 20.0086C15.015 21.6542 15 22.9768 15 23.3921C15 23.715 15.225 24.0995 15.825 23.9765C18.2072 23.1519 20.2773 21.5822 21.7438 19.4882C23.2103 17.3942 23.9994 14.8814 24 12.3035C24 5.50583 18.63 0 12 0Z"
    fill="#C895E0"
  />
</svg>
const mediumIcon = <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6.76884 5.15625C10.5072 5.15625 13.5374 8.20768 13.5374 11.9715C13.5374 15.7354 10.5069 18.7866 6.76884 18.7866C3.03073 18.7866 0 15.7354 0 11.9715C0 8.20768 3.0305 5.15625 6.76884 5.15625ZM17.5782 5.55547C19.4474 5.55547 20.9626 8.42775 20.9626 11.9715H20.9628C20.9628 15.5144 19.4476 18.3876 17.5784 18.3876C15.7092 18.3876 14.194 15.5144 14.194 11.9715C14.194 8.42867 15.709 5.55547 17.5782 5.55547ZM22.8097 6.22375C23.4669 6.22375 24 8.79708 24 11.9715C24 15.1451 23.4672 17.7193 22.8097 17.7193C22.1522 17.7193 21.6196 15.1458 21.6196 11.9715C21.6196 8.79731 22.1524 6.22375 22.8097 6.22375Z"
    fill="#C895E0"
  />
</svg>

export const contactLinks = [
  { icon: mailIcon, label: 'Email', value: 'div5353@gmail.com', href: 'mailto:div5353@gmail.com' },
  { icon: linkedInIcon, label: 'LinkedIn', value: 'divyashree-lochan', href: 'https://linkedin.com/in/divyashree-lochan' },
  { icon: gitHubIcon, label: 'GitHub', value: 'github.com/divyeahh', href: 'https://github.com/divyeahh' },
  { icon: mediumIcon, label: 'Medium', value: 'medium.com/@div5353', href: 'https://medium.com/@div5353' },
];
