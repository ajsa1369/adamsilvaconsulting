"use client"
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Maximize2, Send, ChevronDown, ChevronUp } from 'lucide-react';

const AISalesChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);
  const messagesEndRef = useRef(null);

  const quickQuestions = [
    "Tell me about your AI marketing services",
    "How can AI help my lead generation?",
    "What is AEO/GEO optimization?",
    "I need help with marketing automation",
    "Schedule a consultation"
  ];

  const dummyResponses = [
    "We offer 14 comprehensive AI marketing services that have generated billions in client revenue: SEO & PPC Superpowers, AI Content Creation, Omnichannel Communication, Intelligent Campaigns, Intent Graph Targeting, Precision Lead Management, Voice Agent Verification, Omnichannel Nurturing, AI Websites & Landing Pages, Real-time Analytics, Security & Compliance, Competitor Monitoring, Outreach & Engagement Tools, and Marketing Automation Platform.",
    "Our AI-powered lead generation system uses advanced intent graph targeting and precision lead management to identify and convert high-quality prospects. We've helped clients increase conversion rates by up to 340% through intelligent campaign optimization and real-time analytics.",
    "AEO/GEO (Answer Engine Optimization/Generative Engine Optimization) is the next evolution of SEO. It optimizes your content to appear in AI-generated responses from ChatGPT, Bard, and other AI assistants, ensuring your brand dominates the emerging AI search landscape.",
    "Our marketing automation platform integrates AI-driven workflows, omnichannel nurturing, and intelligent campaign management to automate your entire marketing funnel. We handle everything from initial contact to conversion, freeing your team to focus on strategy.",
    "I'd be happy to schedule a consultation! Our team typically responds within 24 hours. Please provide your email and preferred time, or visit our website to book directly. We'll discuss your specific needs and create a custom AI marketing strategy for your business.",
    "Since 2003, Adam Silva Consulting has been at the forefront of AI marketing innovation. We've generated over $2.8 BILLION in revenue for our exclusive enterprise client portfolio using proprietary AI technologies and strategies.",
    "Our omnichannel communication system ensures consistent messaging across all platforms - email, social media, SMS, voice, and web chat. The AI learns from every interaction to continuously improve engagement and conversion rates."
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage = {
        type: 'bot',
        text: "STOP scrolling! Your competitors are already using AI to dominate search rankings and steal your clients. Since 2003, Adam Silva Consulting has generated over $2.8 BILLION in revenue for our exclusive enterprise client portfolio using",
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const handleQuickQuestion = (question) => {
    setShowQuickQuestions(false);
    handleSendMessage(question);
  };

  const handleSendMessage = (text = inputValue) => {
    if (!text.trim()) return;

    const userMessage = {
      type: 'user',
      text: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Hide quick questions when user sends any message
    setShowQuickQuestions(false);

    setTimeout(() => {
      const randomResponse = dummyResponses[Math.floor(Math.random() * dummyResponses.length)];
      const botMessage = {
        type: 'bot',
        text: randomResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 800);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="relative bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
        >
          <MessageCircle size={22} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></span>
        </button>
      </div>
    );
  }

  return (
    <div className={`fixed z-50 transition-all duration-300 ${
      isExpanded 
        ? 'inset-4' 
        : 'bottom-6 right-6 w-[400px] h-[500px]'
    }`}>
      <div className="bg-white rounded-lg shadow-2xl flex flex-col h-full overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full p-2">
              <MessageCircle className="text-blue-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">AI Sales Assistant</h3>
              <p className="text-sm text-blue-100">Adam Silva Consulting</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="hover:bg-blue-700 p-2 rounded transition-colors cursor-pointer"
            >
              <Maximize2 size={20} />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-700 p-2 rounded transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {messages.map((msg, idx) => (
            <div key={idx} className="mb-4">
              {msg.type === 'bot' ? (
                <div className="flex justify-start">
                  <div className="bg-white rounded-lg p-4 max-w-[85%] shadow">
                    <p className="text-gray-800 text-sm leading-relaxed">{msg.text}</p>
                    <span className="text-xs text-gray-400 mt-2 block">
                      {formatTime(msg.timestamp)}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white rounded-lg p-4 max-w-[85%] shadow">
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                    <span className="text-xs text-blue-100 mt-2 block">
                      {formatTime(msg.timestamp)}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        {showQuickQuestions && (
          <div className="px-4 py-3 bg-white border-t border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm text-gray-600">Quick questions:</p>
              <button
                onClick={() => setShowQuickQuestions(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                title="Hide quick questions"
              >
                <ChevronDown size={20} />
              </button>
            </div>
            <div className="space-y-2">
              {quickQuestions.map((question, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickQuestion(question)}
                  className="w-full text-left text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-2 rounded transition-colors cursor-pointer"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* Show Quick Questions Button (when hidden) */}
        {!showQuickQuestions && messages.length > 0 && (
          <div className="px-4 py-2 bg-white border-t border-gray-200">
            <button
              onClick={() => setShowQuickQuestions(true)}
              className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
            >
              <ChevronUp size={18} />
              Show quick questions
            </button>
          </div>
        )}

        {/* Input */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex gap-2 items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask about our AI services..."
              className="flex-1 border-2 border-blue-600 rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={() => handleSendMessage()}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 transition-colors cursor-pointer"
            >
              <Send size={20} />
            </button>
          </div>
          <p className="text-xs text-gray-400 text-center mt-2">Powered by OmniConflux</p>
        </div>
      </div>
    </div>
  );
};

export default AISalesChat;