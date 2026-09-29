import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import { Mail, Send, Copy, Check, ArrowUpRight, MapPin, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons';
import { ScrollReveal } from '../ScrollReveal';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative border-t border-[var(--border-subtle)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Label */}
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono-tech tracking-widest uppercase theme-badge font-semibold px-2.5 py-1 rounded-md shadow-sm">
              10 / CONTACT
            </span>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[var(--text-heading)] tracking-tight mb-5">
              Let's Build Something Useful.
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-body)] leading-relaxed font-normal mb-10">
              I'm interested in opportunities where I can work on backend systems, Python/Django applications, APIs, automation, databases, computer vision, and AI-driven applications.
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {/* Email Card */}
          <ScrollReveal delay={0} direction="up" className="h-full">
            <div className="h-full p-6 rounded-2xl theme-card hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group shadow-sm">
              <div>
                <div className="w-10 h-10 rounded-xl theme-card-subtle flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5 text-[var(--text-purple)]" />
                </div>
                <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[var(--text-purple)] font-semibold">
                  EMAIL DIRECT
                </span>
                <p className="text-sm font-mono-tech text-[var(--text-heading)] mt-1 break-all select-all font-semibold">
                  {portfolioData.email}
                </p>
              </div>

              <div className="flex items-center gap-2 mt-5 pt-4 border-t border-[var(--border-subtle)]">
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white text-xs font-mono-tech font-semibold transition-colors shadow-sm"
                >
                  <span>LET'S CONNECT</span>
                  <Send className="w-3 h-3" />
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg theme-card-subtle text-[var(--text-body)] text-xs font-mono-tech border border-[var(--border-subtle)] hover:border-purple-500 transition-colors"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* LinkedIn Card */}
          <ScrollReveal delay={0.1} direction="up" className="h-full">
            <div className="h-full p-6 rounded-2xl theme-card hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group shadow-sm">
              <div>
                <div className="w-10 h-10 rounded-xl theme-card-subtle flex items-center justify-center mb-4">
                  <LinkedinIcon className="w-5 h-5 text-[var(--text-purple)]" />
                </div>
                <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[var(--text-purple)] font-semibold">
                  LINKEDIN
                </span>
                <p className="text-sm font-mono-tech text-[var(--text-heading)] mt-1 break-all font-semibold">
                  in/suresh-pythondev
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[var(--border-subtle)]">
                <a
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg theme-card-subtle text-[var(--text-purple)] text-xs font-mono-tech font-semibold border border-[var(--border-subtle)] hover:border-purple-500 transition-colors shadow-sm"
                >
                  <span>VIEW PROFILE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* GitHub Card */}
          <ScrollReveal delay={0.2} direction="up" className="h-full">
            <div className="h-full p-6 rounded-2xl theme-card hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group shadow-sm">
              <div>
                <div className="w-10 h-10 rounded-xl theme-card-subtle flex items-center justify-center mb-4">
                  <GithubIcon className="w-5 h-5 text-[var(--text-purple)]" />
                </div>
                <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[var(--text-purple)] font-semibold">
                  GITHUB
                </span>
                <p className="text-sm font-mono-tech text-[var(--text-heading)] mt-1 break-all font-semibold">
                  github.com/SureshK2004
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[var(--border-subtle)]">
                <a
                  href={portfolioData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg theme-card-subtle text-[var(--text-purple)] text-xs font-mono-tech font-semibold border border-[var(--border-subtle)] hover:border-purple-500 transition-colors shadow-sm"
                >
                  <span>EXPLORE REPOSITORIES</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Quick Details Banner */}
        <ScrollReveal delay={0.25}>
          <div className="p-4 sm:p-5 rounded-2xl theme-card flex flex-wrap items-center justify-between gap-4 shadow-sm">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono-tech text-[var(--text-body)]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[var(--text-purple)]" />
                <span className="font-semibold text-[var(--text-heading)]">{portfolioData.location}</span>
              </span>
              <span className="hidden sm:inline text-neutral-400">·</span>
              <span className="text-[var(--text-body)]">
                Available for Full-time Roles & High-impact Contracts
              </span>
            </div>

            <a
              href={portfolioData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl theme-card-subtle text-[var(--text-purple)] text-xs font-mono-tech font-semibold hover:border-purple-500 transition-colors shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
