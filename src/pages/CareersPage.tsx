import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  TrendingUp, 
  Users, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Award,
  FileSpreadsheet
} from 'lucide-react';

export const CareersPage: React.FC = () => {
  const hiringPartners = [
    'Ogilvy & Mather',
    'Dentsu Creative',
    'Schbang',
    'Performics India',
    'GroupM',
    'Zomato Marketing',
    'Nykaa',
    'Swiggy',
    'Wavemaker',
    'Publicis Media',
    'Social Panga',
    'Interactive Avenues',
  ];

  const placementSteps = [
    {
      num: '01',
      title: 'Resume & Portfolio Building',
      desc: 'Craft agency-ready portfolios featuring live client campaigns, real spend ROAS screenshots, and case studies.',
    },
    {
      num: '02',
      title: 'Mock Technical & HR Interviews',
      desc: 'Face real agency hiring leads in simulated technical rounds, case study presentations, and whiteboard strategy sessions.',
    },
    {
      num: '03',
      title: 'Exclusive Campus Recruitment Drives',
      desc: 'Direct job interviews with 250+ agency partners, performance marketing shops, and top digital startups.',
    },
    {
      num: '04',
      title: 'Continuous Career Mentorship',
      desc: 'Lifetime access to alumni job networks, salary negotiation advisory, and career progression workshops.',
    },
  ];

  const careerRoles = [
    { role: 'Performance Marketer / Media Buyer', salary: '₹6.5 LPA – ₹14 LPA', demand: 'Very High' },
    { role: 'AI Marketing Strategist', salary: '₹8.0 LPA – ₹18 LPA', demand: 'Exploding' },
    { role: 'SEO & Growth Hacker', salary: '₹5.5 LPA – ₹12 LPA', demand: 'High' },
    { role: 'Social Media & Brand Lead', salary: '₹5.0 LPA – ₹10 LPA', demand: 'High' },
    { role: 'Web Analytics & CRO Specialist', salary: '₹7.0 LPA – ₹15 LPA', demand: 'Very High' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Dedicated Placement Cell</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Careers & 100% Placement Assistance
          </h1>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            We don’t just teach digital marketing; we launch and accelerate high-earning marketing careers across top agencies and brands.
          </p>
        </div>

        {/* Salary Benchmark Grid */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Industry Roles & Salary Benchmarks (2026)
              </h2>
              <p className="text-sm text-slate-500 mt-1">Average package outcomes for CBM Academy certified graduates.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-orange-600 hover:text-orange-700"
            >
              <span>Get Career Guidance</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerRoles.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-400 uppercase tracking-wider">Market Demand</span>
                  <span className="font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    {item.demand}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base">{item.role}</h3>
                <p className="text-sm font-black text-orange-600">{item.salary}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Placement 4-Step Process */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">Our Roadmap</h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">How CBM Academy Guarantees Placement</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {placementSteps.map((s, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs relative">
                <span className="text-4xl font-black text-orange-500/20 absolute top-4 right-4">{s.num}</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hiring Partners Wall */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 mb-16 text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h2 className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-2">Network</h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">Top 250+ Agencies & Brands Hire From Us</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {hiringPartners.map((partner, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60 font-semibold text-slate-200 text-xs sm:text-sm flex items-center justify-center text-center hover:border-orange-500/50 transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Apply Call to Action */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 sm:p-12 text-white text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">Ready to secure your dream marketing role?</h2>
          <p className="text-sm sm:text-base text-orange-100 max-w-xl mx-auto">
            Speak directly with our placement director and book your seat in the upcoming batch.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-orange-600 hover:bg-slate-100 font-extrabold text-sm shadow-lg transition-all"
            >
              <span>Apply for Placement Batch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
