import React from 'react';
import { selectedProjects } from '../../data/projects';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { GithubIcon } from '../Icons';
import { ScrollReveal } from '../ScrollReveal';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 sm:py-28 relative border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono-tech tracking-widest uppercase theme-badge font-semibold px-2.5 py-1 rounded-md shadow-sm">
              07 / SELECTED PROJECTS
            </span>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-[var(--text-heading)] tracking-tight mb-4">
              Selected Applications.
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-body)] max-w-2xl font-normal">
              Complementary web applications spanning e-commerce, cloud translation, and domain-specific enterprise tools.
            </p>
          </div>
        </ScrollReveal>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {selectedProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={0.12 * (idx % 2)} direction="up" className="h-full">
              <div className="h-full p-6 sm:p-7 rounded-2xl theme-card hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <FolderGit2 className="w-4 h-4 text-[var(--text-purple)]" />
                      <span className="text-xs font-mono-tech text-[var(--text-purple)] font-semibold">
                        {project.category}
                      </span>
                    </div>

                    {/* Real Links Only */}
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-heading)] hover:bg-[var(--chip-bg)] transition-colors"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-purple)] hover:bg-[var(--chip-bg)] transition-colors"
                          aria-label={`View live demo of ${project.title}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-[var(--text-heading)] group-hover:text-[var(--text-purple)] transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Technology Chips */}
                <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-[11px] font-mono-tech theme-chip font-medium"
                    >
                      {tech}
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
