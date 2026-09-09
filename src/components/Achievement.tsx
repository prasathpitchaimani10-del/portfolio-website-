import React, { useState } from 'react';
import { HACKATHON_DATA } from '../data/portfolio';
import { 
  Trophy, 
  Users, 
  Lightbulb, 
  Workflow, 
  Bot, 
  MessageSquare, 
  Sparkles, 
  Send, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

interface AchievementProps {
  darkMode: boolean;
}

export const Achievement: React.FC<AchievementProps> = ({ darkMode }) => {
  // Interactive prototype demo simulation
  const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([
    { sender: 'bot', text: 'Hello! I am the chatbot prototype developed during our Smart India Hackathon collaboration. How can I assist you today?' },
    { sender: 'user', text: 'What was your primary objective in this project?' },
    { sender: 'bot', text: 'Our team aimed to solve student enquiry routing and automate frequent questions with low-latency structured responses.' },
  ]);
  const [inputValue, setInputValue] = useState('');

  const samplePrompts = [
    'How did the team collaborate?',
    'What technologies were involved?',
    'Tell me about the prototype design',
  ];

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const newMessages = [...messages, { sender: 'user' as const, text: textToSend }];
    setMessages(newMessages);
    setInputValue('');

    setTimeout(() => {
      let botReply = 'Our prototype focused on modular dialogue management and clean responsive UI states.';
      if (textToSend.includes('collaborate')) {
        botReply = 'We split work between conversation tree design, frontend response styling, and quick iteration testing.';
      } else if (textToSend.includes('technologies')) {
        botReply = 'The project utilized web UI components, JavaScript event handling, and structured intent mapping logic.';
      } else if (textToSend.includes('prototype design')) {
        botReply = 'The design emphasized minimal distraction, swift response times, and accessible conversational bubbles.';
      }
      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    }, 600);
  };

  return (
    <section
      id="achievements"
      className={`py-20 sm:py-28 border-t transition-colors duration-300 ${
        darkMode ? 'border-slate-800/80 bg-[#0d121d]/70' : 'border-slate-200 bg-slate-50/70'
      }`}
      aria-label="Hackathon and Key Achievements"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-[2px] bg-cyan-400" />
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400">
            05 / Milestones &amp; Experience
          </span>
        </div>

        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Featured Achievement
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            High-intensity collaborative engineering experience putting problem solving, team synchronization, and rapid prototyping into practice.
          </p>
        </div>

        {/* Achievement Showcase Card */}
        <div
          className={`rounded-3xl border overflow-hidden transition-all duration-300 ${
            darkMode
              ? 'bg-[#111726] border-slate-800 shadow-2xl shadow-black/40'
              : 'bg-white border-slate-200 shadow-xl'
          }`}
        >
          {/* Header Banner */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-slate-800/40 bg-gradient-to-r from-cyan-950/30 via-slate-900/40 to-purple-950/20">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  {HACKATHON_DATA.badge}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/15 text-purple-300 border border-purple-500/30">
                  {HACKATHON_DATA.role}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Verified Participation
              </div>
            </div>

            <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-4 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              {HACKATHON_DATA.title}
            </h3>

            <p className={`text-base sm:text-lg max-w-3xl leading-relaxed ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              "{HACKATHON_DATA.description}"
            </p>
          </div>

          {/* Body Content & Interactive Prototype Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10">
            
            {/* Left: 3 Core Highlights (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <h4 className={`text-xs font-mono uppercase tracking-widest font-semibold ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Core Pillars of the Hackathon Experience
              </h4>

              <div className="space-y-4">
                {HACKATHON_DATA.highlights.map((h, i) => (
                  <div
                    key={h.title}
                    className={`p-5 rounded-2xl border transition-all ${
                      darkMode
                        ? 'bg-slate-900/70 border-slate-800/80 hover:border-cyan-500/40'
                        : 'bg-slate-50 border-slate-200 hover:border-cyan-300'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${
                        i === 0 ? 'bg-cyan-500/15 text-cyan-400' : i === 1 ? 'bg-amber-500/15 text-amber-400' : 'bg-purple-500/15 text-purple-400'
                      }`}>
                        {i === 0 && <Users className="w-4 h-4" />}
                        {i === 1 && <Lightbulb className="w-4 h-4" />}
                        {i === 2 && <Workflow className="w-4 h-4" />}
                      </div>
                      <h5 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {h.title}
                      </h5>
                    </div>
                    <p className={`text-xs sm:text-sm leading-relaxed pl-11 ${
                      darkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {h.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Integrity Statement */}
              <div className={`p-4 rounded-xl border flex items-start gap-3 text-xs ${
                darkMode ? 'bg-slate-900/40 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
              }`}>
                <ShieldAlert className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <p>
                  <strong className="text-slate-200 font-medium">Authentic Disclosure:</strong> This project marks active hackathon team participation and functional prototype development, demonstrating real collaborative drive under time constraints.
                </p>
              </div>
            </div>

            {/* Right: Visual Chatbot Prototype Showcase (6 cols) */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/40 mb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold">
                  <Bot className="w-4 h-4" />
                  <span>Interactive Chatbot Prototype Demo</span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">Hackathon POC</span>
              </div>

              {/* Chat Simulation Window */}
              <div
                id="hackathon-chatbot-preview"
                className={`rounded-2xl border p-4 sm:p-5 flex-1 flex flex-col justify-between ${
                  darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-100 border-slate-200'
                }`}
              >
                {/* Chat Log */}
                <div className="space-y-3 overflow-y-auto max-h-72 pr-1 mb-4 text-xs">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-xl px-3.5 py-2.5 leading-relaxed ${
                          msg.sender === 'user'
                            ? 'bg-cyan-500 text-slate-950 font-medium rounded-br-xs'
                            : darkMode
                            ? 'bg-slate-800/90 text-slate-200 border border-slate-700/60 rounded-bl-xs'
                            : 'bg-white text-slate-800 border border-slate-200 shadow-xs rounded-bl-xs'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Prompts */}
                <div className="pt-2 border-t border-slate-800/40 mb-3">
                  <span className="text-[10px] font-mono uppercase text-slate-500 block mb-1.5">
                    Click to test dialogue response:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {samplePrompts.map((prompt) => (
                      <button
                        key={prompt}
                        type="button"
                        onClick={() => handleSendMessage(prompt)}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                          darkMode
                            ? 'bg-slate-900 text-cyan-300 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-800'
                            : 'bg-white text-cyan-700 border border-slate-200 hover:border-cyan-300'
                        }`}
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Bar */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage(inputValue);
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask about the hackathon prototype..."
                    className={`flex-1 px-3 py-2 rounded-xl text-xs outline-none transition-all ${
                      darkMode
                        ? 'bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-400'
                        : 'bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-cyan-600'
                    }`}
                  />
                  <button
                    type="submit"
                    className="p-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors"
                    aria-label="Send message to prototype"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
