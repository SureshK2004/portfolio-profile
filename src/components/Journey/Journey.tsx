import React from 'react';
import { journeyData } from '../../data/journey';
import { Calendar, MapPin } from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-20 sm:py-28 relative border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono-tech tracking-widest uppercase theme-badge font-semibold px-2.5 py-1 rounded-md shadow-sm">
              02 / ENGINEERING JOURNEY
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-[var(--text-heading)] tracking-tight mb-12 sm:mb-16">
            Pathways & Milestones.
          </h2>
        </ScrollReveal>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Violet Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-purple-500 via-purple-400 to-purple-600 sm:-translate-x-1/2 pointer-events-none" />

          <div className="space-y-10 sm:space-y-14">
            {journeyData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={`${item.period}-${item.title}`}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Glowing Node */}
                  <div className="absolute left-4 sm:left-1/2 top-1.5 -translate-x-1/2 z-10 flex items-center justify-center">
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        item.isCurrent
                          ? 'bg-purple-600 border-white shadow-lg shadow-purple-500/80 animate-pulse'
                          : 'bg-[var(--bg-card)] border-purple-500 shadow-sm'
                      }`}
                    />
                  </div>

                  {/* Content Card */}
                  <div className="ml-10 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <ScrollReveal direction={isEven ? 'left' : 'right'} delay={0.08}>
                      <div className="p-5 sm:p-6 rounded-2xl theme-card hover:shadow-lg transition-all group shadow-sm">
                        <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md theme-badge font-mono-tech text-[11px] font-semibold">
                            <Calendar className="w-3 h-3" />
                            {item.period}
                          </span>
                          {item.location && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-mono-tech text-[var(--text-muted)]">
                              <MapPin className="w-3 h-3 text-[var(--text-purple)]" />
                              {item.location}
                            </span>
                          )}
                        </div>

                        <h3 className="text-base sm:text-lg font-bold font-heading text-[var(--text-heading)] group-hover:text-[var(--text-purple)] transition-colors mt-1">
                          {item.title}
                        </h3>
                        <div className="text-sm font-semibold text-[var(--text-purple)] font-mono-tech mb-2">
                          {item.organization}
                        </div>

                        <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed mb-4 font-normal">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-1 border-t border-[var(--border-subtle)]">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded text-[10px] font-mono-tech theme-chip font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
