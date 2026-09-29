import { getMockResponse } from '../data/chatbot';

export interface ChatMessageItem {
  id: string;
  sender: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  isStreaming?: boolean;
}

export interface ChatServiceResponse {
  message: string;
  status: 'success' | 'error';
}

/**
 * Frontend mock chat service.
 * In a future phase, this will be swapped with a real Django REST API endpoint
 * using fetch/EventSource for SSE streaming without changing the Chatbot UI contract.
 */
export async function sendChatMessage(query: string): Promise<ChatServiceResponse> {
  // Simulate network latency (400-800ms) for realistic UX
  await new Promise((resolve) => setTimeout(resolve, 600));

  try {
    const responseText = getMockResponse(query);
    return {
      message: responseText,
      status: 'success'
    };
  } catch (error) {
    console.error('Chat service mock error:', error);
    return {
      message: "Sorry, I couldn't process your request right now. Please try again.",
      status: 'error'
    };
  }
}

// Deprecated alias maintained for backward compatibility
export const mockChat = sendChatMessage;
