import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, FolderKanban, Compass, Terminal, Moon, Sun, Github, Mail, X } from 'lucide-react';
import { ALL_PROJECTS } from '../../data/projects';
import { PROFILE } from '../../data/profile';
import { useTheme } from '../../context/ThemeContext';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal: () => void;
}

interface CommandItem {
  id: string;
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  category: 'Navigation' | 'Projects' | 'Actions';
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenTerminal
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  // Reset query & focus when opening
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Trigger open via external prop or parent state
        }
      } else if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const commands: CommandItem[] = [
    {
      id: 'nav-work',
      title: 'Navigate to Selected Work',
      subtitle: 'Featured engineering showcases',
      icon: <FolderKanban className="w-4 h-4 text-[var(--accent)]" />,
      category: 'Navigation',
      action: () => {
        onClose();
        if (window.location.pathname !== '/') {
          navigate('/#work');
        } else {
          document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    {
      id: 'nav-about',
      title: 'Navigate to About',
      subtitle: 'Background & education',
      icon: <Compass className="w-4 h-4 text-[var(--accent)]" />,
      category: 'Navigation',
      action: () => {
        onClose();
        if (window.location.pathname !== '/') {
          navigate('/#about');
        } else {
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    {
      id: 'nav-alza',
      title: 'Navigate to ALZA.Net IT Solutions',
      subtitle: 'Founder & CTO role',
      icon: <Compass className="w-4 h-4 text-[var(--accent)]" />,
      category: 'Navigation',
      action: () => {
        onClose();
        if (window.location.pathname !== '/') {
          navigate('/#alza');
        } else {
          document.querySelector('#alza')?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    {
      id: 'nav-lab',
      title: 'Navigate to Engineering Lab',
      subtitle: 'Experimental research & prototypes',
      icon: <Compass className="w-4 h-4 text-[var(--accent)]" />,
      category: 'Navigation',
      action: () => {
        onClose();
        if (window.location.pathname !== '/') {
          navigate('/#lab');
        } else {
          document.querySelector('#lab')?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    {
      id: 'nav-skills-cloud',
      title: 'Open D3 Skills Cloud',
      subtitle: 'Interactive physics bubble chart',
      icon: <Compass className="w-4 h-4 text-[var(--accent)]" />,
      category: 'Navigation',
      action: () => {
        onClose();
        if (window.location.pathname !== '/') {
          navigate('/#technologies');
        } else {
          document.querySelector('#technologies')?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    {
      id: 'nav-contact',
      title: 'Navigate to Contact',
      subtitle: 'Inquiries & collaboration',
      icon: <Mail className="w-4 h-4 text-[var(--accent)]" />,
      category: 'Navigation',
      action: () => {
        onClose();
        if (window.location.pathname !== '/') {
          navigate('/#contact');
        } else {
          document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    {
      id: 'nav-all-projects',
      title: 'Browse Projects Directory',
      subtitle: 'Full list with domain filters',
      icon: <FolderKanban className="w-4 h-4 text-[var(--accent)]" />,
      category: 'Navigation',
      action: () => {
        onClose();
        navigate('/projects');
      }
    },
    {
      id: 'nav-archive',
      title: 'Browse Archive',
      subtitle: 'Complete verified chronological catalog',
      icon: <FolderKanban className="w-4 h-4 text-[var(--accent)]" />,
      category: 'Navigation',
      action: () => {
        onClose();
        navigate('/archive');
      }
    },
    ...ALL_PROJECTS.map(p => ({
      id: `proj-${p.slug}`,
      title: p.name,
      subtitle: p.summary,
      icon: <FolderKanban className="w-4 h-4 text-[var(--accent-strong)]" />,
      category: 'Projects' as const,
      action: () => {
        onClose();
        navigate(`/projects/${p.slug}`);
      }
    })),
    {
      id: 'action-theme',
      title: `Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`,
      subtitle: 'Toggle color scheme',
      icon: theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />,
      category: 'Actions',
      action: () => {
        toggleTheme();
        onClose();
      }
    },
    {
      id: 'action-terminal',
      title: 'Open Terminal Mode',
      subtitle: 'Low-key interactive CLI exploration',
      icon: <Terminal className="w-4 h-4 text-[var(--accent)]" />,
      category: 'Actions',
      action: () => {
        onClose();
        onOpenTerminal();
      }
    },
    {
      id: 'action-github',
      title: 'Open GitHub Profile',
      subtitle: '@azinamouto',
      icon: <Github className="w-4 h-4" />,
      category: 'Actions',
      action: () => {
        onClose();
        window.open(PROFILE.githubUrl, '_blank', 'noopener,noreferrer');
      }
    }
  ];

  const filtered = commands.filter(item => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      (item.subtitle && item.subtitle.toLowerCase().includes(q)) ||
      item.category.toLowerCase().includes(q)
    );
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < filtered.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : filtered.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].action();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/35 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
    >
      <div
        className="w-full max-w-xl bg-[var(--surface)] border border-[var(--border-strong)] rounded-2xl shadow-elevated overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[var(--border-subtle)] bg-[var(--surface-soft)]">
          <Search className="w-4 h-4 text-[var(--text-muted)] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Type a command, project, or section..."
            className="w-full bg-transparent text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none"
            aria-label="Search commands"
          />
          <button
            onClick={onClose}
            className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-md hover:bg-[var(--surface)] transition-colors cursor-pointer"
            aria-label="Close command palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-sm text-[var(--text-muted)]">
              No results found for "{query}"
            </div>
          ) : (
            filtered.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => item.action()}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer text-sm transition-colors ${
                    isSelected
                      ? 'bg-[var(--surface-soft)] text-[var(--text-primary)] shadow-subtle'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--surface-soft)]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="shrink-0">{item.icon}</span>
                    <div className="min-w-0">
                      <div className="font-medium text-[var(--text-primary)] truncate">
                        {item.title}
                      </div>
                      {item.subtitle && (
                        <div className="text-xs text-[var(--text-muted)] truncate">
                          {item.subtitle}
                        </div>
                      )}
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[var(--text-muted)] shrink-0 ml-3">
                    {item.category}
                  </span>
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Helper Bar */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)] bg-[var(--surface-soft)]">
          <div className="flex items-center gap-2">
            <span>Use</span>
            <kbd className="px-1.5 py-0.5 bg-[var(--surface)] rounded border border-[var(--border-subtle)] font-mono text-[10px]">↑</kbd>
            <kbd className="px-1.5 py-0.5 bg-[var(--surface)] rounded border border-[var(--border-subtle)] font-mono text-[10px]">↓</kbd>
            <span>to navigate</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Select</span>
            <kbd className="px-1.5 py-0.5 bg-[var(--surface)] rounded border border-[var(--border-subtle)] font-mono text-[10px]">↵</kbd>
            <span>Close</span>
            <kbd className="px-1.5 py-0.5 bg-[var(--surface)] rounded border border-[var(--border-subtle)] font-mono text-[10px]">esc</kbd>
          </div>
        </div>
      </div>
    </div>
  );
};
