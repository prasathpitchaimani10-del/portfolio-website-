import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolio';
import { 
  ArrowDown, 
  Terminal, 
  FileCode2, 
  Cpu, 
  GitBranch, 
  MapPin, 
  GraduationCap, 
  Copy, 
  Check, 
  Play, 
  Sparkles, 
  Send 
} from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState<'cpp' | 'js' | 'terminal'>('cpp');
  const [copied, setCopied] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    'Initializing Prasath’s learning workspace...',
    '→ Student Profile: PRASATH P (BCA 3rd Year)',
    '→ Current Focus: C++, Data Structures & Web Tech',
    '→ Status: Ready to build and collaborate.',
  ]);
  const [termCommand, setTermCommand] = useState('');

  const codeSnippets = {
    cpp: `// Prasath_P_Profile.cpp
#include <iostream>
#include <string>
#include <vector>

class AspiringDeveloper {
public:
    std::string name = "PRASATH P";
    std::string education = "BCA (3rd Year) @ National College";
    std::string location = "Trichy, Tamil Nadu";
    std::string motto = "Curious to Learn. Passionate to Build.";

    void displayFocus() {
        std::vector<std::string> stack = {"C", "C++", "JavaScript", "HTML/CSS", "DSA"};
        std::cout << "Actively building foundations & problem solving.\\n";
    }
};

int main() {
    AspiringDeveloper prasath;
    prasath.displayFocus();
    return 0;
}`,
    js: `// developerProfile.js
export const developer = {
  name: "PRASATH P",
  role: "BCA Student & Aspiring Software Developer",
  college: "National College, Trichy",
  graduation: "2024 — 2027 (Currently in 3rd Year)",
  interests: [
    "Software Development",
    "Web Technologies",
    "Data Structures & Algorithms",
    "Artificial Intelligence Fundamentals"
  ],
  status: "Curious to Learn • Passionate to Build",
  readyToImpact: true
};`,
  };

  const handleCopyCode = () => {
    const code = activeTab === 'cpp' ? codeSnippets.cpp : codeSnippets.js;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const runCode = () => {
    if (activeTab === 'cpp') {
      setTerminalOutput((prev) => [
        ...prev,
        '$ g++ Prasath_P_Profile.cpp -o app && ./app',
        'Actively building foundations & problem solving.',
        'Done: compiled successfully (0 errors, 0 warnings)',
      ]);
    } else if (activeTab === 'js') {
      setTerminalOutput((prev) => [
        ...prev,
        '$ node developerProfile.js',
        'Developer profile loaded: PRASATH P [Ready to Make an Impact]',
      ]);
    }
    setActiveTab('terminal');
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = termCommand.trim().toLowerCase();
    if (!cmd) return;

    let response = '';
    switch (cmd) {
      case 'help':
        response = 'Available commands: about, skills, education, status, clear';
        break;
      case 'about':
        response = 'PRASATH P: 3rd Year BCA student at National College, Trichy.';
        break;
      case 'skills':
        response = 'C, C++, JavaScript, Visual Basic, HTML/CSS, Git, DSA, OOP.';
        break;
      case 'education':
        response = 'BCA (2024–2027), National College, Trichy. Currently 3rd Year.';
        break;
      case 'status':
        response = 'Currently learning & building. Ready to make an impact.';
        break;
      case 'clear':
        setTerminalOutput(['Workspace reset.']);
        setTermCommand('');
        return;
      default:
        response = `Command not recognized: '${cmd}'. Type 'help' for options.`;
    }

    setTerminalOutput((prev) => [...prev, `$ ${termCommand}`, response]);
    setTermCommand('');
  };

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-purple-600/10 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-12 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Indicator & Label */}
            <div className="flex flex-wrap items-center gap-3">
              <span
                id="hero-label-badge"
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase ${
                  darkMode
                    ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-800/60'
                    : 'bg-cyan-50 text-cyan-800 border border-cyan-200'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                HELLO, I'M PRASATH
              </span>

              <div
                id="status-indicator-pill"
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                  darkMode
                    ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-800/40'
                    : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {PERSONAL_INFO.currentStatus}
              </div>
            </div>

            {/* Main Editorial Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
                <span className={`block ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Curious to learn.
                </span>
                <span className={`block ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  Passionate to build.
                </span>
                <span className="block mt-1 bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                  Ready to make an impact.
                </span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className={`text-base sm:text-lg max-w-2xl leading-relaxed ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {PERSONAL_INFO.shortBio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                id="hero-primary-cta"
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_30px_rgba(6,182,212,0.45)] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0b0f17]"
              >
                Explore My Work
              </a>

              <a
                id="hero-secondary-cta"
                href="#contact"
                className={`inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 border ${
                  darkMode
                    ? 'border-slate-700 text-slate-200 hover:bg-slate-800/80 hover:border-slate-600'
                    : 'border-slate-300 text-slate-800 hover:bg-slate-100 hover:border-slate-400'
                }`}
              >
                Let's Connect
              </a>
            </div>

            {/* Additional small information */}
            <div className={`pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-medium ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-purple-400" />
                <span>BCA 2024–2027 (National College)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Creative Interactive Developer Workspace */}
          <div className="lg:col-span-5 w-full">
            <div
              id="developer-workspace-card"
              className={`rounded-2xl border transition-all duration-300 shadow-2xl relative overflow-hidden ${
                darkMode
                  ? 'bg-[#111624] border-slate-800/90 shadow-black/60'
                  : 'bg-white border-slate-200 shadow-slate-300/40'
              }`}
            >
              {/* Window Header / Window Controls */}
              <div className={`flex items-center justify-between px-4 py-3 border-b ${
                darkMode ? 'border-slate-800 bg-[#0c101c]' : 'border-slate-200 bg-slate-50'
              }`}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 select-none">
                    workspace://prasath-p
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-black/20 p-0.5 rounded-lg text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setActiveTab('cpp')}
                    className={`px-2.5 py-1 rounded transition-all flex items-center gap-1 ${
                      activeTab === 'cpp'
                        ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Cpu className="w-3 h-3" />
                    <span>C++</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('js')}
                    className={`px-2.5 py-1 rounded transition-all flex items-center gap-1 ${
                      activeTab === 'js'
                        ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <FileCode2 className="w-3 h-3" />
                    <span>JS</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2.5 py-1 rounded transition-all flex items-center gap-1 ${
                      activeTab === 'terminal'
                        ? 'bg-purple-500/20 text-purple-300 font-semibold border border-purple-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Terminal className="w-3 h-3" />
                    <span>sh</span>
                  </button>
                </div>
              </div>

              {/* Code Snippet / Terminal Window Body */}
              <div className="p-4 sm:p-5 relative">
                {activeTab !== 'terminal' ? (
                  <div>
                    {/* Top Action Bar */}
                    <div className="flex items-center justify-between pb-3 text-xs font-mono border-b border-slate-800/40 mb-3">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
                        main • {activeTab === 'cpp' ? 'Prasath_P_Profile.cpp' : 'developerProfile.js'}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={handleCopyCode}
                          className="flex items-center gap-1 text-slate-400 hover:text-cyan-300 transition-colors p-1 rounded"
                          title="Copy snippet"
                          aria-label="Copy code snippet"
                        >
                          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copied ? 'Copied' : 'Copy'}</span>
                        </button>
                        <button
                          type="button"
                          onClick={runCode}
                          className="flex items-center gap-1 bg-cyan-500/15 text-cyan-300 hover:bg-cyan-500/25 px-2 py-0.5 rounded border border-cyan-500/30 transition-all text-[11px]"
                          title="Run simulated code"
                        >
                          <Play className="w-3 h-3 fill-cyan-300" />
                          <span>Run</span>
                        </button>
                      </div>
                    </div>

                    <pre className="font-mono text-xs leading-relaxed overflow-x-auto p-2 rounded-lg bg-black/30 border border-slate-800/50 text-slate-300 max-h-72">
                      <code>{codeSnippets[activeTab]}</code>
                    </pre>
                  </div>
                ) : (
                  <div className="font-mono text-xs space-y-2">
                    <div className="text-slate-400 border-b border-slate-800/60 pb-2 flex items-center justify-between">
                      <span className="text-emerald-400 flex items-center gap-1">
                        ● session: active
                      </span>
                      <span className="text-[11px] text-slate-500">Try typing 'skills' or 'status'</span>
                    </div>

                    <div className="space-y-1.5 overflow-y-auto max-h-56 pr-1">
                      {terminalOutput.map((line, i) => (
                        <p
                          key={i}
                          className={
                            line.startsWith('$')
                              ? 'text-cyan-400 font-semibold'
                              : line.includes('Done') || line.includes('Ready')
                              ? 'text-emerald-300'
                              : 'text-slate-300'
                          }
                        >
                          {line}
                        </p>
                      ))}
                    </div>

                    <form onSubmit={handleCommandSubmit} className="pt-2 flex items-center gap-2 border-t border-slate-800/50">
                      <span className="text-cyan-400 font-bold">$</span>
                      <input
                        type="text"
                        value={termCommand}
                        onChange={(e) => setTermCommand(e.target.value)}
                        placeholder="help, about, skills, status..."
                        className="bg-transparent border-none outline-none text-white text-xs w-full placeholder:text-slate-600"
                        aria-label="Interactive terminal input"
                      />
                      <button
                        type="submit"
                        className="text-cyan-400 hover:text-cyan-300 p-1"
                        aria-label="Send terminal command"
                      >
                        <Send className="w-3 h-3" />
                      </button>
                    </form>
                  </div>
                )}

                {/* Floating Technology Pills */}
                <div className="mt-4 pt-3 border-t border-slate-800/50 flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
                  <span className="text-slate-400 mr-1 text-[10px] uppercase tracking-wider">Stack:</span>
                  {['C', 'C++', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'DSA'].map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-0.5 rounded-md border ${
                        darkMode
                          ? 'bg-slate-900/80 text-cyan-300 border-cyan-900/40 hover:border-cyan-500/50'
                          : 'bg-slate-100 text-slate-700 border-slate-300 hover:border-cyan-400'
                      } transition-colors cursor-default`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Metric Card */}
              <div className={`px-4 py-2.5 border-t flex items-center justify-between text-xs ${
                darkMode ? 'bg-[#0c101c] border-slate-800/80 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
              }`}>
                <span className="flex items-center gap-1.5 font-mono">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  National College • BCA 2024–2027
                </span>
                <span className="font-mono text-cyan-400/90 font-medium">Trichy, TN</span>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 sm:pt-16 flex justify-center">
          <a
            href="#about"
            className={`flex flex-col items-center gap-2 text-xs font-mono tracking-wider uppercase transition-colors duration-200 ${
              darkMode ? 'text-slate-500 hover:text-cyan-400' : 'text-slate-400 hover:text-cyan-600'
            }`}
            aria-label="Scroll down to About section"
          >
            <span>Scroll To Discover</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
