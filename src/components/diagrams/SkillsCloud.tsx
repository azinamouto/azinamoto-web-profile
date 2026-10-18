import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { EngineeringDomain } from '../../types/portfolio';
import { ALL_PROJECTS } from '../../data/projects';
import { InsetSurface, SoftSurface } from '../ui/Surfaces';
import { RefreshCw, ArrowUpRight, CheckCircle2, Move } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export interface SkillNode extends d3.SimulationNodeDatum {
  id: string;
  name: string;
  domain: EngineeringDomain;
  value: number; // controls bubble radius
  r: number;
  description: string;
  projects: string[];
}

const SKILLS_DATA: Omit<SkillNode, 'x' | 'y' | 'vx' | 'vy' | 'r'>[] = [
  {
    id: 'typescript',
    name: 'TypeScript',
    domain: 'Architecture',
    value: 40,
    description: 'Strict type modeling, generic constraints, DDL schema parsing, and contract safety across frontend and backend layers.',
    projects: ['TAGAD', 'One Talibon', 'Shinigami', 'ALZA DevKit', 'ALZA Finstation']
  },
  {
    id: 'react',
    name: 'React',
    domain: 'Frontend',
    value: 38,
    description: 'Component architecture, custom hooks, accessible layout systems, and resilient client state machines.',
    projects: ['TAGAD', 'One Talibon', 'Shinigami', 'Kopi Site', 'ALZA Finstation']
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    domain: 'Data',
    value: 36,
    description: 'Relational data modeling, foreign key dependency resolution, schema normalization, and transactional integrity.',
    projects: ['TAGAD', 'ALZA DevKit']
  },
  {
    id: 'go',
    name: 'Go',
    domain: 'Security',
    value: 35,
    description: 'High-performance command-line tooling, scanner orchestration, parallel process execution, and AST parsing.',
    projects: ['Shinigami', 'KURO']
  },
  {
    id: 'architecture',
    name: 'Systems Architecture',
    domain: 'Architecture',
    value: 37,
    description: 'Service boundaries, modular APIs, domain-driven design, and structured reporting workflows.',
    projects: ['TAGAD', 'ALZA DevKit', 'TALGov', 'ALZA Finstation']
  },
  {
    id: 'nestjs',
    name: 'NestJS',
    domain: 'Backend',
    value: 32,
    description: 'Enterprise server architecture, dependency injection, guards, interceptors, and strict API controllers.',
    projects: ['ALZA Finstation']
  },
  {
    id: 'express',
    name: 'Express.js',
    domain: 'Backend',
    value: 31,
    description: 'Lightweight REST routing, middleware pipelines, authentication verification, and rate limiting.',
    projects: ['TAGAD']
  },
  {
    id: 'supabase',
    name: 'Supabase',
    domain: 'Data',
    value: 31,
    description: 'Managed PostgreSQL, row-level security policies, and institutional authentication flows.',
    projects: ['TAGAD', 'ALZA Finstation']
  },
  {
    id: 'prisma',
    name: 'Prisma ORM',
    domain: 'Data',
    value: 30,
    description: 'Type-safe database queries, declarative schema migrations, and relational join optimizations.',
    projects: ['TAGAD']
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    domain: 'Frontend',
    value: 32,
    description: 'Design system tokens, custom material shadow systems, fluid typography, and zero-runtime CSS.',
    projects: ['TAGAD', 'One Talibon', 'Kopi Site', 'Sportzone']
  },
  {
    id: 'python',
    name: 'Python',
    domain: 'Data',
    value: 29,
    description: 'Synthetic dataset generation algorithms, graphlib topological sorting, and automation scripts.',
    projects: ['ALZA DevKit', 'ALZA AI Lab']
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    domain: 'Backend',
    value: 28,
    description: 'High-throughput async endpoints, Pydantic data validation, and OpenAPI documentation.',
    projects: ['ALZA DevKit']
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    domain: 'Frontend',
    value: 30,
    description: 'Server components, full-stack application routing, and developer schema generation studios.',
    projects: ['ALZA DevKit']
  },
  {
    id: 'vite',
    name: 'Vite',
    domain: 'Frontend',
    value: 28,
    description: 'Rapid frontend bundling, ES modules, modern build pipelines, and zero-config development.',
    projects: ['Shinigami', 'One Talibon', 'Kopi Site']
  },
  {
    id: 'sarif',
    name: 'SARIF Format',
    domain: 'Security',
    value: 28,
    description: 'OASIS standard static analysis reporting and normalized security finding outputs.',
    projects: ['Shinigami']
  },
  {
    id: 'gitleaks',
    name: 'Gitleaks',
    domain: 'Security',
    value: 27,
    description: 'Automated secret detection regex rules, credential leak prevention, and pre-commit hooks.',
    projects: ['Shinigami']
  },
  {
    id: 'osv',
    name: 'OSV-Scanner',
    domain: 'Security',
    value: 27,
    description: 'Open-source dependency vulnerability auditing against Google OSV databases.',
    projects: ['Shinigami']
  },
  {
    id: 'rbac',
    name: 'RBAC Security',
    domain: 'Security',
    value: 29,
    description: 'Role-based access control, departmental permission matrices, and token verification.',
    projects: ['TAGAD', 'One Talibon', 'ALZA Finstation']
  },
  {
    id: 'sqlite',
    name: 'SQLite',
    domain: 'Data',
    value: 25,
    description: 'Embedded job caching, schema template storage, and lightweight local stores.',
    projects: ['ALZA DevKit']
  }
];

const DOMAINS: (EngineeringDomain | 'All')[] = [
  'All',
  'Architecture',
  'Frontend',
  'Backend',
  'Data',
  'Security'
];

export const SkillsCloud: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const simulationRef = useRef<d3.Simulation<SkillNode, undefined> | null>(null);

  const [activeDomain, setActiveDomain] = useState<EngineeringDomain | 'All'>('All');
  const [selectedSkill, setSelectedSkill] = useState<SkillNode | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<SkillNode | null>(null);
  const navigate = useNavigate();

  // Create initial nodes with scaled radii
  const nodesRef = useRef<SkillNode[]>(
    SKILLS_DATA.map(s => ({
      ...s,
      r: s.value
    }))
  );

  // Set initial selected skill
  useEffect(() => {
    if (!selectedSkill && nodesRef.current.length > 0) {
      setSelectedSkill(nodesRef.current[0]);
    }
  }, [selectedSkill]);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth || 700;
    const height = Math.max(440, Math.min(width * 0.65, 540));

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', `0 0 ${width} ${height}`);

    svg.selectAll('*').remove();

    const nodes = nodesRef.current;

    // Radius scaling based on viewport width
    const scaleFactor = width < 600 ? 0.78 : width < 900 ? 0.9 : 1.0;
    nodes.forEach(d => {
      d.r = d.value * scaleFactor;
    });

    // Domain target centers for clustering
    const domainCenters: Record<EngineeringDomain, { x: number; y: number }> = {
      Architecture: { x: width * 0.5, y: height * 0.4 },
      Frontend: { x: width * 0.25, y: height * 0.45 },
      Backend: { x: width * 0.75, y: height * 0.45 },
      Data: { x: width * 0.35, y: height * 0.75 },
      Security: { x: width * 0.65, y: height * 0.75 }
    };

    // Color definitions for domains (quiet, architectural tones)
    const getDomainColor = (domain: EngineeringDomain, isDark: boolean) => {
      if (isDark) {
        switch (domain) {
          case 'Architecture': return '#93b5cd';
          case 'Frontend': return '#78a6c8';
          case 'Backend': return '#a6c0d0';
          case 'Data': return '#89a8bd';
          case 'Security': return '#b2cad9';
        }
      } else {
        switch (domain) {
          case 'Architecture': return '#2c4759';
          case 'Frontend': return '#3d5c73';
          case 'Backend': return '#4f6c82';
          case 'Data': return '#355368';
          case 'Security': return '#2b4456';
        }
      }
    };

    const isDarkMode = document.documentElement.classList.contains('dark');

    // Create D3 Simulation
    const simulation = d3.forceSimulation<SkillNode>(nodes)
      .force('charge', d3.forceManyBody().strength(-35))
      .force('collide', d3.forceCollide<SkillNode>().radius(d => d.r + 3.5).iterations(3))
      .force('center', d3.forceCenter(width / 2, height / 2).strength(0.06))
      .force(
        'x',
        d3.forceX<SkillNode>(d => {
          if (activeDomain !== 'All' && d.domain !== activeDomain) {
            return width / 2;
          }
          return domainCenters[d.domain].x;
        }).strength(activeDomain === 'All' ? 0.08 : 0.25)
      )
      .force(
        'y',
        d3.forceY<SkillNode>(d => {
          if (activeDomain !== 'All' && d.domain !== activeDomain) {
            return height / 2;
          }
          return domainCenters[d.domain].y;
        }).strength(activeDomain === 'All' ? 0.08 : 0.25)
      )
      .alpha(0.8)
      .restart();

    simulationRef.current = simulation;

    // Defs for gradients & soft shadows
    const defs = svg.append('defs');
    
    // Ambient drop shadow filter
    const filter = defs.append('filter')
      .attr('id', 'bubble-shadow')
      .attr('height', '130%');
    filter.append('feDropShadow')
      .attr('dx', '0')
      .attr('dy', '3')
      .attr('stdDeviation', '4')
      .attr('flood-opacity', isDarkMode ? '0.35' : '0.07')
      .attr('flood-color', '#101820');

    // Group for nodes
    const nodeGroup = svg.append('g')
      .attr('class', 'nodes');

    // Node wrapper
    const node = nodeGroup.selectAll<SVGGElement, SkillNode>('g')
      .data(nodes, d => d.id)
      .join('g')
      .attr('class', 'node-item cursor-grab active:cursor-grabbing transition-opacity duration-200')
      .style('opacity', d => (activeDomain === 'All' || d.domain === activeDomain ? 1 : 0.2))
      .call(
        d3.drag<SVGGElement, SkillNode>()
          .on('start', (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on('drag', (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on('end', (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          })
      );

    // Bubble Background Circle
    node.append('circle')
      .attr('r', d => d.r)
      .attr('filter', 'url(#bubble-shadow)')
      .attr('fill', d => {
        const isSelected = selectedSkill?.id === d.id;
        if (isSelected) {
          return isDarkMode ? '#1f2c3a' : '#eaf0f4';
        }
        return isDarkMode ? '#131b24' : '#ffffff';
      })
      .attr('stroke', d => {
        const isSelected = selectedSkill?.id === d.id;
        if (isSelected) {
          return getDomainColor(d.domain, isDarkMode);
        }
        return isDarkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(25, 35, 45, 0.12)';
      })
      .attr('stroke-width', d => (selectedSkill?.id === d.id ? 2.5 : 1))
      .attr('class', 'transition-colors duration-150');

    // Text Label (Skill Name)
    node.append('text')
      .text(d => d.name)
      .attr('text-anchor', 'middle')
      .attr('dy', d => (d.r > 30 ? '-0.1em' : '0.3em'))
      .attr('font-size', d => {
        if (d.r > 34) return '12px';
        if (d.r > 28) return '11px';
        return '10px';
      })
      .attr('font-weight', '600')
      .attr('fill', d => {
        return isDarkMode ? '#f2f5f8' : '#17191c';
      })
      .attr('pointer-events', 'none')
      .attr('class', 'select-none font-sans');

    // Domain Subtitle (Only if bubble radius is large enough)
    node.filter(d => d.r > 30)
      .append('text')
      .text(d => d.domain)
      .attr('text-anchor', 'middle')
      .attr('dy', '1.25em')
      .attr('font-size', '9px')
      .attr('font-family', 'monospace')
      .attr('fill', d => getDomainColor(d.domain, isDarkMode))
      .attr('pointer-events', 'none')
      .attr('class', 'select-none opacity-85');

    // Hover & Click Handlers
    node
      .on('mouseenter', (event: MouseEvent, d: SkillNode) => {
        setHoveredSkill(d);
        if (event.currentTarget) {
          d3.select(event.currentTarget as SVGGElement)
            .select('circle')
            .transition()
            .duration(150)
            .attr('transform', 'scale(1.06)');
        }
      })
      .on('mouseleave', (event: MouseEvent) => {
        setHoveredSkill(null);
        if (event.currentTarget) {
          d3.select(event.currentTarget as SVGGElement)
            .select('circle')
            .transition()
            .duration(150)
            .attr('transform', 'scale(1)');
        }
      })
      .on('click', (event: MouseEvent, d: SkillNode) => {
        event.stopPropagation();
        setSelectedSkill(d);
      });

    // Tick update loop
    simulation.on('tick', () => {
      node.attr('transform', d => {
        // Clamp to svg boundaries
        const cx = Math.max(d.r + 5, Math.min(width - d.r - 5, d.x || width / 2));
        const cy = Math.max(d.r + 5, Math.min(height - d.r - 5, d.y || height / 2));
        d.x = cx;
        d.y = cy;
        return `translate(${cx}, ${cy})`;
      });
    });

    return () => {
      simulation.stop();
    };
  }, [activeDomain, selectedSkill]);

  const handleResetPhysics = () => {
    if (simulationRef.current) {
      simulationRef.current.alpha(1).restart();
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Top Filter and Actions Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Domain Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[var(--surface-soft)] rounded-xl border border-[var(--border-subtle)]">
          {DOMAINS.map(domain => {
            const isActive = activeDomain === domain;
            const count = domain === 'All'
              ? SKILLS_DATA.length
              : SKILLS_DATA.filter(s => s.domain === domain).length;

            return (
              <button
                key={domain}
                onClick={() => setActiveDomain(domain)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[var(--surface)] text-[var(--text-primary)] shadow-subtle'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {domain} ({count})
              </button>
            );
          })}
        </div>

        {/* Physics Controls */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-[var(--text-muted)]">
            <Move className="w-3.5 h-3.5" />
            <span>Interactive Drag & Gravity</span>
          </span>

          <button
            onClick={handleResetPhysics}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--surface-soft)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] rounded-lg transition-colors cursor-pointer"
            title="Reheat simulation physics"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Physics</span>
          </button>
        </div>
      </div>

      {/* D3 Simulation Container */}
      <div
        ref={containerRef}
        className="w-full min-h-[440px] bg-[var(--surface-soft)] border border-[var(--border-subtle)] rounded-2xl relative overflow-hidden flex items-center justify-center p-2 shadow-inset"
      >
        <svg
          ref={svgRef}
          className="w-full h-full select-none cursor-default"
          aria-label="Interactive D3.js Skills Bubble Chart"
        />

        <div className="absolute bottom-3 left-4 text-[10px] font-mono text-[var(--text-muted)] pointer-events-none">
          Click any bubble to inspect engineering details · Drag to interact with D3 physics
        </div>
      </div>

      {/* Selected Skill Inspector Panel */}
      {selectedSkill && (
        <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border-strong)] shadow-elevated transition-all duration-200">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Skill Name & Domain */}
            <div className="md:col-span-4 space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent-strong)]">
                <span>{selectedSkill.domain}</span>
                <span aria-hidden="true">·</span>
                <span>Weight: {selectedSkill.value}</span>
              </div>
              <h4 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
                {selectedSkill.name}
              </h4>
              <p className="text-xs text-[var(--text-muted)]">
                Core Competency in Production Applications
              </p>
            </div>

            {/* Description */}
            <div className="md:col-span-5 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block">
                Technical Context & Application
              </span>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {selectedSkill.description}
              </p>
            </div>

            {/* Verified Projects Using This Skill */}
            <div className="md:col-span-3 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block">
                Verified Projects
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedSkill.projects.map(projName => {
                  const projectObj = ALL_PROJECTS.find(p => p.name === projName || p.id === projName.toLowerCase());
                  return (
                    <button
                      key={projName}
                      onClick={() => {
                        if (projectObj) {
                          navigate(`/projects/${projectObj.slug}`);
                        }
                      }}
                      className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-[var(--surface-soft)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-[var(--text-primary)] font-medium transition-colors cursor-pointer group"
                    >
                      <span>{projName}</span>
                      <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-transform" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
