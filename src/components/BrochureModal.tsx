import React, { useState, useEffect } from 'react';
import { Download, FileText, CheckCircle2, AlertCircle, X, Sparkles } from 'lucide-react';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'downloading' | 'ready' | 'fallback'>('idle');
  const brochureUrl = '/assets/cbm-academy-brochure.pdf';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = async () => {
    setDownloadStatus('downloading');
    try {
      const response = await fetch(brochureUrl, { method: 'HEAD' });
      if (response.ok) {
        const link = document.createElement('a');
        link.href = brochureUrl;
        link.download = 'CBM-Academy-Course-Brochure.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setDownloadStatus('ready');
      } else {
        setDownloadStatus('fallback');
      }
    } catch {
      setDownloadStatus('fallback');
    }
  };

  const scrollToContact = () => {
    onClose();
    const element = document.getElementById('contact');
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        id="brochure-modal"
        className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="brochure-modal-title"
      >
        <button
          id="close-brochure-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 id="brochure-modal-title" className="text-xl font-bold text-slate-900">
              Download Course Brochure
            </h3>
            <p className="text-sm text-slate-500">CBM Academy Pro Digital Marketing Course</p>
          </div>
        </div>

        <div className="space-y-4 my-6 text-sm text-slate-600">
          <div className="p-4 bg-orange-50/70 border border-orange-100 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-orange-950 font-semibold text-xs sm:text-sm">
              <Sparkles className="w-4 h-4 text-orange-500" />
              Inside the brochure:
            </div>
            <ul className="space-y-1 text-xs sm:text-sm text-slate-700 pl-4 list-disc marker:text-orange-500">
              <li>Detailed 12-module practical syllabus</li>
              <li>AI marketing tools and automation workflows</li>
              <li>Hands-on projects and career guidance details</li>
            </ul>
          </div>

          {downloadStatus === 'ready' && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex items-start gap-2 text-emerald-800 text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Brochure download initiated!</p>
                <p className="text-slate-600">Check your downloads folder for the syllabus PDF.</p>
              </div>
            </div>
          )}

          {downloadStatus === 'fallback' && (
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2 text-amber-800 text-xs">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Curriculum Syllabus Overview Ready</p>
                <p className="text-slate-600">You can also view all 12 modules directly on this page or apply below.</p>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            id="start-brochure-download-btn"
            onClick={handleDownload}
            disabled={downloadStatus === 'downloading'}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-all shadow-md shadow-orange-500/20 active:scale-[0.98] cursor-pointer"
          >
            <Download className="w-4 h-4" />
            {downloadStatus === 'downloading' ? 'Downloading...' : 'Download PDF Brochure'}
          </button>
          <button
            type="button"
            onClick={scrollToContact}
            className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors cursor-pointer"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};
