import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ALL_PROJECTS } from '../data/projects';
import { EngineeringDomain } from '../types/portfolio';
import { Search, ArrowUpRight, Github, Filter } from 'lucide-react';

const DOMAINS: (EngineeringDomain | 'All')[] = [
  'All',
  'Architecture',
  'Frontend',
  'Backend',
  'Data',
  'Security'
];

export const ProjectsIndexPage: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<EngineeringDomain | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Projects & Systems — AJ Rienze';
  }, []);

  const filtered = ALL_PROJECTS.filter(project => {
    const matchesDomain =
      selectedDomain === 'All' || project.domains.includes(selectedDomain);

    const q = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !q ||
      project.name.toLowerCase().includes(q) ||
      project.category.toLowerCase().includes(q) ||
      project.summary.toLowerCase().includes(q) ||
      project.technologies.some(t => t.toLowerCase().includes(q));

    return matchesDomain && matchesQuery;
  });

  return (
    <div className="pt-28 pb-24 max-w-6xl mx-auto px-6">
      {/* Page Header */}
      <div className="max-w-2xl mb-12">
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-strong)] block mb-2">
          Directory
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
          Projects & Implementations
        </h1>
        <p className="mt-3 text-base text-[var(--text-secondary)]">
          A comprehensive catalog of systems, tools, and engineering research built by AJ Rienze.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-[var(--border-subtle)]">
        {/* Domain Segmented Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[var(--surface-soft)] rounded-xl border border-[var(--border-subtle)]">
          {DOMAINS.map(domain => {
            const isActive = selectedDomain === domain;
            return (
              <button
                key={domain}
                onClick={() => setSelectedDomain(domain)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[var(--surface)] text-[var(--text-primary)] shadow-subtle'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {domain}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search by keyword, tech..."
            className="w-full pl-9 pr-3.5 py-1.5 text-xs bg-[var(--surface-soft)] border border-[var(--border-subtle)] focus:border-[var(--border-strong)] rounded-xl text-[var(--text-primary)] outline-none"
          />
        </div>
      </div>

      {/* Project Grid */}
      <div className="space-y-4">
        {filtered.length === 0 ? (
          <div className="py-16 text-center text-sm text-[var(--text-muted)] bg-[var(--surface-soft)] rounded-2xl border border-[var(--border-subtle)]">
            No projects match the selected filters.
          </div>
        ) : (
          filtered.map(project => (
            <div
              key={project.id}
              className="p-6 sm:p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:shadow-elevated transition-all duration-200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
                {/* Name & Status */}
                <div className="lg:col-span-4 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
                    <span>{project.category}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)]">
                    {project.name}
                  </h2>
                  <span className="inline-block text-[11px] font-mono text-[var(--accent-strong)]">
                    {project.statusLabel}
                  </span>
                </div>

                {/* Summary & Stack */}
                <div className="lg:col-span-5 space-y-3">
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {project.summary}
                  </p>
                  <div className="text-xs font-mono text-[var(--text-muted)]">
                    <span className="text-[var(--text-secondary)]">Technologies: </span>
                    <span>{project.technologies.join(' · ')}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="lg:col-span-3 flex items-center lg:justify-end gap-3 pt-2 lg:pt-0">
                  <button
                    onClick={() => navigate(`/projects/${project.slug}`)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium bg-[#17191c] text-white rounded-xl hover:bg-[#2b3036] dark:bg-[#f2f5f8] dark:text-[#0c1015] dark:hover:bg-[#e0e6ed] transition-colors cursor-pointer"
                  >
                    <span>Specification</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  {project.repositoryUrl && (
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors rounded-xl hover:bg-[var(--surface-soft)] cursor-pointer"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
