import { PortfolioProject } from '../types/portfolio';

export const ALL_PROJECTS: PortfolioProject[] = [
  {
    id: 'tagad',
    slug: 'tagad',
    name: 'TAGAD',
    category: 'Government Technology / Analytics',
    summary: 'Gender and Development reporting and analytics for structured local-government workflows.',
    description: 'A comprehensive reporting and data intelligence system built to streamline local government Gender and Development (GAD) compliance, activity planning, fund allocation tracking, and demographic outcome evaluation.',
    role: 'Full-stack and System Engineering',
    technologies: ['React', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'Supabase'],
    domains: ['Architecture', 'Backend', 'Data', 'Frontend'],
    highlights: [
      'Engineered normalized relational schemas across municipal units, GAD budget codes, and outcome matrices',
      'Implemented role-based authorization ensuring data isolation between municipal departments',
      'Designed a multi-stage report generation engine supporting aggregated quarterly summaries'
    ],
    status: 'active-development',
    statusLabel: 'Active Development & Realignment',
    repositoryUrl: 'https://github.com/azinamouto/TAGAD-FOUNDATION',
    featured: true,
    visibility: 'public',
    year: '2025',
    problem: 'Local government offices often struggle with fragmented spreadsheet records, inconsistent demographic categorization, and labor-intensive manual consolidation for statutory Gender and Development (GAD) audits.',
    approach: 'Structured the system around an authoritative PostgreSQL database with Prisma ORM, an Express-based API layer enforcing strictly validated input boundaries, and a clean React administrative interface with accessible data tables.',
    architecture: {
      summary: 'Frontend client communicates with an Express API gateway, authenticated via Supabase auth, validated through zod middleware, and persisted via Prisma to PostgreSQL.',
      nodes: [
        { id: 'client', label: 'React Client', role: 'Interface Layer', tech: 'React + TypeScript', description: 'Responsive administrative dashboard with role-aware data views', type: 'client' },
        { id: 'gateway', label: 'API Gateway', role: 'Service Routing', tech: 'Express.js', description: 'Route handling, request validation, and rate limiting', type: 'api' },
        { id: 'auth', label: 'Auth & RBAC', role: 'Access Control', tech: 'Supabase Auth', description: 'JWT verification and municipal department permission validation', type: 'auth' },
        { id: 'data_layer', label: 'Data Access', role: 'ORM & Query Engine', tech: 'Prisma Client', description: 'Type-safe database queries and migration management', type: 'service' },
        { id: 'db', label: 'Database', role: 'Relational Store', tech: 'PostgreSQL', description: 'Normalized municipal reporting schemas and audit logs', type: 'database' }
      ],
      edges: [
        { from: 'client', to: 'gateway', label: 'HTTPS / REST' },
        { from: 'gateway', to: 'auth', label: 'Token Verification' },
        { from: 'gateway', to: 'data_layer', label: 'Typed Actions' },
        { from: 'data_layer', to: 'db', label: 'Connection Pool' }
      ]
    },
    limitations: [
      'Currently undergoing schema realignment for advanced multi-municipality aggregation',
      'Supabase storage integration for supporting PDF annexes is undergoing verification',
      'Offline sync capability for remote barangay field workers is in early architectural planning'
    ]
  },
  {
    id: 'one-talibon',
    slug: 'one-talibon',
    name: 'One Talibon Intra-Office Workspace',
    category: 'Government Workspace / Frontend Engineering',
    summary: 'A role-aware internal workspace designed around accessible government workflows.',
    description: 'An internal digital workspace providing municipal personnel with unified access to inter-departmental memoranda, task delegation, announcement boards, and workflow status indicators.',
    role: 'Frontend Developer and Contributor',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'REST APIs'],
    domains: ['Frontend', 'Architecture'],
    highlights: [
      'Constructed accessible, component-driven layouts following government UI usability guidelines',
      'Integrated documented backend contracts for asynchronous document routing and updates',
      'Designed resilient client-side state handling to prevent state loss during interrupted network sessions'
    ],
    status: 'in-development',
    statusLabel: 'Development & Integration Work',
    featured: true,
    visibility: 'public',
    year: '2025',
    problem: 'Departmental staff needed a low-friction, clutter-free digital workspace that reduces paper-based routing overhead while remaining usable on modest office hardware.',
    approach: 'Emphasized lightweight frontend architecture using Vite and React, minimizing bundle footprint and enforcing strict semantic HTML structures with zero unnecessary client-side overhead.',
    architecture: {
      summary: 'Client-side SPA built with React and TypeScript consuming REST API endpoints with localized cache stores and optimistic UI updates.',
      nodes: [
        { id: 'ui', label: 'Workspace UI', role: 'User Interface', tech: 'React + TypeScript', description: 'Departmental portal, routing drawers, and document viewer', type: 'client' },
        { id: 'state', label: 'State Manager', role: 'Client Store', tech: 'Custom React Hooks', description: 'Lightweight context-based state with session cache', type: 'service' },
        { id: 'contract', label: 'API Client', role: 'Contract Adapter', tech: 'Fetch + Zod', description: 'Type-safe request adapters validating backend responses', type: 'api' },
        { id: 'backend', label: 'Municipal API', role: 'Backend Services', tech: 'Internal Services', description: 'Intra-office routing and memorandum document storage', type: 'service' }
      ],
      edges: [
        { from: 'ui', to: 'state', label: 'Action Dispatch' },
        { from: 'state', to: 'contract', label: 'Data Fetch' },
        { from: 'contract', to: 'backend', label: 'REST API' }
      ]
    },
    limitations: [
      'Integrated through documented backend contracts; production deployment remains subject to institutional network testing',
      'Mobile touch-optimized layout is in active refactoring'
    ]
  },
  {
    id: 'shinigami',
    slug: 'shinigami',
    name: 'Shinigami',
    category: 'Security Engineering / Developer Tools',
    summary: 'A Go-based security scanning toolkit combining native rules, external scanner integrations, and structured reporting.',
    description: 'A developer-oriented security analysis CLI and orchestration engine that runs automated credential discovery, vulnerable package detection, and code pattern scanning before git commits or inside CI pipelines.',
    role: 'Core Architect & Developer',
    technologies: ['Go', 'React', 'TypeScript', 'Vite', 'SARIF', 'Gitleaks', 'OSV-Scanner'],
    domains: ['Security', 'Backend', 'Architecture'],
    highlights: [
      'Built a modular Go scanner pipeline with pluggable adapters for Gitleaks and OSV scanner',
      'Implemented standardized SARIF (OASIS Static Analysis Results Interchange Format) JSON outputs',
      'Created an optional lightweight local web dashboard for interactive issue triaging'
    ],
    status: 'pre-release',
    statusLabel: 'Pre-release Development',
    repositoryUrl: 'https://github.com/azinamouto/Shinigami',
    featured: true,
    visibility: 'public',
    year: '2025',
    problem: 'Small software teams often skip security analysis because enterprise SAST/SCA tooling is heavy, complex to configure, and produces disparate reports that are hard to parse in local environments.',
    approach: 'Engineered a unified Go binary that runs quick scans across git diffs, parses results into normalized findings structs, and produces machine-readable SARIF output or a crisp HTML summary.',
    architecture: {
      summary: 'Go CLI core with scanner execution engine running parallel rules, passing findings into a SARIF normalizer, with optional React viewer.',
      nodes: [
        { id: 'cli', label: 'Go CLI Engine', role: 'Orchestrator', tech: 'Go (Golang)', description: 'Command execution, flag parsing, and target directory walk', type: 'engine' },
        { id: 'adapters', label: 'Scanner Adapters', role: 'Security Probes', tech: 'Native + External', description: 'Gitleaks secret detection and OSV dependency checking', type: 'service' },
        { id: 'normalizer', label: 'Finding Normalizer', role: 'Data Formatter', tech: 'Go Structs', description: 'Deduplication, severity scoring, and SARIF output generator', type: 'service' },
        { id: 'viewer', label: 'Local Dashboard', role: 'Triaging UI', tech: 'React + TypeScript', description: 'Interactive viewer for inspecting and dismissing scanner findings', type: 'client' }
      ],
      edges: [
        { from: 'cli', to: 'adapters', label: 'Parallel Exec' },
        { from: 'adapters', to: 'normalizer', label: 'Raw Findings' },
        { from: 'normalizer', to: 'viewer', label: 'SARIF JSON' }
      ]
    },
    limitations: [
      'Currently verified on Linux and macOS; Windows path separators require additional test suites',
      'Advanced AST-based taint analysis is planned for future iterations'
    ]
  },
  {
    id: 'alza-devkit',
    slug: 'alza-devkit',
    name: 'ALZA DevKit',
    category: 'Developer Infrastructure / Data Engineering',
    summary: 'A developer toolkit for generating structured test data and working with database schema definitions.',
    description: 'An internal engineering utility designed to accelerate full-stack prototyping by parsing relational database schemas, generating realistic synthetic seed datasets, and simulating complex entity relationships.',
    role: 'Creator & Systems Architect',
    technologies: ['Python', 'FastAPI', 'Next.js', 'TypeScript', 'SQLite', 'PostgreSQL'],
    domains: ['Data', 'Backend', 'Architecture'],
    highlights: [
      'Developed an SQL schema DDL parser that resolves foreign key dependency graphs automatically',
      'Engineered realistic Philippine-localized synthetic data generators for municipal and institutional entities',
      'Implemented export targets for raw SQL INSERT scripts, JSON fixtures, and CSV dumps'
    ],
    status: 'locally-verified',
    statusLabel: 'Internal Tool — Locally Verified',
    repositoryUrl: 'https://github.com/SPATIBAIII/alza-devkit',
    featured: true,
    visibility: 'public',
    year: '2024',
    problem: 'Seeding realistic development databases for municipal workflows with proper relational constraints was slow, repetitive, and prone to foreign key violation errors.',
    approach: 'Constructed a topological sort algorithm to order tables by foreign key constraints, followed by context-aware generators providing realistic names, addresses, and budget codes.',
    architecture: {
      summary: 'FastAPI backend parses SQL DDL schemas into a dependency graph, generates synthetic rows, and provides a Next.js interface for parameter tuning.',
      nodes: [
        { id: 'ui', label: 'Schema Studio', role: 'Frontend', tech: 'Next.js + TypeScript', description: 'Schema upload, column rule configuration, and export controls', type: 'client' },
        { id: 'api', label: 'FastAPI Service', role: 'Backend API', tech: 'Python / FastAPI', description: 'DDL parsing endpoints, generation jobs, and schema validation', type: 'api' },
        { id: 'graph', label: 'Graph Resolver', role: 'Dependency Engine', tech: 'Python Graphlib', description: 'Topological sorting of tables to guarantee valid foreign keys', type: 'engine' },
        { id: 'storage', label: 'Job Cache', role: 'Local Storage', tech: 'SQLite', description: 'Cached schema templates and generated dataset archives', type: 'database' }
      ],
      edges: [
        { from: 'ui', to: 'api', label: 'Schema DDL' },
        { from: 'api', to: 'graph', label: 'Dependency Parse' },
        { from: 'graph', to: 'storage', label: 'Save Result' }
      ]
    },
    limitations: [
      'Complex recursive self-referential relations currently require manual configuration overrides',
      'Packaged as an internal developer utility; public multi-tenant service is not planned'
    ]
  },
  {
    id: 'arko',
    slug: 'arko',
    name: 'ARKO',
    category: 'Algorithm Visualization',
    summary: 'An experimental workspace exploring graph-based algorithm modeling and visual problem-solving.',
    description: 'An interactive computing canvas designed to visualize pathfinding, minimum spanning trees, and graph traversal dynamics with step-by-step state inspection.',
    role: 'Experimental Project Creator',
    technologies: ['React', 'TypeScript', 'HTML5 Canvas', 'Tailwind CSS'],
    domains: ['Frontend', 'Architecture'],
    highlights: [
      'Interactive canvas for node placement, weighted edge definition, and graph editing',
      'Step-through execution of Dijkstra, A*, and BFS/DFS algorithms with pause/resume controls',
      'Visual metrics highlighting time complexity and step count during traversal'
    ],
    status: 'experimental',
    statusLabel: 'Experimental / Early Development',
    featured: false,
    visibility: 'public',
    year: '2025',
    problem: 'Understanding dynamic graph algorithm execution states is difficult through static code or console logs alone.',
    approach: 'Created an accessible visual state-machine that exposes graph internal structures at each evaluation tick.',
    limitations: ['Graph size is currently optimized for under 150 nodes to maintain 60 FPS animation']
  },
  {
    id: 'kuro',
    slug: 'kuro',
    name: 'KURO',
    category: 'Security Research',
    summary: 'An experimental Go-based framework exploring modular penetration-testing workflows, scope boundaries, and structured evidence.',
    description: 'A modular security toolkit focused on automated reconnaissance boundaries, verified scope containment, and reproducible vulnerability proof generation.',
    role: 'Research & Prototyping',
    technologies: ['Go', 'Bash', 'Networking Utilities'],
    domains: ['Security', 'Backend'],
    highlights: [
      'Scope verification engine preventing out-of-boundary network probes',
      'Structured evidence log format designed for audit reproducibility',
      'Modular plugin architecture for pluggable network inspection modules'
    ],
    status: 'experimental',
    statusLabel: 'Early-stage Research',
    featured: false,
    visibility: 'public',
    year: '2025',
    problem: 'Ad-hoc security assessments often risk unintentional scope boundary violations or produce disjointed logs.',
    approach: 'Strict subnet boundary enforcement before any socket connection or port inspection is initiated.',
    limitations: ['Research prototype; strictly intended for authorized local network testing']
  },
  {
    id: 'alza-finstation',
    slug: 'alza-finstation',
    name: 'ALZA Finstation',
    category: 'Business Software',
    summary: 'An internal finance tracking and planning workspace for organizing business financial activities.',
    description: 'A structured internal workspace providing cashflow visualization, operational expense categorization, and projection modeling for ALZA.Net IT Solutions.',
    role: 'Architecture & Full-Stack Development',
    technologies: ['React', 'TypeScript', 'NestJS', 'Supabase'],
    domains: ['Architecture', 'Backend', 'Data', 'Frontend'],
    highlights: [
      'Built a clean ledger entry system with double-entry accounting integrity checks',
      'Configured role-based access to safeguard internal company operational figures',
      'Designed monthly projection calculators based on verified recurring operational commitments'
    ],
    status: 'in-development',
    statusLabel: 'Internal Workspace — Active',
    featured: false,
    visibility: 'internal',
    year: '2024',
    problem: 'Early-stage IT operations require structured financial discipline without the overhead of heavy enterprise ERP suites.',
    approach: 'Implemented a lightweight NestJS backend enforcing ledger constraints paired with a clean React interface.',
    limitations: ['Internal business tool; proprietary financial figures and company records are strictly kept private']
  },
  {
    id: 'kopi-site',
    slug: 'kopi-site',
    name: 'Kopi Site',
    category: 'Interactive Web Development',
    summary: 'A coffee-focused web project exploring responsive design, custom motion, and interactive frontend experiences.',
    description: 'An exploratory frontend showcase demonstrating refined typography, fluid layout transitions, interactive brewing guides, and micro-interactions.',
    role: 'Frontend Designer & Developer',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    domains: ['Frontend'],
    highlights: [
      'Fluid responsive typography and smooth scroll choreography',
      'Interactive ratio calculator for pour-over, french press, and espresso brew profiles',
      'Zero external CSS libraries — pure customized Tailwind utility architecture'
    ],
    status: 'released',
    statusLabel: 'Completed Prototype',
    repositoryUrl: 'https://github.com/azinamouto/kopi-site',
    featured: false,
    visibility: 'public',
    year: '2024',
    problem: 'Exploring how editorial aesthetics, warm minimalism, and interactive utility calculators can blend into a cohesive experience.',
    approach: 'Crafted custom layout rhythms with high-contrast typography, accessible color contrast, and responsive state handling.',
    limitations: ['Static exploratory project; does not include e-commerce checkout logic']
  },
  {
    id: 'sportzone',
    slug: 'sportzone',
    name: 'Sportzone',
    category: 'Web Application',
    summary: 'A sports-oriented application exploring venue presentation and administrative interfaces.',
    description: 'A sports facility portal prototype exploring venue timetable scheduling, court availability grids, and manager dashboard controls.',
    role: 'Frontend Engineer',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    domains: ['Frontend'],
    highlights: [
      'Interactive timetable grid displaying real-time court availability',
      'Manager reservation interface with conflict detection preview',
      'Mobile-friendly booking overview with accessible touch targets'
    ],
    status: 'in-development',
    statusLabel: 'Development / Prototype',
    featured: false,
    visibility: 'public',
    year: '2024',
    problem: 'Manual sports court reservations lead to double-booking and communication delays for community sports facilities.',
    approach: 'Developed an interactive slot reservation UI that validates time slot collisions client-side before submission.',
    limitations: ['Authentication and backend payment integration remain in development']
  },
  {
    id: 'alza-ai-lab',
    slug: 'alza-ai-lab',
    name: 'ALZA AI Lab',
    category: 'Developer Research',
    summary: 'An engineering experimentation repository associated with ALZA.',
    description: 'A sandbox repository exploring applied machine learning integrations, localized dataset embeddings, and retrieval-augmented verification experiments.',
    role: 'Research Contributor',
    technologies: ['Python', 'TypeScript', 'Vector Embeddings', 'FastAPI'],
    domains: ['Data', 'Architecture'],
    highlights: [
      'Experiments with document chunking strategies for institutional policy manuals',
      'Benchmarking retrieval accuracy against unstructured PDF government resolutions',
      'Exploration of deterministic validation layers over probabilistic model outputs'
    ],
    status: 'experimental',
    statusLabel: 'Developer Research',
    featured: false,
    visibility: 'internal',
    year: '2025',
    problem: 'Investigating how to safely apply retrieval systems to government documents without hallucination or leakage.',
    approach: 'Prototyping strict provenance attribution where answers must cite explicit document paragraphs and section numbers.',
    limitations: ['Experimental exploration; not currently deployed to municipal production']
  },
  {
    id: 'talgov',
    slug: 'talgov',
    name: 'TALGov',
    category: 'Government Technology',
    summary: 'A government-oriented software initiative involving operational workflows and application planning.',
    description: 'A high-level architectural initiative planning modular municipal services, public document requests, and digital queue coordination for local government units.',
    role: 'Technical Architect',
    technologies: ['Software Architecture', 'System Specs', 'Data Modeling', 'UML / Flowcharts'],
    domains: ['Architecture', 'Data'],
    highlights: [
      'Documented modular domain specifications for citizen service requests',
      'Drafted database schema requirements for audit trail tracking across municipal departments',
      'Outlined security baseline requirements for handling constituent identification data'
    ],
    status: 'concept',
    statusLabel: 'Planning & Architecture Initiative',
    featured: false,
    visibility: 'public',
    year: '2025',
    problem: 'Fragmented municipal agency software purchases result in incompatible data silos and duplicate constituent records.',
    approach: 'Drafting an interoperable architectural blueprint establishing shared identity protocols and common schema primitives.',
    limitations: ['Currently in architectural planning and stakeholder consultation phase']
  },
  {
    id: 'gay-m-off',
    slug: 'gay-m-off',
    name: 'GAY-M OFF',
    category: 'Browser Game',
    summary: 'A playful browser game exploring quizzes, challenges, interaction, and local state management.',
    description: 'An interactive web-based quiz and mini-game experiment exploring dynamic question branching, timed responses, sound effects, and local high-score persistence.',
    role: 'Creator & Developer',
    technologies: ['React', 'TypeScript', 'Web Audio API', 'Local Storage'],
    domains: ['Frontend'],
    highlights: [
      'Lightweight local state management handling dynamic rounds and score tallying',
      'Synthesized sound effects utilizing the browser Web Audio API without heavy media assets',
      'Smooth micro-interactions and animated response validation'
    ],
    status: 'released',
    statusLabel: 'Complete Mini-App',
    featured: false,
    visibility: 'public',
    year: '2024',
    problem: 'Exploring state machine logic and Web Audio synthesis within a lightweight React environment.',
    approach: 'Built a clean deterministic game state reducer with time-based interval dispatchers.',
    limitations: ['Client-only browser game with local storage score tracking']
  }
];

export const FEATURED_PROJECTS = ALL_PROJECTS.filter(p => p.featured);
export const LAB_PROJECTS = ALL_PROJECTS.filter(p => !p.featured);
