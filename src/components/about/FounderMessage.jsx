'use client';

import React from 'react';
import { Quote } from 'lucide-react';

export default function FounderMessage() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column - Large Quote Statement */}
          <div className="lg:col-span-6 relative space-y-4">
            <Quote className="w-20 h-20 text-slate-200/80 absolute -top-8 -left-4 pointer-events-none" />

            <h2 className="relative z-10 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1520] font-outfit leading-tight">
              &ldquo;We don&apos;t just execute projects, <br />
              we build lasting partnerships.&rdquo;
            </h2>
          </div>

          {/* Right Column - Founder Profile Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden">
              {/* Red Left Accent Bar */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#E31E24]"></div>

              {/* Founder Image Frame */}
              <div className="w-36 h-44 sm:w-40 sm:h-48 rounded-2xl overflow-hidden shrink-0 shadow-md border border-slate-100">
                <img
                  src="/images/founder.png"
                  alt="Santosh Chauhan - Founder & Managing Director"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Founder Details & Narrative */}
              <div className="space-y-3 pl-2">
                <div>
                  <h3 className="text-xl font-bold text-[#0F1520] font-outfit">Santosh Chauhan</h3>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Founder & Managing Director
                  </p>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  &ldquo;Our goal is to deliver consistent value, create opportunities, and contribute to the growth of industries globally.&rdquo;
                </p>

                {/* Handwritten Signature SVG */}
                <div className="pt-2 flex justify-end">
                  <svg className="w-32 h-10 text-slate-800" viewBox="0 0 200 60" fill="none">
                    <path
                      d="M 10 40 Q 30 10, 50 35 T 90 20 T 130 45 T 180 25"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <text x="30" y="52" fontFamily="cursive" fontSize="14" fill="currentColor">
                      Santosh Chauhan
                    </text>
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
