import React from 'react';
import { cvPipelineData } from '../../data/projects';
import { PipelineVisual } from './PipelineVisual';
import { ScrollReveal } from '../ScrollReveal';

export const ComputerVision: React.FC = () => {
  return (
    <section id="cv" className="py-20 sm:py-28 relative border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono-tech tracking-widest uppercase theme-badge font-semibold px-2.5 py-1 rounded-md shadow-sm">
              05 / COMPUTER VISION
            </span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-[var(--text-heading)] tracking-tight mb-4">
              {cvPipelineData.heading}
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-body)] max-w-3xl font-normal leading-relaxed">
              {cvPipelineData.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Visual Pipeline Flow */}
        <div className="mb-12">
          <PipelineVisual />
        </div>

        {/* Technologies Used Grid */}
        <div className="p-6 sm:p-7 rounded-2xl theme-card mb-8 shadow-sm">
          <div className="text-xs font-mono-tech text-[var(--text-purple)] uppercase tracking-widest mb-4 font-semibold">
            TECHNOLOGY STACK
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {cvPipelineData.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-xl text-xs font-mono-tech theme-chip hover:border-purple-500 transition-colors shadow-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Engineering Highlights */}
        <div>
          <h3 className="text-xs font-mono-tech uppercase tracking-widest text-[var(--text-purple)] mb-5 flex items-center gap-2 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            <span>Production Engineering Highlights</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {cvPipelineData.engineeringHighlights.map((highlight, idx) => (
              <ScrollReveal key={highlight.title} delay={idx * 0.05} direction="up" className="h-full">
                <div className="h-full p-4 sm:p-5 rounded-2xl theme-card hover:shadow-lg transition-all shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                      <h4 className="text-xs sm:text-sm font-bold font-heading text-[var(--text-heading)]">
                        {highlight.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[var(--text-body)] leading-relaxed pl-4 font-normal">
                      {highlight.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
