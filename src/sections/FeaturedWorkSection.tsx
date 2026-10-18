import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FEATURED_PROJECTS } from '../data/projects';
import { Github, ArrowUpRight, Cpu, Layers } from 'lucide-react';
import { ArchitectureExplorer } from '../components/diagrams/ArchitectureExplorer';

export const FeaturedWorkSection: React.FC = () => {
  const navigate = useNavigate();
  const [activeExplorerSlug, setActiveExplorerSlug] = useState<string | null>(null);

  const toggleExplorer = (slug: string) => {
    setActiveExplorerSlug(prev => (prev === slug ? null : slug));
  };

  return (
    <section id="work" className="py-24 border-t border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-strong)] block mb-3">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Selected work.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              Systems, tools, and digital experiences I've built or contributed to.
            </p>
          </div>

          <a
            href="/projects"
            onClick={(e) => {
              e.preventDefault();
              navigate('/projects');
            }}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent-strong)] transition-colors whitespace-nowrap cursor-pointer group"
          >
            <span>View All Projects Directory</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* 4 Spacious Showcase Rows */}
        <div className="space-y-12">
          {FEATURED_PROJECTS.map((project, idx) => {
            const isExplorerOpen = activeExplorerSlug === project.slug;

            return (
              <div
                key={project.id}
                className="p-8 sm:p-10 rounded-2xl bg-[var(--surface)] border border-[var(--border-subtle)] shadow-elevated hover:border-[var(--border-strong)] transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  {/* Left Column: Context, Narrative, Highlights */}
                  <div className="lg:col-span-7 space-y-6">
                    {/* Category & Status */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--text-muted)] font-mono">
                      <span>{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[var(--accent-strong)] font-medium">
                        {project.statusLabel}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                      {project.name}
                    </h3>

                    {/* Summary */}
                    <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Key Engineering Highlights */}
                    <div className="space-y-2 pt-2 border-t border-[var(--border-subtle)]">
                      <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block">
                        Engineering Highlights
                      </span>
                      <ul className="space-y-1.5 text-sm text-[var(--text-secondary)]">
                        {project.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5">
                            <span className="text-[var(--accent)] select-none shrink-0 mt-1">―</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Unboxed Text */}
                    <div className="pt-2 text-xs font-mono text-[var(--text-muted)]">
                      <span className="text-[var(--text-secondary)] font-medium">Stack: </span>
                      <span>{project.technologies.join(' · ')}</span>
                    </div>

                    {/* Action Controls */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => navigate(`/projects/${project.slug}`)}
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium bg-[#17191c] text-white rounded-xl hover:bg-[#2b3036] dark:bg-[#f2f5f8] dark:text-[#0c1015] dark:hover:bg-[#e0e6ed] transition-all cursor-pointer shadow-subtle"
                      >
                        <span>Full Specification</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      {project.architecture && (
                        <button
                          onClick={() => toggleExplorer(project.slug)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium bg-[var(--surface-soft)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] rounded-xl transition-all cursor-pointer"
                        >
                          <Cpu className="w-3.5 h-3.5 text-[var(--accent)]" />
                          <span>{isExplorerOpen ? 'Hide Pipeline' : 'Inspect Architecture'}</span>
                        </button>
                      )}

                      {project.repositoryUrl && (
                        <a
                          href={project.repositoryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-2 cursor-pointer"
                        >
                          <Github className="w-4 h-4" />
                          <span>Repository</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Architectural Schematic Diagram */}
                  <div className="lg:col-span-5 w-full">
                    <div className="p-6 rounded-xl shadow-inset border border-[var(--border-subtle)] space-y-4">
                      <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2.5">
                        <span className="text-xs font-mono font-medium text-[var(--text-primary)] flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-[var(--accent)]" />
                          <span>Layer Overview</span>
                        </span>
                        <span className="text-[11px] font-mono text-[var(--text-muted)]">
                          0{idx + 1} / 04
                        </span>
                      </div>

                      <div className="space-y-2 text-xs font-mono">
                        <div className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)] flex items-center justify-between">
                          <span className="text-[var(--text-secondary)]">Role</span>
                          <span className="text-[var(--text-primary)] font-medium">{project.role}</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)] flex items-center justify-between">
                          <span className="text-[var(--text-secondary)]">Scope</span>
                          <span className="text-[var(--text-primary)] font-medium">{project.domains.join(' + ')}</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)] flex items-center justify-between">
                          <span className="text-[var(--text-secondary)]">Verification</span>
                          <span className="text-[var(--accent-strong)] font-medium">Type-Safe</span>
                        </div>
                      </div>

                      <div className="text-[11px] text-[var(--text-muted)] leading-relaxed pt-1">
                        Engineered with modular service boundaries and structured data integrity.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Inline Architecture Explorer (Toggleable) */}
                {isExplorerOpen && project.architecture && (
                  <div className="mt-8 pt-8 border-t border-[var(--border-subtle)] animate-in fade-in duration-200">
                    <ArchitectureExplorer
                      architecture={project.architecture}
                      projectName={project.name}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
