import React from 'react';
import { ScrollReveal } from '../ScrollReveal';

export const Internships: React.FC = () => {
  return (
    <section id="internships" className="py-16 sm:py-20 relative border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono-tech tracking-widest uppercase theme-badge font-semibold px-2.5 py-1 rounded-md shadow-sm">
              09 / EARLY EXPERIENCE
            </span>
          </div>

          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-heading text-[var(--text-heading)] tracking-tight">
              Internships & Academic Foundations.
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-body)] mt-1 max-w-xl font-normal">
              Formative roles and computer science degree program establishing strong software engineering fundamentals.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Compact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Internship 1: Shiash Info Solutions */}
          <ScrollReveal delay={0} direction="up" className="h-full">
            <div className="h-full p-5 rounded-2xl theme-card hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono-tech uppercase theme-chip font-bold px-2 py-0.5 rounded">
                    INTERNSHIP · 3 MONTHS
                  </span>
                  <span className="text-[11px] font-mono-tech text-[var(--text-muted)] font-medium">2024</span>
                </div>
                <h3 className="text-base font-bold font-heading text-[var(--text-heading)] group-hover:text-[var(--text-purple)] transition-colors">
                  Django Developer Intern
                </h3>
                <div className="text-xs font-mono-tech text-[var(--text-purple)] font-semibold mb-3">
                  Shiash Info Solutions
                </div>
                <p className="text-xs text-[var(--text-body)] leading-relaxed mb-4">
                  Backend development internship focused on core Django MVC, ORM modeling, RESTful API design, and transactional database connectivity.
                </p>
              </div>
              <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-wrap gap-1.5">
                {['Django', 'Python', 'Backend Dev', 'Database Integration'].map((item) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 rounded text-[10px] font-mono-tech theme-chip font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Internship 2: Polenza Tech Solutions */}
          <ScrollReveal delay={0.1} direction="up" className="h-full">
            <div className="h-full p-5 rounded-2xl theme-card hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono-tech uppercase theme-chip font-bold px-2 py-0.5 rounded">
                    INTERNSHIP
                  </span>
                  <span className="text-[11px] font-mono-tech text-[var(--text-muted)] font-medium">2024</span>
                </div>
                <h3 className="text-base font-bold font-heading text-[var(--text-heading)] group-hover:text-[var(--text-purple)] transition-colors">
                  Flask Developer Intern
                </h3>
                <div className="text-xs font-mono-tech text-[var(--text-purple)] font-semibold mb-3">
                  Polenza Tech Solutions
                </div>
                <p className="text-xs text-[var(--text-body)] leading-relaxed mb-4">
                  Hands-on development of Flask web applications, document data modeling with MongoDB, and dynamic template rendering.
                </p>
              </div>
              <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-wrap gap-1.5">
                {['Python', 'Flask', 'MongoDB', 'Web Development'].map((item) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 rounded text-[10px] font-mono-tech theme-chip font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Education: BCA */}
          <ScrollReveal delay={0.2} direction="up" className="h-full">
            <div className="h-full p-5 rounded-2xl theme-card hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono-tech uppercase theme-chip font-bold px-2 py-0.5 rounded">
                    EDUCATION · BATCH 2024
                  </span>
                  <span className="text-[11px] font-mono-tech text-[var(--text-purple)] font-bold">8.05 CGPA</span>
                </div>
                <h3 className="text-base font-bold font-heading text-[var(--text-heading)] group-hover:text-[var(--text-purple)] transition-colors">
                  Bachelor of Computer Applications
                </h3>
                <div className="text-xs font-mono-tech text-[var(--text-purple)] font-semibold mb-3">
                  Agurchand Manmull Jain College, Chennai
                </div>
                <p className="text-xs text-[var(--text-body)] leading-relaxed mb-4">
                  Rigorous degree curriculum covering algorithmic thinking, DBMS, object-oriented software design, and web technology foundations.
                </p>
              </div>
              <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-wrap gap-1.5">
                {['BCA', 'DBMS', 'Algorithms', 'Software Systems'].map((item) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 rounded text-[10px] font-mono-tech theme-chip font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
