"use client"
import React, { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import Link from 'next/link';

const StrategicIntelligence = () => {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch latest 6 blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/api/blogs?limit=6`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }

        const data = await response.json();
        
        if (data.success) {
          setInsights(data.blogs);
        }
      } catch (err) {
        setError(err.message);
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Function to get the correct Tailwind classes for the impact badge
  const getImpactClasses = (impact) => {
    switch (impact?.toUpperCase()) {
      case 'CRITICAL':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'HIGH':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'MEDIUM':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  if (loading) {
    return (
      <section className="mt-20 py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#025CA2] mx-auto mb-4"></div>
            <p className="text-lg text-neutral-600">Loading insights...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mt-20 py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-center">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Error Loading Insights</h3>
              <p className="text-red-600">{error}</p>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-[#025CA2] text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Retry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-20 py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center gap-5 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 text-center">
          Latest Strategic Intelligence
        </h2>
        <p className="text-lg md:text-xl max-w-4xl text-center text-neutral-600">
          Essential reading for leadership navigating the AI transformation.
          Strategic analysis, market intelligence, and implementation frameworks.
        </p>
      </div>

      {/* Cards Grid */}
      {insights.length > 0 ? (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {insights.map((item) => (
              <div
                key={item._id}
                className="flex flex-col p-6 border border-neutral-200 rounded-2xl shadow-md bg-white transition hover:shadow-2xl"
              >
                {/* Tagline and Impact Badge */}
                <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
                  <span className="text-sm font-semibold text-[#025CA2]">
                    {item.category || 'General'}
                  </span>
                  {item.impact && (
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full border ${getImpactClasses(item.impact)}`}
                    >
                      {item.impact}
                    </span>
                  )}
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-neutral-800 mb-4 hover:text-[#025CA2] transition-colors">
                  <Link href={`/authority-hub/insights/${item.slug}`}>
                    {item.title}
                  </Link>
                </h3>
                <p className="text-neutral-600 mb-6 text-base line-clamp-3">{item.excerpt}</p>

                {/* Footer: Date, Time, and Read Guide Button */}
                <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-neutral-500">
                    <span className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1 text-[#025CA2]" />
                      {formatDate(item.createdAt)}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-[#025CA2]" />
                      {item.readingTime || 5} min read
                    </span>
                  </div>
                  <Link
                    href={`/authority-hub/insights/${item.slug}`}
                    className="flex items-center text-[#025CA2] font-semibold hover:text-blue-700 transition duration-150 py-2 px-3 rounded-lg bg-blue-50 hover:bg-blue-100"
                  >
                    Read Analysis <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-12 text-center">
            <Link 
              href="/insights" 
              className="inline-flex max-w-[320px] items-center mx-auto bg-[#025CA2] hover:-translate-y-1 cursor-pointer text-white font-bold py-3 px-8 rounded-lg shadow-xl transition duration-300 transform hover:scale-[1.02]"
            >
              View All Strategic Insights <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-neutral-600">No insights available at the moment.</p>
          <p className="text-sm text-neutral-500 mt-2">Check back soon for new content!</p>
        </div>
      )}
    </section>
  );
};

export default StrategicIntelligence;