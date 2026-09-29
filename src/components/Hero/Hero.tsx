import React from 'react';
import { ArrowDown, ArrowUpRight, FileText, MapPin, Code2, Database, Eye, ExternalLink } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { HeroArchitecture } from './HeroArchitecture';
import facevizImg from '../../assets/faceviz.png';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Introductions & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full theme-badge text-xs font-mono-tech tracking-widest uppercase mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-ping" />
              <span>PYTHON / DJANGO DEVELOPER</span>
            </div>

            {/* Greeting */}
            <div className="text-xl sm:text-2xl font-bold font-heading text-[var(--text-purple)] mb-2 tracking-tight">
              Hi, I'm Suresh K.
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-[var(--text-heading)] leading-[1.12] mb-5">
              I build <br />
              <span className="text-gradient-purple">backend systems</span> <br />
              for the real world.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[var(--text-body)] leading-relaxed mb-8 max-w-xl font-normal">
              I'm a Python Full Stack Developer focused on building Django applications, REST APIs, workforce platforms, automation workflows, and computer-vision solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8">
              <a
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 text-white font-mono-tech text-xs uppercase tracking-wider font-semibold hover:from-purple-500 hover:to-violet-500 shadow-lg shadow-purple-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl theme-card hover:border-purple-500 text-[var(--text-heading)] font-mono-tech text-xs uppercase tracking-wider font-semibold transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="text-[var(--text-heading)]">LET'S CONNECT</span>
                <ArrowUpRight className="w-4 h-4 text-[var(--text-purple)]" />
              </a>

              <a
                href={portfolioData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-[var(--text-muted)] hover:text-[var(--text-purple)] transition-colors py-2 px-1 font-medium"
                aria-label="View Resume in PDF format"
              >
                <FileText className="w-3.5 h-3.5 text-[var(--text-purple)]" />
                <span>VIEW RESUME</span>
              </a>
            </div>

            {/* Metadata Badges */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 text-xs font-mono-tech">
              <div className="px-3.5 py-1.5 rounded-xl theme-card flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[var(--text-body)] font-medium">01+ YEAR EXPERIENCE</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-xl theme-card font-semibold text-[var(--text-purple)] shadow-sm">
                PYTHON / DJANGO
              </div>
              <div className="px-3.5 py-1.5 rounded-xl theme-card flex items-center gap-1.5 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-[var(--text-purple)]" />
                <span className="text-[var(--text-body)] font-medium">CHENNAI, INDIA</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: FaceViz Platform Architecture Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center items-center relative mt-8 lg:mt-0 w-full"
          >
            <div className="w-full relative group">
              {/* Outer soft ambient glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-purple-600/30 via-violet-500/20 to-purple-900/30 blur-xl opacity-60 group-hover:opacity-90 transition-opacity pointer-events-none -z-10" />

              {/* Showcase Window Frame */}
              <div className="w-full rounded-2xl overflow-hidden theme-card border border-purple-500/30 shadow-2xl">
                {/* Window Top Navigation Bar */}
                <div className="px-4 py-2.5 bg-neutral-950/95 dark:bg-[#0B0A14] border-b border-purple-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-xs font-mono-tech text-neutral-300 font-semibold ml-1.5 hidden sm:inline">
                      FaceViz Platform Architecture
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="px-2.5 py-0.5 rounded-md bg-neutral-900/90 border border-purple-500/25 text-[10px] font-mono-tech text-purple-300 flex items-center gap-1.5">
                      <span>faceviz.aivapm.com</span>
                      <ExternalLink className="w-2.5 h-2.5 text-purple-400" />
                    </div>

                    <span className="text-[10px] font-mono-tech text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Production
                    </span>
                  </div>
                </div>

                {/* Screenshot in pristine 16:9 widescreen format */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-neutral-950 flex items-center justify-center">
                  <img
                    src={facevizImg}
                    alt="FaceViz — Workforce Management Platform Architecture by Suresh K."
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                  {/* Subtle top edge gradient shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Overlay branding badge */}
                  <div className="absolute bottom-2.5 left-3 right-3 py-1.5 px-3 rounded-xl bg-black/80 backdrop-blur-md border border-purple-500/30 flex items-center justify-between text-xs font-mono-tech text-white">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-purple-500" />
                      <span className="text-purple-300 font-bold">FaceViz Platform</span>
                      <span className="text-neutral-400 hidden sm:inline text-[11px]">· Workforce & CCTV System</span>
                    </div>
                    <span className="text-neutral-300 text-[10px] font-medium">Built by Suresh K.</span>
                  </div>
                </div>

                {/* Technical Node Strip — Cleanly Anchored Inside Card Footer */}
                <div className="px-3.5 py-2.5 bg-neutral-950/95 dark:bg-[#0B0A14] border-t border-purple-500/20 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono-tech">
                    <span className="px-2.5 py-1 rounded-lg theme-chip text-[11px] font-semibold flex items-center gap-1">
                      <Code2 className="w-3 h-3 text-[var(--text-purple)]" />
                      Python
                    </span>
                    <span className="px-2.5 py-1 rounded-lg theme-chip text-[11px] font-semibold">
                      Django & DRF
                    </span>
                    <span className="px-2.5 py-1 rounded-lg theme-chip text-[11px] font-semibold">
                      REST APIs
                    </span>
                    <span className="px-2.5 py-1 rounded-lg theme-chip text-[11px] font-semibold flex items-center gap-1">
                      <Database className="w-3 h-3 text-[var(--text-purple)]" />
                      PostgreSQL
                    </span>
                    <span className="px-2.5 py-1 rounded-lg theme-chip text-[11px] font-semibold flex items-center gap-1">
                      <Eye className="w-3 h-3 text-[var(--text-purple)]" />
                      Computer Vision
                    </span>
                  </div>

                  <a
                    href="#work"
                    className="text-[11px] font-mono-tech text-[var(--text-purple)] hover:text-purple-300 transition-colors flex items-center gap-1 font-semibold"
                  >
                    <span>EXPLORE DEEP DIVE</span>
                    <ArrowDown className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 10: System Architecture Flow Visual */}
        <HeroArchitecture />
      </div>
    </section>
  );
};
