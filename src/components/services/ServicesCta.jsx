'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ServicesCta({ onOpenQuote }) {
  return (
    <section className="py-20 bg-[#0B0F17] text-white relative overflow-hidden">
      {/* Background Accent Graphics */}
      <div className="absolute inset-0 bg-[radial-gradient(#E31E24_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

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
              Partner with Turbo Tech for reliable engineering solutions that drive your industry forward.
            </p>

            <button
              onClick={onOpenQuote}
              className="btn-primary-red px-8 py-4 rounded-2xl text-sm font-bold flex items-center gap-2 shrink-0 shadow-lg shadow-[#E31E24]/25"
            >
              <span>Get a Free Quote</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
