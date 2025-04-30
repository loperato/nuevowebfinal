"use client";

import { useState, useEffect, useRef } from 'react';
import useChatbotData from '@/hooks/useChatbotData';

interface ChatbotProps {
  locale: string;
}

export default function Chatbot({ locale }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [chatMessages, setChatMessages] = useState<{type: 'user' | 'bot', text: string}[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatbotData = useChatbotData();
  
  // Translations
  const translations = {
    en: {
      placeholder: 'Type your question here...',
      send: 'Send',
      greeting: 'Hello! How can I help you with EfireX TRPL-E today?',
      chatWithUs: 'Chat with us',
      notFound: "I'm sorry, I don't have information about that. Please try asking about EfireX TRPL-E features, applications, or specifications.",
      suggestedQuestions: "You can ask me about:",
      suggestions: [
        "What is EfireX TRPL-E?",
        "Why are lithium battery fires dangerous?",
        "What temperature can EfireX withstand?",
        "Is EfireX environmentally friendly?"
      ]
    },
    es: {
      placeholder: 'Escribe tu pregunta aquí...',
      send: 'Enviar',
      greeting: '¡Hola! ¿Cómo puedo ayudarte con EfireX TRPL-E hoy?',
      chatWithUs: 'Chatea con nosotros',
      notFound: "Lo siento, no tengo información sobre eso. Por favor, intenta preguntar sobre las características, aplicaciones o especificaciones de EfireX TRPL-E.",
      suggestedQuestions: "Puedes preguntarme sobre:",
      suggestions: [
        "¿Qué es EfireX TRPL-E?",
        "¿Por qué son peligrosos los incendios de baterías de litio?",
        "¿Qué temperatura puede soportar EfireX?",
        "¿Es EfireX ecológico?"
      ]
    }
  };

  useEffect(() => {
    if (isOpen && chatMessages.length === 0) {
      // Add initial greeting message
      setChatMessages([
        { type: 'bot', text: translations[locale as keyof typeof translations].greeting },
        { type: 'bot', text: translations[locale as keyof typeof translations].suggestedQuestions }
      ]);
    }
  }, [isOpen, locale]);

  useEffect(() => {
    // Scroll to bottom of chat when new messages are added
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = input.trim();
    setChatMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    setInput('');
    
    // Process the query and find a response
    setTimeout(() => {
      const response = findResponse(userMessage, locale);
      setChatMessages(prev => [...prev, { type: 'bot', text: response }]);
    }, 500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setChatMessages(prev => [...prev, { type: 'user', text: suggestion }]);
    
    // Process the suggestion and find a response
    setTimeout(() => {
      const response = findResponse(suggestion, locale);
      setChatMessages(prev => [...prev, { type: 'bot', text: response }]);
    }, 500);
  };

  const findResponse = (query: string, locale: string) => {
    const currentMessages = chatbotData[locale as keyof typeof chatbotData];
    const lowerQuery = query.toLowerCase();
    
    // Find the closest matching question
    for (const [question, answer] of Object.entries(currentMessages)) {
      if (question.toLowerCase().includes(lowerQuery) || lowerQuery.includes(question.toLowerCase())) {
        return answer;
      }
    }
    
    // If no match found
    return translations[locale as keyof typeof translations].notFound;
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg flex items-center justify-center"
        aria-label={isOpen ? "Close chat" : translations[locale as keyof typeof translations].chatWithUs}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="hidden md:inline">{translations[locale as keyof typeof translations].chatWithUs}</span>
          </div>
        )}
      </button>
      
      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 md:w-96 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col">
          {/* Chat header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">EfireX Support</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
              aria-label="Close chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Chat messages */}
          <div className="flex-1 p-4 overflow-y-auto max-h-96 min-h-[300px]">
            {chatMessages.map((msg, index) => (
              <div 
                key={index} 
                className={`mb-3 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div 
                  className={`inline-block p-3 rounded-lg ${
                    msg.type === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-gray-200 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
                
                {/* Show suggested questions after bot greeting */}
                {msg.type === 'bot' && 
                 msg.text === translations[locale as keyof typeof translations].suggestedQuestions && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {translations[locale as keyof typeof translations].suggestions.map((suggestion, i) => (
                      <button
                        key={i}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm py-1 px-2 rounded-full transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat input */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={translations[locale as keyof typeof translations].placeholder}
              className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={translations[locale as keyof typeof translations].placeholder}
            />
            <button 
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg"
            >
              {translations[locale as keyof typeof translations].send}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
