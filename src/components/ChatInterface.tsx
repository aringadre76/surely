import React, { useState } from 'react';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { getNoResponse } from '@/lib/api';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
}

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (userMessage: string) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      text: userMessage,
      isUser: true,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const response = await getNoResponse();
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: response.reason,
        isUser: false,
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Oops! Something went wrong. But the answer is still no.',
        isUser: false,
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-transparent overflow-hidden">
      <div className="flex-1 overflow-hidden w-full">
        <MessageList messages={messages} onExampleClick={handleSendMessage} />
      </div>
      {isLoading && (
        <div className="px-4 py-2 text-sm text-slate-400">
          Thinking...
        </div>
      )}
      <MessageInput onSend={handleSendMessage} disabled={isLoading} />
    </div>
  );
};
