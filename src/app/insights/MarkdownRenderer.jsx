'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import Image from 'next/image';

const MarkdownRenderer = ({ content }) => {
  if (!content) return null;

  return (
    <div className="markdown-content">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]} 
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        components={{
          // Custom image rendering
          img: ({ node, ...props }) => (
            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <img
                {...props}
                className="w-full h-auto object-cover"
                loading="lazy"
                alt={props.alt || 'Blog image'}
              />
            </div>
          ),
          // Headings
          h1: ({ node, ...props }) => (
            <h1 className="text-4xl font-bold mt-12 mb-6 text-gray-900 leading-tight" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-3xl font-bold mt-10 mb-5 text-gray-900 leading-tight" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 leading-snug" {...props} />
          ),
          h4: ({ node, ...props }) => (
            <h4 className="text-xl font-semibold mt-6 mb-3 text-gray-900" {...props} />
          ),
          h5: ({ node, ...props }) => (
            <h5 className="text-lg font-semibold mt-5 mb-3 text-gray-900" {...props} />
          ),
          h6: ({ node, ...props }) => (
            <h6 className="text-base font-semibold mt-4 mb-2 text-gray-900" {...props} />
          ),
          // Paragraphs
          p: ({ node, ...props }) => (
            <p className="text-lg leading-relaxed mb-6 text-gray-700" {...props} />
          ),
          // Lists
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-gray-700" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-gray-700" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="text-lg leading-relaxed pl-2" {...props} />
          ),
          // Blockquotes
          blockquote: ({ node, ...props }) => (
            <blockquote 
              className="border-l-4 border-blue-500 pl-6 py-2 my-6 italic bg-blue-50 rounded-r-lg" 
              {...props} 
            />
          ),
          // Code blocks
          code: ({ node, inline, ...props }) => 
            inline ? (
              <code 
                className="bg-gray-100 text-red-600 px-2 py-1 rounded text-sm font-mono" 
                {...props} 
              />
            ) : (
              <code 
                className="block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono my-6" 
                {...props} 
              />
            ),
          pre: ({ node, ...props }) => (
            <pre className="bg-gray-900 rounded-lg overflow-hidden my-6" {...props} />
          ),
          // Links
          a: ({ node, ...props }) => (
            <a 
              className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors" 
              target="_blank"
              rel="noopener noreferrer"
              {...props} 
            />
          ),
          // Tables
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto my-8">
              <table className="min-w-full divide-y divide-gray-300 border border-gray-300" {...props} />
            </div>
          ),
          thead: ({ node, ...props }) => (
            <thead className="bg-gray-50" {...props} />
          ),
          tbody: ({ node, ...props }) => (
            <tbody className="divide-y divide-gray-200 bg-white" {...props} />
          ),
          tr: ({ node, ...props }) => (
            <tr className="hover:bg-gray-50 transition-colors" {...props} />
          ),
          th: ({ node, ...props }) => (
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900" {...props} />
          ),
          td: ({ node, ...props }) => (
            <td className="px-6 py-4 text-sm text-gray-700" {...props} />
          ),
          // Horizontal rule
          hr: ({ node, ...props }) => (
            <hr className="my-8 border-t-2 border-gray-200" {...props} />
          ),
          // Strong and emphasis
          strong: ({ node, ...props }) => (
            <strong className="font-bold text-gray-900" {...props} />
          ),
          em: ({ node, ...props }) => (
            <em className="italic" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;