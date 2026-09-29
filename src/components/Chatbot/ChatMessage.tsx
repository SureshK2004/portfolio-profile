import React from 'react';
import type { ChatMessageItem } from '../../services/chatService';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: ChatMessageItem;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex gap-2.5 ${isUser ? 'flex-row-reverse' : 'flex-row'} items-start my-2.5`}>
      {/* Avatar */}
      <div
        className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 text-xs font-mono-tech ${
          isUser
            ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-sm'
            : 'bg-purple-100 dark:bg-[#181829] border border-purple-200 dark:border-purple-800/40 text-purple-700 dark:text-purple-300'
        }`}
      >
        {isUser ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
      </div>

      {/* Bubble */}
      <div
        className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-[13px] leading-relaxed font-sans shadow-sm ${
          isUser
            ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-tr-none'
            : 'bg-white dark:bg-[#12121E] border border-purple-200 dark:border-purple-900/30 text-neutral-800 dark:text-neutral-200 rounded-tl-none'
        }`}
      >
        <p className="whitespace-pre-line">{message.content}</p>
        <div
          className={`text-[9px] font-mono-tech mt-1 ${
            isUser ? 'text-purple-100 text-right' : 'text-neutral-400 dark:text-neutral-500'
          }`}
        >
          {message.timestamp}
        </div>
      </div>
    </div>
  );
};
