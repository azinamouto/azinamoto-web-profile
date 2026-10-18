import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CommandPalette } from './components/layout/CommandPalette';
import { TerminalDrawer } from './components/layout/TerminalDrawer';
import { HomePage } from './pages/HomePage';
import { ProjectsIndexPage } from './pages/ProjectsIndexPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ArchivePage } from './pages/ArchivePage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-[var(--bg-main)] text-[var(--text-primary)] antialiased transition-colors duration-200">
          {/* Top Bar Navigation */}
          <Navbar
            onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
            onOpenTerminal={() => setIsTerminalOpen(true)}
          />

          {/* Main Content Viewport */}
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsIndexPage />} />
              <Route path="/projects/:slug" element={<ProjectDetailPage />} />
              <Route path="/archive" element={<ArchivePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>

          {/* Minimalist Signature Footer */}
          <Footer />

          {/* Interactive Command Palette (Cmd+K / Ctrl+K) */}
          <CommandPalette
            isOpen={isCommandPaletteOpen}
            onClose={() => setIsCommandPaletteOpen(false)}
            onOpenTerminal={() => setIsTerminalOpen(true)}
          />

          {/* Low-Key Terminal Drawer */}
          <TerminalDrawer
            isOpen={isTerminalOpen}
            onClose={() => setIsTerminalOpen(false)}
          />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
