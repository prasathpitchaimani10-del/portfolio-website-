import React, { useState } from 'react';
import { INTERESTS_DATA } from '../data/portfolio';
import { Code2, Globe, BrainCircuit, BookOpen, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface InterestsProps {
  darkMode: boolean;
}

export const Interests: React.FC<InterestsProps> = ({ darkMode }) => {
  const [selectedInterest, setSelectedInterest] = useState<number>(0);

  const getInterestIcon = (index: number) => {
    switch (index) {
      case 0: return <Code2 className="w-6 h-6 text-cyan-400" />;
      case 1: return <Globe className="w-6 h-6 text-sky-400" />;
      case 2: return <BrainCircuit className="w-6 h-6 text-purple-400" />;
      case 3: return <BookOpen className="w-6 h-6 text-emerald-400" />;
      default: return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section
      id="interests"
      className="py-20 sm:py-28 relative"
      aria-label="What I Love Building and Exploring"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-[2px] bg-cyan-400" />
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400">
            06 / Passions &amp; Focus
          </span>
        </div>

        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            What I Love Building
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            The key areas where my curiosity drives continuous experimentation, problem solving, and technical growth.
          </p>
        </div>

        {/* 4 Interactive Visual Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INTERESTS_DATA.map((item, index) => {
            const isSelected = selectedInterest === index;
            return (
              <div
                key={item.title}
                onClick={() => setSelectedInterest(index)}
                className={`rounded-2xl border p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 relative group ${
                  isSelected
                    ? darkMode
                      ? 'bg-[#151d30] border-cyan-500/60 shadow-xl shadow-cyan-950/40 -translate-y-1'
                      : 'bg-cyan-50/70 border-cyan-400 shadow-md -translate-y-1'
                    : darkMode
                      ? 'bg-[#111726]/80 border-slate-800 hover:border-slate-700 hover:bg-[#131b2c]'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Active Indicator Strip */}
                {isSelected && (
                  <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-b-full" />
                )}

                <div>
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 rounded-xl transition-all ${
                      isSelected
                        ? darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'
                        : darkMode ? 'bg-slate-800/80' : 'bg-slate-100'
                    }`}>
                      {getInterestIcon(index)}
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold mb-2.5 transition-colors ${
                    isSelected ? 'text-cyan-400' : darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {item.title}
                  </h3>

                  <p className={`text-sm leading-relaxed mb-4 italic ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    "{item.description}"
                  </p>

                  <p className={`text-xs leading-relaxed ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {item.details}
                  </p>
                </div>

                {/* Key Topics Tags */}
                <div className="mt-6 pt-4 border-t border-slate-800/40">
                  <div className="flex flex-wrap gap-1.5">
                    {item.keyTopics.map((topic) => (
                      <span
                        key={topic}
                        className={`text-[11px] font-mono px-2 py-0.5 rounded-md border ${
                          isSelected
                            ? darkMode
                              ? 'bg-cyan-950/50 text-cyan-300 border-cyan-800/50'
                              : 'bg-cyan-100 text-cyan-800 border-cyan-200'
                            : darkMode
                              ? 'bg-slate-900 text-slate-400 border-slate-800'
                              : 'bg-slate-100 text-slate-600 border-slate-200'
                        }`}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Focus Detail Interactive Bar */}
        <div
          className={`mt-10 p-6 rounded-2xl border transition-all ${
            darkMode
              ? 'bg-[#111726] border-slate-800 text-slate-200'
              : 'bg-white border-slate-200 text-slate-800 shadow-sm'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-cyan-400 font-mono">
                  Currently Exploring in {INTERESTS_DATA[selectedInterest].title}:
                </h4>
                <p className={`text-xs sm:text-sm mt-0.5 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {INTERESTS_DATA[selectedInterest].details}
                </p>
              </div>
            </div>

            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold shrink-0"
            >
              <span>Explore GitHub Repos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
