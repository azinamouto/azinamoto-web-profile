import React from 'react';
import { PROFILE } from '../data/profile';
import { GraduationCap, MapPin, Briefcase, BookOpen } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 border-t border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-strong)] block mb-3">
            Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
            A little about me.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-8 space-y-6">
            <p className="text-xl sm:text-2xl font-normal text-[var(--text-primary)] leading-relaxed text-balance">
              I'm AJ Rienze, a full-stack developer and BS Information Systems student from Bohol, Philippines.
            </p>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              I enjoy building software that combines thoughtful interfaces, reliable architecture, and practical problem-solving. My interests extend beyond application development into security tools, database systems, algorithms, and engineering experiments.
            </p>

            <div className="p-6 rounded-2xl bg-[var(--surface-soft)] border border-[var(--border-subtle)] space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block">
                Engineering Philosophy
              </span>
              <p className="text-base italic text-[var(--text-primary)] leading-relaxed">
                "{PROFILE.philosophy}"
              </p>
            </div>
          </div>

          {/* Supporting Credentials / Context Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border-subtle)] shadow-subtle space-y-5">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block">
                Institutional Context
              </span>

              {/* Company */}
              <div className="flex items-start gap-3">
                <Briefcase className="w-4 h-4 text-[var(--accent-strong)] shrink-0 mt-0.5" />
                <div className="text-xs space-y-0.5">
                  <div className="font-semibold text-[var(--text-primary)]">
                    {PROFILE.title}
                  </div>
                  <div className="text-[var(--text-secondary)]">
                    {PROFILE.company}
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="flex items-start gap-3">
                <GraduationCap className="w-4 h-4 text-[var(--accent-strong)] shrink-0 mt-0.5" />
                <div className="text-xs space-y-0.5">
                  <div className="font-semibold text-[var(--text-primary)]">
                    {PROFILE.education}
                  </div>
                  <div className="text-[var(--text-secondary)]">
                    {PROFILE.institution}
                  </div>
                  <div className="text-[var(--text-muted)] font-mono text-[11px]">
                    {PROFILE.academicLevel}
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[var(--accent-strong)] shrink-0 mt-0.5" />
                <div className="text-xs space-y-0.5">
                  <div className="font-semibold text-[var(--text-primary)]">
                    Location
                  </div>
                  <div className="text-[var(--text-secondary)]">
                    {PROFILE.location}
                  </div>
                </div>
              </div>

              {/* Focus Topics */}
              <div className="pt-3 border-t border-[var(--border-subtle)] flex items-start gap-3">
                <BookOpen className="w-4 h-4 text-[var(--accent-strong)] shrink-0 mt-0.5" />
                <div className="text-xs space-y-0.5">
                  <div className="font-semibold text-[var(--text-primary)]">
                    Current Inquiries
                  </div>
                  <div className="text-[var(--text-muted)] font-mono text-[11px] leading-relaxed">
                    Systems Architecture · SAST Scanners · Synthetic Data Generation · Local Government Tech
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
