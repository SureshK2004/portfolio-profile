import React, { useEffect, useState } from 'react';

interface LoaderProps {
  onLoaded?: () => void;
  minDuration?: number;
}

export const Loader: React.FC<LoaderProps> = ({ onLoaded, minDuration = 1200 }) => {
  const [fading, setFading] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = prefersReducedMotion ? 200 : minDuration;

    const timer = setTimeout(() => {
      setFading(true);
      const exitTimer = setTimeout(() => {
        setRemoved(true);
        if (onLoaded) onLoaded();
      }, 400);
      return () => clearTimeout(exitTimer);
    }, duration);

    return () => clearTimeout(timer);
  }, [minDuration, onLoaded]);

  if (removed) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07070B] transition-opacity duration-400 ease-out ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <div className="relative flex flex-col items-center">
        {/* Glow backdrop */}
        <div className="absolute w-40 h-40 rounded-full bg-violet-600/20 blur-2xl pointer-events-none" />

        {/* SVG geometric loader using CSS custom property --order */}
        <svg
          className="w-28 h-28 loader-glow-pulse"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="purpleGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A78BFA" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
            <linearGradient id="purpleGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#C084FC" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
            <filter id="violetGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Central hexagon nodes and geometric paths with --order */}
          <path
            d="M 50 15 L 80 32 L 80 68 L 50 85 L 20 68 L 20 32 Z"
            stroke="url(#purpleGrad1)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="portfolio-loader-path"
            style={{ '--order': 1 } as React.CSSProperties}
          />
          <path
            d="M 50 25 L 72 38 L 72 62 L 50 75 L 28 62 L 28 38 Z"
            stroke="url(#purpleGrad2)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="portfolio-loader-path"
            style={{ '--order': 2 } as React.CSSProperties}
          />
          <path
            d="M 50 15 L 50 38"
            stroke="#A78BFA"
            strokeWidth="2"
            strokeLinecap="round"
            className="portfolio-loader-path"
            style={{ '--order': 3 } as React.CSSProperties}
          />
          <path
            d="M 80 68 L 50 50"
            stroke="#8B5CF6"
            strokeWidth="2"
            strokeLinecap="round"
            className="portfolio-loader-path"
            style={{ '--order': 4 } as React.CSSProperties}
          />
          <path
            d="M 20 68 L 50 50"
            stroke="#7C3AED"
            strokeWidth="2"
            strokeLinecap="round"
            className="portfolio-loader-path"
            style={{ '--order': 5 } as React.CSSProperties}
          />
          <path
            d="M 28 38 L 72 62"
            stroke="#C084FC"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="portfolio-loader-path"
            style={{ '--order': 6 } as React.CSSProperties}
          />
          <circle
            cx="50"
            cy="50"
            r="4.5"
            fill="#A78BFA"
            filter="url(#violetGlow)"
            className="animate-pulse"
            style={{ '--order': 7 } as React.CSSProperties}
          />
        </svg>

        <div className="mt-6 flex flex-col items-center space-y-1">
          <span className="text-xs uppercase tracking-[0.28em] font-mono text-purple-300/80 font-medium">
            INITIALIZING SYSTEM
          </span>
          <div className="w-24 h-0.5 bg-neutral-900 overflow-hidden rounded-full mt-2">
            <div className="w-full h-full bg-gradient-to-r from-purple-600 to-violet-400 origin-left animate-[scaleX_1.2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </div>
  );
};
