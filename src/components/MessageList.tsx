import React, { useEffect, useRef } from 'react';
import { MessageBubble } from './MessageBubble';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
}

interface MessageListProps {
  messages: Message[];
  onExampleClick?: (question: string) => void;
}

export const MessageList: React.FC<MessageListProps> = ({ messages, onExampleClick }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const exampleQuestions = [
    "Can I borrow your time machine?",
    "Is it possible to eat a cloud?",
    "Can I trade my shadow for a sandwich?",
    "Will you help me count to infinity?",
    "Can I mail a letter to yesterday?",
    "Is it safe to swim in a pool of thoughts?"
  ];

  return (
    <div className="flex-1 overflow-y-auto py-8 md:py-10 w-full">
      {messages.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-slate-400 px-4">
          <p className="mb-6 text-xl md:text-2xl">Ask me Anything ...</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-4xl">
            {exampleQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => onExampleClick?.(question)}
                className="px-4 py-3 text-left text-sm bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors text-slate-300 hover:text-white"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      ) : (
        messages.map((message) => (
          <div key={message.id} className="animate-fade-in">
            <MessageBubble message={message.text} isUser={message.isUser} />
          </div>
        ))
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};
