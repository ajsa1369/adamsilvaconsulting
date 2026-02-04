import Link from 'next/link';
import { MessageSquare, Mail, Phone, ArrowRight, CheckCircle, Workflow, Brain, Clock, Target } from 'lucide-react';

export const metadata = {
  title: 'Omnichannel Nurturing | Adam Silva Consulting',
  description: 'AI-orchestrated nurturing across email, SMS, voice, and chat that adapts to each prospect\'s engagement patterns and preferences.',
};

export default function OmnichannelNurturingPage() {
  const channels = [
    { icon: <Mail className="w-6 h-6" />, name: 'Email', description: 'AI-personalized email sequences' },
    { icon: <MessageSquare className="w-6 h-6" />, name: 'SMS', description: 'Timely text message touchpoints' },
    { icon: <Phone className="w-6 h-6" />, name: 'Voice', description: 'AI agent follow-up calls' },
    { icon: <MessageSquare className="w-6 h-6" />, name: 'Chat', description: 'Website and social chat' },
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Orchestration',
      description: 'Machine learning determines the optimal channel, timing, and message for each prospect based on their behavior patterns.'
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: 'Dynamic Journeys',
      description: 'Nurture sequences adapt in real-time based on engagement, moving prospects through personalized paths to conversion.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Optimal Timing',
      description: 'AI identifies the best time to reach each prospect, increasing open rates, response rates, and conversions.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Intent Scoring',
      description: 'Continuous scoring based on multi-channel engagement ensures sales focuses on the hottest opportunities.'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1a365d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-[#085DA0]/30 text-[#60a5fa] rounded-full text-sm font-medium mb-6">
              Lead Nurturing
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Omnichannel<br />
              <span className="text-[#60a5fa]">AI Nurturing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Prospects don't live in one channel. Our AI orchestrates personalized nurturing across email, SMS, 
              voice, and chat—meeting prospects where they are, when they're ready.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-[#085DA0] hover:bg-[#0f6cbb] text-white rounded-lg font-semibold transition-all flex items-center gap-2"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="px-8 py-3 border border-white/30 hover:bg-white/10 text-white rounded-lg font-semibold transition-all"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Unified Multi-Channel Engagement
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {channels.map((channel, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#085DA0]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#085DA0]">
                  {channel.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{channel.name}</h3>
                <p className="text-sm text-gray-600">{channel.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Intelligent Nurturing Capabilities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all">
                <div className="text-[#085DA0] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-[#085DA0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Measurable Impact
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                AI-powered omnichannel nurturing delivers results across your entire pipeline.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>3x higher engagement rates vs. single-channel</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>45% reduction in lead-to-opportunity time</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>2.5x improvement in SQL conversion</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>68% reduction in manual follow-up tasks</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">The AI Advantage</h3>
              <p className="text-blue-100 mb-6">
                Traditional nurturing uses static sequences. Our AI continuously learns from engagement data, 
                adjusting timing, channel, and messaging to maximize conversion for each individual prospect.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Traditional Nurturing</span>
                  <span className="font-semibold">2-3% conversion</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-blue-300 h-2 rounded-full" style={{width: '15%'}}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span>AI Omnichannel</span>
                  <span className="font-semibold">8-12% conversion</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Stop Losing Leads to Single-Channel Thinking
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            See how AI-powered omnichannel nurturing can transform your pipeline performance.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#085DA0] hover:bg-[#0f6cbb] text-white rounded-lg font-semibold transition-all text-lg"
          >
            Schedule Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
