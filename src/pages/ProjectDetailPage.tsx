import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ALL_PROJECTS } from '../data/projects';
import { ArrowLeft, Github, ArrowUpRight, CheckCircle2, AlertTriangle, Layers, ShieldCheck, Database, Compass } from 'lucide-react';
import { ArchitectureExplorer } from '../components/diagrams/ArchitectureExplorer';
import { SoftSurface, InsetSurface } from '../components/ui/Surfaces';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const project = ALL_PROJECTS.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      document.title = `${project.name} — Technical Specification | AJ Rienze`;
    }
  }, [project]);

  if (!project) {
    return (
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-6 text-center space-y-4">
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Project Not Found</h1>
        <p className="text-sm text-[var(--text-secondary)]">
          The requested project specification does not exist in the active catalog.
        </p>
        <button
          onClick={() => navigate('/projects')}
          className="inline-flex items-center gap-2 text-xs font-medium text-[var(--text-primary)] underline cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Projects Directory</span>
        </button>
      </div>
    );
  }

  return (
    <article className="pt-28 pb-24 max-w-4xl mx-auto px-6 space-y-16">
      {/* Back Button */}
      <div>
        <button
          onClick={() => navigate('/projects')}
          className="inline-flex items-center gap-2 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Projects</span>
        </button>
      </div>

      {/* 1. Overview Header */}
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
          <span>{project.category}</span>
          <span aria-hidden="true">·</span>
          <span className="text-[var(--accent-strong)] font-semibold">{project.statusLabel}</span>
          {project.year && (
            <>
              <span aria-hidden="true">·</span>
              <span>{project.year}</span>
            </>
          )}
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
          {project.name}
        </h1>

        <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed">
          {project.summary}
        </p>

        {/* Key Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[var(--border-subtle)] text-xs font-mono">
          <div className="p-3.5 rounded-xl bg-[var(--surface-soft)] border border-[var(--border-subtle)]">
            <span className="text-[var(--text-muted)] block mb-1">ROLE</span>
            <span className="text-[var(--text-primary)] font-medium">{project.role}</span>
          </div>

          <div className="p-3.5 rounded-xl bg-[var(--surface-soft)] border border-[var(--border-subtle)]">
            <span className="text-[var(--text-muted)] block mb-1">DOMAINS</span>
            <span className="text-[var(--text-primary)] font-medium">{project.domains.join(', ')}</span>
          </div>

          <div className="p-3.5 rounded-xl bg-[var(--surface-soft)] border border-[var(--border-subtle)]">
            <span className="text-[var(--text-muted)] block mb-1">VERIFIED STATUS</span>
            <span className="text-[var(--accent-strong)] font-medium">{project.statusLabel}</span>
          </div>
        </div>

        {/* Repository & Demo Action Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.repositoryUrl && (
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium bg-[#17191c] text-white dark:bg-[#f2f5f8] dark:text-[#0c1015] rounded-xl hover:opacity-90 transition-opacity shadow-subtle"
            >
              <Github className="w-4 h-4" />
              <span>Inspect Source Repository</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/70 dark:text-black/70" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium bg-[var(--surface-soft)] text-[var(--text-primary)] border border-[var(--border-subtle)] rounded-xl hover:border-[var(--border-strong)] transition-colors"
            >
              <span>Live Demonstration</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </header>

      {/* 2. Problem & Approach */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[var(--border-subtle)]">
        <div className="space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent-strong)] font-semibold">
            01. The Problem
          </span>
          <h2 className="text-xl font-bold text-[var(--text-primary)]">
            Practical Challenge
          </h2>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            {project.problem || project.description}
          </p>
        </div>

        <div className="space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent-strong)] font-semibold">
            02. The Approach
          </span>
          <h2 className="text-xl font-bold text-[var(--text-primary)]">
            Architectural Reasoning
          </h2>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            {project.approach ||
              'Constructed with clear boundaries, type-safe communication contracts, and minimal unnecessary runtime dependencies.'}
          </p>
        </div>
      </section>

      {/* 3. Engineering Highlights */}
      <section className="space-y-6 pt-8 border-t border-[var(--border-subtle)]">
        <div className="space-y-1">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent-strong)] font-semibold">
            03. Technical Rigor
          </span>
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">
            Engineering Highlights
          </h2>
        </div>

        <div className="space-y-3">
          {project.highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-xl bg-[var(--surface)] border border-[var(--border-subtle)] shadow-subtle flex items-start gap-3.5"
            >
              <div className="p-1 rounded-md bg-[var(--surface-soft)] text-[var(--accent-strong)] shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <p className="text-sm text-[var(--text-primary)] leading-relaxed">
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Architecture Explorer Diagram */}
      {project.architecture && (
        <section className="space-y-6 pt-8 border-t border-[var(--border-subtle)]">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent-strong)] font-semibold">
              04. System Layout
            </span>
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
              Architecture & Data Flow
            </h2>
          </div>

          <ArchitectureExplorer
            architecture={project.architecture}
            projectName={project.name}
          />
        </section>
      )}

      {/* 5. Technology Stack Breakdown */}
      <section className="space-y-4 pt-8 border-t border-[var(--border-subtle)]">
        <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent-strong)] font-semibold">
          05. Implemented Technologies
        </span>
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">
          Technology Manifest
        </h2>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map(tech => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg bg-[var(--surface-soft)] border border-[var(--border-subtle)] font-mono text-xs text-[var(--text-primary)] font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* 6. Status and Limitations */}
      <section className="space-y-6 pt-8 border-t border-[var(--border-subtle)]">
        <div className="space-y-1">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent-strong)] font-semibold">
            06. Engineering Honesty
          </span>
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">
            Status & Limitations
          </h2>
          <p className="text-xs text-[var(--text-muted)]">
            A transparent account of current capabilities, test boundaries, and roadmap constraints.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[var(--surface-soft)] border border-[var(--border-subtle)] space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-primary)] font-semibold">
            <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>Current Development State: {project.statusLabel}</span>
          </div>

          {project.limitations && project.limitations.length > 0 ? (
            <ul className="space-y-2 text-xs text-[var(--text-secondary)] pt-2 border-t border-[var(--border-subtle)]">
              {project.limitations.map((lim, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[var(--text-muted)] shrink-0 select-none">·</span>
                  <span>{lim}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-[var(--text-secondary)]">
              Functional verification complete for documented module requirements.
            </p>
          )}
        </div>
      </section>

      {/* Footer Navigation within Project */}
      <div className="pt-12 border-t border-[var(--border-subtle)] flex items-center justify-between">
        <button
          onClick={() => navigate('/projects')}
          className="text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center gap-1.5 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Projects</span>
        </button>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
        >
          Back to Top
        </button>
      </div>
    </article>
  );
};
