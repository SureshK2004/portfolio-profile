import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import logoImg from '../../assets/logo.png';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
      const sections = ['about', 'journey', 'experience', 'work', 'cv', 'automation', 'skills', 'contact'];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about', sectionId: 'about' },
    { label: 'EXPERIENCE', href: '#experience', sectionId: 'experience' },
    { label: 'WORK', href: '#work', sectionId: 'work' },
    { label: 'SKILLS', href: '#skills', sectionId: 'skills' },
    { label: 'CONTACT', href: '#contact', sectionId: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--nav-border)] py-3 shadow-md shadow-purple-950/5'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center focus:outline-none transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          aria-label="Suresh Builds — Home"
        >
          <div className="h-9 sm:h-10 px-2 py-1 rounded-xl bg-neutral-950/90 dark:bg-black/70 border border-purple-500/30 group-hover:border-purple-500/70 shadow-sm shadow-purple-500/10 flex items-center justify-center transition-all">
            <img
              src={logoImg}
              alt="Suresh Builds"
              className="h-7 sm:h-8 w-auto object-contain rounded-md"
            />
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive =
              activeSection === link.sectionId ||
              (link.sectionId === 'work' && ['work', 'cv', 'automation'].includes(activeSection));
            return (
              <a
                key={link.label}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-mono-tech tracking-wider transition-all rounded-md font-semibold ${
                  isActive
                    ? 'text-[var(--text-purple)] theme-chip font-bold'
                    : 'text-[var(--text-body)] hover:text-[var(--text-purple)] hover:bg-[var(--chip-bg)]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Controls (Theme Toggle & CTA) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Light / Dark Mode Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-xl theme-card hover:border-purple-500 hover:scale-105 active:scale-95 transition-all shadow-sm"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300 animate-pulse" />
            ) : (
              <Moon className="w-4 h-4 text-purple-600" />
            )}
          </button>

          <a
            href="#contact"
            className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 text-xs font-mono-tech uppercase tracking-wider text-white font-semibold hover:from-purple-500 hover:to-violet-500 transition-all shadow-sm hover:shadow-purple-500/25 active:scale-95"
          >
            <span>LET'S CONNECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-xl theme-card text-[var(--text-purple)] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-purple-600" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[var(--text-heading)] hover:bg-[var(--chip-bg)] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--bg-primary)] border-b border-[var(--border-subtle)] px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-mono-tech text-[var(--text-heading)] hover:text-[var(--text-purple)] hover:bg-[var(--chip-bg)] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 text-sm font-mono-tech uppercase tracking-wider text-white font-medium transition-all"
              >
                <span>LET'S CONNECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
