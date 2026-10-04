import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { ShieldCheck, Award, GraduationCap, Briefcase } from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';
import logoImg from '../../assets/logo.png';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 relative border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono-tech tracking-widest uppercase theme-badge font-semibold px-2.5 py-1 rounded-md shadow-sm">
              01 / BEHIND THE CODE
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-[var(--text-heading)] tracking-tight mb-8">
            Engineering Production Systems.
          </h2>
        </ScrollReveal>

        {/* Layout: Photo & Bio + Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Profile Card + Professional Bio */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="left" delay={0.1}>
              {/* Profile Intro Header */}
              <div className="p-5 sm:p-6 rounded-2xl theme-card flex flex-col sm:flex-row items-center sm:items-start gap-5 shadow-sm mb-6">
                <div className="relative shrink-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-purple-500/40 shadow-lg shadow-purple-950/20">
                    <img
                      src="/image.png"
                      alt="Suresh K. — Python Backend Developer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[var(--bg-primary)] animate-pulse" title="Available for opportunities" />
                </div>

                <div className="text-center sm:text-left flex-1">
                  <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2 mb-2">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full theme-badge text-[10px] font-mono-tech font-bold uppercase">
                      <Briefcase className="w-3 h-3 text-[var(--text-purple)]" />
                      <span>Datamoo.ai · 1 Year</span>
                    </div>
                    <img
                      src={logoImg}
                      alt="Suresh Builds"
                      className="h-6 w-auto object-contain rounded border border-purple-500/25 hidden sm:inline-block"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-[var(--text-heading)]">
                    Suresh K.
                  </h3>
                  <p className="text-xs sm:text-sm font-mono-tech text-[var(--text-purple)] font-semibold mt-0.5">
                    Python / Django Backend & Computer Vision Developer
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mt-1 font-mono-tech">
                    Based in Chennai, India · Open for Full-Time Roles
                  </p>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-4">
                <p className="text-base text-[var(--text-body)] leading-relaxed font-normal">
                  {portfolioData.aboutParagraph1}
                </p>
                <p className="text-base text-[var(--text-body)] leading-relaxed font-normal">
                  {portfolioData.aboutParagraph2}
                </p>
              </div>

              {/* Core Philosophy Callout */}
              <div className="p-4 sm:p-5 rounded-2xl theme-card-subtle flex items-start gap-3 mt-6 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[var(--text-purple)] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed font-mono-tech">
                  Specialized in writing clean, testable Django backend code, optimizing high-load PostgreSQL transactions, and architecting resilient video edge workers.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Key Production Metrics & Certifications */}
          <div className="lg:col-span-5 space-y-5">
            <div className="grid grid-cols-2 gap-4">
              {portfolioData.stats.map((stat, idx) => (
                <ScrollReveal key={idx} delay={0.1 + idx * 0.08} direction="up">
                  <div className="p-5 sm:p-6 rounded-2xl theme-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden shadow-sm h-full flex flex-col justify-between">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-500/10 to-transparent pointer-events-none rounded-tr-2xl" />

                    <div className="text-2xl sm:text-3xl font-extrabold font-heading text-[var(--text-heading)] group-hover:text-[var(--text-purple)] tracking-tight transition-colors">
                      {stat.value}
                    </div>
                    <div>
                      <div className="text-xs font-mono-tech tracking-wider uppercase text-[var(--text-purple)] mt-2 font-semibold">
                        {stat.label}
                      </div>
                      <div className="text-[11px] font-mono-tech text-[var(--text-muted)] mt-0.5">
                        {stat.sublabel}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Verified Certifications & Degree Card */}
            <ScrollReveal delay={0.3} direction="up">
              <div className="p-5 rounded-2xl theme-card shadow-sm">
                <div className="flex items-center gap-2 mb-3 text-xs font-mono-tech text-[var(--text-purple)] font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>Verified Credentials & Education</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2.5 text-xs text-[var(--text-body)]">
                    <GraduationCap className="w-4 h-4 text-[var(--text-purple)] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[var(--text-heading)]">BCA (Bachelor of Computer Applications)</span>
                      <p className="text-[11px] font-mono-tech text-[var(--text-muted)]">Agurchand Manmull Jain College, Chennai · 8.05 CGPA (2021–2024)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-[var(--text-body)] pt-2 border-t border-[var(--border-subtle)]">
                    <Award className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[var(--text-heading)]">Full Stack Python Certification</span>
                      <p className="text-[11px] font-mono-tech text-[var(--text-muted)]">Besant Technologies · Python, Django, SQL, React.js</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-[var(--text-body)] pt-2 border-t border-[var(--border-subtle)]">
                    <Award className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[var(--text-heading)]">HTML & CSS Certifications</span>
                      <p className="text-[11px] font-mono-tech text-[var(--text-muted)]">Great Learning · Web Standards & Layout Design</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
