import React from 'react';
import { PROFILE } from '../data/profile';
import { Compass, Code2, CheckCircle, ArrowRight } from 'lucide-react';

export const AlzaSection: React.FC = () => {
  return (
    <section id="alza" className="py-24 border-t border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-strong)] block mb-3">
            Institutional Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
            Building beyond my own projects.
          </h2>
        </div>

        {/* Large Editorial Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[var(--surface)] border border-[var(--border-subtle)] shadow-elevated">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Role & Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-strong)] font-semibold block mb-1">
                  {PROFILE.company}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                  Founder & Chief Technology Officer
                </h3>
              </div>

              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                At ALZA, I help lead technical planning, software architecture, and application development for organizational and government-oriented systems.
              </p>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                We focus on bringing modern engineering rigor—such as type-safe data access, modular APIs, and structured reporting workflows—to local institutions that need dependable digital infrastructure.
              </p>

              {/* Company Motto */}
              <div className="pt-4 border-t border-[var(--border-subtle)]">
                <span className="text-xs font-mono text-[var(--text-muted)] block mb-1">
                  ORGANIZATIONAL MOTTO
                </span>
                <p className="font-mono text-base font-bold tracking-wider text-[var(--text-primary)]">
                  {PROFILE.alzaMotto}
                </p>
              </div>
            </div>

            {/* Right: Three Core Focus Areas */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-2">
                Core Leadership Focus
              </span>

              {/* Focus 1 */}
              <div className="p-4 rounded-xl bg-[var(--surface-soft)] border border-[var(--border-subtle)] flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)] text-[var(--accent-strong)] shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                    Technical Architecture
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
                    Defining database schemas, API boundaries, and modular service patterns that prevent technical debt.
                  </p>
                </div>
              </div>

              {/* Focus 2 */}
              <div className="p-4 rounded-xl bg-[var(--surface-soft)] border border-[var(--border-subtle)] flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)] text-[var(--accent-strong)] shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                    Software Development
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
                    Leading end-to-end implementation across responsive frontend interfaces and secure backend web services.
                  </p>
                </div>
              </div>

              {/* Focus 3 */}
              <div className="p-4 rounded-xl bg-[var(--surface-soft)] border border-[var(--border-subtle)] flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)] text-[var(--accent-strong)] shrink-0">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                    Engineering Quality
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
                    Establishing code verification standards, schema validation, and thorough regression testing procedures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
