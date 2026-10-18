import { StrengthItem } from '../types/portfolio';

export const PROFILE = {
  fullName: 'AJ Rienze Josol',
  displayName: 'AJ Rienze',
  location: 'Talibon, Bohol, Philippines',
  education: 'Bachelor of Science in Information Systems',
  institution: 'North Coast Bohol Institute Inc.',
  academicLevel: 'Third-Year Undergraduate Student',
  company: 'ALZA.Net IT Solutions',
  title: 'Founder & Chief Technology Officer',
  headline: 'Full-Stack Engineer & Systems Architecture Enthusiast',
  githubUrl: 'https://github.com/azinamouto',
  signatureJp: '静かに創り、世界を変える。',
  signatureEn: 'Create quietly. Change the world.',
  alzaMotto: 'WE FIND. WE SOLVE. WE LIFT.',
  email: 'ajrienze.josol@gmail.com', // configurable contact
  bioShort:
    'Full-stack developer, technical founder, and BS Information Systems student exploring software architecture, developer tools, data systems, and security engineering.',
  bioExtended:
    "I'm AJ Rienze, a full-stack developer and aspiring systems architect from Bohol, Philippines. As Founder and CTO of ALZA.Net IT Solutions, I work on software architecture, full-stack development, and technology solutions for organizations and government-oriented workflows. I'm interested in building reliable systems that solve practical problems, while making complex software easier for people to use.",
  philosophy:
    'I care about more than making software run. I want to understand its architecture, verify its behavior, and make it maintainable for the people who depend on it.'
};

export const STRENGTHS: StrengthItem[] = [
  {
    number: '01',
    title: 'Full-Stack Development',
    description:
      'I build robust applications across frontend user interfaces, backend web services, APIs, and persistent databases with end-to-end type safety.',
    focus: 'React, TypeScript, Node.js, NestJS, Express, PostgreSQL',
    technologies: ['React', 'TypeScript', 'Node.js', 'NestJS', 'Express', 'PostgreSQL']
  },
  {
    number: '02',
    title: 'Systems Architecture',
    description:
      'I design software structures, service boundaries, and clear data flows that are maintainable, modular, and easier to reason about over time.',
    focus: 'Architecture patterns, relational modeling, integration design, data integrity',
    technologies: ['Prisma', 'Database Schema DDL', 'REST Architecture', 'Dependency Modeling']
  },
  {
    number: '03',
    title: 'Security & Reliability',
    description:
      'I focus on strict input validation, authorization boundaries, automated vulnerability scanning, and dependable system behavior under real workloads.',
    focus: 'Security tools, API safeguards, automated scanning, verification',
    technologies: ['Go', 'SARIF', 'Gitleaks', 'OSV-Scanner', 'RBAC']
  },
  {
    number: '04',
    title: 'UI Engineering',
    description:
      'I make complex workflows easier to navigate through clean, responsive, and accessible interfaces grounded in typographical clarity.',
    focus: 'Frontend architecture, interaction design, accessibility, responsive UX',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'Motion', 'WCAG AA']
  }
];

export interface TechDomainGroup {
  domain: string;
  description: string;
  items: { name: string; note?: string }[];
}

export const TECH_DOMAINS: TechDomainGroup[] = [
  {
    domain: 'Frontend',
    description: 'Component architecture, responsive layouts, and state management',
    items: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'Next.js' },
      { name: 'Vite' },
      { name: 'Tailwind CSS' },
      { name: 'HTML5 / CSS3' }
    ]
  },
  {
    domain: 'Backend',
    description: 'Service boundaries, API contracts, and server orchestration',
    items: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'NestJS' },
      { name: 'Python' },
      { name: 'FastAPI' },
      { name: 'Go' }
    ]
  },
  {
    domain: 'Data & Storage',
    description: 'Relational data modeling, query optimization, and migrations',
    items: [
      { name: 'PostgreSQL' },
      { name: 'Supabase' },
      { name: 'Prisma' },
      { name: 'SQLite' }
    ]
  },
  {
    domain: 'Tooling & Security',
    description: 'Pipeline automation, static security scanning, and standards',
    items: [
      { name: 'Git' },
      { name: 'GitHub Actions' },
      { name: 'Gitleaks' },
      { name: 'OSV-Scanner' },
      { name: 'SARIF' },
      { name: 'Automated Testing' }
    ]
  },
  {
    domain: 'Deployment & Infrastructure',
    description: 'Target environments and managed infrastructure',
    items: [
      { name: 'Vercel' },
      { name: 'Railway' },
      { name: 'Supabase Cloud' }
    ]
  }
];
