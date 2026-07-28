'use client';

import React from 'react';
import { Quote } from 'lucide-react';

export default function FounderMessage() {
  return (
    <section className="py-24 lg:py-32 bg-[#F5F4F0] border-b border-[#E2DDD8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left — Quote */}
          <div className="space-y-8">
            <p className="eyebrow">Founder's Message</p>

            <div className="relative">
              {/* Large quote mark */}
              <div className="absolute -top-4 -left-2 text-[7rem] font-black text-[#E31E24]/6 font-outfit leading-none select-none pointer-events-none">
                "
              </div>
              <blockquote className="relative z-10 text-3xl sm:text-4xl font-black text-[#0F1520] font-outfit leading-[1.2] tracking-tight">
                We don&apos;t just execute projects, we build lasting partnerships.
              </blockquote>
            </div>

            <div className="w-10 h-[2px] bg-[#E31E24]" />

            <p className="text-slate-500 text-base leading-[1.8] max-w-md">
              Our goal is to deliver consistent value, create opportunities, and
              contribute to the growth of industries globally — one project at a time.
            </p>
          </div>

          {/* Right — Founder card */}
          <div className="relative">
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#E31E24]/10 pointer-events-none" />

            <div className="relative bg-white border border-[#E2DDD8] overflow-hidden">
              {/* Red left bar */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#E31E24]" />

              <div className="flex flex-col sm:flex-row items-center gap-8 p-8 pl-10">
                {/* Founder image */}
                <div className="w-32 h-40 sm:w-36 sm:h-44 shrink-0 overflow-hidden border border-[#E2DDD8]">
                  <img
                    src="/images/founder.png"
                    alt="Santosh Chauhan - Founder & Managing Director"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Details */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-[#0F1520] font-outfit">Santosh Chauhan</h3>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 mt-0.5">
                      Founder & Managing Director
                    </p>
                  </div>
                  <div className="w-8 h-px bg-[#E2DDD8]" />
                  <p className="text-slate-500 text-sm leading-relaxed">
                    &ldquo;Our goal is to deliver consistent value, create opportunities, and contribute to the growth of industries globally.&rdquo;
                  </p>

                  {/* Signature */}
                  <svg className="w-28 h-8 text-slate-700" viewBox="0 0 200 50" fill="none">
                    <path d="M 10 35 Q 30 8, 50 30 T 90 16 T 130 38 T 180 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                    <text x="28" y="46" fontFamily="cursive" fontSize="12" fill="currentColor">Santosh Chauhan</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
