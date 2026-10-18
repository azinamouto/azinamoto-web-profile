import React, { useState, useRef, useEffect } from 'react';
import { X, Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';
import { ALL_PROJECTS } from '../../data/projects';
import { PROFILE, TECH_DOMAINS } from '../../data/profile';

interface TerminalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const TerminalDrawer: React.FC<TerminalDrawerProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      id: 'welcome',
      command: 'welcome',
      output: (
        <div className="text-xs space-y-1 text-[var(--text-secondary)]">
          <p className="font-semibold text-[var(--text-primary)]">
            SEIJAKU Interactive CLI — AJ Rienze Josol
          </p>
          <p className="text-[var(--text-muted)]">
            Type <span className="font-mono text-[var(--text-primary)]">help</span> to list available commands. Predefined safe commands only.
          </p>
        </div>
      )
    }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        outputNode = (
          <div className="space-y-1.5 text-xs">
            <p className="font-semibold text-[var(--text-primary)]">Available Commands:</p>
            <div className="grid grid-cols-[100px_1fr] gap-x-2 gap-y-1 font-mono text-[var(--text-secondary)]">
              <span className="text-[var(--text-primary)]">whoami</span>
              <span>Identity, role, and current status</span>
              <span className="text-[var(--text-primary)]">projects</span>
              <span>List selected engineering systems</span>
              <span className="text-[var(--text-primary)]">stack</span>
              <span>Primary technologies organized by domain</span>
              <span className="text-[var(--text-primary)]">alza</span>
              <span>Information on ALZA.Net IT Solutions</span>
              <span className="text-[var(--text-primary)]">contact</span>
              <span>Direct communication channels</span>
              <span className="text-[var(--text-primary)]">clear</span>
              <span>Reset terminal output history</span>
            </div>
          </div>
        );
        break;

      case 'whoami':
        outputNode = (
          <div className="space-y-1 text-xs">
            <p className="font-medium text-[var(--text-primary)]">{PROFILE.fullName} ({PROFILE.displayName})</p>
            <p className="text-[var(--text-secondary)]">{PROFILE.headline}</p>
            <p className="text-[var(--text-muted)]">
              {PROFILE.title} · {PROFILE.company}
            </p>
            <p className="text-[var(--text-muted)]">
              {PROFILE.education} · {PROFILE.institution}
            </p>
            <p className="text-[var(--text-muted)]">{PROFILE.location}</p>
            <p className="italic text-[var(--text-secondary)] pt-1">
              "{PROFILE.philosophy}"
            </p>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-2 text-xs">
            <p className="font-semibold text-[var(--text-primary)]">Grounded Projects:</p>
            <div className="space-y-1.5 font-mono">
              {ALL_PROJECTS.map(p => (
                <div key={p.id} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs py-0.5 border-b border-[var(--border-subtle)]/50">
                  <span className="font-medium text-[var(--text-primary)]">{p.name}</span>
                  <span className="text-[var(--text-muted)] text-[11px]">{p.statusLabel}</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'stack':
        outputNode = (
          <div className="space-y-2 text-xs">
            <p className="font-semibold text-[var(--text-primary)]">Engineering Stack by Domain:</p>
            <div className="space-y-2 font-mono">
              {TECH_DOMAINS.map(group => (
                <div key={group.domain}>
                  <span className="text-[var(--text-primary)] font-medium">[{group.domain}]: </span>
                  <span className="text-[var(--text-secondary)]">
                    {group.items.map(i => i.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'alza':
        outputNode = (
          <div className="space-y-1.5 text-xs">
            <p className="font-semibold text-[var(--text-primary)]">
              ALZA.Net IT Solutions
            </p>
            <p className="text-[var(--text-secondary)]">
              AJ Rienze — {PROFILE.title}
            </p>
            <p className="text-[var(--text-secondary)]">
              "At ALZA, I help lead technical planning, software architecture, and application development for organizational and government-oriented systems."
            </p>
            <p className="font-mono text-[11px] text-[var(--accent-strong)]">
              MOTTO: {PROFILE.alzaMotto}
            </p>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1 text-xs">
            <p className="font-medium text-[var(--text-primary)]">Contact & Socials:</p>
            <p className="font-mono text-[var(--text-secondary)]">
              GitHub: <a href={PROFILE.githubUrl} target="_blank" rel="noreferrer" className="underline hover:text-[var(--text-primary)]">{PROFILE.githubUrl}</a>
            </p>
            <p className="font-mono text-[var(--text-secondary)]">
              Email: <span className="text-[var(--text-primary)]">{PROFILE.email}</span>
            </p>
            <p className="text-[var(--text-muted)]">
              Location: {PROFILE.location}
            </p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        outputNode = (
          <p className="text-xs text-[var(--text-muted)]">
            Command not recognized: <span className="font-mono text-[var(--text-primary)]">"{rawCmd}"</span>. Type <span className="font-mono text-[var(--text-primary)]">help</span> for a list of commands.
          </p>
        );
    }

    setHistory(prev => [
      ...prev,
      {
        id: String(Date.now()),
        command: rawCmd,
        output: outputNode
      }
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      executeCommand(inputVal);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6 flex justify-center pointer-events-none"
      role="dialog"
      aria-modal="true"
      aria-label="Terminal Mode"
    >
      <div className="w-full max-w-3xl bg-[var(--surface)] border border-[var(--border-strong)] rounded-2xl shadow-elevated overflow-hidden pointer-events-auto flex flex-col max-h-[480px]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border-subtle)] bg-[var(--surface-soft)]">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-[var(--text-muted)]" />
            <span className="font-mono text-xs font-medium text-[var(--text-primary)]">
              terminal mode — aj@seijaku
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-md hover:bg-[var(--surface)] transition-colors cursor-pointer"
            aria-label="Close terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Log Area */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-4 space-y-4 bg-[var(--surface)] font-mono text-xs select-text"
        >
          {history.map(item => (
            <div key={item.id} className="space-y-1.5">
              {item.command !== 'welcome' && (
                <div className="flex items-center gap-2 text-[var(--text-muted)]">
                  <span className="text-[var(--accent)]">❯</span>
                  <span className="text-[var(--text-primary)]">{item.command}</span>
                </div>
              )}
              <div className="pl-4 font-sans">{item.output}</div>
            </div>
          ))}
        </div>

        {/* Input Line */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-t border-[var(--border-subtle)] bg-[var(--surface-soft)] font-mono text-xs">
          <span className="text-[var(--accent)] font-bold">❯</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command (e.g. whoami, projects, stack, help)..."
            className="flex-1 bg-transparent text-[var(--text-primary)] outline-none placeholder-[var(--text-muted)]"
            aria-label="Terminal input"
          />
          <button
            onClick={() => executeCommand(inputVal)}
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] p-1 cursor-pointer"
            aria-label="Execute command"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
