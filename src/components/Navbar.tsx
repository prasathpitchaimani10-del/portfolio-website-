import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolio';
import { Github, Menu, X, Sun, Moon, ArrowUpRight, Terminal } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['hero', 'about', 'skills', 'education', 'certifications', 'achievements', 'interests', 'goals', 'projects', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-nav-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? 'bg-[#0b0f17]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo */}
          <a
            id="brand-logo-link"
            href="#hero"
            className="group flex items-center gap-2.5 text-left focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-1 transition-all"
            aria-label="PRASATH P - Home"
          >
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-sm tracking-wider transition-all duration-300 ${
              darkMode
                ? 'bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                : 'bg-cyan-50 text-cyan-700 border border-cyan-200 group-hover:border-cyan-400'
            }`}>
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className={`font-bold tracking-tight text-lg block leading-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] font-mono tracking-widest text-cyan-400/90 uppercase block">
                BCA • Aspiring Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-navigation" aria-label="Main Navigation" className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  id={`nav-link-${link.label.toLowerCase()}`}
                  href={link.href}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 relative ${
                    isActive
                      ? darkMode
                        ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-800/40'
                        : 'text-cyan-700 bg-cyan-50 border border-cyan-200'
                      : darkMode
                        ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-3 right-3 h-[2px] bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* GitHub Profile link */}
            <a
              id="nav-github-link"
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-all duration-200 flex items-center gap-1.5 text-xs font-mono ${
                darkMode
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-700/60'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
              title="View GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>

            {/* Theme Toggle */}
            <button
              id="theme-toggle-btn"
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className={`p-2 rounded-lg transition-all duration-200 ${
                darkMode
                  ? 'text-amber-300 hover:bg-slate-800 border border-slate-700/60'
                  : 'text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
              className={`md:hidden p-2 rounded-lg transition-all ${
                darkMode
                  ? 'text-slate-200 hover:bg-slate-800'
                  : 'text-slate-800 hover:bg-slate-100'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className={`md:hidden border-b px-4 pt-3 pb-6 space-y-1 transition-all animate-in fade-in slide-in-from-top-4 duration-200 ${
            darkMode
              ? 'bg-[#0e1422] border-slate-800 text-slate-200 shadow-2xl'
              : 'bg-white border-slate-200 text-slate-800 shadow-lg'
          }`}
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-base font-medium transition-all flex items-center justify-between ${
                  darkMode
                    ? 'hover:bg-slate-800/80 hover:text-cyan-400'
                    : 'hover:bg-slate-100 hover:text-cyan-700'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-slate-400">→</span>
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800/50 mt-2 flex flex-col gap-2">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20"
            >
              <Github className="w-4 h-4" />
              <span>Explore GitHub Repositories</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <div className="text-center text-xs font-mono text-slate-400 pt-1">
              📍 {PERSONAL_INFO.location}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
