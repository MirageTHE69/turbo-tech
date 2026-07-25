'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#F9F9F7] border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Image with reveal overlay */}
          <div className="relative">
            {/* Decorative behind-shadow block */}
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-3xl border border-[#E31E24]/20 pointer-events-none" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/about_team.png"
                alt="Turbo Tech Engineering Team"
                className="w-full h-[440px] sm:h-[500px] object-cover img-vivid"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090D]/60 via-transparent to-transparent" />

              {/* Floating tag */}
              <div className="absolute bottom-6 left-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                  <div className="text-3xl font-black text-[#E31E24] font-outfit leading-none">13+</div>
                  <div className="text-[11px] font-bold text-slate-700 font-outfit mt-0.5">Years Industry Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Lean content */}
          <div className="space-y-8">
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#E31E24] mb-4">
                About Turbo Tech
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-[#0F1520] leading-[1.08] font-outfit">
                Your Complete<br />Industrial Partner.
              </h2>
            </div>

            {/* Single thin red line accent */}
            <div className="w-12 h-[2px] bg-[#E31E24]" />

            <p className="text-slate-500 text-base leading-relaxed max-w-md">
              From EPC execution to fabrication, plant maintenance, and certified manpower supply — Turbo Tech delivers end-to-end engineering solutions across India.
            </p>

            {/* ISO badge inline */}
            <div className="inline-flex items-center gap-3 border border-slate-200 rounded-full px-4 py-2 bg-white shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#E31E24]" />
              <span className="text-xs font-bold text-slate-700 font-outfit">ISO 9001:2015 Certified Company</span>
            </div>

            <div className="flex items-center gap-6 pt-2">
              <a
                href="/about"
                className="inline-flex items-center gap-3 text-[#0F1520] font-bold text-sm hover:text-[#E31E24] transition-all group font-outfit"
              >
                <span>Company Profile</span>
                <div className="w-8 h-[2px] bg-slate-300 group-hover:bg-[#E31E24] group-hover:w-12 transition-all" />
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#E31E24] transition-colors" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
