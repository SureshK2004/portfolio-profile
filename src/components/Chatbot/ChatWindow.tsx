import React, { useState, useRef, useEffect } from 'react';
import { ChatHeader } from './ChatHeader';
import { ChatMessage } from './ChatMessage';
import { QuickQuestions } from './QuickQuestions';
import { ChatInput } from './ChatInput';
import { chatbotConfig } from '../../data/chatbot';
import { sendChatMessage } from '../../services/chatService';
import type { ChatMessageItem } from '../../services/chatService';
import { Loader2, AlertCircle } from 'lucide-react';

export type ChatState = 'idle' | 'typing' | 'sending' | 'loading' | 'completed' | 'error';

interface ChatWindowProps {
  onClose: () => void;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<ChatMessageItem[]>([
    {
      id: 'welcome-1',
      sender: 'assistant',
      content: chatbotConfig.welcomeMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [chatState, setChatState] = useState<ChatState>('idle');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, chatState]);

  const handleSend = async (queryText: string) => {
    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // 1. Add User message
    const userMsg: ChatMessageItem = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      content: queryText,
      timestamp: timeNow
    };

    setMessages((prev) => [...prev, userMsg]);
    setChatState('sending');

    // 2. Transition to loading
    setTimeout(() => {
      setChatState('loading');
    }, 150);

    try {
      const result = await sendChatMessage(queryText);

      const botMsg: ChatMessageItem = {
        id: `bot-${Date.now()}`,
        sender: 'assistant',
        content: result.message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMsg]);
      setChatState('completed');
      setTimeout(() => setChatState('idle'), 400);
    } catch (err) {
      console.error(err);
      setChatState('error');
      const errorMsg: ChatMessageItem = {
        id: `err-${Date.now()}`,
        sender: 'assistant',
        content: "Sorry, I couldn't process your question at this moment. Please feel free to reach out to Suresh directly via email or LinkedIn!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMsg]);
      setTimeout(() => setChatState('idle'), 1500);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'assistant',
        content: chatbotConfig.welcomeMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setChatState('idle');
  };

  const isBusy = chatState === 'sending' || chatState === 'loading';

  return (
    <div className="w-[calc(100vw-1.5rem)] sm:w-[410px] max-w-[410px] h-[520px] max-h-[85vh] flex flex-col bg-white dark:bg-[#0D0D16] border border-purple-200 dark:border-purple-800/40 rounded-2xl shadow-2xl shadow-purple-950/20 dark:shadow-purple-950/60 overflow-hidden backdrop-blur-xl">
      {/* Header */}
      <ChatHeader
        onClose={onClose}
        onReset={handleReset}
        statusText={isBusy ? 'Thinking' : 'Online'}
      />

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-1">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}

        {/* Loading / Thinking State */}
        {isBusy && (
          <div className="flex items-center gap-2.5 my-2 text-xs font-mono-tech text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-950/30 p-2.5 rounded-xl border border-purple-300 dark:border-purple-800/25 w-fit">
            <Loader2 className="w-3.5 h-3.5 animate-spin text-purple-600 dark:text-purple-400" />
            <span>Suresh AI is thinking...</span>
          </div>
        )}

        {/* Error Indicator */}
        {chatState === 'error' && (
          <div className="flex items-center gap-2 text-xs font-mono-tech text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/30 p-2 rounded-lg border border-amber-300 dark:border-amber-800/30">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Response issue encountered</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Suggested Questions */}
      <QuickQuestions onSelect={handleSend} disabled={isBusy} />

      {/* Input */}
      <ChatInput onSend={handleSend} disabled={isBusy} />
    </div>
  );
};
