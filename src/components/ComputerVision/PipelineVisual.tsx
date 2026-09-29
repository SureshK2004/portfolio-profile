import React from 'react';
import { cvPipelineData } from '../../data/projects';
import { Camera, Cpu, Eye, ShieldCheck, Crop, Sparkles, UploadCloud, CheckCircle, Database } from 'lucide-react';

const stepIcons: Record<string, React.ReactNode> = {
  'CCTV CAMERA': <Camera className="w-4 h-4 text-[var(--text-purple)]" />,
  'FRAME CAPTURE': <Cpu className="w-4 h-4 text-[var(--text-purple)]" />,
  'FACE DETECTION': <Eye className="w-4 h-4 text-[var(--text-purple)]" />,
  'FACE TRACKING': <ShieldCheck className="w-4 h-4 text-[var(--text-purple)]" />,
  'QUALITY CHECK': <ShieldCheck className="w-4 h-4 text-[var(--text-purple)]" />,
  'FACE CROP': <Crop className="w-4 h-4 text-[var(--text-purple)]" />,
  'IMAGE ENHANCEMENT': <Sparkles className="w-4 h-4 text-[var(--text-purple)]" />,
  'API UPLOAD': <UploadCloud className="w-4 h-4 text-[var(--text-purple)]" />,
  'FACEVIZ ATTENDANCE': <CheckCircle className="w-4 h-4 text-emerald-500" />,
  'S3 STORAGE': <Database className="w-4 h-4 text-[var(--text-purple)]" />,
};

export const PipelineVisual: React.FC = () => {
  return (
    <div className="p-5 sm:p-7 rounded-2xl theme-card tech-grid-pattern shadow-sm">
      <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[var(--border-subtle)] mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
          <span className="text-xs font-mono-tech tracking-widest uppercase text-[var(--text-purple)] font-semibold">
            Real-Time Edge Processing Pipeline
          </span>
        </div>
        <span className="text-[11px] font-mono-tech text-[var(--text-muted)] hidden sm:inline">
          10-STAGE SEQUENTIAL PIPELINE
        </span>
      </div>

      {/* Responsive layout: 2 cols on mobile, 5 cols on lg screen */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 relative">
        {cvPipelineData.pipelineSteps.map((step, index) => (
          <div key={step.name} className="relative group">
            <div className="h-full p-4 rounded-xl theme-card-subtle hover:border-purple-500/60 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono-tech text-[var(--text-purple)] px-1.5 py-0.5 rounded theme-chip font-bold">
                    STAGE 0{step.step}
                  </span>
                  <div className="p-1 rounded theme-card">
                    {stepIcons[step.name] || <Eye className="w-3.5 h-3.5 text-[var(--text-purple)]" />}
                  </div>
                </div>

                <h4 className="text-xs sm:text-sm font-bold font-heading text-[var(--text-heading)] group-hover:text-[var(--text-purple)] transition-colors">
                  {step.name}
                </h4>

                <div className="text-[11px] text-[var(--text-purple)] font-mono-tech mt-0.5 font-semibold">
                  {step.sub}
                </div>

                <p className="text-[11px] text-[var(--text-body)] mt-2 leading-relaxed font-normal">
                  {step.detail}
                </p>
              </div>
            </div>

            {/* Visual Arrow connector */}
            {index < cvPipelineData.pipelineSteps.length - 1 && (
              <div className="hidden lg:flex absolute top-1/2 -right-2 transform -translate-y-1/2 translate-x-1/2 z-10 text-[var(--text-purple)] pointer-events-none">
                <span className="text-xs font-mono-tech">→</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
