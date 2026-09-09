import React from 'react';
import { EDUCATION_DATA } from '../data/portfolio';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle, BookOpen } from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

export const Education: React.FC<EducationProps> = ({ darkMode }) => {
  const academicMilestones = [
    {
      year: 'Year 1 (2024 — 2025)',
      title: 'Foundational Programming & Computing Principles',
      description: 'Mastered introductory C programming, computer architecture fundamentals, mathematical foundations, and basic problem-solving algorithms.',
      status: 'Completed',
    },
    {
      year: 'Year 2 (2025 — 2026)',
      title: 'Object-Oriented Programming & Data Structures',
      description: 'Strengthened C++ OOP principles, linear/non-linear data structures, Visual Basic application concepts, and web technology basics (HTML/CSS).',
      status: 'Completed',
    },
    {
      year: 'Year 3 (2026 — 2027 • Current)',
      title: 'Application Development & Tech Specialization',
      description: 'Applying core knowledge toward practical software development, hackathon prototype building, AI tool exploration, and career readiness.',
      status: 'In Progress (Current)',
    },
  ];

  return (
    <section
      id="education"
      className={`py-20 sm:py-28 border-t transition-colors duration-300 ${
        darkMode ? 'border-slate-800/80 bg-[#0d121d]/50' : 'border-slate-200 bg-slate-50/50'
      }`}
      aria-label="Education and Academic Journey"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-[2px] bg-cyan-400" />
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400">
            03 / Academic Foundation
          </span>
        </div>

        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Education
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Structured academic training fostering strong analytical thinking, structured coding habits, and computer application foundations.
          </p>
        </div>

        {/* Main Degree Highlight Card */}
        {EDUCATION_DATA.map((edu, idx) => (
          <div
            key={idx}
            className={`rounded-2xl border p-6 sm:p-8 mb-12 relative overflow-hidden transition-all duration-300 ${
              darkMode
                ? 'bg-[#111726] border-slate-800 shadow-xl shadow-black/30'
                : 'bg-white border-slate-200 shadow-md'
            }`}
          >
            {/* Top Badge & Timing */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/40">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-xl ${
                  darkMode ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30' : 'bg-cyan-50 text-cyan-700 border border-cyan-200'
                }`}>
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-cyan-400 font-medium">
                    <span>{edu.institution}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      Trichy, Tamil Nadu
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:items-end">
                <div className="flex items-center gap-1.5 font-mono text-sm font-semibold text-slate-300">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span>{edu.period}</span>
                </div>
                <span className="inline-flex items-center gap-1.5 mt-1 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {edu.status}
                </span>
              </div>
            </div>

            {/* Description & Key Highlights */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-6 space-y-3">
                <h4 className={`text-xs font-mono uppercase tracking-widest font-semibold ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Program Overview
                </h4>
                <p className={`text-sm sm:text-base leading-relaxed ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {edu.description}
                </p>
              </div>

              <div className="lg:col-span-6 space-y-3">
                <h4 className={`text-xs font-mono uppercase tracking-widest font-semibold ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Key Academic Emphases
                </h4>
                <div className="space-y-2">
                  {edu.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Academic Timeline Progress */}
        <div className="mt-8">
          <h3 className={`text-lg font-bold mb-6 flex items-center gap-2 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            <BookOpen className="w-5 h-5 text-cyan-400" />
            Curricular Progression Roadmap
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {academicMilestones.map((m, index) => {
              const isCurrent = m.status.includes('Current');
              return (
                <div
                  key={m.year}
                  className={`rounded-2xl border p-6 flex flex-col justify-between relative transition-all duration-300 ${
                    isCurrent
                      ? darkMode
                        ? 'bg-gradient-to-b from-[#162035] to-[#111726] border-cyan-500/50 shadow-lg shadow-cyan-950/30'
                        : 'bg-cyan-50/50 border-cyan-300 shadow-sm'
                      : darkMode
                        ? 'bg-[#111726]/70 border-slate-800/80'
                        : 'bg-white border-slate-200'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-semibold text-cyan-400">
                        {m.year}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[11px] font-mono ${
                        isCurrent
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                          : 'bg-slate-800/60 text-slate-400'
                      }`}>
                        {m.status}
                      </span>
                    </div>

                    <h4 className={`text-base font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {m.title}
                    </h4>
                    <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {m.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-800/40 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>Phase 0{index + 1}</span>
                    <span>{isCurrent ? 'Active Focus' : 'Archived'}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
