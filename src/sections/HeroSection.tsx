import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { SoftButton } from '../components/ui/SoftButton';

export const HeroSection: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Subtle normalization for parallax
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToWork = () => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Typographic Hierarchy */}
        <div className="lg:col-span-7 space-y-8 z-10">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-strong)]">
              AJ RIENZE — FULL-STACK ENGINEER
            </span>
            <span aria-hidden="true" className="w-8 h-[1px] bg-[var(--border-strong)]" />
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.08] text-balance">
            I build systems that make complex things simple.
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] font-normal leading-relaxed max-w-2xl">
            {PROFILE.bioExtended.split('.')[0] + '.'} I develop full-stack applications, data systems, and engineering tools with a focus on reliability and thoughtful user experiences.
          </p>

          {/* Primary Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <SoftButton
              variant="primary"
              size="lg"
              onClick={scrollToWork}
              icon={<ArrowDown className="w-4 h-4" />}
            >
              Explore My Work
            </SoftButton>

            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-medium whitespace-nowrap shrink-0 text-sm px-4 py-2.5 gap-2 rounded-xl bg-[var(--surface)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-soft)] shadow-subtle transition-all cursor-pointer"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            </a>

            <SoftButton
              variant="ghost"
              size="lg"
              onClick={scrollToAbout}
            >
              About Me
            </SoftButton>
          </div>

          {/* Metadata Strip */}
          <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)] font-mono">
            <span>{PROFILE.title} · {PROFILE.company}</span>
            <span aria-hidden="true">/</span>
            <span>{PROFILE.location}</span>
          </div>
        </div>

        {/* Right Column: Quiet Architectural Geometric Composition */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center">
          <div
            className="w-full max-w-md aspect-[4/3] relative transition-transform duration-500 ease-out select-none"
            style={{
              transform: `translate3d(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px, 0)`
            }}
          >
            {/* Plane 1: Base Inset Floor */}
            <div className="absolute inset-0 shadow-inset rounded-2xl transform rotate-1 border border-[var(--border-subtle)]" />

            {/* Plane 2: Floating Structural Slab */}
            <div
              className="absolute inset-4 bg-[var(--surface)] border border-[var(--border-strong)] rounded-xl shadow-elevated p-6 flex flex-col justify-between transition-transform duration-300 ease-out"
              style={{
                transform: `translate3d(${-mousePos.x * 0.3}px, ${-mousePos.y * 0.3}px, 0)`
              }}
            >
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
                <span className="font-mono text-xs tracking-wider text-[var(--text-muted)]">
                  SYSTEM CORE
                </span>
                <span className="font-mono text-xs text-[var(--accent-strong)]">
                  ARCH.01
                </span>
              </div>

              {/* Architectural Wireframe Grid Lines */}
              <div className="my-auto py-4 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
                  <span>Data Invariants</span>
                  <span className="text-[var(--text-primary)] font-medium">Verified</span>
                </div>
                <div className="w-full h-1 bg-[var(--bg-secondary)] rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-[var(--accent-strong)]" />
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-[var(--text-secondary)] pt-1">
                  <span>Service Boundary</span>
                  <span className="text-[var(--text-primary)] font-medium">Modular</span>
                </div>
                <div className="w-full h-1 bg-[var(--bg-secondary)] rounded-full overflow-hidden">
                  <div className="w-4/5 h-full bg-[var(--accent)]" />
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-muted)]">
                <span>SEIJAKU PRINCIPLE</span>
                <span>静寂</span>
              </div>
            </div>

            {/* Plane 3: Elevated Accent Tag */}
            <div
              className="absolute -bottom-3 -right-3 shadow-dual bg-[var(--surface-soft)] border border-[var(--border-strong)] rounded-xl p-3.5 max-w-[200px] text-xs transition-transform duration-200"
              style={{
                transform: `translate3d(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px, 0)`
              }}
            >
              <span className="block font-semibold text-[var(--text-primary)]">
                ALZA.Net
              </span>
              <span className="text-[11px] text-[var(--text-secondary)] leading-tight block mt-0.5">
                Technical planning & software architecture
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
