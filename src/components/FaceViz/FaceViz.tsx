import React from 'react';
import { faceVizData } from '../../data/projects';
import { ArchitectureVisual } from './ArchitectureVisual';
import { CheckCircle2, Shield, Clock, MapPin, DollarSign, CalendarCheck, FileCheck, HelpCircle, FileSpreadsheet, BarChart3 } from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';

const moduleIcons: Record<string, React.ReactNode> = {
  Attendance: <Clock className="w-4 h-4 text-[var(--text-purple)]" />,
  'Location & Geofencing': <MapPin className="w-4 h-4 text-[var(--text-purple)]" />,
  Payroll: <DollarSign className="w-4 h-4 text-[var(--text-purple)]" />,
  Timesheets: <CalendarCheck className="w-4 h-4 text-[var(--text-purple)]" />,
  'Task Management': <FileCheck className="w-4 h-4 text-[var(--text-purple)]" />,
  'Ticket Management': <HelpCircle className="w-4 h-4 text-[var(--text-purple)]" />,
  'Leave Management': <CalendarCheck className="w-4 h-4 text-[var(--text-purple)]" />,
  'Expense Management': <FileSpreadsheet className="w-4 h-4 text-[var(--text-purple)]" />,
  'Dashboards & Reports': <BarChart3 className="w-4 h-4 text-[var(--text-purple)]" />,
};

export const FaceViz: React.FC = () => {
  return (
    <section id="work" className="py-20 sm:py-28 relative border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Label */}
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono-tech tracking-widest uppercase theme-badge font-semibold px-2.5 py-1 rounded-md shadow-sm">
              04 / FEATURED WORK
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-block px-2.5 py-1 rounded-md theme-badge text-xs font-mono-tech font-semibold mb-2">
                CENTERPIECE PRODUCTION PLATFORM
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-[var(--text-heading)] tracking-tight">
                {faceVizData.name}: {faceVizData.title}
              </h2>
              <p className="text-base sm:text-lg text-[var(--text-body)] max-w-3xl mt-3 font-normal leading-relaxed">
                {faceVizData.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 shrink-0">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl theme-card border border-purple-500/25 text-[var(--text-purple)] text-xs font-mono-tech font-semibold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                <span>FaceViz</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Platform Modules Grid (9 modules) */}
        <div className="mb-14">
          <ScrollReveal>
            <h3 className="text-xs font-mono-tech uppercase tracking-widest text-[var(--text-purple)] mb-5 flex items-center gap-2 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              <span>Platform Functional Modules</span>
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {faceVizData.modules.map((mod, idx) => (
              <ScrollReveal key={mod.title} delay={0.06 * (idx % 3)} direction="up" className="h-full">
                <div className="h-full p-4 sm:p-5 rounded-2xl theme-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-xl theme-card-subtle">
                          {moduleIcons[mod.title] || <Shield className="w-4 h-4 text-[var(--text-purple)]" />}
                        </div>
                        <h4 className="text-sm font-bold font-heading text-[var(--text-heading)] group-hover:text-[var(--text-purple)] transition-colors">
                          {mod.title}
                        </h4>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono-tech theme-chip font-medium">
                        {mod.badge}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-body)] leading-relaxed pl-8">
                      {mod.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* System Architecture Diagram */}
        <ScrollReveal delay={0.1} className="mb-14">
          <ArchitectureVisual />
        </ScrollReveal>

        {/* Section 15: What I Worked On */}
        <ScrollReveal delay={0.15}>
          <div className="p-6 sm:p-8 rounded-2xl theme-card shadow-sm">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--border-subtle)]">
              <div>
                <span className="text-xs font-mono-tech tracking-widest uppercase text-[var(--text-purple)] font-semibold block mb-1">
                  ENGINEERING OWNERSHIP
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-heading text-[var(--text-heading)]">
                  WHAT I WORKED ON
                </h3>
              </div>
              <div className="text-xs font-mono-tech text-[var(--text-muted)] hidden sm:block">
                BACKEND & PIPELINE CONTRIBUTIONS
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
              {faceVizData.myContributions.map((item) => (
                <div
                  key={item}
                  className="p-3.5 rounded-xl theme-card-subtle hover:border-purple-500/60 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2.5 group shadow-sm"
                >
                  <div className="w-6 h-6 rounded-md theme-badge flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--text-purple)]" />
                  </div>
                  <span className="text-xs sm:text-sm font-mono-tech font-semibold text-[var(--text-heading)] group-hover:text-[var(--text-purple)] transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
