import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (text: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  onSend,
  disabled = false,
  placeholder = "Ask about Suresh's work, tech, or FaceViz..."
}) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() || disabled) return;
    onSend(text.trim());
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 bg-white dark:bg-[#0A0A12] border-t border-purple-200/80 dark:border-purple-900/30 flex items-center gap-2">
      <input
        type="text"
        value={text}
        disabled={disabled}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-purple-50/60 dark:bg-[#12121E] border border-purple-200 dark:border-purple-900/30 focus:border-purple-500 rounded-xl px-3.5 py-2.5 text-xs text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none transition-colors"
      />
      <button
        type="submit"
        disabled={!text.trim() || disabled}
        className="p-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
        aria-label="Send Message"
      >
        <Send className="w-3.5 h-3.5" />
      </button>
    </form>
  );
};
