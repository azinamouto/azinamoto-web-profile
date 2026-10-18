import React, { useState } from 'react';
import { ALL_PROJECTS } from '../../data/projects';
import { EngineeringDomain, PortfolioProject } from '../../types/portfolio';
import { SoftSurface } from '../ui/Surfaces';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DOMAINS: { id: EngineeringDomain; label: string; x: number; y: number }[] = [
  { id: 'Architecture', label: 'Architecture', x: 250, y: 70 },
  { id: 'Frontend', label: 'Frontend', x: 80, y: 190 },
  { id: 'Backend', label: 'Backend', x: 420, y: 190 },
  { id: 'Data', label: 'Data Systems', x: 140, y: 320 },
  { id: 'Security', label: 'Security', x: 360, y: 320 }
];

export const ProjectConstellation: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<EngineeringDomain | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(ALL_PROJECTS[0]);
  const navigate = useNavigate();

  // Filter projects by domain if domain selected
  const activeProjects = selectedDomain === 'all'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.domains.includes(selectedDomain));

  return (
    <div className="w-full space-y-6">
      {/* Domain Filter Bar */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-mono text-[var(--text-muted)] mr-2">Filter by Domain:</span>
        <button
          onClick={() => setSelectedDomain('all')}
          className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
            selectedDomain === 'all'
              ? 'bg-[var(--text-primary)] text-white dark:bg-white dark:text-[#0c1015]'
              : 'bg-[var(--surface-soft)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
          }`}
        >
          All Domains ({ALL_PROJECTS.length})
        </button>
        {DOMAINS.map(d => {
          const count = ALL_PROJECTS.filter(p => p.domains.includes(d.id)).length;
          const isActive = selectedDomain === d.id;
          return (
            <button
              key={d.id}
              onClick={() => setSelectedDomain(d.id)}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                isActive
                  ? 'bg-[var(--text-primary)] text-white dark:bg-white dark:text-[#0c1015]'
                  : 'bg-[var(--surface-soft)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
              }`}
            >
              {d.label} ({count})
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Interactive Constellation SVG Map */}
        <div className="lg:col-span-7 bg-[var(--surface-soft)] border border-[var(--border-subtle)] rounded-2xl p-6 relative overflow-hidden flex items-center justify-center min-h-[380px]">
          <svg
            viewBox="0 0 500 400"
            className="w-full h-auto max-w-lg select-none"
            aria-label="Engineering Domain Constellation Graph"
          >
            {/* Background connection webs */}
            {DOMAINS.map((source, i) =>
              DOMAINS.slice(i + 1).map(target => (
                <line
                  key={`${source.id}-${target.id}`}
                  x1={source.x}
                  y1={source.y}
                  x2={target.x}
                  y2={target.y}
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                  className="text-[var(--border-strong)] opacity-40"
                />
              ))
            )}

            {/* Active links between selected project and its domains */}
            {selectedProject &&
              DOMAINS.map(d => {
                if (selectedProject.domains.includes(d.id)) {
                  return (
                    <line
                      key={`active-${d.id}`}
                      x1={d.x}
                      y1={d.y}
                      x2={250}
                      y2={210}
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-[var(--accent-strong)] transition-all duration-300"
                    />
                  );
                }
                return null;
              })}

            {/* Domain Anchor Hubs */}
            {DOMAINS.map(d => {
              const isSelected = selectedDomain === d.id || selectedProject?.domains.includes(d.id);
              return (
                <g
                  key={d.id}
                  onClick={() => setSelectedDomain(selectedDomain === d.id ? 'all' : d.id)}
                  className="cursor-pointer group"
                >
                  <circle
                    cx={d.x}
                    cy={d.y}
                    r={isSelected ? '22' : '18'}
                    className={`transition-all duration-200 ${
                      isSelected
                        ? 'fill-[var(--surface)] stroke-[var(--accent-strong)] stroke-2'
                        : 'fill-[var(--surface-elevated)] stroke-[var(--border-strong)] stroke-1 hover:stroke-[var(--text-secondary)]'
                    }`}
                  />
                  <text
                    x={d.x}
                    y={d.y + 4}
                    textAnchor="middle"
                    className={`text-[10px] font-mono select-none pointer-events-none transition-colors ${
                      isSelected ? 'font-bold fill-[var(--text-primary)]' : 'fill-[var(--text-secondary)]'
                    }`}
                  >
                    {d.label.slice(0, 4).toUpperCase()}
                  </text>
                  <text
                    x={d.x}
                    y={d.y + (d.y > 200 ? 34 : -26)}
                    textAnchor="middle"
                    className="text-[11px] font-sans font-medium fill-[var(--text-secondary)] select-none pointer-events-none"
                  >
                    {d.label}
                  </text>
                </g>
              );
            })}

            {/* Center Focal Point: Active Project Node */}
            <g
              transform="translate(250, 210)"
              onClick={() => selectedProject && navigate(`/projects/${selectedProject.slug}`)}
              className="cursor-pointer"
            >
              <circle
                r="30"
                className="fill-[var(--surface)] stroke-[var(--text-primary)] stroke-2 filter drop-shadow-sm transition-transform duration-200 hover:scale-105"
              />
              <text
                textAnchor="middle"
                y="-2"
                className="text-[10px] font-mono font-bold fill-[var(--text-primary)] pointer-events-none"
              >
                PROJECT
              </text>
              <text
                textAnchor="middle"
                y="12"
                className="text-[9px] font-mono fill-[var(--accent)] pointer-events-none"
              >
                {selectedProject?.name.slice(0, 8)}
              </text>
            </g>
          </svg>

          <div className="absolute bottom-3 left-4 text-[10px] font-mono text-[var(--text-muted)]">
            Click any domain node or project to explore domain intersections
          </div>
        </div>

        {/* Selected Project Card & Info */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 bg-[var(--surface)] border border-[var(--border-subtle)] rounded-2xl shadow-elevated">
          {selectedProject ? (
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                  <span>{selectedProject.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedProject.statusLabel}</span>
                </div>
                <h4 className="mt-1 text-xl font-bold tracking-tight text-[var(--text-primary)]">
                  {selectedProject.name}
                </h4>
              </div>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {selectedProject.summary}
              </p>

              <div>
                <span className="text-xs font-mono text-[var(--text-muted)] block mb-1.5">
                  Intersects Domains:
                </span>
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-[var(--text-primary)] font-medium">
                  {selectedProject.domains.map((dom, i) => (
                    <React.Fragment key={dom}>
                      <span className="px-2 py-0.5 rounded bg-[var(--surface-soft)] border border-[var(--border-subtle)] font-mono text-[11px]">
                        {dom}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-mono text-[var(--text-muted)] block mb-1">
                  Key Technologies:
                </span>
                <p className="text-xs font-mono text-[var(--text-secondary)]">
                  {selectedProject.technologies.join(' · ')}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigate(`/projects/${selectedProject.slug}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-primary)] hover:text-[var(--accent-strong)] transition-colors cursor-pointer group"
                >
                  <span>View Project Technical Specification</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ) : (
            <div className="text-sm text-[var(--text-muted)] flex items-center justify-center h-full">
              Select a project to view architectural mapping
            </div>
          )}

          {/* Quick Select Project Buttons */}
          <div className="pt-4 mt-4 border-t border-[var(--border-subtle)]">
            <span className="text-[11px] font-mono text-[var(--text-muted)] block mb-2">
              Explore Active Domain Projects:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {activeProjects.slice(0, 6).map(p => (
                <button
                  key={p.id}
                  onClick={() => setSelectedProject(p)}
                  className={`text-xs px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                    selectedProject?.id === p.id
                      ? 'bg-[var(--text-primary)] text-white dark:bg-white dark:text-[#0c1015]'
                      : 'bg-[var(--surface-soft)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
