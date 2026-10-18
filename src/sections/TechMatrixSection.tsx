import React, { useState } from 'react';
import { TECH_DOMAINS } from '../data/profile';
import { ALL_PROJECTS } from '../data/projects';
import { ProjectConstellation } from '../components/diagrams/ProjectConstellation';
import { SkillsCloud } from '../components/diagrams/SkillsCloud';
import { ArrowUpRight, Sparkles, Network, Grid } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type ActiveViewMode = 'cloud' | 'constellation' | 'matrix';

export const TechMatrixSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<ActiveViewMode>('cloud');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const navigate = useNavigate();

  // Find real projects using this technology
  const matchingProjects = selectedTech
    ? ALL_PROJECTS.filter(p =>
        p.technologies.some(t => t.toLowerCase().includes(selectedTech.toLowerCase()))
      )
    : [];

  return (
    <section id="technologies" className="py-24 border-t border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-strong)] block mb-3">
              Competencies & Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Core technologies & engineering skills.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              Explore the stack through an animated D3.js physics simulation, domain topology constellation, or structured directory.
            </p>
          </div>

          {/* View Mode Segmented Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-[var(--surface-soft)] rounded-xl border border-[var(--border-subtle)] self-start md:self-auto">
            <button
              onClick={() => setViewMode('cloud')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                viewMode === 'cloud'
                  ? 'bg-[var(--surface)] text-[var(--text-primary)] shadow-subtle'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[var(--accent-strong)]" />
              <span>D3 Skills Cloud</span>
            </button>

            <button
              onClick={() => setViewMode('constellation')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                viewMode === 'constellation'
                  ? 'bg-[var(--surface)] text-[var(--text-primary)] shadow-subtle'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Network className="w-3.5 h-3.5 text-[var(--accent-strong)]" />
              <span>Domain Constellation</span>
            </button>

            <button
              onClick={() => setViewMode('matrix')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                viewMode === 'matrix'
                  ? 'bg-[var(--surface)] text-[var(--text-primary)] shadow-subtle'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Grid className="w-3.5 h-3.5 text-[var(--accent-strong)]" />
              <span>Domain Grid</span>
            </button>
          </div>
        </div>

        {/* Dynamic Interactive View */}
        {viewMode === 'cloud' && (
          <div className="animate-in fade-in duration-300">
            <SkillsCloud />
          </div>
        )}

        {viewMode === 'constellation' && (
          <div className="animate-in fade-in duration-300 space-y-4">
            <div className="p-4 rounded-xl bg-[var(--surface-soft)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)]">
              An interactive visual map showing how AJ's software implementations connect across Frontend, Backend, Data, Security, and Architecture domains.
            </div>
            <ProjectConstellation />
          </div>
        )}

        {viewMode === 'matrix' && (
          <div className="animate-in fade-in duration-300 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TECH_DOMAINS.map((domain) => (
                <div
                  key={domain.domain}
                  className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border-subtle)] shadow-subtle space-y-4"
                >
                  <div>
                    <h3 className="text-base font-bold text-[var(--text-primary)]">
                      {domain.domain}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5 leading-relaxed">
                      {domain.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[var(--border-subtle)]">
                    {domain.items.map((item) => {
                      const isSelected = selectedTech === item.name;
                      return (
                        <button
                          key={item.name}
                          onClick={() => setSelectedTech(isSelected ? null : item.name)}
                          className={`text-xs px-2.5 py-1 rounded-lg font-mono transition-all duration-150 cursor-pointer ${
                            isSelected
                              ? 'bg-[var(--text-primary)] text-white dark:bg-white dark:text-[#0c1015]'
                              : 'bg-[var(--surface-soft)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] border border-[var(--border-subtle)]'
                          }`}
                          title={`Click to filter projects using ${item.name}`}
                        >
                          {item.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Technology Inspector: Projects Using Selected Tech */}
            {selectedTech && (
              <div className="p-6 rounded-2xl bg-[var(--surface-soft)] border border-[var(--border-strong)] animate-in fade-in duration-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[var(--text-primary)]">
                    Projects verified with <span className="font-bold underline">{selectedTech}</span>:
                  </span>
                  <button
                    onClick={() => setSelectedTech(null)}
                    className="text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
                  >
                    Clear filter
                  </button>
                </div>

                {matchingProjects.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {matchingProjects.map(proj => (
                      <div
                        key={proj.id}
                        onClick={() => navigate(`/projects/${proj.slug}`)}
                        className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all cursor-pointer group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-sm text-[var(--text-primary)]">
                            {proj.name}
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />
                        </div>
                        <p className="text-xs text-[var(--text-secondary)] mt-1 line-clamp-2">
                          {proj.summary}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-[var(--text-muted)]">
                    Technology utilized in internal scaffolding or research repositories.
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
