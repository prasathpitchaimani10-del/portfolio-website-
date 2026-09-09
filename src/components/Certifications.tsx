import React from 'react';
import { CERTIFICATIONS_DATA } from '../data/portfolio';
import { Award, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface CertificationsProps {
  darkMode: boolean;
}

export const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  return (
    <section
      id="certifications"
      className="py-20 sm:py-28 relative"
      aria-label="Certifications and Professional Coursework"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-[2px] bg-cyan-400" />
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400">
            04 / Credentials
          </span>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Certifications
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Demonstrated commitment to continuous learning through verified coursework in artificial intelligence concepts and workplace productivity tooling.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <div
              key={cert.id}
              className={`rounded-2xl border p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden ${
                darkMode
                  ? 'bg-[#111726] border-slate-800/90 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-950/20'
                  : 'bg-white border-slate-200 hover:border-cyan-300 hover:shadow-lg'
              }`}
            >
              {/* Subtle accent line on top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500 opacity-80 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Issuer & Year */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/40 mb-5">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
                      {cert.issuer}
                    </span>
                  </div>
                  {cert.year && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
                      {cert.year}
                    </span>
                  )}
                </div>

                {/* Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl shrink-0 ${
                    darkMode ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-cyan-50 text-cyan-700 border border-cyan-200'
                  }`}>
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className={`text-xl sm:text-2xl font-bold leading-snug ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {cert.title}
                  </h3>
                </div>

                {/* Description */}
                <p className={`text-sm sm:text-base leading-relaxed mb-6 ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {cert.description}
                </p>

                {/* Focus Areas */}
                <div className="space-y-2">
                  <span className={`text-[11px] font-mono uppercase tracking-wider font-semibold block ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Core Learning Competencies:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {cert.focusAreas.map((area) => (
                      <span
                        key={area}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium ${
                          darkMode
                            ? 'bg-slate-900 text-slate-200 border border-slate-800'
                            : 'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                      >
                        <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom verification badge */}
              <div className="mt-8 pt-4 border-t border-slate-800/40 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  Verified Completion
                </span>
                <span className="text-slate-500">Record #{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
