import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Target, 
  Users, 
  Briefcase, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Building,
  GraduationCap
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const values = [
    {
      title: 'Real Spend, Real Campaigns',
      description: 'We believe you cannot learn digital marketing through recorded presentations alone. Every CBM Academy student runs live ads with actual budgets.',
    },
    {
      title: 'AI-First Pedagogy',
      description: 'The digital marketing landscape changes constantly. We continually update our syllabus to integrate cutting-edge Generative AI and automated growth systems.',
    },
    {
      title: 'Direct Agency Mentorship',
      description: 'Our faculty consists exclusively of active agency directors, performance media buyers, and senior growth marketing practitioners.',
    },
    {
      title: 'Accountability & Career Outcomes',
      description: 'From resume sculpting to mock technical interview rounds and guaranteed placement drives, our primary metric is your career success.',
    },
  ];

  const milestones = [
    { year: '2016', title: 'Foundation', description: 'Established in New Delhi with a vision to deliver agency-grade digital marketing training.' },
    { year: '2019', title: '10,000 Graduates', description: 'Crossed 10,000 successful alumni placed across top agencies and brands.' },
    { year: '2023', title: 'AI Integration', description: 'Pioneered India’s first comprehensive Generative AI digital marketing curriculum.' },
    { year: '2026', title: 'Next-Gen Hub', description: 'Over 15,000+ alumni, 250+ hiring partners, and ISO 9001:2015 accredited certification.' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>About CBM Academy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Empowering the Next Generation of Digital Marketers & AI Leaders
          </h1>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            CBM Academy was founded to bridge the critical divide between outdated college curriculums and high-velocity digital marketing agency demands.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To provide rigorously practical, mentor-led education that transforms curious students, fresh graduates, and ambitious professionals into elite digital marketing practitioners equipped with modern AI capabilities.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To be recognized globally as India’s foremost center for digital marketing excellence, data-driven performance engineering, and ethical AI-powered growth systems.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">Our Core DNA</h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">Why Our Pedagogy Works</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-1 font-bold text-sm">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{v.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mt-1">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">Milestones</h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">A Decade of Growth & Innovation</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs text-left">
                <span className="text-3xl font-black text-orange-500">{m.year}</span>
                <h3 className="text-base font-bold text-slate-900 mt-2">{m.title}</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 border border-slate-800 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Visit Our Training Campus in New Delhi</h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Experience our interactive classrooms, meet industry mentors, and attend a free orientation session.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md transition-all"
            >
              <span>Schedule Campus Visit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
