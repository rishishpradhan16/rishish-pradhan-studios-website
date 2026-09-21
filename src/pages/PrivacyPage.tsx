/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ChevronLeft, ShieldCheck, Mail } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--color-surface)] noise-overlay halftone-overlay py-16 px-4 text-slate-100">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-pink-400 hover:text-pink-300 mb-8 transition-colors bg-pink-500/10 border border-pink-500/30 px-4 py-2 rounded-full"
        >
          <ChevronLeft className="w-4 h-4 mr-1" /> Return to Home
        </Link>
        
        <div className="glass-card p-8 md:p-12 rounded-3xl glow-pink border border-pink-500/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-cyan-500 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-black text-white">
              Privacy <span className="gradient-text-neon">Policy</span>
            </h1>
          </div>
          
          <div className="space-y-8 text-slate-300 text-sm md:text-base leading-relaxed">
            <section className="glass-card-light rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                1. Overview
              </h2>
              <p>
                Rishish Pradhan Studios ("we", "our", or "us") is committed to protecting your privacy. 
                This Privacy Policy outlines how we collect, handle, and safeguard data across our mobile applications published on Google Play.
              </p>
            </section>

            <section className="glass-card-light rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                2. Data Collection & Privacy First
              </h2>
              <p>
                Our apps are designed around minimal data collection. We do not harvest personally identifiable information (PII) 
                such as your name, contact details, or home address unless you voluntarily provide them when contacting support.
              </p>
            </section>

            <section className="glass-card-light rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                3. Advertising (Google AdMob)
              </h2>
              <p>
                We may integrate Google AdMob into select free applications to serve advertisements. 
                AdMob may utilize pseudonymous advertising identifiers to serve non-intrusive ads and measure performance in accordance with Google policies.
              </p>
            </section>

            <section className="glass-card-light rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                4. Google Play Services
              </h2>
              <p>
                Our gaming titles may interface with Google Play Games Services for optional cloud saves, leaderboards, 
                and achievements. Data handled by Google Play Services is managed directly by Google's Privacy Policy.
              </p>
            </section>

            <section className="glass-card-light rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                5. Contact & Support
              </h2>
              <p>
                If you have inquiries regarding our applications or privacy practices, please contact us at:
              </p>
              <div className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-pink-400 font-bold text-sm">
                <Mail className="w-4 h-4 text-pink-400" />
                <a href="mailto:kahaaniverse3@gmail.com" className="hover:text-pink-300 transition-colors">
                  kahaaniverse3@gmail.com
                </a>
              </div>
            </section>

            <div className="pt-6 border-t border-white/10 text-xs text-slate-500 flex justify-between items-center">
              <span>Rishish Pradhan Studios</span>
              <span>Updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
