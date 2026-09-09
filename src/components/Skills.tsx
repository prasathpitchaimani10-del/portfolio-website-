import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolio';
import { 
  Code, 
  Terminal, 
  Cpu, 
  FileCode, 
  Layout, 
  Network, 
  Palette, 
  GitBranch, 
  Laptop, 
  Boxes, 
  Layers, 
  Users, 
  Puzzle, 
  MessageSquare, 
  Sparkles,
  Filter
} from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');
  const [activeSkillHover, setActiveSkillHover] = useState<string | null>(null);

  // Map icon names to Lucide icons safely
  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Terminal': return <Terminal className="w-4 h-4 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-sky-400" />;
      case 'FileCode': return <FileCode className="w-4 h-4 text-amber-400" />;
      case 'Layout': return <Layout className="w-4 h-4 text-purple-400" />;
      case 'Network': return <Network className="w-4 h-4 text-emerald-400" />;
      case 'Code': return <Code className="w-4 h-4 text-orange-400" />;
      case 'Palette': return <Palette className="w-4 h-4 text-blue-400" />;
      case 'GitBranch': return <GitBranch className="w-4 h-4 text-rose-400" />;
      case 'Laptop': return <Laptop className="w-4 h-4 text-indigo-400" />;
      case 'Boxes': return <Boxes className="w-4 h-4 text-cyan-300" />;
      case 'Layers': return <Layers className="w-4 h-4 text-violet-400" />;
      case 'Users': return <Users className="w-4 h-4 text-teal-400" />;
      case 'Puzzle': return <Puzzle className="w-4 h-4 text-amber-300" />;
      case 'MessageSquare': return <MessageSquare className="w-4 h-4 text-sky-300" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-pink-400" />;
      default: return <Code className="w-4 h-4 text-cyan-400" />;
    }
  };

  const categories = ['ALL', 'PROGRAMMING', 'WEB', 'TOOLS', 'CORE CONCEPTS', 'SOFT SKILLS'];

  const filteredCategories = selectedFilter === 'ALL'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((c) => c.category === selectedFilter);

  return (
    <section
      id="skills"
      className="py-20 sm:py-28 relative"
      aria-label="Technical and Collaborative Skills"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-[2px] bg-cyan-400" />
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400">
            02 / Capabilities &amp; Stack
          </span>
        </div>

        {/* Section Heading & Context */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Things I Work With
            </h2>
            <p className={`mt-3 text-base sm:text-lg max-w-2xl ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              A transparent, authentic overview of programming languages, web technologies, tools, and computer science foundations I am developing through BCA coursework and active practice.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900/50 border border-slate-800 self-start md:self-auto">
            <Filter className="w-3.5 h-3.5 text-slate-400 ml-2 hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  selectedFilter === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 ${
                darkMode
                  ? 'bg-[#111726]/90 border-slate-800/90 hover:border-slate-700 hover:shadow-xl hover:shadow-black/20'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
              }`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/40 mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                    {group.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {group.skills.length} item{group.skills.length > 1 ? 's' : ''}
                  </span>
                </div>

                <h3 className={`text-lg font-bold mb-1.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {group.title}
                </h3>
                <p className={`text-xs mb-5 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {group.description}
                </p>

                {/* Skills Interactive List */}
                <div className="space-y-2.5">
                  {group.skills.map((skill) => {
                    const isHovered = activeSkillHover === skill.name;
                    return (
                      <div
                        key={skill.name}
                        onMouseEnter={() => setActiveSkillHover(skill.name)}
                        onMouseLeave={() => setActiveSkillHover(null)}
                        className={`p-3 rounded-xl border transition-all duration-200 cursor-default ${
                          isHovered
                            ? darkMode
                              ? 'bg-slate-800/90 border-cyan-500/50 shadow-md shadow-cyan-950/30 -translate-y-0.5'
                              : 'bg-cyan-50/70 border-cyan-300 -translate-y-0.5'
                            : darkMode
                              ? 'bg-slate-900/60 border-slate-800/60 hover:border-slate-700'
                              : 'bg-slate-50 border-slate-200/80 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className={`p-1.5 rounded-lg ${darkMode ? 'bg-slate-950/80' : 'bg-white shadow-xs'}`}>
                              {getIcon(skill.iconName)}
                            </div>
                            <span className={`text-sm font-semibold ${
                              isHovered
                                ? 'text-cyan-400'
                                : darkMode ? 'text-slate-200' : 'text-slate-800'
                            }`}>
                              {skill.name}
                            </span>
                          </div>
                        </div>

                        {skill.description && (
                          <p className={`mt-1.5 text-xs leading-relaxed pl-8 ${
                            darkMode ? 'text-slate-400' : 'text-slate-600'
                          }`}>
                            {skill.description}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Note */}
              <div className="mt-5 pt-3 border-t border-slate-800/40 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                <span>Authentic Learning Metric</span>
                <span className="text-cyan-400/80">Active Practice</span>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Commitment Note */}
        <div className={`mt-10 p-5 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
          darkMode ? 'bg-[#0f1422] border-slate-800/80 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <p className="text-sm">
              <span className="font-semibold text-cyan-400">Authentic Knowledge:</span> I focus on fundamental mechanics and syntax logic rather than arbitrary percentage ratings.
            </p>
          </div>
          <a
            href="#projects"
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 underline underline-offset-4 whitespace-nowrap"
          >
            See What I Build &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
