import React, { useState } from 'react';
import { ChatWindow } from './ChatWindow';
import { Sparkles } from 'lucide-react';

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50">
      {isOpen ? (
        <div className="animate-in fade-in zoom-in-95 duration-200">
          <ChatWindow onClose={() => setIsOpen(false)} />
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-purple-700 to-violet-600 text-white font-mono text-[11px] sm:text-xs uppercase tracking-wider font-bold shadow-lg sm:shadow-xl shadow-purple-950/40 sm:shadow-purple-950/60 hover:shadow-purple-600/30 border border-purple-400/40 hover:scale-105 active:scale-95 transition-all duration-200"
          aria-label="Open Suresh AI Chatbot Assistant"
        >
          {/* Subtle pulse ring (hidden on mobile to prevent obscuring background) */}
          <span className="hidden sm:block absolute -inset-0.5 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 opacity-40 blur-sm group-hover:opacity-75 transition-opacity pointer-events-none" />

          <div className="relative flex items-center gap-1.5 sm:gap-2">
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-purple-200" />
            </div>
            <span className="hidden sm:inline">ASK SURESH AI</span>
            <span className="sm:hidden font-mono text-[11px] font-bold">ASK AI</span>
            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-400" />
            </span>
          </div>
        </button>
      )}
    </div>
  );
};
