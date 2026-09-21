/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { 
  Smartphone, Github, Mail, ExternalLink, ChevronRight, Gamepad2, Users, 
  ShieldCheck, Sparkles, ArrowRight, Play, Zap, Lock, Cpu, Layers, 
  Terminal, Code2, BookOpen, CheckCircle2, Youtube, Instagram, X, ArrowUpRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { fontData } from '../data/founderData';
import { articlesData, Article } from '../data/articlesData';

/* ─── Smooth-scroll helper ─── */
function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ─── App Data ─── */
const apps = [
  {
    id: 'mahjong-tales',
    name: 'Mahjong Tales',
    titleTag: 'Tile Match Game',
    tagline: 'Zen Tile Matching & Puzzle Adventure',
    description: 'A tranquil tile-matching puzzle game inspired by timeless Mahjong logic. Immerse yourself in serene environments, solve intricate tile patterns, and challenge your mind daily.',
    image: '/images/mahjong-tales.png',
    category: 'Games',
    color: 'from-pink-500 to-rose-600',
    accent: 'text-pink-400',
    accentBg: 'bg-pink-500/10 border-pink-500/30',
    features: ['Tranquil Mahjong Tiles', 'Hundreds of Levels', 'Daily Zen Challenges', 'Relaxing Soundscapes'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.zenmahjong.puzzle',
    isNew: true,
  },
  {
    id: 'nostalgiacam',
    name: 'NostalgiaCam',
    titleTag: 'Retro Camera',
    tagline: 'Capture Vintage Retro Aesthetics',
    description: 'Transform everyday snapshots into nostalgic 90s analog film art. Features authentic camera light leaks, subtle grain, instant retro color profiles, and customizable lens effects.',
    image: '/images/nostalgiacam.png',
    category: 'Photography',
    color: 'from-cyan-500 to-blue-600',
    accent: 'text-cyan-400',
    accentBg: 'bg-cyan-500/10 border-cyan-500/30',
    features: ['Vintage Film Filters', 'Light Leaks & Grain', 'Instant Retro Preview', 'Aesthetic Photo Edits'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.nostalgiacam',
    isNew: true,
  },
  {
    id: 'arrow-rage',
    name: 'Arrow Rage',
    titleTag: 'Action Shooter Game',
    tagline: 'High-Octane Precision & Reflexes',
    description: 'An intense action game where speed and precision collide. Navigate energetic neon obstacles, target dynamic barriers, unlock specialized arrows, and dominate leaderboards.',
    image: '/images/arrow-rage.png',
    category: 'Games',
    color: 'from-pink-600 to-cyan-500',
    accent: 'text-pink-400',
    accentBg: 'bg-pink-500/10 border-pink-500/30',
    features: ['Precision Shooter Combat', 'Dynamic Arrow Mechanics', 'Challenging Boss Targets', 'High Score Leaderboards'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.arrowrage',
    isNew: true,
  },
  {
    id: 'kahaaniverse',
    name: 'Kahaaniverse',
    titleTag: 'Storytelling Platform',
    tagline: 'Where Stories Come Alive',
    description: 'A dedicated storytelling platform where writers publish and share original stories in Hindi, Hinglish, and English. Discover fresh voices and build a community around stories.',
    image: '/images/kahaaniverse.jpg',
    category: 'Storytelling',
    color: 'from-purple-500 to-pink-500',
    accent: 'text-purple-400',
    accentBg: 'bg-purple-500/10 border-purple-500/30',
    features: ['Story Publishing', 'Multi-language Support', 'Community of Writers', 'Author Profiles'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.kahaaniverse.app',
    isNew: false,
  },
  {
    id: 'ninelogic',
    name: 'NineLogic',
    titleTag: 'Parity Sudoku Puzzle',
    tagline: 'Sudoku Reimagined with Parity',
    description: 'A Sudoku-inspired puzzle game with an inventive parity twist — target cells strictly accept odd or even numbers. Solve endless puzzles and sharpen your logic.',
    image: '/images/ninelogic.png',
    category: 'Games',
    color: 'from-amber-500 to-orange-500',
    accent: 'text-amber-400',
    accentBg: 'bg-amber-500/10 border-amber-500/30',
    features: ['Parity Mechanics', 'Endless Puzzles', 'Daily Challenges', 'Progress Stats'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ninelogic.app',
    isNew: false,
  },
];

const categories = ['All', 'Games', 'Photography', 'Storytelling'];

const pillars = [
  { title: 'Android Native', desc: 'Crafted natively for maximum speed and smooth 60fps responsiveness', icon: Smartphone, color: 'from-pink-500/20 to-rose-500/20', border: 'border-pink-500/30', iconColor: 'text-pink-400' },
  { title: 'Innovative Gameplay', desc: 'Distinct puzzle & camera mechanics that push creative boundaries', icon: Cpu, color: 'from-cyan-500/20 to-blue-500/20', border: 'border-cyan-500/30', iconColor: 'text-cyan-400' },
  { title: 'Privacy First', desc: 'Minimal permissions with strict data privacy and transparency', icon: Lock, color: 'from-purple-500/20 to-pink-500/20', border: 'border-purple-500/30', iconColor: 'text-purple-400' },
  { title: 'Lightweight & Optimized', desc: 'Low footprint apps optimized for all modern Android devices', icon: Zap, color: 'from-amber-500/20 to-orange-500/20', border: 'border-amber-500/30', iconColor: 'text-amber-400' },
];

/* ─── Pillar Card Component ─── */
function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number; key?: React.Key }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = pillar.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center px-6 py-8 relative group"
    >
      <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${pillar.color} border ${pillar.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`w-7 h-7 ${pillar.iconColor}`} />
      </div>
      <div className="text-lg font-display font-bold text-white mb-2">{pillar.title}</div>
      <div className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</div>
    </motion.div>
  );
}

/* ─── App Card Component ─── */
function AppCard({ app, index }: { app: typeof apps[0]; index: number; key?: React.Key }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group"
    >
      <div className="glass-card glass-card-hover rounded-3xl overflow-hidden glow-border flex flex-col h-full relative">
        {/* New Tag Badge */}
        {app.isNew && (
          <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/30">
            NEW RELEASE
          </div>
        )}

        {/* App Icon / Header Graphic */}
        <div className="relative p-8 flex items-center justify-center bg-gradient-to-br from-indigo-950/60 to-slate-950/80 border-b border-white/5">
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="relative">
              <motion.img
                src={app.image}
                alt={app.name}
                className="w-28 h-28 rounded-2xl shadow-2xl object-cover border-2 border-white/10 group-hover:border-pink-500/50 transition-all duration-300"
                whileHover={{ scale: 1.06, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0 group-hover:opacity-30 blur transition-opacity duration-300 -z-10" />
            </div>

            <div className={`mt-5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${app.accentBg}`}>
              <span className={app.accent}>{app.category}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-7 flex-grow flex flex-col">
          <div className="mb-3">
            <h3 className="text-2xl font-display font-bold text-white group-hover:text-pink-400 transition-colors flex items-center justify-between">
              <span>{app.name}</span>
            </h3>
            <p className="text-xs font-semibold text-slate-400 tracking-wide uppercase mt-0.5">{app.titleTag}</p>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
            {app.description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-2 mb-7 pt-4 border-t border-white/5">
            {app.features.map((feature) => (
              <div key={feature} className="flex items-center text-xs text-slate-400">
                <ChevronRight className={`w-3.5 h-3.5 mr-1 flex-shrink-0 ${app.accent}`} />
                <span className="truncate">{feature}</span>
              </div>
            ))}
          </div>

          {/* Store CTA */}
          <a
            href={app.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="play-button-cyber w-full group/btn"
          >
            <Play className="w-4 h-4 fill-white text-white" />
            <span className="text-sm font-bold">Get on Google Play</span>
            <ExternalLink className="w-4 h-4 ml-auto opacity-70 group-hover/btn:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Page ─── */
export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const filteredApps = activeCategory === 'All' 
    ? apps 
    : apps.filter(app => app.category.toLowerCase() === activeCategory.toLowerCase());

  const handleMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${contactName || 'Website Visitor'}`);
    const body = encodeURIComponent(`Name: ${contactName}\nEmail: ${contactEmail}\n\nMessage:\n${contactMessage}`);
    window.location.href = `mailto:kahaaniverse3@gmail.com?subject=${subject}&body=${body}`;
  };

  const navLinks = [
    { label: 'Apps Portfolio', target: 'apps' },
    { label: 'About Founder', target: 'founder' },
    { label: 'Articles & Notes', target: 'articles' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-surface)] noise-overlay halftone-overlay text-slate-100 overflow-x-hidden">
      {/* ────────── Navigation ────────── */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-white/10 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex-shrink-0 flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-pink-500/40 shadow-lg shadow-pink-500/20 group-hover:scale-105 transition-transform bg-black flex items-center justify-center p-0.5">
                <img src="/images/studio-logo.png" alt="Rishish Pradhan Studios Logo" className="w-full h-full object-contain rounded-lg" />
              </div>
              <div className="text-left">
                <span className="text-lg font-display font-black tracking-tight gradient-text-neon block">
                  RISHISH PRADHAN
                </span>
                <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase block -mt-1">
                  STUDIOS
                </span>
              </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => scrollTo(link.target)}
                  className="text-slate-300 hover:text-pink-400 transition-colors text-sm font-semibold tracking-wide uppercase cursor-pointer"
                >
                  {link.label}
                </button>
              ))}

              <button
                onClick={() => scrollTo('apps')}
                className="btn-neon-pink px-5 py-2.5 text-xs flex items-center gap-2 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                Google Play Apps
              </button>

              <a
                href="https://github.com/rishishpradhan16"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-pink-500/50 hover:bg-pink-500/10 transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4 text-slate-300" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300"
            >
              <div className="space-y-1.5">
                <span className={`block w-5 h-0.5 bg-pink-500 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
                <span className={`block w-5 h-0.5 bg-cyan-400 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden border-t border-white/10 bg-[#090710]/95 backdrop-blur-2xl"
          >
            <div className="p-5 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => { scrollTo(link.target); setMobileMenuOpen(false); }}
                  className="block w-full text-left px-4 py-3 text-slate-200 hover:text-pink-400 hover:bg-white/5 rounded-xl transition-all text-sm font-semibold"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => { scrollTo('apps'); setMobileMenuOpen(false); }}
                className="btn-neon-pink w-full py-3 text-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-white" /> View Google Play Apps
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* ────────── Hero Section ────────── */}
      <section className="relative pt-24 min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/studio-banner-cyber.png"
            alt="Rishish Pradhan Studios Cyber Theme"
            className="w-full h-full object-cover object-center opacity-40 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07060e]/80 via-[#07060e]/90 to-[#07060e]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#07060e] via-transparent to-[#07060e]"></div>
          <div className="absolute inset-0 grid-pattern opacity-30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="lg:col-span-7 text-left"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/30 mb-8 shadow-lg shadow-pink-500/10"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse"></span>
                <span className="text-xs font-bold text-pink-300 uppercase tracking-wider">
                  5 LIVE APPS ON GOOGLE PLAY
                </span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight leading-[0.95] mb-6">
                <span className="text-white block">CRAFTING</span>
                <span className="gradient-text-neon block">NEXT-GEN</span>
                <span className="text-white block">MOBILE APPS</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl mb-10 leading-relaxed font-normal">
                Indie game studio crafting high-octane action games, zen tile matching, retro photography tools, and community storytelling on Android.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollTo('apps')}
                  className="btn-neon-pink px-8 py-4 text-sm flex items-center justify-center gap-3 cursor-pointer shadow-xl"
                >
                  <Sparkles className="w-4 h-4" />
                  EXPLORE ALL APPS
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollTo('founder')}
                  className="btn-neon-outline px-8 py-4 text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Code2 className="w-4 h-4 text-pink-400" />
                  MEET THE FOUNDER
                </button>
              </div>
            </motion.div>

            {/* Right Showcase Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="glass-card rounded-3xl p-6 glow-border relative overflow-hidden">
                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-pink-500 animate-ping"></div>
                    <span className="text-xs font-bold uppercase tracking-wider text-pink-400">Featured Releases</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500">Android Studio 2026</span>
                </div>

                <div className="space-y-3">
                  {apps.slice(0, 3).map((app) => (
                    <div key={app.id} className="glass-card-light rounded-2xl p-3.5 flex items-center gap-4 hover:border-pink-500/40 transition-all">
                      <img src={app.image} alt={app.name} className="w-12 h-12 rounded-xl object-cover border border-white/10" />
                      <div>
                        <h4 className="text-sm font-bold text-white">{app.name}</h4>
                        <p className="text-xs text-pink-400 font-medium">{app.tagline}</p>
                      </div>
                      <a
                        href={app.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto w-8 h-8 rounded-full bg-pink-500/20 border border-pink-500/40 flex items-center justify-center hover:bg-pink-500 text-white transition-all"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ────────── Pillars Section ────────── */}
      <section className="relative z-10 -mt-10 px-4">
        <div className="max-w-6xl mx-auto glass-card rounded-3xl glow-pink shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {pillars.map((pillar, i) => (
              <PillarCard key={pillar.title} pillar={pillar} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ────────── Section Divider ────────── */}
      <div className="max-w-xl mx-auto my-20 px-4">
        <hr className="divider-cyber" />
      </div>

      {/* ────────── Apps Section ────────── */}
      <section id="apps" className="py-12 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-xs font-bold text-pink-400 uppercase tracking-widest mb-4">
                OUR PLAY STORE PORTFOLIO
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-4">
                LIVE <span className="gradient-text-neon">APPS & GAMES</span>
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto text-sm">
                Explore our full line-up of mobile experiences — available right now on Google Play.
              </p>
            </motion.div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/30'
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  {category} {category === 'All' ? `(${apps.length})` : ''}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredApps.map((app, i) => (
              <AppCard key={app.id} app={app} index={i} />
            ))}
          </div>

        </div>
      </section>

      {/* ────────── Founder / About Me Section ────────── */}
      <section id="founder" className="py-24 px-4 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-4">
                MEET THE FOUNDER
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-4">
                HEY, I'M <span className="gradient-text-neon">RISHISH PRADHAN</span>
              </h2>
              <p className="text-slate-300 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                Generalist Engineer & Solo Builder. Operating on curiosity, consistency, and a relentless bias for action.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Code Terminal (ABOUT.md / class Rishi) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="code-terminal">
                <div className="code-terminal-header">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">ABOUT_ME.py</span>
                  <Terminal className="w-4 h-4 text-slate-500" />
                </div>
                <div className="p-6 text-xs md:text-sm leading-relaxed overflow-x-auto text-slate-200">
                  <p className="mb-2"><span className="syntax-keyword">class</span> <span className="syntax-type">Rishi</span>:</p>
                  <p className="pl-4 mb-2"><span className="syntax-keyword">def</span> <span className="syntax-type">__init__</span>(self):</p>
                  <p className="pl-8"><span className="syntax-property">self.role</span> = <span className="syntax-string">"{fontData.role}"</span></p>
                  <p className="pl-8"><span className="syntax-property">self.mindset</span> = <span className="syntax-string">"{fontData.mindset}"</span></p>
                  <p className="pl-8"><span className="syntax-property">self.bias</span> = <span className="syntax-string">"{fontData.bias}"</span></p>
                  <p className="pl-8 mb-4"><span className="syntax-property">self.superpower</span> = <span className="syntax-string">"{fontData.superpower}"</span></p>
                  
                  <p className="pl-4 mb-2"><span className="syntax-keyword">def</span> <span className="syntax-type">current_focus</span>(self):</p>
                  <p className="pl-8"><span className="syntax-keyword">return</span> &#123;</p>
                  {Object.entries(fontData.currentFocus).map(([key, val]) => (
                    <p key={key} className="pl-12">
                      <span className="syntax-string">"{key}"</span>: <span className="syntax-property">"{val}"</span>,
                    </p>
                  ))}
                  <p className="pl-8 mb-4">&#125;</p>

                  <p className="pl-4 mb-2"><span className="syntax-keyword">def</span> <span className="syntax-type">philosophy</span>(self):</p>
                  <p className="pl-8 syntax-comment">"""</p>
                  <p className="pl-8 syntax-comment">{fontData.philosophyQuote}</p>
                  <p className="pl-8 syntax-string">⚡ {fontData.equation}</p>
                  <p className="pl-8 syntax-comment">"""</p>
                </div>
              </div>

              {/* Fact-Based Content Platforms Box */}
              <div className="glass-card rounded-3xl p-6 border border-pink-500/30 glow-pink">
                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                  <div>
                    <h4 className="text-base font-bold text-white">{fontData.contentPlatforms.title}</h4>
                    <p className="text-xs text-pink-400 font-semibold">{fontData.contentPlatforms.totalAudience}</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                    {fontData.contentPlatforms.status}
                  </span>
                </div>
                <div className="space-y-3">
                  {fontData.contentPlatforms.channels.map((ch) => (
                    <div key={ch.platform} className="glass-card-light rounded-2xl p-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {ch.platform.includes('YouTube') ? (
                          <Youtube className="w-5 h-5 text-red-500" />
                        ) : (
                          <Instagram className="w-5 h-5 text-pink-500" />
                        )}
                        <div>
                          <p className="text-xs font-bold text-white">{ch.platform}</p>
                          <p className="text-[11px] text-slate-400">{ch.desc}</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-500/20">
                        {ch.metric}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Principles & Quests */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-6"
            >
              {/* Operating Principles */}
              <div className="glass-card rounded-3xl p-6 border border-white/10">
                <h3 className="text-lg font-display font-bold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-pink-400" />
                  Operating Principles
                </h3>
                <div className="space-y-3">
                  {Object.entries(fontData.operatingPrinciples).map(([key, item]) => (
                    <div key={key} className="glass-card-light rounded-2xl p-3.5 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-xs font-bold text-white uppercase tracking-wider block">{item.label}</span>
                        <span className="text-xs font-mono text-cyan-300 block mt-0.5">{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quests & Unlocks */}
              <div className="glass-card rounded-3xl p-6 border border-white/10">
                <h3 className="text-lg font-display font-bold text-white mb-4 flex items-center gap-2">
                  <Gamepad2 className="w-5 h-5 text-cyan-400" />
                  🎮 Active Quests & Next Unlocks
                </h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Active Missions</p>
                    <div className="space-y-1.5">
                      {fontData.activeMissions.map((m) => (
                        <div key={m} className="text-xs text-slate-300 flex items-center gap-2">
                          <ChevronRight className="w-3.5 h-3.5 text-pink-400 flex-shrink-0" />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/5">
                    <p className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Next Unlocks</p>
                    <div className="space-y-1.5">
                      {fontData.nextUnlocks.map((u) => (
                        <div key={u} className="text-xs text-slate-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0"></span>
                          <span>{u}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>

          </div>

          {/* Career Milestones Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-display font-bold text-white mb-8 text-center">
              🎯 Career Milestones & Impact
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {fontData.achievements.map((ach) => (
                <div key={ach.id} className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-pink-400 bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/20 mb-3 inline-block">
                      {ach.badge}
                    </span>
                    <h4 className="text-base font-bold text-white mb-2">{ach.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">{ach.achievement}</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-cyan-400 font-semibold mb-3">Impact: {ach.impact}</p>
                    <div className="flex flex-wrap gap-1">
                      {ach.tech.map((t) => (
                        <span key={t} className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-slate-400 border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ────────── Articles & Notes Section ────────── */}
      <section id="articles" className="py-24 px-4 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-xs font-bold text-pink-400 uppercase tracking-widest mb-4">
                WRITINGS & TECH INSIGHTS
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-4">
                ARTICLES & <span className="gradient-text-neon">PUBLIC LOGS</span>
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto text-sm">
                Engineering deep dives, solo developer strategies, and AI system design notes.
              </p>
            </motion.div>
          </div>

          {/* Article Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articlesData.map((article) => (
              <div key={article.id} className="glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 font-bold uppercase tracking-wider text-[10px]">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors mb-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-4 font-medium">{article.subtitle}</p>
                  <p className="text-slate-300 text-xs leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {article.tags.map((tag) => (
                      <span key={tag} className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded-md text-slate-400">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="w-full py-3 rounded-xl bg-white/5 hover:bg-pink-500/20 border border-white/10 hover:border-pink-500/40 text-xs font-bold text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4 text-pink-400" />
                    Read Full Article
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-pink-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ────────── Article Modal Reader ────────── */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass-card max-w-3xl w-full rounded-3xl p-6 sm:p-10 border border-pink-500/40 glow-pink relative my-8 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6 border-b border-white/10 pb-6">
                <div className="flex items-center gap-3 text-xs text-pink-400 mb-3">
                  <span className="px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 font-bold uppercase tracking-wider">
                    {selectedArticle.category}
                  </span>
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-display font-black text-white mb-2 leading-tight">
                  {selectedArticle.title}
                </h2>
                <p className="text-sm text-slate-400">{selectedArticle.subtitle}</p>
              </div>

              {/* Body */}
              <div className="space-y-4 text-slate-200 text-sm md:text-base leading-relaxed">
                {selectedArticle.content.map((paragraph, index) => {
                  if (paragraph.startsWith('###')) {
                    return <h3 key={index} className="text-lg font-bold text-pink-400 mt-6 mb-2">{paragraph.replace('###', '').trim()}</h3>;
                  }
                  if (paragraph.startsWith('```')) {
                    const code = paragraph.replace(/```[a-z]*/g, '').trim();
                    return (
                      <div key={index} className="code-terminal my-4">
                        <pre className="p-4 text-xs md:text-sm overflow-x-auto text-cyan-300 font-mono">
                          <code>{code}</code>
                        </pre>
                      </div>
                    );
                  }
                  return <p key={index}>{paragraph}</p>;
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center text-xs text-slate-500">
                <span>Written by Rishish Pradhan</span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="btn-neon-pink px-5 py-2 text-xs cursor-pointer"
                >
                  Close Reader
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ────────── Contact Section ────────── */}
      <section id="contact" className="py-24 px-4 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-xs font-bold text-pink-400 uppercase tracking-widest mb-4">
                CONTACT STUDIO & FOUNDER
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-4">
                GET IN <span className="gradient-text-neon">TOUCH</span>
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto text-sm">
                Questions about our apps, feature requests, or engineering collaboration? Drop us a message anytime.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-5"
            >
              <a
                href="mailto:kahaaniverse3@gmail.com"
                className="glass-card glass-card-hover rounded-2xl p-6 flex items-center gap-4 block group"
              >
                <div className="w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-extrabold mb-1">Direct Email</p>
                  <p className="text-white font-semibold text-sm group-hover:text-pink-400 transition-colors">kahaaniverse3@gmail.com</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 ml-auto" />
              </a>

              <a
                href="https://github.com/rishishpradhan16"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover rounded-2xl p-6 flex items-center gap-4 block group"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Github className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-extrabold mb-1">GitHub Profile</p>
                  <p className="text-white font-semibold text-sm group-hover:text-cyan-400 transition-colors">github.com/rishishpradhan16</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 ml-auto" />
              </a>

              <div className="glass-card rounded-2xl p-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-extrabold mb-1">Platform</p>
                  <p className="text-white font-semibold text-sm">Google Play Store (Android)</p>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 glass-card rounded-3xl p-8 border border-white/10"
            >
              <form className="space-y-5" onSubmit={handleMailto}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Your Name</label>
                    <input
                      required
                      type="text"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/30 transition-all text-sm"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Email Address</label>
                    <input
                      required
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/30 transition-all text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/30 transition-all text-sm resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-neon-pink w-full py-4 text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  SEND MESSAGE VIA EMAIL
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ────────── Expanded Professional Footer ────────── */}
      <footer className="border-t border-white/10 py-16 px-4 bg-[#050409]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            
            {/* Column 1: Studio & Founder Intro */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl overflow-hidden border border-pink-500/40 bg-black p-0.5 flex items-center justify-center">
                  <img src="/images/studio-logo.png" alt="Rishish Pradhan Studios Logo" className="w-full h-full object-contain rounded-lg" />
                </div>
                <span className="font-display font-black gradient-text-neon text-base">RISHISH PRADHAN</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                🚀 Built with code, coffee, and late-night experiments. Powered by curiosity, consistency, and a bias for action.
              </p>
              <div className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/20 inline-block">
                Consistency × Curiosity × Execution
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 border-l-2 border-pink-500 pl-2">
                Quick Navigation
              </h4>
              <div className="space-y-2 text-xs">
                {navLinks.map((link) => (
                  <button
                    key={link.target}
                    onClick={() => scrollTo(link.target)}
                    className="block text-slate-400 hover:text-pink-400 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                ))}
                <Link to="/privacy" className="block text-slate-400 hover:text-pink-400 transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>

            {/* Column 3: Content Platforms */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 border-l-2 border-cyan-400 pl-2">
                Content Platforms
              </h4>
              <div className="space-y-2.5 text-xs text-slate-400">
                <div className="flex items-center justify-between">
                  <span>YouTube Primary</span>
                  <span className="text-pink-400 font-mono font-bold">8,000+ Subs</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>YouTube Secondary</span>
                  <span className="text-pink-400 font-mono font-bold">4,500+ Subs</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Instagram</span>
                  <span className="text-cyan-400 font-mono font-bold">8,000+ Followers</span>
                </div>
                <p className="text-[11px] text-slate-500 pt-1">Fact-Based Content Systems</p>
              </div>
            </div>

            {/* Column 4: Connect */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 border-l-2 border-purple-500 pl-2">
                Connect
              </h4>
              <div className="space-y-2.5 text-xs">
                <a href="mailto:kahaaniverse3@gmail.com" className="block text-slate-400 hover:text-pink-400 transition-colors truncate">
                  kahaaniverse3@gmail.com
                </a>
                <a href="https://github.com/rishishpradhan16" target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-cyan-400 transition-colors">
                  github.com/rishishpradhan16
                </a>
                <p className="text-[11px] text-slate-500 pt-1">
                  Available for technical advisory & solo software builds.
                </p>
              </div>
            </div>

          </div>

          <hr className="border-white/10 mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Rishish Pradhan Studios. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="hover:text-pink-400 transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <button onClick={() => scrollTo('contact')} className="hover:text-pink-400 transition-colors cursor-pointer">
                Contact Studio
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
