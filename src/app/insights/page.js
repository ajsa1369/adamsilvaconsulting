import Link from 'next/link';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';

export const metadata = {
  title: 'Insights | Adam Silva Consulting - Agentic Commerce Blog',
  description: 'Latest insights on agentic commerce, UCP/ACP/AP2 protocols, AI-driven search, and the shift from SEO to AEO/GEO.',
};

export default function InsightsPage() {
  const featuredPost = {
    title: 'Google\'s UCP is Live: What Merchants Need to Know Now',
    excerpt: 'The Universal Commerce Protocol is no longer theoretical. Google\'s January 2026 announcement marks the official transition to agentic commerce. Here\'s what you need to do today.',
    date: 'January 15, 2026',
    readTime: '8 min',
    category: 'Protocol Updates',
    link: '/insights/google-ucp-is-live',
  };

  const posts = [
    {
      title: 'ChatGPT Instant Checkout: Inside OpenAI\'s ACP Implementation',
      excerpt: 'OpenAI\'s Instant Checkout feature powered by ACP is now live with Etsy and expanding to 1M+ Shopify merchants. Here\'s how it works.',
      date: 'January 12, 2026',
      readTime: '6 min',
      category: 'ACP',
      link: '/insights/chatgpt-instant-checkout',
    },
    {
      title: 'The Hydration Tax: Why Your JS Bundle is Costing You Agent Citations',
      excerpt: 'AI crawlers operate on token budgets. Heavy JavaScript bundles consume those tokens before agents reach your content. Here\'s the real cost.',
      date: 'January 8, 2026',
      readTime: '5 min',
      category: 'Technical',
      link: '/insights/hydration-tax',
    },
    {
      title: 'AP2 Mandates Explained: Cryptographic Proof for Agent Payments',
      excerpt: 'How do you prove a user authorized an AI agent to spend their money? AP2\'s mandate system provides the answer with verifiable credentials.',
      date: 'January 5, 2026',
      readTime: '7 min',
      category: 'AP2',
      link: '/insights/ap2-mandates-explained',
    },
    {
      title: '50% Organic Traffic Decline: The Data Behind the Shift',
      excerpt: 'Gartner\'s projection is becoming reality. As AI answers queries directly, traditional website traffic is declining. Here\'s what the data shows.',
      date: 'January 2, 2026',
      readTime: '4 min',
      category: 'Market Analysis',
      link: '/insights/organic-traffic-decline',
    },
    {
      title: 'Schema Markup That Agents Actually Use',
      excerpt: 'Not all JSON-LD is created equal. Here\'s how to structure your schema for maximum agent comprehension and action enablement.',
      date: 'December 28, 2025',
      readTime: '10 min',
      category: 'Schema',
      link: '/insights/schema-agents-use',
    },
    {
      title: 'Why Shopify, Wix, and WordPress Can\'t Support UCP',
      excerpt: 'Root-level access, transport flexibility, TEE/DID infrastructure—legacy platforms lack the fundamentals required for protocol compliance.',
      date: 'December 22, 2025',
      readTime: '6 min',
      category: 'Platform Analysis',
      link: '/insights/legacy-platform-limitations',
    },
  ];

  const categories = [
    { name: 'All', count: 24 },
    { name: 'UCP', count: 8 },
    { name: 'ACP', count: 6 },
    { name: 'AP2', count: 4 },
    { name: 'Technical', count: 7 },
    { name: 'Strategy', count: 5 },
    { name: 'Market Analysis', count: 3 },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1a365d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-[#085DA0]/30 text-[#60a5fa] rounded-full text-sm font-medium mb-6">
              Insights
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Agentic Commerce<br />
              <span className="text-[#60a5fa]">Intelligence</span>
            </h1>
            <p className="text-xl text-gray-300">
              Protocol updates, technical deep-dives, and strategic analysis for the agent-centric web.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={featuredPost.link} className="block">
            <div className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] rounded-2xl p-8 lg:p-12 hover:shadow-lg transition-all group">
              <span className="inline-block px-3 py-1 bg-[#085DA0] text-white text-xs font-semibold rounded-full mb-4">
                LATEST
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 group-hover:text-[#085DA0] transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6 max-w-3xl">{featuredPost.excerpt}</p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {featuredPost.readTime} read
                </span>
                <span className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  {featuredPost.category}
                </span>
                <span className="text-[#085DA0] font-medium flex items-center gap-1 group-hover:gap-2 transition-all ml-auto">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Posts */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-6">
                {posts.map((post, index) => (
                  <Link
                    key={index}
                    href={post.link}
                    className="bg-white rounded-xl border border-gray-200 p-6 hover:border-[#085DA0] hover:shadow-lg transition-all group"
                  >
                    <span className="inline-block px-2 py-1 bg-[#085DA0]/10 text-[#085DA0] text-xs font-semibold rounded mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#085DA0] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="px-8 py-3 border border-[#085DA0] text-[#085DA0] rounded-lg font-semibold hover:bg-[#085DA0] hover:text-white transition-all">
                  Load More Articles
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((cat, index) => (
                    <Link
                      key={index}
                      href={`/insights?category=${encodeURIComponent(cat.name)}`}
                      className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white transition-colors"
                    >
                      <span className="text-gray-700">{cat.name}</span>
                      <span className="text-sm text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full">{cat.count}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-[#0a1628] rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Protocol Updates</h3>
                <p className="text-gray-300 text-sm mb-4">Get UCP, ACP, and AP2 news as it happens.</p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#085DA0]"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#085DA0] hover:bg-[#0f6cbb] text-white py-2 rounded-lg font-medium transition-all text-sm"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}