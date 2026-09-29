import React, { useState } from 'react';
import { ChatWindow } from './ChatWindow';
import { Sparkles } from 'lucide-react';

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {isOpen ? (
        <div className="animate-in fade-in zoom-in-95 duration-200">
          <ChatWindow onClose={() => setIsOpen(false)} />
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-purple-700 to-violet-600 text-white font-mono text-xs uppercase tracking-wider font-bold shadow-xl shadow-purple-950/60 hover:shadow-purple-600/30 border border-purple-400/40 hover:scale-105 active:scale-95 transition-all duration-200"
          aria-label="Open Suresh AI Chatbot Assistant"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 opacity-40 blur-sm group-hover:opacity-75 transition-opacity" />

          <div className="relative flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-purple-200" />
            </div>
            <span>ASK SURESH AI</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
          </div>
        </button>
      )}
    </div>
  );
};
