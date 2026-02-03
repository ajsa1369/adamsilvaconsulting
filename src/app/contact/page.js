import { Mail, MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Contact | Adam Silva Consulting - Schedule Your Agentic Commerce Consultation',
  description: 'Ready to implement UCP, ACP, and AP2 protocols? Schedule a consultation to discuss your agentic commerce architecture needs.',
  openGraph: {
    title: 'Contact Adam Silva Consulting',
    description: 'Schedule your agentic commerce consultation. Get protocol-ready with SPA + SSR + Heavy Schema architecture.',
  },
};

export default function ContactPage() {
  const consultationIncludes = [
    'Current architecture assessment',
    'Protocol readiness evaluation (UCP/ACP/AP2)',
    'Token efficiency analysis',
    'Schema depth review',
    'Custom implementation roadmap',
    'Investment estimate',
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1a365d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-[#085DA0]/30 text-[#60a5fa] rounded-full text-sm font-medium mb-6">
              Get Started
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Agentic Web Isn't Coming—<br />
              <span className="text-[#60a5fa]">It's Here.</span>
            </h1>
            <p className="text-xl text-gray-300">
              Google UCP and OpenAI ACP are live. Don't let legacy architecture render you invisible to AI agents.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Schedule Your Protocol Assessment
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our consultation process begins with understanding your current architecture and business objectives. We'll evaluate your readiness for the three foundational protocols and create a custom implementation roadmap.
              </p>

              {/* What's Included */}
              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Consultation Includes:</h3>
                <ul className="space-y-3">
                  {consultationIncludes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#085DA0] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#085DA0]/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#085DA0]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:info@adamsilvaconsulting.com" className="text-gray-900 font-medium hover:text-[#085DA0] transition-colors">
                      info@adamsilvaconsulting.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#085DA0]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#085DA0]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-900 font-medium">Port Saint Lucie, Florida</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#085DA0]/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#085DA0]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Response Time</p>
                    <p className="text-gray-900 font-medium">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Consultation</h3>
                <p className="text-gray-600 mb-6">Fill out the form below and we'll be in touch within 24 hours.</p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#085DA0] focus:border-transparent transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#085DA0] focus:border-transparent transition-all"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#085DA0] focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#085DA0] focus:border-transparent transition-all"
                      placeholder="Company Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                      Website URL
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#085DA0] focus:border-transparent transition-all"
                      placeholder="https://yourcompany.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                      Primary Interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#085DA0] focus:border-transparent transition-all"
                    >
                      <option value="">Select your primary interest</option>
                      <option value="full-implementation">Full Protocol Implementation (UCP + ACP + AP2)</option>
                      <option value="ucp-only">UCP Implementation (Google/Gemini)</option>
                      <option value="acp-only">ACP Integration (ChatGPT Checkout)</option>
                      <option value="spa-ssr">SPA + SSR Architecture Migration</option>
                      <option value="schema">Heavy Schema Markup</option>
                      <option value="audit">Protocol Readiness Audit</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#085DA0] focus:border-transparent transition-all resize-none"
                      placeholder="Describe your current architecture and what you're looking to achieve..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#085DA0] hover:bg-[#0f6cbb] text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                  >
                    Submit Request
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#0a1628] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#60a5fa] mb-2">12-16</div>
              <div className="text-gray-400">Weeks to Full Protocol Compliance</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#60a5fa] mb-2">3</div>
              <div className="text-gray-400">Protocols Implemented (UCP/ACP/AP2)</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#60a5fa] mb-2">&lt;300ms</div>
              <div className="text-gray-400">Target Render-to-Fact Speed</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}