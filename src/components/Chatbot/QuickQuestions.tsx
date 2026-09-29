import React from 'react';
import { chatbotConfig } from '../../data/chatbot';
import { HelpCircle } from 'lucide-react';

interface QuickQuestionsProps {
  onSelect: (questionText: string) => void;
  disabled?: boolean;
}

export const QuickQuestions: React.FC<QuickQuestionsProps> = ({ onSelect, disabled = false }) => {
  return (
    <div className="py-2.5 px-3 border-t border-purple-100 dark:border-purple-900/20 bg-purple-50/50 dark:bg-[#0A0A10]/95">
      <div className="flex items-center gap-1.5 text-[10px] font-mono-tech text-purple-700 dark:text-purple-400 mb-2 font-semibold">
        <HelpCircle className="w-3 h-3" />
        <span className="uppercase tracking-wider">Suggested Questions</span>
      </div>
      <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none no-scrollbar">
        {chatbotConfig.quickQuestions.map((q) => (
          <button
            key={q.id}
            type="button"
            disabled={disabled}
            onClick={() => onSelect(q.text)}
            className="shrink-0 px-2.5 py-1.5 rounded-lg bg-white dark:bg-[#141424] hover:bg-purple-100 dark:hover:bg-[#1c1c32] border border-purple-200 dark:border-purple-900/30 hover:border-purple-400 text-[11px] font-mono-tech text-neutral-700 dark:text-neutral-300 hover:text-purple-900 dark:hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-sm"
          >
            {q.text}
          </button>
        ))}
      </div>
    </div>
  );
};
