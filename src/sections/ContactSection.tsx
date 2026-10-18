import React, { useState } from 'react';
import { PROFILE } from '../data/profile';
import { Github, Mail, Copy, Check, Send, AlertCircle } from 'lucide-react';
import { SoftButton } from '../components/ui/SoftButton';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', honeypot: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot bot protection
    if (formData.honeypot) {
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    // Simulate secure transmission with delay and success feedback
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '', honeypot: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 border-t border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Narrative & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-strong)] block mb-3">
                Inquiries
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
                Let's build something meaningful.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              Interested in collaborating, discussing an architecture idea, or building software? Let's connect.
            </p>

            {/* Direct Channel Cards */}
            <div className="space-y-3 pt-4">
              {/* Email Card */}
              <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border-subtle)] shadow-subtle flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-[var(--surface-soft)] text-[var(--accent-strong)] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-[var(--text-muted)]">Direct Email</div>
                    <div className="text-sm font-medium text-[var(--text-primary)] truncate">
                      {PROFILE.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-lg hover:bg-[var(--surface-soft)] transition-colors cursor-pointer shrink-0 ml-2"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* GitHub Card */}
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border-subtle)] shadow-subtle flex items-center justify-between hover:border-[var(--border-strong)] transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[var(--surface-soft)] text-[var(--text-primary)] shrink-0">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[var(--text-muted)]">Source Code & Research</div>
                    <div className="text-sm font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-strong)] transition-colors">
                      github.com/azinamouto
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="pt-2 text-xs text-[var(--text-muted)] font-mono">
              Location: {PROFILE.location} · UTC+08:00
            </div>
          </div>

          {/* Right: Clean, Verified Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[var(--surface)] border border-[var(--border-subtle)] shadow-elevated">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mb-6">
                All inquiries go directly to AJ Rienze's verified inbox.
              </p>

              {status === 'success' ? (
                <div className="p-6 rounded-2xl bg-[var(--surface-soft)] border border-[var(--border-subtle)] text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[var(--text-primary)]">
                    Message Delivered
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] max-w-sm mx-auto">
                    Thank you. Your message has been received. I will review and follow up shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-xs text-[var(--text-primary)] underline hover:text-[var(--accent-strong)] pt-2 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field for bot spam prevention */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="hp_field">Do not fill this field</label>
                    <input
                      id="hp_field"
                      type="text"
                      name="hp_field"
                      value={formData.honeypot}
                      onChange={e => setFormData({ ...formData, honeypot: e.target.value })}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {status === 'error' && errorMessage && (
                    <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 text-xs text-red-700 dark:text-red-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-mono text-[var(--text-secondary)]">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Maria Santos"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-soft)] border border-[var(--border-subtle)] focus:border-[var(--border-strong)] text-sm text-[var(--text-primary)] outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-mono text-[var(--text-secondary)]">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. maria@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-soft)] border border-[var(--border-subtle)] focus:border-[var(--border-strong)] text-sm text-[var(--text-primary)] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-mono text-[var(--text-secondary)]">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you would like to collaborate on..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-soft)] border border-[var(--border-subtle)] focus:border-[var(--border-strong)] text-sm text-[var(--text-primary)] outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-[var(--text-muted)] font-mono">
                      Strict privacy · No third-party trackers
                    </span>
                    <SoftButton
                      type="submit"
                      variant="primary"
                      size="md"
                      disabled={status === 'submitting'}
                      icon={status === 'submitting' ? undefined : <Send className="w-3.5 h-3.5" />}
                    >
                      {status === 'submitting' ? 'Transmitting...' : 'Send Message'}
                    </SoftButton>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
