import React from 'react';
import { experienceData } from '../../data/experience';
import { Building2, Calendar, MapPin, CheckCircle, Code, Users, Database, Cpu } from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';

const cardIcons: Record<string, React.ReactNode> = {
  backend: <Code className="w-4 h-4 text-[var(--text-purple)]" />,
  workforce: <Users className="w-4 h-4 text-[var(--text-purple)]" />,
  database: <Database className="w-4 h-4 text-[var(--text-purple)]" />,
  automation: <Cpu className="w-4 h-4 text-[var(--text-purple)]" />,
};

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 relative border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label & Header */}
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono-tech tracking-widest uppercase theme-badge font-semibold px-2.5 py-1 rounded-md shadow-sm">
              03 / EXPERIENCE
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-[var(--text-heading)] tracking-tight">
                Production Experience.
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-body)] mt-2 max-w-2xl font-normal">
                Engineering enterprise backend systems, core modules, and integration pipelines in an active Agile team.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-400 text-xs font-mono-tech font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>CURRENT ROLE</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Company Header Box */}
        <ScrollReveal delay={0.1}>
          <div className="p-6 sm:p-8 rounded-2xl theme-card mb-8 sm:mb-12 shadow-xl shadow-purple-950/5 dark:shadow-black/40">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono-tech text-[var(--text-purple)] font-semibold mb-1">
                  <Building2 className="w-4 h-4" />
                  <span>{experienceData.company}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[var(--text-heading)]">
                  {experienceData.role}
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono-tech">
                <span className="px-3 py-1.5 rounded-xl theme-card-subtle flex items-center gap-1.5 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-[var(--text-purple)]" />
                  <span className="text-[var(--text-body)]">{experienceData.period}</span>
                </span>
                <span className="px-3 py-1.5 rounded-xl theme-card-subtle flex items-center gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[var(--text-purple)]" />
                  <span className="text-[var(--text-body)]">{experienceData.location}</span>
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[var(--text-body)] leading-relaxed mt-5 font-normal">
              {experienceData.description}
            </p>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs font-mono-tech text-[var(--text-body)]">
              {experienceData.responsibilities.map((resp, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[var(--text-purple)] shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Professional Contribution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {experienceData.cards.map((card, idx) => (
            <ScrollReveal key={card.id} delay={0.15 + idx * 0.08} direction="up" className="h-full">
              <div className="h-full p-5 sm:p-6 rounded-2xl theme-card hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-xl theme-card-subtle flex items-center justify-center">
                      {cardIcons[card.id]}
                    </div>
                    <span className="text-[10px] font-mono-tech tracking-wider text-[var(--text-purple)] uppercase font-semibold">
                      {card.category}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold font-heading text-[var(--text-heading)] group-hover:text-[var(--text-purple)] transition-colors mb-2">
                    {card.title}
                  </h4>

                  <p className="text-xs text-[var(--text-body)] leading-relaxed mb-4">
                    {card.summary}
                  </p>
                </div>

                {/* Tag chips */}
                <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-wrap gap-1.5">
                  {card.items.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 rounded text-[11px] font-mono-tech theme-chip font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
