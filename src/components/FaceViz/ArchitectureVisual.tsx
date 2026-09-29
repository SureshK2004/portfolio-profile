import React from 'react';
import { Users, Server, Database, Activity, ArrowDown } from 'lucide-react';

export const ArchitectureVisual: React.FC = () => {
  return (
    <div className="relative p-6 sm:p-8 rounded-2xl theme-card tech-grid-pattern overflow-hidden shadow-sm">
      <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)] mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
          <span className="text-xs font-mono-tech tracking-widest uppercase text-[var(--text-purple)] font-semibold">
            System Architecture Topology
          </span>
        </div>
        <span className="text-[11px] font-mono-tech text-[var(--text-muted)] font-medium">
          DATA FLOW & WORKFLOW EXECUTION
        </span>
      </div>

      <div className="flex flex-col items-center space-y-4 max-w-3xl mx-auto">
        {/* Tier 1: User / Client Layer */}
        <div className="w-full">
          <div className="text-[11px] font-mono-tech text-[var(--text-purple)] uppercase text-center mb-2 tracking-wider font-semibold">
            Layer 1: Role-Based Portals & Client Entrypoints
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { role: 'EMPLOYEE', desc: 'Mobile punch-in, geofencing & timesheets' },
              { role: 'MANAGER', desc: 'Team approvals, task logs & shift roster' },
              { role: 'ADMIN', desc: 'HR policies, payroll runs & audit exports' },
            ].map((node) => (
              <div
                key={node.role}
                className="p-3.5 rounded-xl theme-card-subtle hover:border-purple-500/60 transition-all text-center group shadow-sm"
              >
                <div className="flex items-center justify-center gap-1.5 text-xs font-mono-tech font-bold text-[var(--text-heading)] group-hover:text-[var(--text-purple)]">
                  <Users className="w-3.5 h-3.5 text-[var(--text-purple)]" />
                  <span>{node.role}</span>
                </div>
                <p className="text-[11px] text-[var(--text-body)] mt-1 leading-snug">
                  {node.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Connector */}
        <div className="flex flex-col items-center text-[var(--text-purple)] py-1">
          <div className="w-px h-6 bg-purple-500" />
          <ArrowDown className="w-4 h-4 text-[var(--text-purple)] -mt-1" />
        </div>

        {/* Tier 2: Backend Application Layer */}
        <div className="w-full">
          <div className="text-[11px] font-mono-tech text-[var(--text-purple)] uppercase text-center mb-2 tracking-wider font-semibold">
            Layer 2: Core Business Logic & API Engine
          </div>
          <div className="p-4 sm:p-5 rounded-xl theme-badge text-center shadow-sm">
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-bold font-heading text-[var(--badge-text)]">
              <Server className="w-4 h-4 text-[var(--text-purple)]" />
              <span>DJANGO / DJANGO REST FRAMEWORK</span>
            </div>
            <p className="text-xs text-[var(--text-body)] mt-1.5 max-w-xl mx-auto font-mono-tech">
              Authentication · Serializers · Workflow Rules · GPS Validation · Viewsets · Async Tasks
            </p>
          </div>
        </div>

        {/* Connector */}
        <div className="flex flex-col items-center text-[var(--text-purple)] py-1">
          <div className="w-px h-6 bg-purple-500" />
          <ArrowDown className="w-4 h-4 text-[var(--text-purple)] -mt-1" />
        </div>

        {/* Tier 3: Database & Storage */}
        <div className="w-full">
          <div className="text-[11px] font-mono-tech text-[var(--text-purple)] uppercase text-center mb-2 tracking-wider font-semibold">
            Layer 3: Relational Persistence & Query Tuning
          </div>
          <div className="p-4 sm:p-5 rounded-xl theme-card-subtle text-center hover:border-purple-500/60 transition-all shadow-sm">
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-bold font-heading text-[var(--text-heading)]">
              <Database className="w-4 h-4 text-[var(--text-purple)]" />
              <span>POSTGRESQL & OBJECT STORAGE</span>
            </div>
            <p className="text-xs text-[var(--text-body)] mt-1 max-w-lg mx-auto font-mono-tech">
              Relational schemas · Aggregation queries · Indexing · S3/Spaces file & CCTV frame audit
            </p>
          </div>
        </div>

        {/* Connector */}
        <div className="flex flex-col items-center text-[var(--text-purple)] py-1">
          <div className="w-px h-6 bg-purple-500" />
          <ArrowDown className="w-4 h-4 text-[var(--text-purple)] -mt-1" />
        </div>

        {/* Tier 4: Operations & Output */}
        <div className="w-full">
          <div className="text-[11px] font-mono-tech text-[var(--text-purple)] uppercase text-center mb-2 tracking-wider font-semibold">
            Layer 4: Real-Time Operational Outcome
          </div>
          <div className="p-4 rounded-xl theme-card text-center border-purple-500/40">
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold font-mono-tech text-[var(--text-purple)]">
              <Activity className="w-4 h-4" />
              <span>WORKFORCE OPERATIONS</span>
            </div>
            <p className="text-xs text-[var(--text-body)] mt-1 font-mono-tech">
              Automated daily attendance logging · Payroll processing · Anomaly audits · Real-time executive dashboards
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
