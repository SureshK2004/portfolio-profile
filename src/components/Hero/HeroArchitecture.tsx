import React from 'react';
import { ArrowDown } from 'lucide-react';

interface SystemNode {
  title: string;
  badge: string;
  desc: string;
}

const systemNodes: SystemNode[] = [
  { title: 'Python', badge: 'Core Language', desc: 'Asynchronous concurrency, services & algorithms' },
  { title: 'Django & DRF', badge: 'Framework & APIs', desc: 'Enterprise business logic & RESTful endpoints' },
  { title: 'PostgreSQL', badge: 'Data Tier', desc: 'Normalized relational schemas & query optimization' },
  { title: 'Computer Vision', badge: 'Edge Pipeline', desc: 'RTSP ingestion, face detection & embedding match' },
  { title: 'Production Systems', badge: 'Operational Tier', desc: 'Automated workforce & real-time attendance' },
];

export const HeroArchitecture: React.FC = () => {
  return (
    <div className="relative mt-8 sm:mt-12 p-4 sm:p-6 rounded-2xl theme-card tech-grid-pattern shadow-sm">
      <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[var(--border-subtle)] mb-4 sm:mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
          <span className="text-xs font-mono-tech tracking-widest uppercase text-[var(--text-purple)] font-semibold">
            System Engineering Pipeline
          </span>
        </div>
        <span className="text-[11px] font-mono-tech text-[var(--text-muted)] hidden sm:inline-block">
          END-TO-END FLOW
        </span>
      </div>

      {/* Pipeline Grid on Desktop / Vertical Stack on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
        {systemNodes.map((node, index) => (
          <div key={node.title} className="relative group">
            <div className="h-full p-3.5 rounded-xl theme-card-subtle hover:border-purple-500/60 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono-tech tracking-wider text-[var(--text-purple)] uppercase font-semibold">
                    {node.badge}
                  </span>
                  <span className="text-[10px] font-mono-tech text-[var(--text-muted)] font-medium">
                    0{index + 1}
                  </span>
                </div>
                <h4 className="text-sm font-bold font-heading text-[var(--text-heading)] group-hover:text-[var(--text-purple)] transition-colors">
                  {node.title}
                </h4>
                <p className="text-[11px] text-[var(--text-body)] mt-1 leading-relaxed">
                  {node.desc}
                </p>
              </div>
            </div>

            {/* Down/Right connector indicator */}
            {index < systemNodes.length - 1 && (
              <>
                {/* Desktop horizontal arrow */}
                <div className="hidden md:flex absolute top-1/2 -right-2 transform -translate-y-1/2 translate-x-1/2 z-10 text-[var(--text-purple)] pointer-events-none">
                  <span className="text-xs font-mono-tech">→</span>
                </div>
                {/* Mobile vertical arrow */}
                <div className="md:hidden flex justify-center py-1 text-[var(--text-purple)]">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
