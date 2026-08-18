import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Sparkles, BookOpen, User } from 'lucide-react';
import { BlogPost } from '../types';

export const BlogPage: React.FC = () => {
  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'Google AI Overviews (SGE) in 2026: The Definitive SEO Survival Guide',
      slug: 'google-ai-overviews-seo-guide-2026',
      category: 'SEO & Generative Search',
      date: 'August 12, 2026',
      readTime: '6 min read',
      excerpt: 'How generative AI answers in Google Search are changing CTRs and how to structure your brand content for zero-click visibility.',
      author: {
        name: 'Vikram Sethi',
        role: 'Head of SEO Strategy',
      },
    },
    {
      id: '2',
      title: 'Scaling Meta Ads to ₹10 Lakhs/Day: Advantage+ Creative Secrets',
      slug: 'meta-advantage-plus-creative-secrets',
      category: 'Performance Marketing',
      date: 'August 04, 2026',
      readTime: '8 min read',
      excerpt: 'Step-by-step breakdown of how leading D2C brands use broad audience targeting, automated creative iterations, and high-velocity testing.',
      author: {
        name: 'Neha Kapoor',
        role: 'Media Buying Lead',
      },
    },
    {
      id: '3',
      title: '15 Midjourney & Gemini Prompts That Generate High-Converting Ad Visuals',
      slug: 'ai-prompts-for-high-converting-ad-creatives',
      category: 'AI in Marketing',
      date: 'July 28, 2026',
      readTime: '5 min read',
      excerpt: 'Copy-paste prompt templates used by agency art directors to produce commercial-grade product renders, lifestyle banners, and social ads.',
      author: {
        name: 'Aman Singhal',
        role: 'AI Workflows Mentor',
      },
    },
    {
      id: '4',
      title: 'GA4 Server-Side Tracking: Why Standard Client Pixels Are Failing in 2026',
      slug: 'ga4-server-side-tracking-guide',
      category: 'Web Analytics',
      date: 'July 15, 2026',
      readTime: '7 min read',
      excerpt: 'iOS privacy restrictions, ad blockers, and cookie decay mean your Google and Meta pixels lose 30% of data. Here is how server containers fix it.',
      author: {
        name: 'Pooja Nair',
        role: 'Analytics Architect',
      },
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>CBM Academy Blog & Insights</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Latest in Digital Marketing & AI
          </h1>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Practical strategies, algorithmic deep dives, case studies, and industry trends directly from our master mentors.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:shadow-xl hover:border-orange-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-50 text-orange-700 border border-orange-100">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-orange-600 transition-colors mb-3 leading-snug">
                  {post.title}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 font-bold flex items-center justify-center">
                    {post.author.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{post.author.name}</p>
                    <p className="text-slate-400">{post.author.role}</p>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700"
                >
                  <span>Learn in Class</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter / Apply Callout */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 text-center space-y-4">
          <h3 className="text-2xl font-extrabold text-white">Want real-time campaign frameworks delivered weekly?</h3>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Join 20,000+ digital marketers, CMOs, and entrepreneurs receiving our weekly algorithmic breakdown.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm"
            >
              <span>Subscribe & Enroll</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
