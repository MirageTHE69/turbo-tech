'use client';

import React from 'react';
import { ArrowRight, GraduationCap, Briefcase, BookOpen, Award, Wrench, TrendingUp } from 'lucide-react';

export default function TrainingHero({ onOpenQuote }) {
  const features = [
    {
      icon: BookOpen,
      title: 'Job-Oriented Courses',
      desc: 'Industry-focused curriculum designed for real-world opportunities.',
    },
    {
      icon: Award,
      title: 'Certified Trainers',
      desc: 'Learn from experienced professionals with proven industry expertise.',
    },
    {
      icon: Wrench,
      title: 'Hands-On Workshop',
      desc: 'Practical training with modern equipment and live projects.',
    },
    {
      icon: TrendingUp,
      title: 'Placement Assistance',
      desc: 'Dedicated placement support to help you build your career.',
    },
  ];

  return (
    <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-24 bg-[#FAFAFC] overflow-hidden">
      
      {/* Background Graphic: Concentric Curves on Right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] lg:w-[600px] h-[500px] lg:h-[600px] pointer-events-none opacity-25 z-0 overflow-hidden hidden md:block">
        <svg viewBox="0 0 500 500" fill="none" className="w-full h-full text-red-500">
          <circle cx="350" cy="250" r="120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="350" cy="250" r="200" stroke="currentColor" strokeWidth="1" />
          <circle cx="350" cy="250" r="280" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="350" cy="250" r="360" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Narrative */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 text-[#E52323] text-xs font-extrabold tracking-widest uppercase">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E52323] inline-block animate-pulse" />
              WELDING INSTITUTE KUSHINAGAR &amp; UP
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0F172A] tracking-tight leading-[1.15] sm:leading-[1.12] font-outfit">
              Welding &amp; Fitter <br />
              <span className="text-[#E52323]">Training Institute</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed font-normal">
              Turbo Tech is a premier <strong className="font-semibold text-slate-800">welding institute in Kushinagar</strong> offering job-oriented <strong className="font-semibold text-slate-800">welding course UP with placement assistance</strong>, hands-on workshop experience, certified trainers, and live industrial project training.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenQuote}
                className="bg-[#E52323] hover:bg-[#C91A1A] text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-xl shadow-red-500/20 hover:shadow-red-500/35 hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer font-outfit"
              >
                <span>Apply For Admission</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#courses"
                className="bg-white border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-[#E52323] px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all flex items-center gap-2 font-outfit hover:-translate-y-0.5"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#E52323]" />
              </a>
            </div>
          </div>

          {/* Right Showcase Image & Dual Stat Badge Card */}
          <div className="lg:col-span-6 relative lg:pl-4 mt-4 lg:mt-0">
            
            {/* Dot Matrix Pattern */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-28 h-28 sm:w-36 sm:h-36 z-0 pointer-events-none opacity-20">
              <svg width="100%" height="100%" fill="none">
                <pattern id="training-dot-matrix-v2" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" className="fill-red-500" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#training-dot-matrix-v2)" />
              </svg>
            </div>

            {/* Main Welder Image Frame */}
            <div className="relative w-full h-[280px] sm:h-[380px] lg:h-[440px] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl shadow-slate-300/60 border border-slate-200/80 z-10 group">
              <img
                src="/images/training_institute.jpg"
                alt="Welding & Fitter Training Institute - Turbo Tech Kushinagar"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Dark Dual-Stat Overlay Card */}
            <div className="absolute -bottom-5 left-3 sm:-left-6 z-20 bg-[#111625] text-white rounded-2xl p-3.5 sm:p-5 shadow-2xl border border-slate-800/80 flex items-center justify-between gap-3 sm:gap-6 max-w-[calc(100%-1.5rem)] sm:max-w-md lg:max-w-lg transition-transform duration-300 hover:scale-[1.01]">
              {/* Stat 1 */}
              <div className="flex items-center gap-2.5 sm:gap-3.5">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#E52323] text-white flex items-center justify-center shrink-0 shadow-lg shadow-red-600/30">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="font-bold text-white text-[11px] sm:text-sm tracking-wide uppercase font-outfit">
                    HANDS-ON WORKSHOP
                  </div>
                  <div className="text-slate-400 text-[10px] sm:text-xs mt-0.5 font-normal">
                    Real Industry Training
                  </div>
                </div>
              </div>

              {/* Vertical Separator */}
              <div className="w-[1px] h-8 sm:h-9 bg-slate-800/80 shrink-0" />

              {/* Stat 2 */}
              <div className="flex items-center gap-2.5 sm:gap-3.5">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#E52323] text-white flex items-center justify-center shrink-0 shadow-lg shadow-red-600/30">
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="font-bold text-white text-[11px] sm:text-sm tracking-wide uppercase font-outfit">
                    PLACEMENT
                  </div>
                  <div className="text-slate-400 text-[10px] sm:text-xs mt-0.5 font-normal">
                    100% Support
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom 4 Feature Cards Grid */}
        <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100/90 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-slate-100 mt-16 sm:mt-20 lg:mt-24">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col justify-between ${
                  idx > 0 ? 'lg:pl-6 pt-5 sm:pt-0' : ''
                }`}
              >
                <div>
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-red-50 text-[#E52323] flex items-center justify-center mb-3 sm:mb-4 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A] mb-1.5 font-outfit">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll To Explore Indicator */}
        <div className="pt-12 sm:pt-16 flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-6 sm:w-8 h-[1px] bg-slate-200" />
            <div className="w-4 h-7 border-2 border-red-500/40 rounded-full flex justify-center pt-1">
              <span className="w-1.5 h-1.5 bg-[#E52323] rounded-full animate-bounce" />
            </div>
            <div className="w-6 sm:w-8 h-[1px] bg-slate-200" />
          </div>
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-slate-400 uppercase font-outfit">
            SCROLL TO EXPLORE
          </span>
        </div>

      </div>
    </section>
  );
}


