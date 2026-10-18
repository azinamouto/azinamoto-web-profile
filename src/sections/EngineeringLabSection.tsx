import React from 'react';
import { LAB_PROJECTS } from '../data/projects';
import { Github, ArrowUpRight, FlaskConical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const EngineeringLabSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="lab" className="py-24 border-t border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-strong)] block mb-3 flex items-center gap-2">
              <FlaskConical className="w-3.5 h-3.5" />
              <span>Research & Exploration</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Things I'm exploring.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              Experimental prototypes, security tooling research, algorithms, and interactive interfaces.
            </p>
          </div>

          <span className="text-xs font-mono text-[var(--text-muted)]">
            {LAB_PROJECTS.length} Active Lab Entries
          </span>
        </div>

        {/* Spacious Rows */}
        <div className="space-y-4">
          {LAB_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-7 rounded-2xl bg-[var(--surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:shadow-elevated transition-all duration-200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Name & Category */}
                <div className="lg:col-span-3 space-y-1">
                  <span className="text-xs font-mono text-[var(--accent-strong)]">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
                    {project.name}
                  </h3>
                  <div className="text-[11px] font-mono text-[var(--text-muted)]">
                    {project.statusLabel}
                  </div>
                </div>

                {/* Summary & Highlights */}
                <div className="lg:col-span-6 space-y-2">
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {project.summary}
                  </p>
                  <div className="text-xs font-mono text-[var(--text-muted)]">
                    <span className="text-[var(--text-secondary)]">Tech: </span>
                    <span>{project.technologies.join(' · ')}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="lg:col-span-3 flex items-center lg:justify-end gap-3 pt-2 lg:pt-0">
                  <button
                    onClick={() => navigate(`/projects/${project.slug}`)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-[var(--surface-soft)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] rounded-lg transition-colors cursor-pointer group"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  {project.repositoryUrl && (
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors rounded-lg hover:bg-[var(--surface-soft)] cursor-pointer"
                      aria-label={`${project.name} GitHub Repository`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
