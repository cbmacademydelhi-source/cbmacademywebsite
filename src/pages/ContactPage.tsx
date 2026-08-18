import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
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

  const [errors, setErrors] = useState<Partial<Record<keyof ApplicationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const coursesList = [
    'Master in Digital Marketing & AI Strategy',
    'AI in Digital Marketing & Growth Systems',
    'Performance Marketing & Media Buying',
    'Search Engine Optimization (SEO) & Content Marketing',
    'Social Media Marketing & Personal Branding',
    'Web Analytics, GA4 & Conversion Rate Optimization (CRO)',
    'Executive Digital Leadership Program (Weekend Batch)',
  ];

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
      newErrors.message = 'Message or career objective is required.';
    } else if (formData.message.trim().length < 5) {
      newErrors.message = 'Message must be at least 5 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
        // Clear the form after successful submission
        setFormData({
          name: '',
          phone: '',
          email: '',
          course: 'Master in Digital Marketing & AI Strategy',
          message: '',
        });
        setErrors({});
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.error || 'Submission failed. Please check your inputs and try again.');
      }
    } catch (err: any) {
      console.error('Submission error:', err);
      setSubmitStatus('error');
      setStatusMessage('Network error. Please check your internet connection or email us directly at office@cbmacademy.in.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Submit your application form below. Our admissions council will review your profile and reach out within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Application Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md">
            <div className="border-b border-slate-100 pb-6 mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Student Admission & Enquiry Form
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Fill out the required details below to submit your official application.
              </p>
            </div>

            {/* Success State */}
            {submitStatus === 'success' && (
              <div 
                id="application-success-box"
                className="mb-8 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 animate-in fade-in duration-300"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-emerald-900">
                      Application Submitted Successfully
                    </h3>
                    <p className="text-sm text-emerald-800 leading-relaxed font-medium">
                      {statusMessage}
                    </p>
                    <p className="text-xs text-emerald-700 pt-2">
                      A notification has been dispatched to CBM Academy admissions team (<code className="font-semibold text-emerald-900">office@cbmacademy.in</code>).
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Error State */}
            {submitStatus === 'error' && (
              <div 
                id="application-error-box"
                className="mb-8 p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 flex items-start gap-3 text-sm animate-in fade-in"
              >
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Submission Failed</p>
                  <p className="text-xs text-red-700 mt-0.5">{statusMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-hidden focus:ring-2 ${
                    errors.name
                      ? 'border-red-400 bg-red-50/20 focus:ring-red-400'
                      : 'border-slate-200 focus:border-orange-500 focus:ring-orange-500/20'
                  }`}
                  aria-required="true"
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1 font-medium">{errors.name}</p>
                )}
              </div>

              {/* Phone & Email in 2 columns on desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-hidden focus:ring-2 ${
                      errors.phone
                        ? 'border-red-400 bg-red-50/20 focus:ring-red-400'
                        : 'border-slate-200 focus:border-orange-500 focus:ring-orange-500/20'
                    }`}
                    aria-required="true"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1 font-medium">{errors.phone}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="e.g. rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-hidden focus:ring-2 ${
                      errors.email
                        ? 'border-red-400 bg-red-50/20 focus:ring-red-400'
                        : 'border-slate-200 focus:border-orange-500 focus:ring-orange-500/20'
                    }`}
                    aria-required="true"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1 font-medium">{errors.email}</p>
                  )}
                </div>

              </div>

              {/* Course Interested In */}
              <div>
                <label htmlFor="course" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                  Course Interested In <span className="text-red-500">*</span>
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border text-sm bg-white transition-colors focus:outline-hidden focus:ring-2 ${
                    errors.course
                      ? 'border-red-400 bg-red-50/20 focus:ring-red-400'
                      : 'border-slate-200 focus:border-orange-500 focus:ring-orange-500/20'
                  }`}
                  aria-required="true"
                >
                  {coursesList.map((c, i) => (
                    <option key={i} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                {errors.course && (
                  <p className="text-xs text-red-500 mt-1 font-medium">{errors.course}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                  Message / Career Objectives <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your educational background, current role, and what you aim to achieve with CBM Academy..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-hidden focus:ring-2 ${
                    errors.message
                      ? 'border-red-400 bg-red-50/20 focus:ring-red-400'
                      : 'border-slate-200 focus:border-orange-500 focus:ring-orange-500/20'
                  }`}
                  aria-required="true"
                />
                {errors.message && (
                  <p className="text-xs text-red-500 mt-1 font-medium">{errors.message}</p>
                )}
              </div>

              {/* Submit Application Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="submit-application-btn"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 active:bg-orange-700 disabled:bg-orange-300 text-white font-extrabold text-base shadow-lg shadow-orange-500/20 transition-all duration-150 active:scale-[0.99] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Submitting Application...' : 'Submit Application'}</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Your information is protected and stored securely. No spam policy.</span>
              </div>

            </form>
          </div>

          {/* Right: Academy Contact Details & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Campus Info Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                CBM Academy Campus & Office
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Campus Location</h4>
                    <p className="text-slate-600 leading-relaxed mt-0.5">
                      CBM Academy Training Center, Connaught Place & South Extension Hub, New Delhi - 110001, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Official Admissions Email</h4>
                    <a 
                      href="mailto:office@cbmacademy.in" 
                      className="text-orange-600 hover:text-orange-700 font-semibold block mt-0.5"
                    >
                      office@cbmacademy.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Student Helpline & WhatsApp</h4>
                    <p className="text-slate-600 font-medium mt-0.5">+91 98765 43210 / +91 11 4567 8900</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Counseling & Visiting Hours</h4>
                    <p className="text-slate-600 mt-0.5">Monday to Saturday: 9:00 AM – 7:30 PM (IST)</p>
                    <p className="text-slate-500 text-xs mt-0.5">Sunday batches available upon request</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Consultation Callout */}
            <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 border border-slate-800 space-y-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30">
                1-on-1 Mentorship
              </span>
              <h3 className="text-xl font-bold text-white">
                Not sure which course fits your career goals?
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Schedule a 20-minute profile evaluation with our Senior Digital Marketing Strategist to choose the right specialization.
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
