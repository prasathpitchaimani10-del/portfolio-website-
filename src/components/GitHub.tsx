import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolio';
import { GitHubRepo } from '../types';
import { 
  Github, 
  ExternalLink, 
  GitFork, 
  Star, 
  FolderGit2, 
  Sparkles, 
  Code, 
  Terminal, 
  RefreshCw,
  GitCommit,
  CheckCircle
} from 'lucide-react';

interface GitHubSectionProps {
  darkMode: boolean;
}

export const GitHubSection: React.FC<GitHubSectionProps> = ({ darkMode }) => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.github.com/users/${PERSONAL_INFO.githubUsername}/repos?sort=updated&per_page=6`
        );
        if (!res.ok) {
          throw new Error('GitHub API response not ok');
        }
        const data = await res.json();
        if (isMounted && Array.isArray(data)) {
          setRepos(data);
          setFetchError(false);
        }
      } catch (err) {
        if (isMounted) {
          setFetchError(true);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchRepos();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 relative"
      aria-label="Projects and GitHub Repositories"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-[2px] bg-cyan-400" />
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400">
            08 / Code &amp; Repositories
          </span>
        </div>

        {/* Section Heading & CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Built, Learning, Experimenting
            </h2>
            <p className={`mt-3 text-base sm:text-lg max-w-2xl ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              "My GitHub is where I experiment with code, practice new concepts, and turn what I learn into projects."
            </p>
          </div>

          {/* Primary GitHub CTA Button */}
          <a
            id="github-explore-cta"
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:-translate-y-0.5 self-start md:self-auto shrink-0"
          >
            <Github className="w-4 h-4" />
            <span>Explore My GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-900" />
          </a>
        </div>

        {/* Profile Card & Stats Banner */}
        <div
          className={`rounded-2xl border p-6 sm:p-8 mb-10 transition-all duration-300 ${
            darkMode
              ? 'bg-[#111726] border-slate-800 shadow-xl'
              : 'bg-white border-slate-200 shadow-md'
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border ${
                darkMode
                  ? 'bg-slate-900 border-cyan-500/30 text-cyan-400'
                  : 'bg-cyan-50 border-cyan-200 text-cyan-700'
              }`}>
                <Github className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    @{PERSONAL_INFO.githubUsername}
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    Active Student Dev
                  </span>
                </div>
                <p className={`text-xs sm:text-sm mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Repositories covering computer applications coursework, data structure solutions, and hands-on experiments.
                </p>
              </div>
            </div>

            {/* Quick Stats Badges */}
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <div className={`px-4 py-2 rounded-xl border ${
                darkMode ? 'bg-slate-900/80 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}>
                <span className="text-cyan-400 block font-bold">Languages</span>
                <span>C • C++ • JS • HTML/CSS</span>
              </div>
              <div className={`px-4 py-2 rounded-xl border ${
                darkMode ? 'bg-slate-900/80 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}>
                <span className="text-purple-400 block font-bold">Platform</span>
                <span>GitHub Public Repos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Repositories List or Authentic Showcase */}
        {loading ? (
          <div className="py-16 text-center space-y-3">
            <RefreshCw className="w-8 h-8 text-cyan-400 animate-spin mx-auto" />
            <p className="text-sm font-mono text-slate-400">Connecting to GitHub repositories...</p>
          </div>
        ) : repos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 group ${
                  darkMode
                    ? 'bg-[#111726]/90 border-slate-800 hover:border-cyan-500/50 hover:bg-[#151d30] shadow-md hover:shadow-xl hover:shadow-cyan-950/20 -translate-y-1'
                    : 'bg-white border-slate-200 hover:border-cyan-300 hover:shadow-lg -translate-y-1'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800/40 mb-4">
                    <div className="flex items-center gap-2">
                      <FolderGit2 className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-mono text-slate-500">Public Repository</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  <h4 className={`text-base font-bold mb-2 group-hover:text-cyan-400 transition-colors ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {repo.name}
                  </h4>

                  <p className={`text-xs leading-relaxed line-clamp-3 mb-4 ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {repo.description || 'Practice code, algorithms, and coursework experiments.'}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/40 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    <span>{repo.language || 'Code'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-400" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3 text-slate-400" />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          /* Honest authentic fallback showcase when API is rate-limited or empty */
          <div
            className={`rounded-2xl border p-8 text-center space-y-4 ${
              darkMode ? 'bg-[#111726] border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <FolderGit2 className="w-10 h-10 text-cyan-400 mx-auto" />
            <div className="max-w-md mx-auto">
              <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Active Repository Workspace
              </h4>
              <p className={`text-xs sm:text-sm mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Explore all verified public codebases, practice problem implementations, and learning commits directly on Prasath's GitHub profile.
              </p>
            </div>
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/25 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>Browse All Repositories on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* GitHub Code Philosophy Banner */}
        <div className={`mt-10 p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
          darkMode ? 'bg-[#0e1422] border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
        }`}>
          <div className="flex items-center gap-3">
            <GitCommit className="w-5 h-5 text-cyan-400 shrink-0" />
            <p className="text-xs sm:text-sm">
              <span className="font-semibold text-cyan-400">Authentic Code Integrity:</span> Repositories reflect real day-to-day coding practice, academic assignments, and technology learning trails.
            </p>
          </div>
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold underline underline-offset-4 shrink-0"
          >
            <span>View github.com/{PERSONAL_INFO.githubUsername}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
};
