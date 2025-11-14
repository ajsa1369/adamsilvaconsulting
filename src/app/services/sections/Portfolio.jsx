import React from 'react';
import { Target, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Portfolio = () => {
  const services=[
    {
      title:"SEO & PPC Superpowers",
      subheading:"Dominate search and paid advertising with AI-powered optimization",
      link:"/services/seo-ppc-superpowers"
    },{
      title:"Content & Media Creation",
      subheading:"Generate compelling content at scale with AI automation",
      link:"/services/content-media-creation"
    },
    {
      title:"Automated Omnichannel Communication",
      subheading:"Engage customers seamlessly across all channels with AI personalization",
      link:"/services/automated-omnichannel-communication"
    },
    {
      title:"Intelligent Campaign Management",
      subheading:"Orchestrate complex marketing funnels with real-time optimization",
      link:"/services/intelligent-campaign-management"
    },{
      title:"Real-time Analytics & Reporting",
      subheading:"Monitor performance with live dashboards and predictive insights",
      link:"/services/real-time-analytics-reporting"
    },{
      title:"Intent Graph Identity Targeting",
      subheading:"Identify \"who is searching\" by linking behavior to identities",
      link:"/services/intent-graph-identity-targeting"
    },{
      title:"Precision Lead Management & Targeting",
      subheading:"Qualify leads, build personas, and schedule engagement with AI",
      link:"/services/precision-lead-management-targeting"
    },{
      title:"Security & Compliance",
      subheading:"Operate confidently with AI-powered data protection and regulatory adherence",
      link:"/services/security-compliance"
    },{
      title:"AI-Driven Website & Landing Pages",
      subheading:"Instantly generate high-converting digital assets with automated optimization",
      link:"/services/ai-driven-website-landing-pages"
    },{
      title:"Outreach & Partnerships",
      subheading:"Connect with influencers and partners through AI-driven relationship management",
      link:"/services/outreach-partnerships"
    },{
      title:"Voice Agent Lead Verification",
      subheading:"Automated voice calls for lead verification, enrichment, and qualification",
      link:"/services/voice-agent-lead-verification"
    },{
      title:"AI Lead Generation & Qualification",
      subheading:"Advanced AI systems for lead discovery, scoring, and automated qualification",
      link:"/services/ai-lead-generation-qualification"
    },{
      title:"Omnichannel Lead Nurturing",
      subheading:"Multi-channel automated follow-up sequences with AI personalization",
      link:"/services/omnichannel-lead-nurturing"
    },{
      title:"Competitor Domain & Keyword Monitoring",
      subheading:"Detect competitor strategies for strategic advantage and market response",
      link:"/services/competitor-domain-keyword-monitoring"
    }
  ]

  // Component to render the card content
  const ServiceCard = ({ title, subheading, link }) => (
    <Link
      href={link}
      className="flex flex-col p-6 hover:border-blue-500 border border-neutral-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white group cursor-pointer"
    >
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mb-4">
        <Target className="w-6 h-6 text-blue-600" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-neutral-800 mb-2 group-hover:text-blue-700 transition-colors">
        {title}
      </h3>

      {/* Subheading */}
      <p className="text-neutral-600 text-base mb-6 flex-grow">
        {subheading}
      </p>

      {/* Learn More Link */}
      <div className="mt-auto">
        <span className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition duration-150">
          Learn More <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );

  return (
    <section className="mt-20 w-full flex items-center justify-center flex-col gap-5 px-4 sm:px-6 lg:px-8 py-10 bg-gray-50">
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-3 mb-10">
        <h1 className="text-neutral-800 font-bold text-3xl md:text-5xl text-center">
          Our Service Portfolio
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 max-w-4xl text-center">
          Integrated solutions that work together to build comprehensive digital
          authority
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;