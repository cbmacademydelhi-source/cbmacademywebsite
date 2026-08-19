import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, Mail } from 'lucide-react';
import logo from '../cbm-logo.png.jpeg';
export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', targetId: 'home' },
    { name: 'Courses', targetId: 'courses' },
    { name: 'About', targetId: 'about' },
    { name: 'Verify', targetId: 'verify' },
    { name: 'Careers', targetId: 'careers' },
    { name: 'Blog', targetId: 'blog' },
    { name: 'Contact', targetId: 'contact' },
  ];

  // Smooth scroll handler
  const scrollToSection = (targetId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
    }
  };

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].targetId);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(navLinks[i].targetId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      {/* Top Utility Bar */}
      <div className="hidden md:block bg-[#072B57] text-slate-300 text-xs py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Admissions Open for Pro Digital Marketing Course | 100% Practical Training
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:office@cbmacademy.in" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#FF6B00]" />
              office@cbmacademy.in
            </a>
            <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#FF6B00]" />
              +91 98765 43210
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Official CBM Academy Logo */}
          <button 
            type="button" 
            onClick={() => scrollToSection('home')} 
            className="flex items-center shrink-0 cursor-pointer text-left focus:outline-hidden"
            id="brand-logo-btn"
          >
            <img
              src={logo}"
              alt="CBM Academy - Digital Marketing and AI Academy"
              referrerPolicy="no-referrer"
              className="h-11 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-200 hover:scale-[1.02]"
            />
          </button>

          {/* Desktop Navigation - Strictly horizontal inline on screens >= 768px / 1024px */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 xl:gap-3" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = activeSection === link.targetId;
              return (
                <button
                  key={link.targetId}
                  type="button"
                  onClick={() => scrollToSection(link.targetId)}
                  id={`nav-link-${link.targetId}`}
                  className={`px-2.5 lg:px-3 py-2 rounded-lg text-xs lg:text-sm font-semibold transition-all duration-150 whitespace-nowrap cursor-pointer ${
                    active
                      ? 'text-[#FF6B00] bg-orange-50 font-bold'
                      : 'text-[#072B57] hover:text-[#FF6B00] hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Desktop Apply Now Button */}
          <div className="hidden md:flex items-center">
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              id="desktop-apply-now-btn"
              className="inline-flex items-center justify-center gap-1.5 lg:gap-2 px-4 lg:px-5 py-2.5 rounded-xl bg-[#FF6B00] hover:bg-[#E55F00] active:bg-[#CC5500] text-white text-xs lg:text-sm font-bold shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Navigation Controls (Strictly ONLY at <= 768px) */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center justify-center px-3 py-1.5 rounded-lg bg-[#FF6B00] text-white text-xs font-bold shadow-xs cursor-pointer"
            >
              Apply Now
            </button>
            <button
              id="mobile-hamburger-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#072B57] hover:text-[#FF6B00] hover:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-[#FF6B00] cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu (Strictly ONLY at <= 768px) */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          className="md:hidden fixed inset-x-0 top-[81px] bg-white border-b border-slate-200 shadow-xl z-50 animate-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-85px)] overflow-y-auto"
        >
          <div className="px-4 pt-3 pb-6 space-y-1 sm:px-6">
            {navLinks.map((link) => {
              const active = activeSection === link.targetId;
              return (
                <button
                  key={link.targetId}
                  type="button"
                  onClick={() => scrollToSection(link.targetId)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors cursor-pointer ${
                    active
                      ? 'text-[#FF6B00] bg-orange-50 font-bold'
                      : 'text-[#072B57] hover:text-[#FF6B00] hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                id="mobile-apply-now-btn"
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#FF6B00] text-white font-bold text-base shadow-md shadow-orange-500/20 cursor-pointer"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="pt-4 text-xs text-slate-500 space-y-2 px-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF6B00]" />
                <span>office@cbmacademy.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF6B00]" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
