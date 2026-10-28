export const personal = {
  name: 'Ingrid Padilha',
  role: 'Full-Stack Developer',
  introduction:
    "I build web systems with TypeScript, React, Node.js and PHP, and I'm co-developing a live 3D browser MMORPG.",
  location: 'São Paulo, Brazil',
  github: 'https://github.com/IngridSlytherin',
  linkedin: 'https://www.linkedin.com/in/ingrid-padilha/',
  email: 'ingrid_patricia.cp@hotmail.com',
  resume: '/resume-ingrid-padilha.pdf',
  sourceRepository: 'https://github.com/IngridSlytherin/ingridslytherin.github.io',
}

export const siteCopy = {
  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Featured', href: '#featured' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    viewProjects: 'View projects',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    resume: 'Résumé (PDF)',
    profileAlt: 'Portrait of Ingrid Padilha',
    locationLabel: 'Based in',
    menuOpen: 'Open navigation menu',
    menuClose: 'Close navigation menu',
    navigationLabel: 'Main navigation',
  },
  accessibility: {
    technologies: 'technologies',
    projectPreview: 'project preview',
    sitePreview: 'website preview',
    skipToContent: 'Skip to content',
  },
  sections: {
    about: 'About',
    featured: 'Featured project',
    projects: 'Projects',
    experience: 'Experience',
    skills: 'Skills',
    contact: 'Contact',
    selectedWork: 'Selected work',
    selectedWorkDescription: 'A few projects I have built and contributed to.',
    whatIBuilt: 'What I worked on',
    stack: 'Stack',
    code: 'Code',
    liveDemo: 'Live demo',
    playIt: 'Play it',
    sourceCode: 'View source code',
    sendEmail: 'Email',
    profileInitials: 'Ingrid Padilha',
    footer:
      'Built with React, TypeScript and Tailwind CSS',
    copyright: '© 2026 Ingrid Padilha',
  },
}

export const featuredProject = {
  name: 'Big Tiny Heroes',
  status: 'Live · side project',
  description:
    "A live 3D browser MMORPG with a server-authoritative real-time multiplayer backend. Two-developer team, TypeScript monorepo with about 113k lines of code and 135 test files. I've shipped 214 commits so far.",
  contributions: [
    'Gameplay systems: stamina, hero death and revive, mob combat effects, quest tracker',
    'Physics and collision with Rapier 3D',
    'Custom GLSL vertex shader for animated cloth on flags and banners (Three.js)',
    'Music, ambience and SFX system with spatial zones and crossfades',
    'Tested procedural map generators and multi-chapter quest chains',
    'Admin moderation tools, in-game bug reports to GitHub Issues and AI-translated chat announcements',
  ],
  technologies: [
    'TypeScript',
    'React 19',
    'Three.js',
    'Rapier',
    'Node.js',
    'Fastify',
    'Colyseus',
    'Redis',
    'SQLite',
    'Docker',
    'Playwright',
    'Stripe',
  ],
  url: 'https://bigtinyheroes.com/',
  logo: '/images/big-tiny-heroes.png',
  siteImage: '/images/big-tiny-heroes-site.png',
}

export const projects = [
  {
    name: 'White-Label E-commerce',
    image: '/images/ecommerce.png',
    description:
      'Configurable online store with a setup wizard, storefront, cart, sandbox checkout (Stripe, Mercado Pago, PayPal) and admin dashboard.',
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'Tailwind CSS'],
    codeUrl: 'https://github.com/IngridSlytherin/ecommerce',
  },
  {
    name: 'Corporate Data Framework',
    image: '/images/framework.png',
    description:
      'Full-stack base for internal business systems with multi-tenancy, role-based access control, audit log, dashboard and automated tests.',
    technologies: ['React', 'NestJS', 'Prisma', 'PostgreSQL', 'Redis'],
    codeUrl: 'https://github.com/IngridSlytherin/framework',
  },
  {
    name: 'Mini Seller Console',
    image: '/images/mini-seller.png',
    description: 'Lead triage and conversion app with a responsive layout.',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    codeUrl: 'https://github.com/IngridSlytherin/mini-seller',
    demoUrl: 'https://ingridslytherin.github.io/mini-seller',
  },
  {
    name: 'Smartphone Trade-in Price Scraper',
    image: '/images/price-scrapper.png',
    description:
      'Headless Selenium bot that collects trade-in quotes for used smartphones across 3 condition scenarios and loads them into MySQL.',
    technologies: ['Python', 'Selenium', 'MySQL'],
    codeUrl: 'https://github.com/IngridSlytherin/price_scrapper',
  },
]

export const experience = [
  {
    role: 'Web Developer',
    company: 'Fhits',
    dates: 'Oct 2025 – Present',
    description:
      'Maintain and extend internal systems in PHP, JavaScript and MySQL; integrations with the Meta API and the ChatGPT API.',
  },
  {
    role: 'Junior Web Developer',
    company: 'Ecoassist',
    dates: 'May 2025 – Oct 2025',
    description:
      'Maintained a legacy CRM (PHP, JavaScript, jQuery) using GitLab, Docker, SSH and WSL.',
  },
  {
    role: 'Junior Systems Analyst',
    company: 'Fhits',
    dates: 'May 2022 – Jun 2024',
    description:
      'Front-end and back-end development in PHP, JavaScript and Ajax; Meta API and ChatGPT API integrations.',
  },
]

export const skillGroups = [
  {
    name: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'PHP', 'SQL', 'HTML', 'CSS', 'GLSL', 'Python'],
  },
  {
    name: 'Front-end',
    skills: ['React', 'Next.js', 'Angular', 'Three.js', 'Tailwind CSS', 'Material UI'],
  },
  {
    name: 'Back-end',
    skills: ['Node.js', 'NestJS', 'Fastify', 'Colyseus', 'PHP'],
  },
  {
    name: 'Data',
    skills: ['MySQL', 'PostgreSQL', 'Redis', 'SQLite', 'Prisma'],
  },
  {
    name: 'Tools',
    skills: ['Docker', 'Git', 'GitLab', 'GitHub Actions', 'Linux', 'Playwright', 'Jest', 'Vitest'],
  },
]

export const contact = {
  message:
    'Open to remote opportunities. The fastest way to reach me is LinkedIn.',
  linkedin: personal.linkedin,
  github: personal.github,
  email: `mailto:${personal.email}`,
}
