import React from 'react';
import { ABOUT_DATA, PERSONAL_INFO } from '../data/portfolio';
import { Calendar, School, Compass, Languages, CheckCircle2, Sparkles } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`py-20 sm:py-28 border-t transition-colors duration-300 ${
        darkMode ? 'border-slate-800/80 bg-[#0d121d]/60' : 'border-slate-200 bg-slate-50/70'
      }`}
      aria-label="About Prasath P"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-[2px] bg-cyan-400" />
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400">
            01 / Profile Overview
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Main Story & Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              {ABOUT_DATA.heading}
            </h2>

            <div className={`space-y-4 text-base sm:text-lg leading-relaxed ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {ABOUT_DATA.paragraphs.map((p, index) => (
                <p key={index} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Personality & Value Attributes */}
            <div className="pt-4">
              <h3 className={`text-xs font-mono uppercase tracking-widest mb-3 flex items-center gap-2 ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                HOW I APPROACH COLLABORATION &amp; WORK
              </h3>
              <div className="flex flex-wrap gap-2">
                {ABOUT_DATA.personalTraits.map((trait) => (
                  <span
                    key={trait}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      darkMode
                        ? 'bg-slate-900 text-slate-200 border border-slate-700/70 hover:border-cyan-500/50 hover:text-cyan-300'
                        : 'bg-white text-slate-700 border border-slate-200 hover:border-cyan-400 shadow-sm'
                    }`}
                  >
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* Communication Languages */}
            <div className={`pt-2 flex items-center gap-3 text-sm ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              <Languages className="w-4 h-4 text-cyan-400" />
              <span className="font-medium">Languages:</span>
              <div className="flex items-center gap-2">
                {PERSONAL_INFO.languages.map((lang) => (
                  <span
                    key={lang}
                    className={`px-2.5 py-0.5 rounded text-xs font-mono ${
                      darkMode ? 'bg-slate-800/80 text-slate-200' : 'bg-slate-200/80 text-slate-800'
                    }`}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Information Panel (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* "Currently" Card */}
            <div
              id="about-currently-card"
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 ${
                darkMode
                  ? 'bg-[#111726] border-slate-800 text-white shadow-xl shadow-black/30'
                  : 'bg-white border-slate-200 text-slate-900 shadow-md'
              }`}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/40">
                <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                  CURRENTLY
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {ABOUT_DATA.currently.stage}
                </span>
              </div>

              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${darkMode ? 'bg-slate-800/80 text-cyan-400' : 'bg-slate-100 text-cyan-600'}`}>
                    <School className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase block">Program &amp; College</span>
                    <h4 className="text-base font-bold text-slate-100">
                      {ABOUT_DATA.currently.role}
                    </h4>
                    <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      {ABOUT_DATA.currently.institution}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${darkMode ? 'bg-slate-800/80 text-purple-400' : 'bg-slate-100 text-purple-600'}`}>
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase block">Academic Timeline</span>
                    <p className="text-base font-semibold font-mono text-slate-100">
                      {ABOUT_DATA.currently.timeline}
                    </p>
                    <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      Trichy, Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* "Focus Areas" Card */}
            <div
              id="about-focus-card"
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 ${
                darkMode
                  ? 'bg-[#111726] border-slate-800 text-white shadow-xl shadow-black/30'
                  : 'bg-white border-slate-200 text-slate-900 shadow-md'
              }`}
            >
              <div className="flex items-center gap-2 pb-4 border-b border-slate-800/40">
                <Compass className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                  PRIMARY FOCUS AREAS
                </span>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ABOUT_DATA.focusAreas.map((item) => (
                  <div
                    key={item.title}
                    className={`p-3.5 rounded-xl border transition-all ${
                      darkMode
                        ? 'bg-slate-900/70 border-slate-800/80 hover:border-cyan-500/40'
                        : 'bg-slate-50 border-slate-200 hover:border-cyan-300'
                    }`}
                  >
                    <h5 className="text-sm font-semibold text-cyan-400 mb-0.5">
                      {item.title}
                    </h5>
                    <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
