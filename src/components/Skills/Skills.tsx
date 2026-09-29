import React from 'react';
import { skillsData } from '../../data/skills';
import { Server, Layout, Database, Cpu, Terminal } from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';

const categoryIcons: Record<string, React.ReactNode> = {
  Server: <Server className="w-5 h-5 text-[var(--text-purple)]" />,
  Layout: <Layout className="w-5 h-5 text-[var(--text-purple)]" />,
  Database: <Database className="w-5 h-5 text-[var(--text-purple)]" />,
  Cpu: <Cpu className="w-5 h-5 text-[var(--text-purple)]" />,
  Terminal: <Terminal className="w-5 h-5 text-[var(--text-purple)]" />,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 relative border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono-tech tracking-widest uppercase theme-badge font-semibold px-2.5 py-1 rounded-md shadow-sm">
              08 / TECHNICAL TOOLBOX
            </span>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-[var(--text-heading)] tracking-tight mb-4">
              Technical Arsenal.
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-body)] max-w-2xl font-normal">
              Core competencies across backend architecture, modern web client development, real-time computer vision, and operational infrastructure.
            </p>
          </div>
        </ScrollReveal>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, idx) => (
            <ScrollReveal key={category.title} delay={0.08 * idx} direction="up" className="h-full">
              <div className="h-full p-6 rounded-2xl theme-card hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group shadow-sm">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl theme-card-subtle">
                      {categoryIcons[category.iconName]}
                    </div>
                    <div>
                      <h3 className="text-base font-bold font-heading text-[var(--text-heading)] group-hover:text-[var(--text-purple)] transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-[11px] font-mono-tech text-[var(--text-muted)]">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Skill Chips */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="px-3 py-2 rounded-xl theme-chip hover:border-purple-500/50 hover:scale-[1.03] transition-all flex flex-col group/chip shadow-sm"
                      >
                        <span className="text-xs font-mono-tech font-bold text-[var(--chip-text)] group-hover/chip:text-[var(--text-purple)]">
                          {skill.name}
                        </span>
                        {skill.detail && (
                          <span className="text-[10px] text-[var(--text-muted)] font-mono-tech mt-0.5 leading-tight">
                            {skill.detail}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
