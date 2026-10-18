import React, { useState } from 'react';
import { ProjectArchitecture, ArchitectureNode } from '../../types/portfolio';
import { InsetSurface, SoftSurface } from '../ui/Surfaces';
import { ArrowRight, Info, CheckCircle2 } from 'lucide-react';

interface ArchitectureExplorerProps {
  architecture: ProjectArchitecture;
  projectName: string;
}

export const ArchitectureExplorer: React.FC<ArchitectureExplorerProps> = ({
  architecture,
  projectName
}) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>(
    architecture.nodes[0]?.id || ''
  );

  const selectedNode = architecture.nodes.find(n => n.id === selectedNodeId) || architecture.nodes[0];

  const getNodeColor = (type: ArchitectureNode['type']) => {
    switch (type) {
      case 'client':
        return 'border-[var(--accent)] text-[var(--accent-strong)]';
      case 'api':
        return 'border-[#3d5768] text-[#3d5768] dark:text-[#8ea8bc]';
      case 'auth':
        return 'border-[#647c8c] text-[#647c8c]';
      case 'service':
        return 'border-[#505962] text-[#505962] dark:text-[#9daec0]';
      case 'database':
        return 'border-[#17191c] text-[#17191c] dark:text-[#f2f5f8]';
      case 'engine':
        return 'border-[var(--accent-strong)] text-[var(--accent-strong)]';
      default:
        return 'border-[var(--border-strong)] text-[var(--text-primary)]';
    }
  };

  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h4 className="text-sm font-semibold tracking-tight text-[var(--text-primary)]">
            Architecture & Data Flow: {projectName}
          </h4>
          <p className="text-xs text-[var(--text-secondary)]">
            {architecture.summary}
          </p>
        </div>
        <span className="text-[11px] font-mono text-[var(--text-muted)]">
          Interactive Pipeline
        </span>
      </div>

      {/* Nodes Pipeline */}
      <div className="p-4 sm:p-6 bg-[var(--surface-soft)] border border-[var(--border-subtle)] rounded-2xl overflow-x-auto">
        <div className="flex items-center min-w-[580px] justify-between gap-3 relative">
          {architecture.nodes.map((node, index) => {
            const isSelected = node.id === selectedNode?.id;
            const hasNext = index < architecture.nodes.length - 1;
            const edge = architecture.edges.find(e => e.from === node.id);

            return (
              <React.Fragment key={node.id}>
                {/* Node Box */}
                <button
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`flex-1 p-3.5 rounded-xl border text-left transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#3d5768] ${
                    isSelected
                      ? 'bg-[var(--surface)] shadow-dual border-[var(--text-primary)] scale-[1.02]'
                      : 'bg-[var(--surface)] hover:bg-[var(--surface-elevated)] border-[var(--border-subtle)] shadow-subtle'
                  }`}
                  aria-pressed={isSelected}
                  aria-label={`${node.label} (${node.role})`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[var(--text-muted)]">
                      {node.role}
                    </span>
                    {isSelected && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-strong)]" />
                    )}
                  </div>
                  <div className="font-semibold text-sm text-[var(--text-primary)]">
                    {node.label}
                  </div>
                  <div className="text-[11px] font-mono text-[var(--text-secondary)] mt-0.5 truncate">
                    {node.tech}
                  </div>
                </button>

                {/* Flow Connector Arrow */}
                {hasNext && (
                  <div className="flex flex-col items-center justify-center shrink-0 px-1 text-center">
                    <span className="text-[9px] font-mono text-[var(--text-muted)] mb-0.5">
                      {edge?.label || 'data'}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[var(--text-muted)]" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Selected Node Details Drawer */}
      {selectedNode && (
        <InsetSurface className="p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)] text-[var(--accent)] shrink-0">
              <Info className="w-4 h-4" />
            </div>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm text-[var(--text-primary)]">
                  {selectedNode.label}
                </span>
                <span className="text-[var(--text-muted)]">·</span>
                <span className="font-mono text-[11px] text-[var(--text-secondary)]">
                  {selectedNode.tech}
                </span>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {selectedNode.description}
              </p>
            </div>
          </div>
        </InsetSurface>
      )}
    </div>
  );
};
