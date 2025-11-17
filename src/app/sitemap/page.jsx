import { SquareArrowOutUpRightIcon } from 'lucide-react';
import React from 'react';

const Sitemap = () => {
  // Renamed from 'page'
  const sites = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', url: '/' },
        {
          name: 'About',
          url: '/about',
        },
        {
          name: 'Contact',
          url: '/contact',
        },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Services Overview', url: '/services' },
        {
          name: 'Technical SEO Architecture',
          url: '/services/seo-ppc-superpowers',
        },
        { name: 'AI Content Creation', url: '/services/content-media-creation' },
        {
          name: 'Topical Authority Strategy',
          url: '/authority-hub/topical-authority-architecture',
        },
        {
          name: 'Answer Engine Optimization',
          url: '/authority-hub/topical-authority-architecture',
        },
        {
          name: 'Generative Engine Optimization',
          url: '/services',
        },
        {
          name: 'AI Marketing Automation',
          url: '/services',
        },
        { name: 'Real-time Analytics', url: '/services' },
      ],
    },
    {
      title: 'Authority & Content',
      links: [
        { name: 'Authority Hub', url: '/authority-hub' },
        { name: 'Industry Insights', url: '/insights' },
        { name: 'Case Studies', url: '/case-studies' },
        { name: 'Research Hub', url: '/research' },
      ],
    },
    {
      title: 'AI Solutions',
      links: [
        {
          name: 'AI Customer Service Representatives',
          url: '/services',
        },
      ],
    },
    {
      title: 'Legal & Policies',
      links: [
        { name: 'Privacy Policy', url: '/policy' },
        { name: 'Terms of Service', url: '/terms' },
        { name: 'Sitemap', url: '/sitemap' },
      ],
    },
  ];

  return (
    <main className="mb-20 py-10 max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto">
      {/* Header */}
      <h1 className="text-4xl md:text-6xl text-neutral-800 font-extrabold mb-3">
        Sitemap
      </h1>
      <p className="text-neutral-600 text-lg md:text-xl mb-12 max-w-4xl">
        Complete overview of all pages and sections on the Adam Silva Consulting
        website. Designed for easy navigation and comprehensive access to our AI
        authority resources.
      </p>

      {/* Grid Container */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sites.map((site, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-xl "
          >
            <h2 className="text-2xl text-neutral-800 font-bold  pb-2 mb-4">
              {site.title}
            </h2>
            <ul className="space-y-2">
              {site.links.map((link, linkIndex) => (
                <li
                  key={linkIndex}
                  className="list-none group" // Apply group class here
                >
                  <a
                    href={link.url}
                    className="text-lg text-neutral-700 hover:text-blue-600 transition-colors flex items-center gap-2"
                  >
                    {link.name || link.title}
                    <SquareArrowOutUpRightIcon
                      className="w-4 h-4 ml-1 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" // Icon hidden by default, visible on hover
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Sitemap;
