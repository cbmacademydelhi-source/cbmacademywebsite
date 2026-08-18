import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Download, 
  Clock, 
  Award, 
  CheckCircle2, 
  Star, 
  Sparkles,
  Layers,
  Search,
  Share2,
  BarChart3,
  Bot
} from 'lucide-react';
import { Course } from '../types';
import { BrochureModal } from '../components/BrochureModal';

export const CoursesPage: React.FC = () => {
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [filterCategory, setFilterCategory] = useState<'all' | 'flagship' | 'ai' | 'performance'>('all');

  const courses: (Course & { category: 'flagship' | 'ai' | 'performance' })[] = [
    {
      id: 'master-digital-marketing-ai',
      title: 'Master in Digital Marketing & AI Strategy',
      slug: 'master-digital-marketing-ai',
      category: 'flagship',
      tagline: 'Complete 360-degree digital marketing leadership program with cutting-edge AI automation.',
      duration: '4 Months + 2 Months Agency Internship',
      mode: 'Classroom & Live Online Hybrid',
      level: 'Beginner to Advanced',
      rating: 4.9,
      reviewsCount: 1420,
      badge: 'Flagship Program',
      description: 'The definitive curriculum trusted by 15,000+ graduates. Learn SEO, PPC search ads, Meta social campaigns, programmatic media, affiliate marketing, generative AI creative generation, and marketing automation.',
      modules: [
        'Search Engine Optimization (SEO & Technical Audits)',
        'Google Ads (Search, Display, Performance Max, Video)',
        'Meta Ads & Instagram Funnel Architecture',
        'Generative AI for Content, Imagery & Ads',
        'Website Architecture & WordPress Mastery',
        'Google Analytics 4 (GA4) & Tag Manager',
        'Email Marketing, CRM & WhatsApp Automation',
        'E-commerce & Shopify Growth Hacking',
      ],
      tools: ['Google Ads', 'Meta Business Suite', 'SEMrush', 'GA4', 'ChatGPT', 'Midjourney', 'Canva Pro', 'Zapier'],
      careerRoles: ['Digital Marketing Manager', 'Growth Marketer', 'PPC Specialist', 'SEO Lead'],
    },
    {
      id: 'generative-ai-marketing',
      title: 'AI in Digital Marketing & Growth Automation',
      slug: 'generative-ai-marketing',
      category: 'ai',
      tagline: 'Master Generative AI, prompt engineering, agentic workflows, and 10x marketing output.',
      duration: '2 Months (Fast-Track Weekend & Weekday)',
      mode: 'Hands-on Interactive Lab',
      level: 'Intermediate to Advanced',
      rating: 4.95,
      reviewsCount: 930,
      badge: 'AI Specialization',
      description: 'Step into the future of marketing. Learn how top agencies use LLMs, multimodal models, custom GPTs, automated copywriting systems, AI video tools, and automated lead scoring to outperform traditional teams.',
      modules: [
        'Prompt Engineering for High-Converting Ad Copy',
        'AI Graphic Design & Visual Ad Synthesis (Midjourney / Firefly)',
        'AI Video Generation & Virtual Presenters (HeyGen / Runway)',
        'No-Code Workflow Automation (Make.com, Zapier, n8n)',
        'AI-Driven SEO Keyword Clustering & Content Briefs',
        'Conversational AI Chatbots & Customer Qualification',
      ],
      tools: ['Gemini', 'ChatGPT Plus', 'Midjourney', 'Claude', 'Make.com', 'HeyGen', 'Perplexity'],
      careerRoles: ['AI Marketing Specialist', 'Creative Automation Lead', 'Growth Hacker'],
    },
    {
      id: 'performance-marketing-media-buying',
      title: 'Performance Marketing & Media Buying Masterclass',
      slug: 'performance-marketing-media-buying',
      category: 'performance',
      tagline: 'Scale profitable campaigns across Meta, Google, TikTok, and Programmatic ad networks.',
      duration: '3 Months (Intensive Practical)',
      mode: 'Live Budget Ad Accounts',
      level: 'All Levels',
      rating: 4.88,
      reviewsCount: 1100,
      badge: 'High ROI Skills',
      description: 'Spend real money on live campaigns. Master audience segmentation, ROAS optimization, attribution modeling, landing page conversion rate optimization, and scaling from ₹5,000/day to ₹5,00,000/day.',
      modules: [
        'Meta Ads Strategy (Lookalikes, CBO, Advantage+)',
        'Google Performance Max & Search Arbitrage',
        'Conversion Tracking, CAPI & Server-Side Pixel',
        'Landing Page A/B Testing & Funnel Psychology',
        'E-commerce ROAS Scaling & Retention Strategies',
        'Reporting Dashboards with Google Looker Studio',
      ],
      tools: ['Meta Ads Manager', 'Google Ads', 'Looker Studio', 'Shopify', 'Hotjar', 'Triple Whale'],
      careerRoles: ['Performance Marketer', 'Media Buyer', 'Paid Acquisition Lead'],
    },
    {
      id: 'seo-content-strategy',
      title: 'Advanced SEO, Generative Search & Content Strategy',
      slug: 'seo-content-strategy',
      category: 'flagship',
      tagline: 'Rank #1 on Google Search and dominate AI Overviews (Search Generative Experience).',
      duration: '2.5 Months',
      mode: 'Classroom & Online',
      level: 'Beginner to Advanced',
      rating: 4.85,
      reviewsCount: 780,
      badge: 'Organic Growth',
      description: 'Learn modern search engine optimization beyond old keywords. Master semantic search, entity SEO, Google AI Overviews optimization, technical web audits, backlink acquisition, and programmatic content creation.',
      modules: [
        'Entity SEO & Semantic Topic Clusters',
        'Technical SEO (Core Web Vitals, Crawl Budget, Schema)',
        'AI Overviews / SGE Optimization Strategies',
        'High-Authority Link Building & Digital PR',
        'Local SEO & Google Business Profile Domination',
        'E-commerce Category SEO & Faceted Navigation',
      ],
      tools: ['SEMrush', 'Ahrefs', 'Screaming Frog', 'Google Search Console', 'SurferSEO'],
      careerRoles: ['SEO Specialist', 'SEO Director', 'Content Strategist'],
    },
    {
      id: 'social-media-influencer-growth',
      title: 'Social Media Marketing & Influencer Growth Strategy',
      slug: 'social-media-influencer-growth',
      category: 'performance',
      tagline: 'Build viral organic reach, brand presence, and profitable influencer partnerships.',
      duration: '2 Months',
      mode: 'Interactive Workshop',
      level: 'All Levels',
      rating: 4.82,
      reviewsCount: 650,
      description: 'Master viral short-form video strategies for Instagram Reels, YouTube Shorts, and LinkedIn. Learn influencer negotiation contracts, brand community building, and social commerce.',
      modules: [
        'Algorithm Breakdown (Instagram, YouTube, LinkedIn)',
        'Short-Form Video Scripting & Hook Frameworks',
        'Influencer Campaign Management & Outreach',
        'Crisis Communication & Social Brand Reputation',
        'Social Media Analytics & Brand Sentiment Tracking',
      ],
      tools: ['CapCut', 'Canva', 'Sprout Social', 'HypeAuditor', 'Notion'],
      careerRoles: ['Social Media Manager', 'Content Creator Lead', 'Community Manager'],
    },
    {
      id: 'web-analytics-cro',
      title: 'Web Analytics (GA4), Tracking & Conversion Optimization (CRO)',
      slug: 'web-analytics-cro',
      category: 'performance',
      tagline: 'Turn raw traffic data into actionable revenue growth and optimized user funnels.',
      duration: '2 Months',
      mode: 'Technical Analytics Lab',
      level: 'Intermediate',
      rating: 4.89,
      reviewsCount: 520,
      description: 'Learn how modern enterprise marketers track every visitor action. Configure Google Analytics 4 from scratch, master Google Tag Manager server containers, and run scientific heatmaps and split tests.',
      modules: [
        'GA4 Setup, Custom Events & Dimension Modeling',
        'Google Tag Manager (GTM) Client & Server-Side',
        'Conversion Funnel Drop-off Analysis',
        'User Behavior Heatmaps & Session Recordings',
        'Building Executive BI Dashboards in Looker Studio',
      ],
      tools: ['GA4', 'GTM', 'Looker Studio', 'Microsoft Clarity', 'VWO'],
      careerRoles: ['Marketing Analyst', 'CRO Specialist', 'Analytics Consultant'],
    },
  ];

  const filteredCourses = courses.filter((c) => {
    if (filterCategory === 'all') return true;
    return c.category === filterCategory;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Accredited 2026 Programs</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Industry-Recognized Courses
          </h1>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Practical, live-campaign driven curriculums designed to transition learners into high-impact digital marketing leaders.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
              filterCategory === 'all'
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Programs
          </button>
          <button
            onClick={() => setFilterCategory('flagship')}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
              filterCategory === 'flagship'
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Flagship Masterclass
          </button>
          <button
            onClick={() => setFilterCategory('ai')}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-1.5 ${
              filterCategory === 'ai'
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Bot className="w-4 h-4" />
            <span>AI & Automation</span>
          </button>
          <button
            onClick={() => setFilterCategory('performance')}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
              filterCategory === 'performance'
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Performance Ads & Analytics
          </button>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  {course.badge ? (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-800">
                      {course.badge}
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                      Certified Program
                    </span>
                  )}
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{course.rating}</span>
                    <span className="text-slate-400 font-normal">({course.reviewsCount} reviews)</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-2">
                  {course.title}
                </h3>

                <p className="text-sm font-medium text-orange-600/90 mb-3">
                  {course.tagline}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Course Metadata */}
                <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-100 text-xs text-slate-600 mb-6 bg-slate-50/50 p-3 rounded-xl">
                  <div>
                    <span className="text-slate-400 block">Duration</span>
                    <span className="font-bold text-slate-800">{course.duration}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Learning Mode</span>
                    <span className="font-bold text-slate-800">{course.mode}</span>
                  </div>
                </div>

                {/* Modules */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                    Core Modules Covered:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {course.modules.map((m, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Industry Tools:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {course.tools.map((tool, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to="/contact"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md shadow-orange-500/20 transition-all active:scale-[0.98]"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  type="button"
                  onClick={() => setBrochureModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-800 font-semibold text-xs sm:text-sm transition-colors"
                >
                  <Download className="w-4 h-4 text-orange-500" />
                  <span>Syllabus PDF</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Help Banner */}
        <div className="mt-16 bg-white rounded-3xl p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <h3 className="text-xl font-bold text-slate-900">Need customized corporate or team training?</h3>
            <p className="text-sm text-slate-600 mt-1">We tailor executive workshops and upskilling batches for brands and marketing agencies.</p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm"
          >
            <span>Enquire for Teams</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      <BrochureModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
      />
    </div>
  );
};
