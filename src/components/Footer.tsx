import React from 'react';
import { PERSONAL_INFO } from '../data/portfolio';
import { Github, Mail, Phone, ArrowUp, Terminal, Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className={`border-t transition-colors duration-300 ${
        darkMode ? 'border-slate-800/80 bg-[#080c14]' : 'border-slate-200 bg-white'
      }`}
      aria-label="Site Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-800/50">
          
          {/* Brand & Motto */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-mono font-bold text-xs">
                <Terminal className="w-4 h-4" />
              </div>
              <span className={`text-xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm font-mono text-cyan-400/90 tracking-wide">
              Curious to Learn | Passionate to Build | Ready to Make an Impact
            </p>
            <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              BCA Student @ National College • Trichy, Tamil Nadu, India
            </p>
          </div>

          {/* Direct Social & Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            <a
              id="footer-github-link"
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border transition-all ${
                darkMode
                  ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:text-white hover:border-slate-700'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>GitHub</span>
            </a>

            <a
              id="footer-email-link"
              href={`mailto:${PERSONAL_INFO.email}`}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border transition-all ${
                darkMode
                  ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:text-white hover:border-slate-700'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Email</span>
            </a>

            <a
              id="footer-phone-link"
              href={`tel:${PERSONAL_INFO.phone}`}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border transition-all ${
                darkMode
                  ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:text-white hover:border-slate-700'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              <Phone className="w-4 h-4 text-purple-400" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>

            <button
              id="back-to-top-btn"
              type="button"
              onClick={scrollToTop}
              className={`p-2 rounded-lg border transition-all ${
                darkMode
                  ? 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40'
                  : 'border-slate-200 bg-slate-50 text-slate-600 hover:text-cyan-600 hover:border-cyan-300'
              }`}
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright and Attributions */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© 2026 PRASATH P. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <span>Built with modern React, TypeScript &amp; Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
