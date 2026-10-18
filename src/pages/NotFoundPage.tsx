import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Home, FolderKanban } from 'lucide-react';
import { SoftButton } from '../components/ui/SoftButton';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 pt-24 pb-16">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border-subtle)] shadow-elevated">
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-strong)] block">
          404 — Not Found
        </span>

        <h1 className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)]">
          Page does not exist.
        </h1>

        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
          The requested path is not mapped in this portfolio directory.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <SoftButton
            variant="primary"
            size="md"
            onClick={() => navigate('/')}
            icon={<Home className="w-4 h-4" />}
          >
            Homepage
          </SoftButton>

          <SoftButton
            variant="secondary"
            size="md"
            onClick={() => navigate('/projects')}
            icon={<FolderKanban className="w-4 h-4" />}
          >
            All Projects
          </SoftButton>
        </div>
      </div>
    </div>
  );
};
