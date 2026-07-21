'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectsCta({ onOpenQuote }) {
  return (
    <section className="py-20 bg-[#0B0F17] text-white relative overflow-hidden">
      {/* Ambient Radial Accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E31E24]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-slate-900/80 p-8 sm:p-12 rounded-3xl border border-slate-800 backdrop-blur-md">

          <div className="space-y-2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-white tracking-tight">
              Have a Project <br className="hidden sm:inline" />
              in Mind?
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 text-center lg:text-left max-w-lg">
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Let&apos;s collaborate to build something extraordinary together. Our team is ready to bring your vision to life.
            </p>

            <button
              onClick={onOpenQuote}
              className="btn-primary-red px-8 py-4 rounded-2xl text-sm font-bold flex items-center gap-2 shrink-0 shadow-lg shadow-[#E31E24]/25"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
