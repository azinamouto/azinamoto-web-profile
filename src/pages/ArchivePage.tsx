import React, { useState, useEffect } from 'react';
import { ALL_PROJECTS } from '../data/projects';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Search, Github } from 'lucide-react';

export const ArchivePage: React.FC = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Project Archive — AJ Rienze';
  }, []);

  const filtered = ALL_PROJECTS.filter(p => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.technologies.some(t => t.toLowerCase().includes(q)) ||
      (p.year && p.year.includes(q))
    );
  });

  return (
    <div className="pt-28 pb-24 max-w-6xl mx-auto px-6">
      {/* Header */}
      <div className="max-w-2xl mb-12">
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-strong)] block mb-2">
          Chronological Index
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
          Engineering Archive
        </h1>
        <p className="mt-3 text-base text-[var(--text-secondary)]">
          A structured record of completed projects, internal tools, and engineering experiments.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative max-w-sm mb-8">
        <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Filter archive by name, tech, or year..."
          className="w-full pl-9 pr-3.5 py-2 text-xs bg-[var(--surface-soft)] border border-[var(--border-subtle)] focus:border-[var(--border-strong)] rounded-xl text-[var(--text-primary)] outline-none"
        />
      </div>

      {/* Archive Table */}
      <div className="border border-[var(--border-subtle)] rounded-2xl bg-[var(--surface)] overflow-hidden shadow-subtle">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-subtle)] bg-[var(--surface-soft)] text-[var(--text-muted)] font-mono">
                <th className="py-3.5 px-4 font-medium">Year</th>
                <th className="py-3.5 px-4 font-medium">Project</th>
                <th className="py-3.5 px-4 font-medium hidden md:table-cell">Category</th>
                <th className="py-3.5 px-4 font-medium hidden lg:table-cell">Technologies</th>
                <th className="py-3.5 px-4 font-medium">Status</th>
                <th className="py-3.5 px-4 font-medium text-right">Links</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-subtle)]">
              {filtered.map(project => (
                <tr
                  key={project.id}
                  className="hover:bg-[var(--surface-soft)]/50 transition-colors"
                >
                  <td className="py-4 px-4 font-mono text-[var(--text-muted)] whitespace-nowrap">
                    {project.year || '2024'}
                  </td>

                  <td className="py-4 px-4 font-medium text-[var(--text-primary)] whitespace-nowrap">
                    <button
                      onClick={() => navigate(`/projects/${project.slug}`)}
                      className="hover:text-[var(--accent-strong)] transition-colors text-left font-semibold cursor-pointer"
                    >
                      {project.name}
                    </button>
                  </td>

                  <td className="py-4 px-4 text-[var(--text-secondary)] hidden md:table-cell">
                    {project.category}
                  </td>

                  <td className="py-4 px-4 font-mono text-[var(--text-muted)] hidden lg:table-cell">
                    {project.technologies.slice(0, 4).join(' · ')}
                    {project.technologies.length > 4 && ' …'}
                  </td>

                  <td className="py-4 px-4 whitespace-nowrap">
                    <span className="font-mono text-[11px] text-[var(--accent-strong)]">
                      {project.statusLabel}
                    </span>
                  </td>

                  <td className="py-4 px-4 text-right whitespace-nowrap space-x-2">
                    <button
                      onClick={() => navigate(`/projects/${project.slug}`)}
                      className="inline-flex items-center gap-1 text-[var(--text-primary)] hover:text-[var(--accent-strong)] transition-colors cursor-pointer"
                      title="View Project Specification"
                    >
                      <span>Spec</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>

                    {project.repositoryUrl && (
                      <a
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                        title="GitHub"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
