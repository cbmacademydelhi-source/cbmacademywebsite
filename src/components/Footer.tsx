import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, Award } from 'lucide-react';

export const Footer: React.FC = () => {
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

  return (
    <footer className="bg-slate-950 text-slate-300 pt-14 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          
          {/* Col 1: Brand & Logo */}
          <div className="space-y-3 lg:col-span-1">
            <button 
              type="button" 
              onClick={() => scrollToSection('home')} 
              className="inline-block bg-white p-2 rounded-xl cursor-pointer"
            >
              <img
                src="/assets/cbm-academy-logo.jpg"
                alt="CBM Academy - Digital Marketing and AI Academy"
                referrerPolicy="no-referrer"
                className="h-10 w-auto object-contain"
              />
            </button>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              CBM Academy provides practical Digital Marketing education with modern tools, AI integration and career-focused learning.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-wider uppercase mb-3">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button type="button" onClick={() => scrollToSection('home')} className="hover:text-orange-400 transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection('courses')} className="hover:text-orange-400 transition-colors cursor-pointer">
                  Courses
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection('about')} className="hover:text-orange-400 transition-colors cursor-pointer">
                  About
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection('verify')} className="hover:text-orange-400 transition-colors cursor-pointer">
                  Verify
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection('careers')} className="hover:text-orange-400 transition-colors cursor-pointer">
                  Careers
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection('blog')} className="hover:text-orange-400 transition-colors cursor-pointer">
                  Blog
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection('contact')} className="hover:text-orange-400 transition-colors cursor-pointer">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Modules */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-wider uppercase mb-3">Course Modules</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>SEO & Search Engine Marketing</li>
              <li>Google Ads & Meta Ads</li>
              <li>WordPress & Web Creation</li>
              <li>AI Marketing Tools & Workflows</li>
              <li>Analytics & Conversion Optimization</li>
              <li>Social Media & Graphic Design</li>
            </ul>
          </div>

          {/* Col 4: Contact details */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-wider uppercase mb-3">Contact</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                <span>CBM Academy Campus, New Delhi, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <a href="mailto:office@cbmacademy.in" className="hover:text-white transition-colors text-orange-400 font-medium">
                  office@cbmacademy.in
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="pt-1">
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 hover:text-orange-300 cursor-pointer"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} CBM Academy - Digital Marketing and AI Academy. All rights reserved.</p>
          <div className="flex gap-4">
            <button type="button" onClick={() => scrollToSection('verify')} className="hover:text-slate-300 transition-colors cursor-pointer">
              Certificate Verification
            </button>
            <span className="text-slate-700">|</span>
            <button type="button" onClick={() => scrollToSection('about')} className="hover:text-slate-300 transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <span className="text-slate-700">|</span>
            <button type="button" onClick={() => scrollToSection('about')} className="hover:text-slate-300 transition-colors cursor-pointer">
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
