import React, { useState } from 'react';
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { ApplicationFormData } from '../types';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    name: '',
    phone: '',
    email: '',
    course: 'Master in Digital Marketing & AI Strategy',
    message: '',
  });

  const coursesList = [
    'Master in Digital Marketing & AI Strategy',
    'AI in Digital Marketing & Growth Systems',
    'Performance Marketing & Media Buying',
    'Search Engine Optimization (SEO) & Content Marketing',
    'Social Media Marketing & Personal Branding',
    'Web Analytics, GA4 & Conversion Rate Optimization (CRO)',
    'Executive Digital Leadership Program (Weekend Batch)',
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Admissions & Contact Portal</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Apply Now & Connect with CBM Academy
          </h1>

          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Submit your application form below. Our admissions council will
            review your profile and reach out within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* LEFT: FORM */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md">

            <div className="border-b border-slate-100 pb-6 mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Student Admission & Enquiry Form
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Fill out the required details below to submit your official
                application.
              </p>
            </div>

            {/* 
              IMPORTANT:
              This is the ONLY form submission endpoint.
              No /api/apply
              No Supabase
              No Resend
            */}
            <form
              action="https://formspree.io/f/myeglvqo"
              method="POST"
              className="space-y-5"
            >

              {/* Subject for email */}
              <input
                type="hidden"
                name="_subject"
                value="New CBM Academy Application"
              />

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                />
              </div>

              {/* Phone + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="e.g. rahul@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>

              </div>

              {/* Course */}
              <div>
                <label
                  htmlFor="course"
                  className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                >
                  Course Interested In <span className="text-red-500">*</span>
                </label>

                <select
                  id="course"
                  name="course"
                  required
                  value={formData.course}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      course: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                >
                  {coursesList.map((course, index) => (
                    <option key={index} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                >
                  Message / Career Objectives{' '}
                  <span className="text-red-500">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your educational background, current role, and what you aim to achieve with CBM Academy..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                />
              </div>

              {/* Reply-to email */}
              <input
                type="hidden"
                name="_replyto"
                value={formData.email}
              />

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-extrabold text-base shadow-lg shadow-orange-500/20 transition-all duration-150"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Application</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>
                  Your information is protected and stored securely. No spam
                  policy.
                </span>
              </div>

            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-5 space-y-6">

            {/* Campus Info */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">

              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                CBM Academy Campus & Office
              </h3>

              <div className="space-y-4 text-sm">

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">
                      Campus Location
                    </h4>

                    <p className="text-slate-600 leading-relaxed mt-0.5">
                      CBM Academy Training Center, Connaught Place & South
                      Extension Hub, New Delhi - 110001, India
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">
                      Official Admissions Email
                    </h4>

                    <a
                      href="mailto:office@cbmacademy.in"
                      className="text-orange-600 hover:text-orange-700 font-semibold block mt-0.5"
                    >
                      office@cbmacademy.in
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">
                      Student Helpline & WhatsApp
                    </h4>

                    <p className="text-slate-600 font-medium mt-0.5">
                      +91 98765 43210 / +91 11 4567 8900
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">
                      Counseling & Visiting Hours
                    </h4>

                    <p className="text-slate-600 mt-0.5">
                      Monday to Saturday: 9:00 AM – 7:30 PM (IST)
                    </p>

                    <p className="text-slate-500 text-xs mt-0.5">
                      Sunday batches available upon request
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Consultation */}
            <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 border border-slate-800 space-y-4">

              <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30">
                1-on-1 Mentorship
              </span>

              <h3 className="text-xl font-bold text-white">
                Not sure which course fits your career goals?
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed">
                Schedule a 20-minute profile evaluation with our Senior
                Digital Marketing Strategist to choose the right
                specialization.
              </p>

              <div className="pt-2">
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2 text-sm font-bold text-orange-400 hover:text-orange-300"
                >
                  <span>Call Admissions Helpline Now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
