import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  Briefcase, 
  Laptop, 
  Bot, 
  Search, 
  FileText, 
  ShieldCheck, 
  Send, 
  Layers, 
  Cpu, 
  Globe, 
  TrendingUp, 
  Palette, 
  BarChart3, 
  Workflow, 
  ShoppingBag, 
  FolderGit2, 
  X,
  Clock,
  BookOpen
} from 'lucide-react';
import { BrochureModal } from '../components/BrochureModal';
import { ApplicationFormData } from '../types';

export const HomePage: React.FC = () => {
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);

  // Module Details Modal State
  const [selectedModule, setSelectedModule] = useState<{
    name: string;
    desc: string;
    topics: string[];
  } | null>(null);

  // Certificate Verification Form State
  const [certInput, setCertInput] = useState('');
  const [certMessage, setCertMessage] = useState<string | null>(null);

  // Application Form State
  const [formData, setFormData] = useState<ApplicationFormData>({
    name: '',
    phone: '',
    email: '',
    course: 'Pro Digital Marketing Course',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ApplicationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  // Blog modal state
  const [selectedArticle, setSelectedArticle] = useState<{
    category: string;
    title: string;
    desc: string;
  } | null>(null);

  // Smooth scroll helper
  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Why Choose CBM Cards (Short, clear copy)
  const whyCards = [
    {
      title: 'Experienced Trainers',
      desc: 'Practical industry-focused learning.',
      icon: <Users className="w-5 h-5 text-orange-500" />,
    },
    {
      title: 'Practical Learning',
      desc: 'Hands-on assignments and real tools.',
      icon: <Laptop className="w-5 h-5 text-orange-500" />,
    },
    {
      title: 'Industry Projects',
      desc: 'Build skills through practical projects.',
      icon: <Briefcase className="w-5 h-5 text-orange-500" />,
    },
    {
      title: 'Placement Support',
      desc: 'Career guidance and support.',
      icon: <TrendingUp className="w-5 h-5 text-orange-500" />,
    },
  ];

  // 12 Course Modules (Concise)
  const modules = [
    {
      id: 'fundamentals',
      name: 'Digital Marketing Fundamentals',
      desc: 'Core marketing concepts and digital strategies.',
      icon: <Globe className="w-5 h-5 text-orange-500" />,
      topics: ['Customer Personas & Funnels', 'Inbound vs Outbound Channels', 'Digital Strategy Planning'],
    },
    {
      id: 'seo',
      name: 'SEO',
      desc: 'Search engine ranking techniques and website optimization.',
      icon: <Search className="w-5 h-5 text-orange-500" />,
      topics: ['Keyword Research & Intent', 'On-Page & Technical Optimization', 'Backlink Building & Google Search Console'],
    },
    {
      id: 'wordpress',
      name: 'WordPress',
      desc: 'Build and customize professional websites without code.',
      icon: <Layers className="w-5 h-5 text-orange-500" />,
      topics: ['Theme Setup & Elementor Customization', 'Landing Page Creation', 'Form Integration & Security'],
    },
    {
      id: 'google-ads',
      name: 'Google Ads',
      desc: 'Search, display and performance campaigns with real budgets.',
      icon: <TrendingUp className="w-5 h-5 text-orange-500" />,
      topics: ['Search, Display & Performance Max', 'Bidding Strategies & Quality Score', 'Conversion Tracking & ROAS'],
    },
    {
      id: 'meta-ads',
      name: 'Meta Ads',
      desc: 'High-converting Facebook and Instagram ad campaigns.',
      icon: <ShoppingBag className="w-5 h-5 text-orange-500" />,
      topics: ['Advantage+ Campaign Creation', 'Custom & Lookalike Audiences', 'Ad Creative Iteration & Scaling'],
    },
    {
      id: 'smm',
      name: 'Social Media Marketing',
      desc: 'Organic growth, content planning and brand reach.',
      icon: <Users className="w-5 h-5 text-orange-500" />,
      topics: ['Content Calendars & Viral Formats', 'Instagram & LinkedIn Growth', 'Community Engagement & Influencer Collabs'],
    },
    {
      id: 'canva',
      name: 'Canva & Graphic Design',
      desc: 'Visual branding, ad creatives and banner design.',
      icon: <Palette className="w-5 h-5 text-orange-500" />,
      topics: ['Brand Kits & Typography Pairing', 'Social Post & Story Creatives', 'High-CTR Ad Banner Layouts'],
    },
    {
      id: 'analytics',
      name: 'Analytics',
      desc: 'Google Analytics 4 and performance data tracking.',
      icon: <BarChart3 className="w-5 h-5 text-orange-500" />,
      topics: ['GA4 Event & Conversion Setup', 'Google Tag Manager Fundamentals', 'Looker Studio Reporting Dashboards'],
    },
    {
      id: 'ai-tools',
      name: 'AI Tools',
      desc: 'Generative AI workflows for content, creatives and research.',
      icon: <Bot className="w-5 h-5 text-orange-500" />,
      topics: ['Prompt Engineering Frameworks', 'AI Ad Copy & Visual Generation', 'Competitor Intelligence with AI'],
    },
    {
      id: 'automation',
      name: 'Automation',
      desc: 'Workflow automation, email funnels and CRM tools.',
      icon: <Workflow className="w-5 h-5 text-orange-500" />,
      topics: ['Make.com & Zapier Workflows', 'Email Drip Campaigns & Lead Nurturing', 'CRM Pipeline Automation'],
    },
    {
      id: 'ecommerce',
      name: 'E-commerce',
      desc: 'Online store marketing, Shopify and catalog growth.',
      icon: <ShoppingBag className="w-5 h-5 text-orange-500" />,
      topics: ['Shopify Store Setup', 'Product Catalog Ads & Dynamic Retargeting', 'Cart Recovery & Retention Strategies'],
    },
    {
      id: 'projects',
      name: 'Practical Projects',
      desc: 'Live client assignments and portfolio building.',
      icon: <FolderGit2 className="w-5 h-5 text-orange-500" />,
      topics: ['Real Campaign Budget Execution', 'End-to-End Growth Capstone', 'Agency Portfolio & Case Studies'],
    },
  ];

  // Real Relevant AI Tools
  const aiTools = [
    { name: 'ChatGPT', tag: 'Copy & Strategy' },
    { name: 'Google Gemini', tag: 'Multimodal AI' },
    { name: 'Midjourney', tag: 'Ad Creatives' },
    { name: 'Claude', tag: 'Long-form Research' },
    { name: 'Make.com', tag: 'Workflow Automation' },
    { name: 'Zapier', tag: 'Lead Integration' },
    { name: 'Perplexity', tag: 'Market Intelligence' },
    { name: 'Canva AI', tag: 'Visual Generation' },
    { name: 'SEMrush AI', tag: 'SEO & Content AI' },
    { name: 'CapCut', tag: 'Video Ads AI' },
  ];

  // Blog Placeholders (Cleanly labeled, no fake claims)
  const blogCards = [
    {
      id: '1',
      category: 'SEO & AI',
      title: 'Google AI Overviews & Search Updates',
      desc: 'Understanding generative search results and how content structure impacts online visibility.',
    },
    {
      id: '2',
      category: 'Performance Ads',
      title: 'Meta & Google Ads Campaign Strategy',
      desc: 'Key principles of audience targeting, creative testing, and optimizing budget performance.',
    },
    {
      id: '3',
      category: 'Marketing AI',
      title: 'Practical AI Tools for Digital Marketers',
      desc: 'How generative AI workflows save time in copywriting, asset generation, and market research.',
    },
  ];

  // Certificate Verification Form Handler
  const handleVerifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certInput.trim()) {
      setCertMessage('Please enter a certificate number to verify.');
      return;
    }
    setCertMessage('Certificate verification service will be connected here.');
  };

  // Application Form Validation
  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ApplicationFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required.';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (8-15 digits).';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.course.trim()) {
      newErrors.course = 'Please select a course.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setStatusMessage(
          result.message ||
            'Your application has been submitted successfully. We will get in touch with you soon.'
        );
        setFormData({
          name: '',
          phone: '',
          email: '',
          course: 'Pro Digital Marketing Course',
          message: '',
        });
        setErrors({});
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.error || 'Submission failed. Please check your inputs and try again.');
      }
    } catch {
      setSubmitStatus('error');
      setStatusMessage('Network error. Please check your connection or contact office@cbmacademy.in directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section 
        id="home" 
        className="relative overflow-hidden bg-gradient-to-b from-orange-50/50 via-white to-slate-50/30 pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100/80 border border-orange-200 text-orange-800 text-xs font-bold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                <span>AI-POWERED DIGITAL MARKETING TRAINING</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Become Job Ready with <span className="text-orange-500">AI-Powered</span> Digital Marketing
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
                Learn Digital Marketing with AI, practical projects and real-world tools at CBM Academy.
              </p>

              {/* Exact Requested Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  id="hero-apply-now-btn"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-sm shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 transition-all active:scale-[0.98] cursor-pointer"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  id="hero-download-brochure-btn"
                  onClick={() => setBrochureModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 font-bold text-sm border-2 border-slate-200 hover:border-slate-300 shadow-xs transition-all active:scale-[0.98] cursor-pointer"
                >
                  <Download className="w-4 h-4 text-orange-500" />
                  <span>Download Brochure</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Practical Learning</span>
                </div>
                <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Modern AI Tools</span>
                </div>
                <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Career Guidance</span>
                </div>
              </div>
            </div>

            {/* Right Feature Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-950 p-6 sm:p-7 text-white shadow-xl border border-slate-800 space-y-5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 font-bold">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">Pro Digital Marketing</h3>
                      <p className="text-xs text-slate-400">Classroom & Online Training</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-orange-500 text-white text-xs font-bold">
                    Active Batch
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400">Learning Method</span>
                    <span className="font-semibold text-white">Hands-on Assignments & Projects</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400">AI Integration</span>
                    <span className="font-semibold text-emerald-400">ChatGPT, Gemini & Midjourney</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400">Key Platforms</span>
                    <span className="font-semibold text-white">Google Ads, Meta Ads & SEO</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-400">Career Support</span>
                    <span className="font-semibold text-orange-400">Portfolio & Career Guidance</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  <span>Enroll in Next Batch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE CBM SECTION */}
      <section className="py-14 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Choose CBM?
            </h2>
            <p className="text-slate-600 mt-2 text-sm">
              Practical digital marketing training designed to build real-world skills.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:border-orange-200 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 shadow-2xs">
                  {card.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">{card.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COURSES SECTION */}
      <section id="courses" className="py-16 bg-slate-50/60 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold mb-2">
              <BookOpen className="w-3.5 h-3.5 text-orange-600" />
              <span>Digital Marketing Course</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Pro Digital Marketing Course
            </h2>
            <p className="text-slate-600 mt-2 text-sm">
              Comprehensive 12-module practical curriculum covering essential digital marketing tools and AI.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {modules.map((m) => (
              <div
                key={m.id}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:shadow-md hover:border-orange-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center mb-3.5">
                    {m.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5 leading-snug">
                    {m.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {m.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedModule(m)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToSection('contact')}
                    className="text-2xs font-semibold px-2 py-1 rounded bg-slate-100 hover:bg-orange-100 hover:text-orange-700 text-slate-700 transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              type="button"
              onClick={() => setBrochureModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 hover:border-orange-500 text-slate-800 hover:text-orange-600 font-bold text-xs shadow-2xs transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-orange-500" />
              <span>Download Complete 12-Module Syllabus (PDF)</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4. AI TOOLS SECTION */}
      <section id="ai-tools" className="py-14 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              AI Tools You&apos;ll Learn
            </h2>
            <p className="text-slate-600 mt-2 text-sm">
              Hands-on workflows with industry-standard Generative AI marketing tools.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {aiTools.map((tool, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center flex flex-col items-center justify-center hover:border-orange-300 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-2 font-bold text-xs">
                  <Bot className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">{tool.name}</h3>
                <span className="text-2xs text-slate-500 mt-0.5">{tool.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ABOUT SECTION */}
      <section id="about" className="py-16 bg-slate-50/60 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              About CBM Academy
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
              CBM Academy provides practical Digital Marketing education with modern tools, AI integration and career-focused learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-2">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                Mission
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Build practical Digital Marketing skills through modern tools and real-world learning.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-2">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                Vision
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Prepare confident professionals for real-world Digital Marketing and AI opportunities.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              Why CBM
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                'Practical learning',
                'AI integration',
                'Industry tools',
                'Projects',
                'Career guidance',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-800 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CERTIFICATE VERIFICATION SECTION */}
      <section id="verify" className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Official Registry</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Certificate Verification
            </h2>
            <p className="text-slate-600 mt-2 text-sm">
              Verify your CBM Academy certificate using the certificate number.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
            <form onSubmit={handleVerifySubmit} className="space-y-4">
              <label htmlFor="certificateNumber" className="block text-xs font-bold text-slate-800">
                Certificate Number
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  id="certificateNumber"
                  value={certInput}
                  onChange={(e) => {
                    setCertInput(e.target.value);
                    setCertMessage(null);
                  }}
                  placeholder="Enter certificate number (e.g. CBM-2026-1001)"
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 bg-white"
                />
                <button
                  type="submit"
                  id="verify-submit-btn"
                  className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-xs shadow-xs transition-all cursor-pointer whitespace-nowrap"
                >
                  Verify
                </button>
              </div>

              {certMessage && (
                <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 flex items-center gap-2 animate-in fade-in duration-200">
                  <ShieldCheck className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>{certMessage}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* 7. CAREERS SECTION */}
      <section id="careers" className="py-16 bg-slate-50/60 border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Career Opportunities
            </h2>
            <p className="text-slate-600 mt-2 text-sm">
              We provide practical career guidance, resume support, and interview preparation.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-2xs space-y-4">
            <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mx-auto">
              <Briefcase className="w-6 h-6" />
            </div>
            <p className="text-sm font-semibold text-slate-800">
              Job opportunities will be added here.
            </p>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Students and graduates can connect with our placement cell for guidance and portfolio review.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-xs transition-all cursor-pointer"
              >
                <span>Connect for Placement Guidance</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. BLOG SECTION */}
      <section id="blog" className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Latest From CBM Academy
            </h2>
            <p className="text-slate-600 mt-2 text-sm">
              Short insights and practical articles on digital marketing and AI tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogCards.map((post) => (
              <div
                key={post.id}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 flex flex-col justify-between hover:border-orange-200 transition-colors"
              >
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-md text-2xs font-bold bg-orange-100 text-orange-800 mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {post.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(post)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700 cursor-pointer"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <span className="text-2xs text-slate-400">Editable Article</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONTACT / APPLICATION SECTION */}
      <section id="contact" className="py-16 bg-slate-50/80 border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold mb-2">
              <Send className="w-3.5 h-3.5 text-orange-600" />
              <span>Admissions & Inquiries</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Get in Touch
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Have a question or ready to start? Send us your details and our team can get in touch.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Application Submitted Successfully</p>
                  <p className="text-xs text-slate-600 mt-0.5">{statusMessage}</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">!</div>
                <div>
                  <p className="font-bold">Submission Error</p>
                  <p className="text-xs text-red-700 mt-0.5">{statusMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleApplicationSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-800 mb-1.5">
                    Full Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 ${
                      errors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-200 focus:border-orange-500'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-slate-800 mb-1.5">
                    Phone Number <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 ${
                      errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-200 focus:border-orange-500'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-800 mb-1.5">
                    Email Address <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 ${
                      errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-200 focus:border-orange-500'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                {/* Course Interested In */}
                <div>
                  <label htmlFor="course" className="block text-xs font-bold text-slate-800 mb-1.5">
                    Course Interested In <span className="text-orange-500">*</span>
                  </label>
                  <select
                    id="course"
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 bg-white"
                  >
                    <option value="Pro Digital Marketing Course">Pro Digital Marketing Course (12 Modules)</option>
                    <option value="SEO & Performance Marketing">SEO & Performance Marketing</option>
                    <option value="AI in Digital Marketing">AI in Digital Marketing & Automation</option>
                    <option value="General Admission Inquiry">General Admission Inquiry</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-800 mb-1.5">
                  Message <span className="text-orange-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your learning goals or questions..."
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 ${
                    errors.message ? 'border-red-400 bg-red-50/20' : 'border-slate-200 focus:border-orange-500'
                  }`}
                />
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  id="submit-application-btn"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-sm shadow-md shadow-orange-500/20 transition-all active:scale-[0.98] cursor-pointer disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Submitting Application...' : 'Submit Application'}</span>
                </button>
              </div>

              <p className="text-2xs text-slate-400 pt-1">
                Your details are secure. Official email notifications sent directly to <code className="text-slate-600">office@cbmacademy.in</code>.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Module Detail Modal */}
      {selectedModule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 border border-slate-100 shadow-2xl relative">
            <button
              onClick={() => setSelectedModule(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold text-slate-900 mb-1">{selectedModule.name}</h3>
            <p className="text-xs text-slate-600 mb-4">{selectedModule.desc}</p>

            <div className="space-y-2 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Practical Topics</h4>
              <ul className="space-y-1.5 text-xs text-slate-700 pl-4 list-disc marker:text-orange-500">
                {selectedModule.topics.map((t, idx) => (
                  <li key={idx}>{t}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setSelectedModule(null);
                  scrollToSection('contact');
                }}
                className="flex-1 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs transition-colors cursor-pointer"
              >
                Apply for this Module
              </button>
              <button
                type="button"
                onClick={() => setSelectedModule(null)}
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 border border-slate-100 shadow-2xl relative">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="inline-block px-2.5 py-0.5 rounded text-2xs font-bold bg-orange-100 text-orange-800 mb-2">
              {selectedArticle.category}
            </span>
            <h3 className="text-base font-bold text-slate-900 mb-2">{selectedArticle.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">{selectedArticle.desc}</p>
            
            <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-500 mb-4 border border-slate-100">
              This article is part of CBM Academy&apos;s curriculum case study series covered in practical classes.
            </div>

            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Brochure Download Modal */}
      <BrochureModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
      />
    </div>
  );
};
