import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolio';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Copy, 
  Check, 
  Send, 
  ArrowUpRight, 
  MessageSquare,
  Sparkles
} from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [senderName, setSenderName] = useState('');
  const [senderSubject, setSenderSubject] = useState('');
  const [senderMessage, setSenderMessage] = useState('');

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2200);
  };

  const handleComposeEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(senderSubject || `Portfolio Inquiry from ${senderName || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hello Prasath,\n\n${senderMessage || 'I came across your portfolio and would like to connect.'}\n\nBest regards,\n${senderName || 'A visitor'}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className={`py-20 sm:py-28 border-t transition-colors duration-300 relative ${
        darkMode ? 'border-slate-800/80 bg-[#0d121d]/80' : 'border-slate-200 bg-slate-50'
      }`}
      aria-label="Contact Prasath P"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-[2px] bg-cyan-400" />
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400">
            09 / Get In Touch
          </span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Let's Build Something Meaningful
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            I'm always interested in learning opportunities, software projects, collaborations, and meaningful conversations around technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left: Contact Direct Action Cards (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Email Card */}
            <div
              className={`rounded-2xl border p-6 flex items-center justify-between transition-all duration-300 ${
                darkMode
                  ? 'bg-[#111726] border-slate-800 hover:border-cyan-500/40'
                  : 'bg-white border-slate-200 hover:border-cyan-300 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                  darkMode ? 'bg-cyan-500/15 text-cyan-400' : 'bg-cyan-50 text-cyan-700'
                }`}>
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className={`text-sm sm:text-base font-semibold truncate block hover:text-cyan-400 transition-colors ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 ml-3">
                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className={`p-2 rounded-lg text-xs font-mono transition-all flex items-center gap-1 border ${
                    darkMode
                      ? 'border-slate-700 hover:bg-slate-800 text-slate-300'
                      : 'border-slate-200 hover:bg-slate-100 text-slate-700'
                  }`}
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  id="contact-email-btn"
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="px-4 py-2 rounded-lg text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors flex items-center gap-1"
                >
                  <span>Email Me</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div
              className={`rounded-2xl border p-6 flex items-center justify-between transition-all duration-300 ${
                darkMode
                  ? 'bg-[#111726] border-slate-800 hover:border-purple-500/40'
                  : 'bg-white border-slate-200 hover:border-purple-300 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                  darkMode ? 'bg-purple-500/15 text-purple-400' : 'bg-purple-50 text-purple-700'
                }`}>
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                    Phone / WhatsApp
                  </span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className={`text-sm sm:text-base font-semibold truncate block hover:text-purple-400 transition-colors ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    +91 {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 ml-3">
                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className={`p-2 rounded-lg text-xs font-mono transition-all flex items-center gap-1 border ${
                    darkMode
                      ? 'border-slate-700 hover:bg-slate-800 text-slate-300'
                      : 'border-slate-200 hover:bg-slate-100 text-slate-700'
                  }`}
                  title="Copy phone number"
                  aria-label="Copy phone"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  id="contact-phone-btn"
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="px-4 py-2 rounded-lg text-xs font-bold bg-purple-500 hover:bg-purple-400 text-white transition-colors flex items-center gap-1"
                >
                  <span>Call Me</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div
              className={`rounded-2xl border p-6 flex items-center justify-between transition-all duration-300 ${
                darkMode
                  ? 'bg-[#111726] border-slate-800 hover:border-slate-700'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                  darkMode ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-800'
                }`}>
                  <Github className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                    GitHub Profile
                  </span>
                  <span className={`text-sm sm:text-base font-semibold truncate block ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {PERSONAL_INFO.githubUsername}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 ml-3">
                <a
                  id="contact-github-btn"
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors flex items-center gap-1 border ${
                    darkMode
                      ? 'border-slate-700 bg-slate-900 text-white hover:bg-slate-800'
                      : 'border-slate-300 bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div
              className={`rounded-2xl border p-6 flex items-center gap-4 ${
                darkMode ? 'bg-[#111726]/60 border-slate-800/80' : 'bg-white border-slate-200'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                darkMode ? 'bg-emerald-500/15 text-emerald-400' : 'bg-emerald-50 text-emerald-700'
              }`}>
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                  Location &amp; Timezone
                </span>
                <p className={`text-sm sm:text-base font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {PERSONAL_INFO.location}
                </p>
                <span className="text-xs text-slate-500 font-mono">IST (UTC +5:30) • Open to remote and local opportunities</span>
              </div>
            </div>

          </div>

          {/* Right: Quick Direct Email Form Helper (6 cols) */}
          <div className="lg:col-span-6">
            <div
              className={`rounded-3xl border p-6 sm:p-8 space-y-5 ${
                darkMode
                  ? 'bg-[#111726] border-slate-800 shadow-2xl'
                  : 'bg-white border-slate-200 shadow-xl'
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/40">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                  <h3 className={`text-lg sm:text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Send a Message
                  </h3>
                </div>
                <span className="text-xs font-mono text-cyan-400">Direct Email Client</span>
              </div>

              <form onSubmit={handleComposeEmail} className="space-y-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="E.g. Priya Sharma or Tech Recruiter"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all ${
                      darkMode
                        ? 'bg-slate-900 border border-slate-700/80 text-white placeholder:text-slate-500 focus:border-cyan-400'
                        : 'bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-cyan-600'
                    }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    value={senderSubject}
                    onChange={(e) => setSenderSubject(e.target.value)}
                    placeholder="Project opportunity, internship, or question"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all ${
                      darkMode
                        ? 'bg-slate-900 border border-slate-700/80 text-white placeholder:text-slate-500 focus:border-cyan-400'
                        : 'bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-cyan-600'
                    }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    placeholder="Write a brief note or project description..."
                    className={`w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all resize-none ${
                      darkMode
                        ? 'bg-slate-900 border border-slate-700/80 text-white placeholder:text-slate-500 focus:border-cyan-400'
                        : 'bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-cyan-600'
                    }`}
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.25)] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Open in Email Client to Send</span>
                </button>

                <p className="text-center text-[11px] font-mono text-slate-500">
                  Transfers directly to your email app addressed to {PERSONAL_INFO.email}
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
