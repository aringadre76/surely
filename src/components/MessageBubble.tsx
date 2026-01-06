import React from 'react';

interface MessageBubbleProps {
  message: string;
  isUser: boolean;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message, isUser }) => {
  return (
    <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'} mb-6 md:mb-8`}>
      <div
        className={`${isUser ? 'mr-1 md:mr-2 lg:mr-3 xl:mr-4 2xl:mr-4' : 'ml-1 md:ml-2 lg:ml-3 xl:ml-4 2xl:ml-4'} max-w-[calc(100%-0.5rem)] md:max-w-[calc(100%-1rem)] lg:max-w-[calc(100%-1.5rem)] xl:max-w-[calc(100%-2rem)] 2xl:max-w-[calc(100%-2rem)] rounded-2xl px-5 py-4 md:px-6 md:py-5 ${
          isUser
            ? 'bg-blue-600 text-white rounded-br-sm'
            : 'bg-slate-700 text-slate-100 rounded-bl-sm'
        }`}
      >
        <p className="text-base md:text-lg leading-relaxed whitespace-pre-wrap">{message}</p>
      </div>
    </div>
  );
};
