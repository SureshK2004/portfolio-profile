import React from 'react';
import { automationCards } from '../../data/projects';
import { Terminal, Clock, LayoutDashboard, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';

const automationIcons: Record<string, React.ReactNode> = {
  'python-automation': <Terminal className="w-5 h-5 text-[var(--text-purple)]" />,
  'cron-jobs': <Clock className="w-5 h-5 text-[var(--text-purple)]" />,
  streamlit: <LayoutDashboard className="w-5 h-5 text-[var(--text-purple)]" />,
};

export const Automation: React.FC = () => {
  return (
    <section id="automation" className="py-20 sm:py-28 relative border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono-tech tracking-widest uppercase theme-badge font-semibold px-2.5 py-1 rounded-md shadow-sm">
              06 / AUTOMATION
            </span>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-[var(--text-heading)] tracking-tight mb-4">
              Automation & Internal Tools.
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-body)] max-w-2xl font-normal">
              Eliminating operational friction through scheduled cron workers, event-driven Python pipelines, and rapid diagnostic interfaces.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {automationCards.map((card, idx) => (
            <ScrollReveal key={card.id} delay={0.12 * idx} direction="up" className="h-full">
              <div className="h-full p-6 sm:p-7 rounded-2xl theme-card hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl theme-card-subtle flex items-center justify-center">
                      {automationIcons[card.id]}
                    </div>
                    <span className="text-[10px] font-mono-tech tracking-wider text-[var(--text-purple)] uppercase font-semibold">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-[var(--text-heading)] group-hover:text-[var(--text-purple)] transition-colors mb-3">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed mb-6 font-normal">
                    {card.description}
                  </p>

                  {/* Bullet items */}
                  <div className="space-y-2 mb-6">
                    {card.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-[var(--text-body)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--text-purple)] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech tags */}
                <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap gap-1.5">
                  {card.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono-tech theme-chip font-medium"
                    >
                      {t}
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
