import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { Search, Sun, Moon, Menu, X, Terminal } from 'lucide-react';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCommandPalette,
  onOpenTerminal
}) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/' + hash);
    } else {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'ALZA', href: '#alza' },
    { label: 'Lab', href: '#lab' },
    { label: 'Projects', href: '/projects', isRoute: true },
    { label: 'Archive', href: '/archive', isRoute: true }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[var(--surface)]/90 backdrop-blur-md border-b border-[var(--border-subtle)] shadow-subtle'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (location.pathname !== '/') {
              navigate('/');
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="text-lg font-semibold tracking-tight text-[var(--text-primary)] hover:opacity-80 transition-opacity whitespace-nowrap shrink-0 flex items-center gap-2"
          aria-label="AJ Rienze Home"
        >
          <span className="tracking-wider">AJ</span>
          <span className="text-[var(--text-muted)] font-light">/</span>
          <span className="tracking-wider">RIENZE</span>
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--text-secondary)]"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            link.isRoute ? (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(link.href);
                }}
                className={`transition-colors whitespace-nowrap shrink-0 hover:text-[var(--text-primary)] ${
                  location.pathname === link.href ? 'text-[var(--text-primary)] font-semibold' : ''
                }`}
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="transition-colors whitespace-nowrap shrink-0 hover:text-[var(--text-primary)]"
              >
                {link.label}
              </a>
            )
          ))}
        </nav>

        {/* Zone 3: Single primary action / control zone */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 px-3 py-1.5 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--surface-soft)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] rounded-lg transition-colors cursor-pointer"
            aria-label="Open Command Palette (Cmd+K)"
          >
            <Search className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            <span className="hidden sm:inline font-mono text-[11px] text-[var(--text-muted)]">⌘K</span>
          </button>

          {/* Low-key Terminal Trigger */}
          <button
            onClick={onOpenTerminal}
            className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-lg hover:bg-[var(--surface-soft)] transition-colors cursor-pointer"
            aria-label="Toggle low-key terminal"
            title="Terminal Mode"
          >
            <Terminal className="w-4 h-4" />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-lg hover:bg-[var(--surface-soft)] transition-colors cursor-pointer"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Toggle ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-lg hover:bg-[var(--surface-soft)] transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--border-subtle)] bg-[var(--surface)] px-6 py-5 shadow-elevated">
          <nav className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => (
              link.isRoute ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    navigate(link.href);
                  }}
                  className="py-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="py-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
