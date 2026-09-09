import React from 'react';
import { CAREER_GOAL_DATA } from '../data/portfolio';
import { Target, Quote, Sparkles, Compass, ShieldCheck, HeartHandshake } from 'lucide-react';

interface CareerGoalProps {
  darkMode: boolean;
}

export const CareerGoal: React.FC<CareerGoalProps> = ({ darkMode }) => {
  return (
    <section
      id="goals"
      className={`py-20 sm:py-28 border-t transition-colors duration-300 relative overflow-hidden ${
        darkMode ? 'border-slate-800/80 bg-[#0c101c]' : 'border-slate-200 bg-slate-100/70'
      }`}
      aria-label="Career Goals and Philosophy"
    >
      {/* Background ambient radial lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-cyan-600/10 via-purple-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-[2px] bg-cyan-400" />
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400">
            07 / Vision &amp; Philosophy
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Large Editorial Quote & Motto (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono">
              <Quote className="w-4 h-4" />
              <span>Personal Engineering Motto</span>
            </div>

            <blockquote className="space-y-2">
              <span className={`block text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                {CAREER_GOAL_DATA.quote.line1}
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">
                {CAREER_GOAL_DATA.quote.line2}
              </span>
              <span className={`block text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                {CAREER_GOAL_DATA.quote.line3}
              </span>
            </blockquote>

            <div className="pt-2">
              <p className={`text-base sm:text-lg leading-relaxed ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                {CAREER_GOAL_DATA.content}
              </p>
            </div>
          </div>

          {/* Right: Where I'm Headed & 3 Core Aspirations (6 cols) */}
          <div className="lg:col-span-6">
            <div
              className={`rounded-3xl border p-7 sm:p-9 space-y-6 ${
                darkMode
                  ? 'bg-[#111726] border-slate-800 shadow-2xl shadow-black/40'
                  : 'bg-white border-slate-200 shadow-xl'
              }`}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/40">
                <div className="flex items-center gap-2.5">
                  <Compass className="w-5 h-5 text-cyan-400" />
                  <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {CAREER_GOAL_DATA.heading}
                  </h3>
                </div>
                <span className="text-xs font-mono text-cyan-400/90 font-medium">BCA &rarr; Career</span>
              </div>

              <div className="space-y-4">
                {CAREER_GOAL_DATA.aspirations.map((item, idx) => (
                  <div
                    key={item.title}
                    className={`p-4 rounded-xl border transition-all ${
                      darkMode
                        ? 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/40'
                        : 'bg-slate-50 border-slate-200 hover:border-cyan-300'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-6 h-6 rounded-lg bg-cyan-500/15 text-cyan-400 flex items-center justify-center text-xs font-mono font-bold">
                        0{idx + 1}
                      </div>
                      <h4 className={`text-sm sm:text-base font-bold ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {item.title}
                      </h4>
                    </div>
                    <p className={`text-xs sm:text-sm leading-relaxed pl-8.5 ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className={`p-4 rounded-xl border flex items-center gap-3 text-xs ${
                darkMode ? 'bg-cyan-950/30 border-cyan-900/40 text-cyan-200' : 'bg-cyan-50 border-cyan-200 text-cyan-800'
              }`}>
                <HeartHandshake className="w-5 h-5 shrink-0 text-cyan-400" />
                <p>
                  Ready to contribute actively to early-career roles, software internships, and development teams with genuine enthusiasm.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
