import React from 'react';
import { ArrowUp, Github } from 'lucide-react';
import { PROFILE } from '../../data/profile';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-32 border-t border-[var(--border-subtle)] bg-[var(--surface-soft)]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-[var(--text-primary)]">
              <span>AJ</span>
              <span className="text-[var(--text-muted)] font-light">/</span>
              <span>RIENZE</span>
            </div>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              {PROFILE.headline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--text-secondary)]">
            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[var(--text-primary)] transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <span aria-hidden="true" className="text-[var(--border-strong)]">·</span>
            <a
              href="/projects"
              className="hover:text-[var(--text-primary)] transition-colors"
            >
              Projects
            </a>
            <span aria-hidden="true" className="text-[var(--border-strong)]">·</span>
            <a
              href="/archive"
              className="hover:text-[var(--text-primary)] transition-colors"
            >
              Archive
            </a>
            <span aria-hidden="true" className="text-[var(--border-strong)]">·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-[var(--text-primary)] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <p>
            © {currentYear} {PROFILE.fullName}. Designed with quiet minimalism.
          </p>
          <p className="font-jp text-[13px] tracking-widest text-[var(--text-secondary)]">
            {PROFILE.signatureJp}
          </p>
        </div>
      </div>
    </footer>
  );
};
