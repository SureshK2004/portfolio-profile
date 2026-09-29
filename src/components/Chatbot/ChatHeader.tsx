import React from 'react';
import { X, Sparkles, RotateCcw } from 'lucide-react';
import { chatbotConfig } from '../../data/chatbot';

interface ChatHeaderProps {
  onClose: () => void;
  onReset: () => void;
  statusText?: string;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ onClose, onReset, statusText = 'Ready' }) => {
  return (
    <div className="p-3.5 sm:p-4 bg-white dark:bg-[#0A0A12] border-b border-purple-200/80 dark:border-purple-900/30 flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-violet-500 flex items-center justify-center text-white shadow-sm shadow-purple-500/30">
          <Sparkles className="w-4 h-4" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xs sm:text-sm font-bold font-heading text-neutral-900 dark:text-white tracking-wide">
              {chatbotConfig.header}
            </h3>
            <span className="flex items-center gap-1 text-[10px] font-mono-tech text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/50 px-1.5 py-0.5 rounded border border-emerald-300 dark:border-emerald-500/30 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {statusText}
            </span>
          </div>
          <p className="text-[11px] font-mono-tech text-neutral-500 dark:text-neutral-400">
            {chatbotConfig.subtitle}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={onReset}
          className="p-1.5 rounded-lg text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition-colors"
          title="Reset conversation"
          aria-label="Reset conversation"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
        <button
          type="button"
          onClick={onClose}
          className="p-1.5 rounded-lg text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition-colors"
          title="Close chatbot"
          aria-label="Close chatbot"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
