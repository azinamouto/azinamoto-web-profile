export type ProjectStatus =
  | 'concept'
  | 'experimental'
  | 'in-development'
  | 'locally-verified'
  | 'pre-release'
  | 'active-development'
  | 'released';

export type EngineeringDomain =
  | 'Frontend'
  | 'Backend'
  | 'Data'
  | 'Security'
  | 'Architecture';

export interface ArchitectureNode {
  id: string;
  label: string;
  role: string;
  description: string;
  tech: string;
  type: 'client' | 'api' | 'auth' | 'service' | 'database' | 'engine';
}

export interface ArchitectureEdge {
  from: string;
  to: string;
  label: string;
}

export interface ProjectArchitecture {
  summary: string;
  nodes: ArchitectureNode[];
  edges: ArchitectureEdge[];
}

export interface PortfolioProject {
  id: string;
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  role: string;
  technologies: string[];
  domains: EngineeringDomain[];
  highlights: string[];
  status: ProjectStatus;
  statusLabel: string;
  repositoryUrl?: string;
  liveUrl?: string;
  featured: boolean;
  visibility: 'public' | 'internal';
  problem?: string;
  approach?: string;
  architecture?: ProjectArchitecture;
  limitations?: string[];
  year?: string;
}

export interface StrengthItem {
  number: string;
  title: string;
  description: string;
  focus: string;
  technologies: string[];
}
