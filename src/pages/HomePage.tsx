/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, BookOpen, Clock, Github, Mail, ExternalLink, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [formStatus, setFormStatus] = React.useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="min-h-screen gradient-bg">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                Rishish Pradhan Studios
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#games" className="text-slate-600 hover:text-indigo-600 transition-colors">Games</a>
              <a href="#about" className="text-slate-600 hover:text-indigo-600 transition-colors">About</a>
              <a href="#contact" className="text-slate-600 hover:text-indigo-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 mb-6 tracking-tight">
              Indie Android Games & <br />
              <span className="text-indigo-600">Puzzle Experiences</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Crafting unique, challenging, and storytelling experiences for mobile. 
              From parity-based puzzles to community-driven narratives.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#games" 
                className="px-8 py-4 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center"
              >
                View Games <ChevronRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 bg-white text-slate-900 rounded-full font-medium border border-slate-200 hover:border-indigo-600 transition-all flex items-center justify-center"
              >
                Contact
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Our Games</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Game 1: NineLogic */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-card rounded-3xl overflow-hidden flex flex-col group"
            >
              <div className="aspect-video bg-indigo-50 flex items-center justify-center relative overflow-hidden p-6">
                {/* Mock Phone Frame */}
                <div className="w-32 h-64 bg-slate-900 rounded-[2rem] border-4 border-slate-800 shadow-2xl relative overflow-hidden flex flex-col">
                  <div className="w-12 h-1 bg-slate-800 mx-auto mt-2 rounded-full"></div>
                  <div className="flex-grow flex flex-col items-center justify-center p-2">
                    <div className="grid grid-cols-3 gap-1 w-full aspect-square">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="bg-white/10 rounded-sm flex items-center justify-center text-[8px] text-white/40">
                          {i % 2 === 0 ? 'E' : 'O'}
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 text-[10px] font-bold text-white">NineLogic</div>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/10 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-indigo-600 uppercase tracking-wider shadow-sm">
                  Puzzle
                </div>
              </div>
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">NineLogic</h3>
                <p className="text-slate-600 mb-6 line-clamp-3">
                  A Sudoku-inspired puzzle game with a unique parity twist where certain cells only accept even or odd numbers.
                </p>
                <ul className="space-y-2 mb-8 text-sm text-slate-500">
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-indigo-500" /> Endless puzzles</li>
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-indigo-500" /> Daily challenges</li>
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-indigo-500" /> Progress stats</li>
                </ul>
                <div className="mt-auto">
                  <a 
                    href="https://play.google.com/store" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-slate-900 text-white rounded-xl font-medium flex items-center justify-center hover:bg-indigo-600 transition-all shadow-md active:scale-95"
                  >
                    Get it on Google Play
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Game 2: KahaaniVerse */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-card rounded-3xl overflow-hidden flex flex-col group"
            >
              <div className="aspect-video bg-violet-50 flex items-center justify-center relative overflow-hidden p-6">
                {/* Mock Phone Frame */}
                <div className="w-32 h-64 bg-slate-900 rounded-[2rem] border-4 border-slate-800 shadow-2xl relative overflow-hidden flex flex-col">
                  <div className="w-12 h-1 bg-slate-800 mx-auto mt-2 rounded-full"></div>
                  <div className="flex-grow p-3 space-y-2">
                    <div className="h-2 w-3/4 bg-white/20 rounded-full"></div>
                    <div className="h-1 w-full bg-white/10 rounded-full"></div>
                    <div className="h-1 w-full bg-white/10 rounded-full"></div>
                    <div className="h-1 w-2/3 bg-white/10 rounded-full"></div>
                    <div className="mt-4 h-16 w-full bg-violet-500/20 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-violet-400" />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/10 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-violet-600 uppercase tracking-wider shadow-sm">
                  Storytelling
                </div>
              </div>
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-violet-600 transition-colors">KahaaniVerse</h3>
                <p className="text-slate-600 mb-6 line-clamp-3">
                  A storytelling platform where writers can publish and share original stories in Hindi, Hinglish, and English.
                </p>
                <ul className="space-y-2 mb-8 text-sm text-slate-500">
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-violet-500" /> Story publishing</li>
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-violet-500" /> Reading platform</li>
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-violet-500" /> Community of writers</li>
                </ul>
                <div className="mt-auto">
                  <a 
                    href="https://play.google.com/store" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-slate-900 text-white rounded-xl font-medium flex items-center justify-center hover:bg-violet-600 transition-all shadow-md active:scale-95"
                  >
                    Get it on Google Play
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Game 3: Coming Soon */}
            <div className="glass-card rounded-3xl overflow-hidden flex flex-col border-dashed border-2 border-slate-300 bg-transparent">
              <div className="aspect-video bg-slate-100 flex items-center justify-center">
                <Clock className="w-16 h-16 text-slate-300" />
              </div>
              <div className="p-8 flex-grow flex flex-col items-center justify-center text-center">
                <h3 className="text-2xl font-bold text-slate-400 mb-2">New Game</h3>
                <p className="text-slate-400 font-medium uppercase tracking-widest text-sm">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-8">About the Studio</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Rishish Pradhan Studios is an independent mobile app studio focused on creating puzzle games and creative platforms. 
            We believe in the power of simple yet deep mechanics that challenge the mind and connect people through stories.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Founded by Rishish Pradhan, our mission is to deliver high-quality, lightweight Android experiences that 
            bring a touch of logic and creativity to your daily routine.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Get in Touch</h2>
              <p className="text-slate-400 mb-10 text-lg">
                Have a question about our games or want to collaborate? We'd love to hear from you.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">Email</p>
                    <a href="mailto:contact@rishishpradhan.com" className="text-lg hover:text-indigo-400 transition-colors">contact@rishishpradhan.com</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4">
                    <Github className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">GitHub</p>
                    <a href="https://github.com/rishishpradhan" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-indigo-400 transition-colors">github.com/rishishpradhan</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card bg-white/5 border-white/10 p-8 rounded-3xl">
              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                    <ChevronRight className="w-8 h-8 text-emerald-500 rotate-[-90deg]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-slate-400">Thanks for reaching out. We'll get back to you soon.</p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="mt-8 text-indigo-400 hover:text-indigo-300 font-medium"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="How can we help?"
                    ></textarea>
                  </div>
                  <button 
                    disabled={formStatus === 'sending'}
                    className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-900/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {formStatus === 'sending' ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Rishish Pradhan Studios. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-slate-500 hover:text-indigo-600 transition-colors">Privacy Policy</Link>
            <a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
