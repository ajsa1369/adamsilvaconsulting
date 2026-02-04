"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, Clock, ArrowRight, AlertTriangle, Target, Lightbulb, ShieldIcon, ChevronLeft, ChevronRight } from 'lucide-react';

// Static blog data
const staticBlogs = [
  {
    id: '1',
    slug: 'google-ucp-is-live',
    title: "Google's UCP is Live: What Merchants Need to Know Now",
    excerpt: "The Universal Commerce Protocol is no longer theoretical. Google's January 2026 announcement marks the official transition to agentic commerce. Here's what you need to do today.",
    category: 'Protocol Updates',
    impact: 'CRITICAL',
    createdAt: '2026-01-15',
    readingTime: 8,
  },
  {
    id: '2',
    slug: 'chatgpt-instant-checkout',
    title: "ChatGPT Instant Checkout: Inside OpenAI's ACP Implementation",
    excerpt: "OpenAI's Instant Checkout feature powered by ACP is now live with Etsy and expanding to 1M+ Shopify merchants. Here's how it works.",
    category: 'ACP',
    impact: 'HIGH',
    createdAt: '2026-01-12',
    readingTime: 6,
  },
  {
    id: '3',
    slug: 'hydration-tax',
    title: 'The Hydration Tax: Why Your JS Bundle is Costing You Agent Citations',
    excerpt: "AI crawlers operate on token budgets. Heavy JavaScript bundles consume those tokens before agents reach your content. Here's the real cost.",
    category: 'Technical',
    impact: 'HIGH',
    createdAt: '2026-01-08',
    readingTime: 5,
  },
  {
    id: '4',
    slug: 'ap2-mandates-explained',
    title: 'AP2 Mandates Explained: Cryptographic Proof for Agent Payments',
    excerpt: "How do you prove a user authorized an AI agent to spend their money? AP2's mandate system provides the answer with verifiable credentials.",
    category: 'AP2',
    impact: 'MEDIUM',
    createdAt: '2026-01-05',
    readingTime: 7,
  },
  {
    id: '5',
    slug: 'organic-traffic-decline',
    title: '50% Organic Traffic Decline: The Data Behind the Shift',
    excerpt: "Gartner's projection is becoming reality. As AI answers queries directly, traditional website traffic is declining. Here's what the data shows.",
    category: 'Market Analysis',
    impact: 'CRITICAL',
    createdAt: '2026-01-02',
    readingTime: 4,
  },
  {
    id: '6',
    slug: 'schema-agents-use',
    title: 'Schema Markup That Agents Actually Use',
    excerpt: "Not all JSON-LD is created equal. Here's how to structure your schema for maximum agent comprehension and action enablement.",
    category: 'Technical',
    impact: 'HIGH',
    createdAt: '2025-12-28',
    readingTime: 10,
  },
  {
    id: '7',
    slug: 'legacy-platform-limitations',
    title: "Why Shopify, Wix, and WordPress Can't Support UCP",
    excerpt: "Root-level access, transport flexibility, TEE/DID infrastructure—legacy platforms lack the fundamentals required for protocol compliance.",
    category: 'Platform Analysis',
    impact: 'HIGH',
    createdAt: '2025-12-22',
    readingTime: 6,
  },
  {
    id: '8',
    slug: 'aeo-geo-metrics',
    title: 'New Metrics for the Agent Web: From CTR to Citation Rate',
    excerpt: "Click-through rate was built for humans. Here are the metrics that matter when AI agents mediate discovery and transactions.",
    category: 'Strategy',
    impact: 'MEDIUM',
    createdAt: '2025-12-18',
    readingTime: 5,
  },
  {
    id: '9',
    slug: 'spa-ssr-architecture-guide',
    title: 'SPA + SSR: The Only Architecture That Works',
    excerpt: "Why the combination of Single Page Application interactivity with Server-Side Rendering is the only way to satisfy both human users and AI agents.",
    category: 'Technical',
    impact: 'HIGH',
    createdAt: '2025-12-15',
    readingTime: 8,
  },
];

export default function InsightsSection() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All Insights");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  const blogs = staticBlogs;

  // Define all possible categories
  const allCategories = [
    "Protocol Updates",
    "ACP",
    "AP2",
    "Technical",
    "Market Analysis",
    "Platform Analysis",
    "Strategy",
  ];

  // Get categories with their counts
  const getCategoriesWithCounts = () => {
    const categoryCounts = blogs.reduce((acc, blog) => {
      const category = blog.category || 'Uncategorized';
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {});

    const categories = [
      { name: "All Insights", count: blogs.length, active: activeCategory === "All Insights" }
    ];

    allCategories.forEach(categoryName => {
      if (categoryCounts[categoryName]) {
        categories.push({
          name: categoryName,
          count: categoryCounts[categoryName],
          active: activeCategory === categoryName
        });
      }
    });

    return categories;
  };

  // Filter blogs by category
  const getFilteredBlogs = () => {
    if (activeCategory === "All Insights") {
      return blogs;
    }
    return blogs.filter(blog => blog.category === activeCategory);
  };

  // Pagination
  const filteredBlogs = getFilteredBlogs();
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const getImpactColor = (impact) => {
    switch(impact?.toUpperCase()) {
      case "CRITICAL": return "bg-red-50 text-red-600 border-red-200";
      case "HIGH": return "bg-orange-50 text-orange-600 border-orange-200";
      case "MEDIUM": return "bg-blue-50 text-blue-600 border-blue-200";
      default: return "bg-gray-50 text-gray-600 border-gray-200";
    }
  };

  const getTagIcon = (category) => {
    const tag = category?.toLowerCase() || '';
    if (tag.includes('market') || tag.includes('analysis')) return <AlertTriangle size={16} />;
    if (tag.includes('strategic') || tag.includes('strategy')) return <Target size={16} />;
    if (tag.includes('technical') || tag.includes('platform')) return <ShieldIcon size={16} />;
    if (tag.includes('protocol') || tag.includes('acp') || tag.includes('ap2')) return <Lightbulb size={16} />;
    return <Target size={16} />;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleBlogClick = (slug) => {
    router.push(`/insights/${slug}`);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const categories = getCategoriesWithCounts();

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Category Filters */}
        <div className="flex flex-wrap max-w-6xl items-center justify-center mx-auto gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => handleCategoryChange(category.name)}
              className={`px-6 py-3 rounded-full text-md font-medium transition-all ${
                activeCategory === category.name
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Showing {indexOfFirstBlog + 1}-{Math.min(indexOfLastBlog, filteredBlogs.length)} of {filteredBlogs.length} insights
          </p>
        </div>

        {/* Insights Grid */}
        {currentBlogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No insights found in this category.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 px-10 gap-6">
            {currentBlogs.map((blog) => (
              <div
                key={blog.id}
                onClick={() => handleBlogClick(blog.slug)}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col cursor-pointer group"
              >
                {/* Tag and Impact */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-blue-800 text-sm font-medium">
                    {getTagIcon(blog.category)}
                    <span>{blog.category || 'General'}</span>
                  </div>
                  {blog.impact && (
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getImpactColor(blog.impact)}`}>
                      {blog.impact}
                    </span>
                  )}
                </div>

                {/* Heading */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                {blog.excerpt && (
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {blog.excerpt}
                  </p>
                )}

                {/* Meta Info */}
                <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{formatDate(blog.createdAt)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{blog.readingTime || 5} min read</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Read Analysis
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg border transition-all ${
                currentPage === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200'
              }`}
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                if (
                  pageNumber === 1 ||
                  pageNumber === totalPages ||
                  (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        currentPage === pageNumber
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                } else if (
                  pageNumber === currentPage - 2 ||
                  pageNumber === currentPage + 2
                ) {
                  return <span key={pageNumber} className="px-2 py-2 text-gray-400">...</span>;
                }
                return null;
              })}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg border transition-all ${
                currentPage === totalPages
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200'
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
