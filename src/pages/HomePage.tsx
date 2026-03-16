/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, useInView } from 'motion/react';
import { Smartphone, Github, Mail, ExternalLink, ChevronRight, Gamepad2, Users, Shield, Sparkles, ArrowRight, Play, Zap, Lock, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ─── Smooth-scroll helper (no # in URL) ─── */
function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ─── Data ─── */
const apps = [
  {
    name: 'Kahaaniverse',
    tagline: 'Where Stories Come Alive',
    description: 'A storytelling platform where writers can publish and share original stories in Hindi, Hinglish, and English. Discover new voices and immerse yourself in community-driven narratives.',
    image: '/images/kahaaniverse.jpg',
    category: 'Storytelling',
    color: 'from-purple-500 to-pink-500',
    accent: 'text-purple-400',
    accentBg: 'bg-purple-500/10 border-purple-500/20',
    features: ['Story Publishing', 'Multi-language Support', 'Community of Writers', 'Author Profiles'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.kahaaniverse.app',
  },
  {
    name: 'Zen Mosaic',
    tagline: 'Relax, Match & Master',
    description: 'A tranquil tile-matching puzzle game inspired by classic Mahjong. Beautiful Japanese gardens, soothing music, and hundreds of challenging levels to keep your mind sharp.',
    image: '/images/zen-mosaic.png',
    category: 'Puzzle',
    color: 'from-emerald-500 to-teal-500',
    accent: 'text-emerald-400',
    accentBg: 'bg-emerald-500/10 border-emerald-500/20',
    features: ['Hundreds of Levels', 'Zen Aesthetics', 'Daily Challenges', 'Relaxing Soundtrack'],
    playStoreUrl: null,
  },
  {
    name: 'NineLogic',
    tagline: 'Sudoku Reimagined',
    description: 'A Sudoku-inspired puzzle game with a unique parity twist — certain cells only accept even or odd numbers. Endless puzzles, daily challenges, and progress tracking.',
    image: '/images/ninelogic.png',
    category: 'Puzzle',
    color: 'from-orange-500 to-red-500',
    accent: 'text-orange-400',
    accentBg: 'bg-orange-500/10 border-orange-500/20',
    features: ['Parity Mechanics', 'Endless Puzzles', 'Daily Challenges', 'Progress Stats'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ninelogic.app',
  },
];

const pillars = [
  { title: 'Android Native', desc: 'Built exclusively for Android with native performance', icon: Smartphone, color: 'from-emerald-500/20 to-teal-500/20', border: 'border-emerald-500/20', iconColor: 'text-emerald-400' },
  { title: 'Puzzle Innovation', desc: 'Unique mechanics that challenge conventional thinking', icon: Cpu, color: 'from-indigo-500/20 to-purple-500/20', border: 'border-indigo-500/20', iconColor: 'text-indigo-400' },
  { title: 'Privacy First', desc: 'Minimal data collection with transparent policies', icon: Lock, color: 'from-amber-500/20 to-orange-500/20', border: 'border-amber-500/20', iconColor: 'text-amber-400' },
  { title: 'Lightweight & Fast', desc: 'Optimized apps that run smooth on every device', icon: Zap, color: 'from-pink-500/20 to-rose-500/20', border: 'border-pink-500/20', iconColor: 'text-pink-400' },
];

/* ─── Pillar Card Component ─── */
function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = pillar.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center px-6 py-8"
    >
      <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${pillar.color} border ${pillar.border} flex items-center justify-center`}>
        <Icon className={`w-7 h-7 ${pillar.iconColor}`} />
      </div>
      <div className="text-lg font-bold text-white mb-1">{pillar.title}</div>
      <div className="text-sm text-slate-400">{pillar.desc}</div>
    </motion.div>
  );
}

/* ─── App Card Component ─── */
function AppCard({ app, index }: { app: typeof apps[0]; index: number }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <div className="glass-card rounded-3xl overflow-hidden glow-border transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col h-full">
        {/* App Icon / Image */}
        <div className={`relative p-8 flex items-center justify-center bg-gradient-to-br ${app.color} bg-opacity-5`}>
          <div className="absolute inset-0 bg-[var(--color-surface)] opacity-90"></div>
          <div className="relative z-10 flex flex-col items-center">
            <motion.img
              src={app.image}
              alt={app.name}
              className="w-28 h-28 rounded-[1.75rem] shadow-2xl object-cover"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <div className={`mt-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border ${app.accentBg}`}>
              <span className={app.accent}>{app.category}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 flex-grow flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
            {app.name}
          </h3>
          <p className={`text-sm font-medium mb-4 ${app.accent}`}>{app.tagline}</p>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
            {app.description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-2 mb-8">
            {app.features.map((feature) => (
              <div key={feature} className="flex items-center text-xs text-slate-400">
                <ChevronRight className={`w-3 h-3 mr-1.5 flex-shrink-0 ${app.accent}`} />
                {feature}
              </div>
            ))}
          </div>

          {/* CTA */}
          {app.playStoreUrl ? (
            <a
              href={app.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="play-button w-full text-white group/btn"
            >
              <Play className="w-5 h-5 text-indigo-400 group-hover/btn:text-indigo-300" />
              <span>Get it on Google Play</span>
              <ExternalLink className="w-4 h-4 ml-auto text-slate-500 group-hover/btn:text-indigo-400 transition-colors" />
            </a>
          ) : (
            <div className="play-button w-full text-slate-400 cursor-default border-slate-700/50">
              <Sparkles className="w-5 h-5 text-slate-500" />
              <span>Coming Soon to Play Store</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Page ─── */
export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [contactName, setContactName] = React.useState('');
  const [contactEmail, setContactEmail] = React.useState('');
  const [contactMessage, setContactMessage] = React.useState('');

  const handleMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${contactName || 'Website Visitor'}`);
    const body = encodeURIComponent(`Name: ${contactName}\nEmail: ${contactEmail}\n\nMessage:\n${contactMessage}`);
    window.location.href = `mailto:kahaaniverse3@gmail.com?subject=${subject}&body=${body}`;
  };

  const navLinks = [
    { label: 'Apps', target: 'apps' },
    { label: 'About', target: 'about' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-surface)] noise-overlay">
      {/* ────────── Navigation ────────── */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Gamepad2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-display font-bold gradient-text">
                Rishish Pradhan Studios
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => scrollTo(link.target)}
                  className="text-slate-400 hover:text-white transition-colors text-sm font-medium cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://github.com/rishishpradhan16"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
              >
                <Github className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center"
            >
              <div className="space-y-1">
                <span className={`block w-4 h-0.5 bg-slate-400 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
                <span className={`block w-4 h-0.5 bg-slate-400 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden border-t border-white/5"
          >
            <div className="p-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => { scrollTo(link.target); setMobileMenuOpen(false); }}
                  className="block w-full text-left px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all text-sm font-medium"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://github.com/rishishpradhan16"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all text-sm font-medium"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* ────────── Hero Section ────────── */}
      <section className="relative pt-16 min-h-[90vh] flex items-center overflow-hidden">
        {/* Banner Background */}
        <div className="absolute inset-0">
          <img
            src="/images/studio-banner.jpg"
            alt="Rishish Pradhan Studios"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-surface)]/60 via-[var(--color-surface)]/80 to-[var(--color-surface)]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-surface)]/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-medium text-indigo-300">Indie Game Studio</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6">
              <span className="text-white">Crafting </span>
              <span className="gradient-text">Digital</span>
              <br />
              <span className="text-white">Experiences</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-xl mb-10 leading-relaxed">
              From parity-based puzzles to community-driven storytelling — we build
              unique mobile experiences that challenge, inspire, and connect.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo('apps')}
                className="px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all shadow-xl shadow-indigo-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                Explore Our Apps
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-8 py-4 rounded-2xl font-semibold text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center cursor-pointer"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating app icons */}
        <div className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 z-10">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {apps.map((app, i) => (
              <motion.img
                key={app.name}
                src={app.image}
                alt={app.name}
                className="w-20 h-20 rounded-2xl shadow-2xl border-2 border-white/10"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3 + i * 0.5, ease: 'easeInOut', delay: i * 0.3 }}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ────────── Pillars Section ────────── */}
      <section className="relative z-10 -mt-8 px-4">
        <div className="max-w-5xl mx-auto glass-card rounded-3xl glow">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
            {pillars.map((pillar, i) => (
              <PillarCard key={pillar.title} pillar={pillar} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ────────── Divider ────────── */}
      <div className="max-w-xl mx-auto my-20">
        <hr className="divider-glow" />
      </div>

      {/* ────────── Apps Section ────────── */}
      <section id="apps" className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-sm font-medium text-indigo-300 mb-6">
                Our Portfolio
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Apps & Games
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto">
                Each app is crafted with care — delivering unique experiences, polished design, and engaging gameplay.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app, i) => (
              <AppCard key={app.name} app={app} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ────────── About / Vision Section ────────── */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm font-medium text-purple-300 mb-6">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Built with <span className="gradient-text">Passion</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Rishish Pradhan Studios is an independent mobile app studio focused on creating innovative puzzle games and creative platforms. We believe in the power of simple yet deep mechanics that challenge the mind and connect people through stories.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Founded by Rishish Pradhan, our mission is to deliver high-quality, lightweight Android experiences that bring logic, creativity, and joy to your daily routine.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Shield, title: 'Privacy First', desc: 'Minimal data collection, transparent policies' },
                  { icon: Sparkles, title: 'Quality Craft', desc: 'Polished experiences with attention to detail' },
                  { icon: Gamepad2, title: 'Unique Games', desc: 'Innovative mechanics you won\'t find elsewhere' },
                  { icon: Users, title: 'Community Driven', desc: 'Built by feedback from real users' },
                ].map((item) => (
                  <div key={item.title} className="glass-card-light rounded-2xl p-4 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0.5">{item.title}</h4>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden glow">
                <img
                  src="/images/studio-banner.jpg"
                  alt="Rishish Pradhan Studios"
                  className="w-full h-auto rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-transparent to-transparent"></div>
              </div>
              {/* Floating badges */}
              <motion.div
                className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-5 py-3 flex items-center gap-3"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <Gamepad2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white">3+</div>
                  <div className="text-xs text-slate-400">Published Apps</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ────────── Contact Section ────────── */}
      <section id="contact" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-sm font-medium text-indigo-300 mb-6">
                Contact
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto">
                Have a question about our apps, want to collaborate, or just say hi? We'd love to hear from you.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <a
                href="mailto:kahaaniverse3@gmail.com"
                className="glass-card rounded-2xl p-6 flex items-center gap-4 hover:border-indigo-500/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Email</p>
                  <p className="text-white font-medium group-hover:text-indigo-300 transition-colors">kahaaniverse3@gmail.com</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-600 ml-auto" />
              </a>

              <a
                href="https://github.com/rishishpradhan16"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-6 flex items-center gap-4 hover:border-indigo-500/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                  <Github className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">GitHub</p>
                  <p className="text-white font-medium group-hover:text-indigo-300 transition-colors">github.com/rishishpradhan16</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-600 ml-auto" />
              </a>

              <div className="glass-card rounded-2xl p-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Platform</p>
                  <p className="text-white font-medium">Android (Google Play)</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form — opens user's email client via mailto */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8"
            >
              <form className="space-y-5" onSubmit={handleMailto}>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1.5">Name</label>
                  <input
                    required
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1.5">Email</label>
                  <input
                    required
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1.5">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all resize-none"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-900/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail className="w-5 h-5" />
                  Send via Email
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-xs text-slate-600 text-center">
                  This will open your default email app with the message pre-filled.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ────────── Footer ────────── */}
      <footer className="border-t border-white/5 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <Gamepad2 className="w-4 h-4 text-white" />
                </div>
                <span className="font-display font-bold gradient-text">Rishish Pradhan Studios</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                An independent mobile app studio crafting unique puzzle games and creative platforms for Android.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.target}
                    onClick={() => scrollTo(link.target)}
                    className="block text-sm text-slate-500 hover:text-indigo-400 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                ))}
                <Link to="/privacy" className="block text-sm text-slate-500 hover:text-indigo-400 transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Connect</h4>
              <div className="space-y-2">
                <a href="mailto:kahaaniverse3@gmail.com" className="block text-sm text-slate-500 hover:text-indigo-400 transition-colors">
                  kahaaniverse3@gmail.com
                </a>
                <a href="https://github.com/rishishpradhan16" target="_blank" rel="noopener noreferrer" className="block text-sm text-slate-500 hover:text-indigo-400 transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <hr className="border-white/5 mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-xs">
              © {new Date().getFullYear()} Rishish Pradhan Studios. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="text-xs text-slate-600 hover:text-indigo-400 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-slate-800">·</span>
              <button
                onClick={() => scrollTo('contact')}
                className="text-xs text-slate-600 hover:text-indigo-400 transition-colors cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
