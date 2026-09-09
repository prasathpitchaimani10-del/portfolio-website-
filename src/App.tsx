/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Achievement } from './components/Achievement';
import { Interests } from './components/Interests';
import { CareerGoal } from './components/CareerGoal';
import { GitHubSection } from './components/GitHub';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  // Dark mode is the primary requested visual system (deep charcoal/near-black)
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('prasath_portfolio_theme');
    if (saved) return saved === 'dark';
    return true; // default dark-first
  });

  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    localStorage.setItem('prasath_portfolio_theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light-theme');
      document.body.style.backgroundColor = '#0b0f17';
      document.body.style.color = '#f1f5f9';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light-theme');
      document.body.style.backgroundColor = '#f8fafc';
      document.body.style.color = '#0f172a';
    }
  }, [darkMode]);

  // Subtle interactive desktop spotlight
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      id="app-root-container"
      className={`min-h-screen transition-colors duration-300 relative overflow-x-hidden ${
        darkMode ? 'bg-[#0b0f17] text-[#f1f5f9]' : 'bg-[#f8fafc] text-[#0f172a]'
      }`}
    >
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Subtle Desktop Mouse Glow */}
      {darkMode && (
        <div
          className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.04), transparent 80%)`,
          }}
        />
      )}

      {/* Navigation */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Education darkMode={darkMode} />
        <Certifications darkMode={darkMode} />
        <Achievement darkMode={darkMode} />
        <Interests darkMode={darkMode} />
        <CareerGoal darkMode={darkMode} />
        <GitHubSection darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
}
