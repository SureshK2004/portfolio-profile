import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons';
import logoImg from '../../assets/logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-8 pb-20 sm:pb-8 bg-transparent border-t border-purple-500/15 text-xs font-mono-tech text-neutral-500 dark:text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
          <a href="#" className="group inline-flex items-center" aria-label="Back to top">
            <div className="h-8 px-2 py-0.5 rounded-lg bg-neutral-950/90 dark:bg-black/70 border border-purple-500/25 group-hover:border-purple-500/60 shadow-sm flex items-center justify-center transition-all group-hover:scale-105">
              <img
                src={logoImg}
                alt="Suresh Builds"
                className="h-6 w-auto object-contain rounded"
              />
            </div>
          </a>
          <span className="hidden sm:inline text-neutral-400 dark:text-neutral-700">|</span>
          <span className="text-neutral-600 dark:text-neutral-400">{portfolioData.role}</span>
          <span className="hidden sm:inline text-neutral-400 dark:text-neutral-700">|</span>
          <span className="text-purple-600 dark:text-purple-400 font-medium">Built with React + TypeScript</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/60 dark:hover:bg-neutral-900 transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg text-neutral-500 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-300 hover:bg-neutral-200/60 dark:hover:bg-neutral-900 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${portfolioData.email}`}
            className="p-1.5 rounded-lg text-neutral-500 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-300 hover:bg-neutral-200/60 dark:hover:bg-neutral-900 transition-colors"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
