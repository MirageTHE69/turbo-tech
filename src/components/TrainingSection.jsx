'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function TrainingSection() {
  const pillars = [
    { number: '80%', label: 'Practical Workshop' },
    { number: '100%', label: 'Placement Support' },
    { number: '6+', label: 'Certified Courses' },
  ];

  return (
    <section id="training" className="py-24 lg:py-32 bg-[#F9F9F7] border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Text first on this section */}
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#E31E24] mb-4">
                Technical Training Institute
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-[#0F1520] leading-[1.08] font-outfit">
                Bridging Industry<br />with Skilled<br />
                <span className="text-[#E31E24]">Manpower.</span>
              </h2>
            </div>

            <div className="w-12 h-[2px] bg-[#E31E24]" />

            <p className="text-slate-500 text-base leading-relaxed max-w-md">
              Turbo Tech's dedicated Welding & Fitter Training Institute prepares job-ready technicians through live industrial project training in Kushinagar, UP.
            </p>

            {/* 3 Pillars — clean inline stats */}
            <div className="grid grid-cols-3 gap-6 pt-2">
              {pillars.map((p, i) => (
                <div key={i}>
                  <div className="text-2xl sm:text-3xl font-black text-[#E31E24] font-outfit">{p.number}</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5 leading-snug">{p.label}</div>
                </div>
              ))}
            </div>

            <a
              href="/training"
              className="inline-flex items-center gap-3 text-[#0F1520] font-bold text-sm hover:text-[#E31E24] transition-all group font-outfit"
            >
              <span>View Courses & Admissions</span>
              <div className="w-8 h-[2px] bg-slate-300 group-hover:bg-[#E31E24] group-hover:w-12 transition-all" />
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#E31E24] transition-colors" />
            </a>
          </div>

          {/* Right — Image */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute -bottom-3 -left-3 w-full h-full rounded-3xl border border-[#E31E24]/20 pointer-events-none" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="/images/welder.png"
                alt="Turbo Tech Welding Training Institute Workshop"
                onLoad={() => {
                  if (typeof window !== 'undefined' && window.dispatchEvent) {
                    window.dispatchEvent(new Event('resize'));
                  }
                }}
                className="w-full h-[440px] sm:h-[500px] object-cover img-vivid group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Spark particles */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="spark-particle" style={{ left: '30%', bottom: '25%', animationDelay: '0s' }} />
                <div className="spark-particle" style={{ left: '42%', bottom: '30%', animationDelay: '0.4s' }} />
                <div className="spark-particle" style={{ left: '35%', bottom: '20%', animationDelay: '0.8s' }} />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#08090D]/60 via-transparent to-transparent" />

              {/* Overlay label */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-bold text-[#E31E24] uppercase tracking-widest bg-white/90 px-3.5 py-1.5 rounded-full inline-block font-outfit shadow-sm">
                  Hands-on Workshop Training
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
