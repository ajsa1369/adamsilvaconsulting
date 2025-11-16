"use client"
import React, { useState } from 'react';
import { ArrowRight, Target, CheckCircle2 } from 'lucide-react';

export default function IntelligenceBriefings() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email) {
      setIsSubmitted(true);
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 5000);
    }
  };

  return (
    <div className="bg-gradient-to-br bg-[#025CA1] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl  font-bold text-white text-center mb-6">
          Executive Intelligence Briefings
        </h2>

        {/* Subtitle */}
        <p className="text-xl text-blue-100 text-center mb-8 max-w-3xl mx-auto">
          Weekly strategic intelligence for decision-makers navigating the AI transformation
        </p>

        {/* Description */}
        <p className="text-xl  text-blue-100/90 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
          Get exclusive market analysis, implementation frameworks, and strategic insights delivered
          weekly. Essential reading for executives who refuse to be caught unprepared by the generative
          AI revolution.
        </p>

        {/* Stats and Form Container */}
        <div className="bg-white/10 max-w-2xl mx-auto backdrop-blur-sm border border-white/20 rounded-3xl p-6 mb-8">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">Weekly</div>
              <div className="text-sm text-blue-100">Intelligence</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">C-Suite</div>
              <div className="text-sm text-blue-100">Focused</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">No</div>
              <div className="text-sm text-blue-100">Fluff</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">5000+</div>
              <div className="text-sm text-blue-100">Executives</div>
            </div>
          </div>

          {/* Form */}
          {!isSubmitted ? (
            <div className="mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your executive email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
                <button
                  onClick={handleSubmit}
                  className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all flex items-center justify-center gap-2 group"
                >
                  Get Intelligence
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ) : (
            <div className="mb-6 bg-emerald-500/20 border border-emerald-400/30 rounded-xl p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-3 text-white">
                <CheckCircle2 size={28} className="text-emerald-300 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-lg mb-1">Success! You're subscribed.</div>
                  <div className="text-sm text-blue-100">
                    Check your inbox for your first intelligence briefing. Welcome to the community of forward-thinking executives.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Disclaimer */}
          <p className="text-sm text-blue-200/80 text-center">
            Strategic intelligence only. No marketing. Unsubscribe anytime.
          </p>
        </div>

        {/* Custom Intelligence Button */}
        <div className="text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all group"
          >
            Request Custom Intelligence
            <Target size={20} className="group-hover:rotate-90 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
}