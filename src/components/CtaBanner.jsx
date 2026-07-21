'use client';

import React from 'react';
import { ArrowRight, Sparkles, PhoneCall } from 'lucide-react';

export default function CtaBanner({ onOpenQuote }) {
  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden bg-grid-pattern-dark border-t border-slate-800">
      {/* Ambient Mesh Orbs */}
      <div className="mesh-glow-red top-0 left-1/4 opacity-60"></div>
      <div className="mesh-glow-blue bottom-0 right-1/4 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-slate-900/80 p-8 sm:p-14 rounded-3xl border border-slate-800 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
          
          {/* Animated Glow Border Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E31E24] to-transparent"></div>

          <div className="space-y-4 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#E31E24] bg-red-950/60 border border-red-800/50 px-3.5 py-1 rounded-full font-outfit">
              <Sparkles className="w-3.5 h-3.5" />
              Partner With Turbo Tech Today
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-outfit text-white tracking-tight leading-tight">
              Ready to Execute Your Next <br className="hidden sm:inline" />
              <span className="text-gradient-red">Industrial Project?</span>
            </h2>
            
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Connect with our industrial engineering team for turnkey fabrication, piping, plant maintenance, certified manpower supply, or training institute inquiries.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <button
              onClick={onOpenQuote}
              className="btn-primary-red px-8 py-4 rounded-full text-sm font-bold flex items-center gap-2 font-outfit"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:+916351149073"
              className="px-8 py-4 rounded-full text-sm font-bold border border-slate-700 bg-slate-800/90 text-slate-200 hover:bg-white hover:text-slate-900 hover:border-white transition-all flex items-center gap-2 font-outfit"
            >
              <PhoneCall className="w-4 h-4 text-[#E31E24]" />
              <span>+91 63511 49073</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
