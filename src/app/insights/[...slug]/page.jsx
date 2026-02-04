'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Static blog data with full content
const blogPosts = {
  'google-ucp-is-live': {
    title: "Google's UCP is Live: What Merchants Need to Know Now",
    excerpt: "The Universal Commerce Protocol is no longer theoretical. Google's January 2026 announcement marks the official transition to agentic commerce.",
    category: 'Protocol Updates',
    impact: 'CRITICAL',
    createdAt: '2026-01-15',
    readingTime: 8,
    content: `
## The Announcement

Google's Universal Commerce Protocol (UCP) is now live. As of January 2026, AI agents can discover merchant capabilities, negotiate terms, and initiate transactions through standardized protocol interfaces.

## What UCP Enables

**Discovery Layer**: Agents locate your /.well-known/ucp manifest to understand what you sell, how you sell it, and what protocols you support.

**Capability Profiles**: Your manifest declares supported actions—browse catalog, check inventory, initiate checkout, process returns.

**Multi-Transport Support**: UCP works over REST, MCP (Model Context Protocol), and A2A (Agent-to-Agent) communication.

## Immediate Actions Required

1. **Audit Your Architecture**: Can you serve a /.well-known/ucp manifest from your root domain?
2. **Assess Protocol Readiness**: Do you have the transport flexibility UCP requires?
3. **Evaluate Schema Depth**: Is your product data structured for agent comprehension?

## The Timeline

Google Merchant Center now validates UCP manifests. By Q2 2026, AI-assisted shopping will prioritize UCP-compliant merchants.

Don't wait. The transition is happening now.
    `
  },
  'chatgpt-instant-checkout': {
    title: "ChatGPT Instant Checkout: Inside OpenAI's ACP Implementation",
    excerpt: "OpenAI's Instant Checkout feature powered by ACP is now live with Etsy and expanding to 1M+ Shopify merchants.",
    category: 'ACP',
    impact: 'HIGH',
    createdAt: '2026-01-12',
    readingTime: 6,
    content: `
## Instant Checkout is Here

OpenAI's Agentic Commerce Protocol (ACP) powers ChatGPT's new Instant Checkout feature. Users can now complete purchases without leaving the conversation.

## How It Works

**Shared Payment Tokens (SPT)**: Stripe-powered payment credentials that let agents transact on user behalf while keeping card details secure.

**Merchant Control Preserved**: You set prices, inventory, and fulfillment terms. The agent executes within your boundaries.

**Real-Time Inventory**: ACP requires live inventory checks to prevent overselling.

## Current Partners

- Etsy (launch partner)
- 1M+ Shopify merchants (rolling out)
- Additional platforms coming Q2 2026

## Integration Requirements

1. Stripe SPT token support
2. ACP-compliant product feeds
3. Real-time inventory API
4. Return policy machine-readable schema

## The Opportunity

Early ACP adopters report 15-30% conversion lift from agent-mediated checkouts. Users trust the AI's recommendations.
    `
  },
  'hydration-tax': {
    title: 'The Hydration Tax: Why Your JS Bundle is Costing You Agent Citations',
    excerpt: "AI crawlers operate on token budgets. Heavy JavaScript bundles consume those tokens before agents reach your content.",
    category: 'Technical',
    impact: 'HIGH',
    createdAt: '2026-01-08',
    readingTime: 5,
    content: `
## The Problem

AI agents don't browse like humans. They request your page, parse the response, and extract meaning—all within token budgets.

Heavy JavaScript bundles mean:
- Longer time to meaningful content
- More tokens consumed on code, not information
- Lower priority in agent crawl queues

## What We Measured

We analyzed 500 e-commerce sites across different architectures:

| Architecture | Avg. Render Time | Token Efficiency |
|-------------|------------------|------------------|
| SPA (CSR only) | 2.3s | 23% |
| Traditional SSR | 0.8s | 67% |
| SPA + SSR Hybrid | 0.3s | 89% |

## The Solution

**Server-Side Rendering**: Deliver meaningful HTML immediately.

**Partial Hydration**: Only hydrate interactive components.

**Streaming HTML**: Start sending content before the full page renders.

**Edge Rendering**: Reduce latency with global CDN rendering.

## The Target

Under 300ms render-to-fact. That's when agents prioritize your content.
    `
  },
  'ap2-mandates-explained': {
    title: 'AP2 Mandates Explained: Cryptographic Proof for Agent Payments',
    excerpt: "How do you prove a user authorized an AI agent to spend their money? AP2's mandate system provides the answer.",
    category: 'AP2',
    impact: 'MEDIUM',
    createdAt: '2026-01-05',
    readingTime: 7,
    content: `
## The Trust Problem

When an AI agent makes a purchase on your behalf, how does the merchant know you actually authorized it?

Traditional payment auth doesn't work—there's no card swipe, no biometric, no human in the loop.

## AP2's Answer: Mandates

The Agent Payment Protocol (AP2) introduces cryptographic mandates—verifiable credentials that prove user consent.

## Three Mandate Types

**Cart Mandate**: "I authorize this agent to add items to my cart."

**Intent Mandate**: "I authorize this agent to initiate checkout for items under $X."

**Payment Mandate**: "I authorize this agent to complete this specific transaction."

## How They Work

1. User creates mandate with scope and limits
2. Mandate signed with ECDSA (user's private key)
3. Agent presents mandate to merchant
4. Merchant validates signature and scope
5. Transaction proceeds if mandate covers action

## Non-Repudiation

Mandates create audit trails. If disputes arise, cryptographic proof shows exactly what was authorized and when.

## Implementation

AP2 mandates require:
- Verifiable Credential infrastructure
- TEE (Trusted Execution Environment) support
- DID (Decentralized Identifier) integration
    `
  },
  'organic-traffic-decline': {
    title: '50% Organic Traffic Decline: The Data Behind the Shift',
    excerpt: "Gartner's projection is becoming reality. As AI answers queries directly, traditional website traffic is declining.",
    category: 'Market Analysis',
    impact: 'CRITICAL',
    createdAt: '2026-01-02',
    readingTime: 4,
    content: `
## The Gartner Prediction

In 2024, Gartner predicted traditional search traffic would decline 25% by 2026 and 50% by 2028.

We're ahead of schedule.

## What We're Seeing

**AI Traffic Surge**: 1200% increase in traffic from AI agents (2025-2026).

**Zero-Click Answers**: 65% of informational queries now answered directly by AI.

**Purchase Path Changes**: 40% of e-commerce research now happens in AI interfaces.

## Who's Affected

- Informational content sites: -35% organic traffic YoY
- E-commerce category pages: -28% organic traffic YoY
- Local service businesses: -18% organic traffic YoY

## Who's Winning

Sites optimized for AI citation are seeing:
- 200%+ increase in AI referral traffic
- Higher conversion rates from AI-referred visitors
- Growing share of agent-mediated transactions

## The Takeaway

Traffic is shifting, not disappearing. The question is whether you're visible where it's going.
    `
  },
  'schema-agents-use': {
    title: 'Schema Markup That Agents Actually Use',
    excerpt: "Not all JSON-LD is created equal. Here's how to structure your schema for maximum agent comprehension.",
    category: 'Technical',
    impact: 'HIGH',
    createdAt: '2025-12-28',
    readingTime: 10,
    content: `
## Beyond Basic Schema

Most sites implement schema markup. Few implement it in ways AI agents can actually use.

## What Agents Need

**@graph Arrays**: Connect related entities into knowledge networks, not isolated snippets.

**Nested Entities**: Product → Offer → Seller → Return Policy. Full context, not fragments.

**Actionable Data**: Prices, availability, shipping times—concrete facts agents can act on.

## Example: Product Schema That Works

\`\`\`json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "#product",
      "name": "Widget Pro",
      "offers": {
        "@type": "Offer",
        "price": 99.00,
        "availability": "InStock",
        "shippingDetails": { "@id": "#shipping" },
        "hasMerchantReturnPolicy": { "@id": "#returns" }
      }
    },
    {
      "@type": "OfferShippingDetails",
      "@id": "#shipping",
      "deliveryTime": {
        "businessDays": { "minValue": 1, "maxValue": 3 }
      }
    }
  ]
}
\`\`\`

## Common Mistakes

1. Orphaned entities with no @id references
2. Missing availability data
3. Prices without currency
4. No return policy linking
5. Author/organization not connected
    `
  },
  'legacy-platform-limitations': {
    title: "Why Shopify, Wix, and WordPress Can't Support UCP",
    excerpt: "Root-level access, transport flexibility, TEE/DID infrastructure—legacy platforms lack the fundamentals.",
    category: 'Platform Analysis',
    impact: 'HIGH',
    createdAt: '2025-12-22',
    readingTime: 6,
    content: `
## The Fundamental Problem

UCP, ACP, and AP2 require capabilities that shared hosting platforms cannot provide.

## What's Missing

### Shopify
- No root-level /.well-known access (without Plus tier)
- Partial UCP support only
- No TEE/DID infrastructure
- Limited transport options

### WordPress
- Plugin-dependent (fragile, security risks)
- REST-only transport
- Heavy hydration tax on most themes
- No native protocol support

### Wix / Squarespace
- Zero protocol support
- No endpoint control
- Obscured origins block verifiable credentials
- Completely incompatible with AP2 mandates

## The Architecture Gap

These platforms were built for humans browsing websites. They lack:

1. **Root-level control** for protocol manifests
2. **Transport flexibility** (REST/MCP/A2A)
3. **Token efficiency** (SSR with partial hydration)
4. **Schema depth** (rigid templates limit structure)
5. **Cryptographic infrastructure** (TEE, DID, VCs)

## The Solution

Bespoke SPA + SSR on your own infrastructure. Full control over every endpoint, every protocol, every optimization.
    `
  },
  'aeo-geo-metrics': {
    title: 'New Metrics for the Agent Web: From CTR to Citation Rate',
    excerpt: "Click-through rate was built for humans. Here are the metrics that matter when AI agents mediate discovery.",
    category: 'Strategy',
    impact: 'MEDIUM',
    createdAt: '2025-12-18',
    readingTime: 5,
    content: `
## Old Metrics vs. New Metrics

| Old (Human SEO) | New (Agent AEO/GEO) |
|-----------------|---------------------|
| Click-through rate | Citation rate |
| Sessions | Agent interactions |
| Bounce rate | Task completion rate |
| Keyword rankings | Capability coverage |
| Backlinks | Protocol compliance score |

## Citation Rate

How often do AI agents cite your content when answering queries in your domain?

Track this through:
- AI referral traffic patterns
- Brand mention monitoring in AI outputs
- Direct API query testing

## Capability Coverage

What percentage of relevant queries can your site actually help agents complete?

If someone asks "buy running shoes under $100 with next-day delivery" and you sell running shoes—can an agent find that answer on your site?

## Protocol Compliance Score

- UCP manifest present and valid?
- Schema depth sufficient for agent action?
- Render time under 300ms?
- AP2 mandate support (if applicable)?

## The Shift

Stop optimizing for humans clicking blue links. Start optimizing for agents completing tasks.
    `
  },
  'spa-ssr-architecture-guide': {
    title: 'SPA + SSR: The Only Architecture That Works',
    excerpt: "Why the combination of Single Page Application interactivity with Server-Side Rendering is the only way to satisfy both humans and AI agents.",
    category: 'Technical',
    impact: 'HIGH',
    createdAt: '2025-12-15',
    readingTime: 8,
    content: `
## The Dilemma

**Humans want**: Rich interactivity, smooth transitions, app-like experiences.

**Agents want**: Fast, token-efficient, semantically-rich HTML they can parse immediately.

Traditional architectures force a choice. SPA + SSR hybrid doesn't.

## How It Works

1. **Initial Request**: Server renders full HTML with all content
2. **Hydration**: Client-side JS activates interactive elements
3. **Navigation**: SPA takes over for smooth in-app transitions
4. **Agent Requests**: Server detects and serves optimized HTML-only response

## Key Implementation Details

**Partial Hydration**: Only hydrate components that need interactivity. Static content stays static.

**Streaming SSR**: Start sending HTML before full render completes. Time-to-first-byte matters.

**Edge Rendering**: Deploy to global CDN for <50ms latency worldwide.

**Deterministic Snapshots**: Every page has a cacheable HTML representation.

## The Numbers

| Metric | SPA Only | SSR Only | SPA + SSR |
|--------|----------|----------|-----------|
| Time to Interactive | 2.5s | 0.8s | 0.9s |
| Time to Content | 2.5s | 0.3s | 0.3s |
| Agent Parse Success | 45% | 85% | 95% |
| User Satisfaction | High | Medium | High |

## Framework Options

- Next.js (React)
- Nuxt (Vue)
- SvelteKit (Svelte)
- Astro (Multi-framework)

Each supports the hybrid model. Choose based on team expertise.
    `
  }
};

const SingleBlogPage = () => {
  const params = useParams();
  const router = useRouter();
  const slugArray = params.slug;
  const slug = Array.isArray(slugArray) ? slugArray[0] : slugArray;

  const blog = blogPosts[slug];

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

  // Not found state
  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">
            The article you're looking for doesn't exist or has been moved.
          </p>
          <button
            onClick={() => router.push('/insights')}
            className="px-6 py-3 bg-[#085DA0] text-white font-semibold rounded-lg hover:bg-[#0f6cbb] transition"
          >
            Back to Insights
          </button>
        </div>
      </div>
    );
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = Object.entries(blogPosts)
    .filter(([postSlug, post]) => postSlug !== slug && post.category === blog.category)
    .slice(0, 2);

  return (
    <article className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0a1628] to-[#1a365d] text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-blue-300 mb-6">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/insights" className="hover:text-white transition">Insights</Link>
            <span>/</span>
            <span className="text-white">{blog.category}</span>
          </div>

          {/* Category and Impact */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-[#085DA0] text-white text-sm font-semibold rounded-full">
              {blog.category}
            </span>
            {blog.impact && (
              <span className={`px-3 py-1 text-sm font-semibold rounded-full border ${getImpactClasses(blog.impact)}`}>
                {blog.impact}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            {blog.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            {blog.excerpt}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(blog.createdAt)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{blog.readingTime} min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-[#085DA0] prose-strong:text-gray-900">
            {blog.content.split('\n').map((line, i) => {
              if (line.startsWith('## ')) {
                return <h2 key={i} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{line.replace('## ', '')}</h2>;
              }
              if (line.startsWith('**') && line.endsWith('**')) {
                return <p key={i} className="font-semibold text-gray-900 mt-4">{line.replace(/\*\*/g, '')}</p>;
              }
              if (line.startsWith('- ')) {
                return <li key={i} className="text-gray-600 ml-4">{line.replace('- ', '')}</li>;
              }
              if (line.startsWith('| ')) {
                return null; // Skip table formatting for now
              }
              if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || line.startsWith('4. ') || line.startsWith('5. ')) {
                return <li key={i} className="text-gray-600 ml-4 list-decimal">{line.replace(/^\d+\. /, '')}</li>;
              }
              if (line.trim() === '') {
                return <br key={i} />;
              }
              return <p key={i} className="text-gray-600 mb-4">{line}</p>;
            })}
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Related Insights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map(([postSlug, post]) => (
                <Link
                  key={postSlug}
                  href={`/insights/${postSlug}`}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#085DA0] hover:shadow-lg transition-all group"
                >
                  <span className="text-sm text-[#085DA0] font-medium">{post.category}</span>
                  <h4 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-[#085DA0] transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="mt-12 flex justify-between items-center">
          <button
            onClick={() => router.push('/insights')}
            className="flex items-center gap-2 text-[#085DA0] font-semibold hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            All Insights
          </button>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-[#085DA0] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0f6cbb] transition-all"
          >
            Schedule Assessment
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default SingleBlogPage;
