"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, Clock, ArrowRight, AlertTriangle, Target, Lightbulb, ShieldIcon, ChevronLeft, ChevronRight } from 'lucide-react';

export default function InsightsSection() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All Insights");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/api/blogs`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }

        const data = await response.json();
        setBlogs(data.blogs || []);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Define all possible categories
  const allCategories = [
    "Strategic Analysis",
    "Market Intelligence",
    "Technical Implementation",
    "Authority Building",
    "Business Strategy",
    "Technology",
    "Security",
    "Sustainability"
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

    // Add all predefined categories with their counts (0 if no blogs)
    allCategories.forEach(categoryName => {
      categories.push({
        name: categoryName,
        count: categoryCounts[categoryName] || 0,
        active: activeCategory === categoryName
      });
    });

    // Add any additional categories from blogs that aren't in the predefined list
    Object.entries(categoryCounts).forEach(([name, count]) => {
      if (!allCategories.includes(name) && name !== 'Uncategorized') {
        categories.push({
          name,
          count,
          active: activeCategory === name
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

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

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
    if (tag.includes('market') || tag.includes('intelligence')) return <AlertTriangle size={16} />;
    if (tag.includes('strategic') || tag.includes('strategy')) return <Target size={16} />;
    if (tag.includes('technical') || tag.includes('implementation') || tag.includes('security')) return <ShieldIcon size={16} />;
    if (tag.includes('authority') || tag.includes('building')) return <Lightbulb size={16} />;
    return <Target size={16} />;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const handleBlogClick = (slug) => {
    router.push(`/insights/${slug}`);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Loading state
  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-lg text-gray-600">Loading insights...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="bg-gray-50 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center max-w-md">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                <h2 className="text-xl font-bold text-red-800 mb-2">Error Loading Insights</h2>
                <p className="text-red-600">{error}</p>
              </div>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // No blogs state
  if (blogs.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No Insights Available</h2>
              <p className="text-gray-600">Check back soon for new content!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const categories = getCategoriesWithCounts();

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      {/* Insights Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Category Filters */}
        <div className="flex flex-wrap max-w-6xl items-center justify-center mx-auto gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
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
                key={blog._id || blog.id}
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

                {/* Featured Image (if available) */}
                {blog.images && blog.images.length > 0 && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img
                      src={blog.images[0].url}
                      alt={blog.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Heading */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                  {blog.title}
                </h3>

                {/* Excerpt/Subheading */}
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

            {/* Page Numbers */}
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                // Show first page, last page, current page, and pages around current
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