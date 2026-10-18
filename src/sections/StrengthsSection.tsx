import React from 'react';
import { STRENGTHS } from '../data/profile';
import { Layers, Network, ShieldCheck, Layout } from 'lucide-react';

export const StrengthsSection: React.FC = () => {
  const getIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Layers className="w-5 h-5 text-[var(--accent-strong)]" />;
      case '02':
        return <Network className="w-5 h-5 text-[var(--accent-strong)]" />;
      case '03':
        return <ShieldCheck className="w-5 h-5 text-[var(--accent-strong)]" />;
      case '04':
        return <Layout className="w-5 h-5 text-[var(--accent-strong)]" />;
      default:
        return null;
    }
  };

  return (
    <section id="strengths" className="py-24 border-t border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-strong)] block mb-3">
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
            What I do best.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            From interfaces to architecture, I build software with clarity, reliability, and practical use in mind.
          </p>
        </div>

        {/* Spacious Editorial Rows */}
        <div className="space-y-4">
          {STRENGTHS.map((item) => (
            <div
              key={item.number}
              className="group p-6 sm:p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:shadow-elevated transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
                {/* Large Editorial Number */}
                <div className="lg:col-span-2 flex items-center gap-3">
                  <span className="font-mono text-3xl sm:text-4xl font-bold text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                    {item.number}
                  </span>
                  <div className="p-2 rounded-lg bg-[var(--surface-soft)] border border-[var(--border-subtle)] group-hover:scale-105 transition-transform">
                    {getIcon(item.number)}
                  </div>
                </div>

                {/* Title and Copy */}
                <div className="lg:col-span-6 space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Technical Focus Details */}
                <div className="lg:col-span-4 lg:text-right space-y-1">
                  <span className="text-xs font-mono text-[var(--text-muted)] block">
                    Domain Focus
                  </span>
                  <p className="text-xs font-mono text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                    {item.focus}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
