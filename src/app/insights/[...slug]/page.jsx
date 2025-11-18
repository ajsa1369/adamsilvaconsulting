'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Calendar, Clock, ArrowLeft, Eye, X } from 'lucide-react';
import Image from 'next/image';
import MarkdownRenderer from '../MarkdownRenderer';

const SingleBlogPage = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug;

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  // Fetch blog data by slug
  useEffect(() => {
    const fetchBlog = async () => {
      const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/blogs';

      if (!slug) {
        setError('Blog slug not found');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${BASE_URL}/${slug}`);

        if (!response.ok) {
          throw new Error('Failed to fetch blog');
        }

        const data = await response.json();
        setBlog(data.blog);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching blog:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getImpactClasses = (impact) => {
    switch (impact) {
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

  const openLightbox = (image) => {
    setLightboxImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage(null);
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#025CA2] mx-auto mb-4"></div>
          <p className="text-lg text-neutral-600">Loading article...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-red-800 mb-2">Error Loading Blog</h2>
            <p className="text-red-600">{error}</p>
          </div>
          <button
            onClick={() => router.push('/authority-hub/insights')}
            className="px-6 py-3 bg-[#025CA2] text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Back to Insights
          </button>
        </div>
      </div>
    );
  }

  // Not found state
  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
          <p className="text-gray-600 mb-8">
            The article you're looking for doesn't exist.
          </p>
          <button
            onClick={() => router.push('/authority-hub/insights')}
            className="px-6 py-3 bg-[#025CA2] text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Back to Insights
          </button>
        </div>
      </div>
    );
  }

  // Get remaining images (excluding the first one used as featured)
  const remainingImages = blog.images && blog.images.length > 1 ? blog.images.slice(1) : [];

  return (
    <>
      <article className="max-w-4xl mx-auto min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-white border-b border-gray-200">
          <div className="mx-auto px-4 py-12 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-blue-500 mb-6">
              <span className="cursor-pointer hover:text-blue-900 transition" onClick={() => router.push('/')}>
                Home
              </span>
              <span>/</span>
              <span className="cursor-pointer hover:text-blue-900 transition" onClick={() => router.push('/insights')}>
                Insights
              </span>
              <span>/</span>
              <span className="text-gray-900 font-medium">{blog.title}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
              {blog.title}
            </h1>

            {/* Excerpt */}
            {blog.excerpt && (
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {blog.excerpt}
              </p>
            )}

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(blog.createdAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{blog.readingTime} min read</span>
              </div>
              {blog.views > 0 && (
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{blog.views.toLocaleString()} views</span>
                </div>
              )}
            </div>

            {/* Category and Impact Badges */}
            <div className="flex flex-wrap items-center gap-3">
              {blog.category && (
                <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-semibold rounded-lg border border-blue-200">
                  {blog.category}
                </span>
              )}
              {blog.impact && (
                <span
                  className={`text-sm font-semibold px-4 py-2 rounded-lg border ${getImpactClasses(blog.impact)}`}
                >
                  {blog.impact}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {blog.images && blog.images.length > 0 && (
          <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div 
              className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl transition-shadow" 
              style={{ maxHeight: '600px' }}
              onClick={() => openLightbox(blog.images[0])}
            >
              <Image
                src={blog.images[0].url}
                alt={blog.title}
                width={500}
                height={500}
                className="w-full max-h-[90vh] object-cover"
                priority
              />
            </div>
          </div>
        )}

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 py-5 sm:px-6 lg:px-8">
          <div className="rounded-2xl shadow-sm p-8 md:p-12">
            <MarkdownRenderer content={blog.content} />
          </div>

          {/* Image Gallery - Only show if there are remaining images */}
          {remainingImages.length > 0 && (
            <div className="mt-2 ">              
              <div className={`grid gap-4 ${
                remainingImages.length === 1 ? 'grid-cols-1' :
                remainingImages.length === 2 ? 'grid-cols-2' :
                'grid-cols-2 md:grid-cols-3'
              }`}>
                {remainingImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
                    style={{ height: remainingImages.length === 1 ? '400px' : '250px' }}
                    onClick={() => openLightbox(image)}
                  >
                    <Image
                      src={image.url}
                      alt={`Gallery image ${index + 2}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 text-sm font-semibold">
                        Click to enlarge
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="mt-8 bg-white rounded-2xl shadow-sm p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="text-sm text-gray-600">
                <p className="mb-1 font-medium">Published on {formatDate(blog.createdAt)}</p>
                {blog.category && (
                  <p>
                    Category:{' '}
                    <span className="font-semibold text-gray-900">{blog.category}</span>
                  </p>
                )}
              </div>

              <button
                onClick={() => router.push('/insights')}
                className="flex items-center gap-2 px-6 py-3 bg-[#025CA2] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                <ArrowLeft className="w-4 h-4" />
                More Strategic Insights
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Lightbox Modal */}
      {lightboxOpen && lightboxImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={lightboxImage.url}
              alt="Enlarged view"
              width={1200}
              height={800}
              className="object-contain max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SingleBlogPage;