'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck, Edit3, HardHat, Cog, TrendingUp } from 'lucide-react';
import gsap from 'gsap';

export default function ServicesHero({ onOpenQuote }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services-hero-anim', {
        y: 35,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const pillars = [
    {
      icon: Edit3,
      title: 'End-to-End Solutions',
      desc: 'From concept to commissioning, we manage every step of your project.',
    },
    {
      icon: HardHat,
      title: 'Safety First',
      desc: 'We prioritize safety in every process, ensuring a secure work environment.',
    },
    {
      icon: Cog,
      title: 'Quality Assured',
      desc: 'Delivering high-quality engineering solutions that meet global standards.',
    },
    {
      icon: TrendingUp,
      title: 'Efficiency Driven',
      desc: 'Innovative engineering that optimizes performance and reduces costs.',
    },
  ];

  return (
    <section ref={heroRef} className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 bg-[#FAFAFC] overflow-hidden">
      
      {/* Background Graphic: Concentric Circles on Right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-20 z-0 overflow-hidden hidden md:block">
        <svg viewBox="0 0 500 500" fill="none" className="w-full h-full text-red-500">
          <circle cx="350" cy="250" r="120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="350" cy="250" r="200" stroke="currentColor" strokeWidth="1" />
          <circle cx="350" cy="250" r="280" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="350" cy="250" r="360" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="services-hero-anim inline-flex items-center gap-2 text-[#E52323] text-xs font-extrabold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#E52323] inline-block animate-pulse" />
              OUR SERVICES
            </div>

            <h1 className="services-hero-anim text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.12] font-outfit">
              Engineering Solutions <br />
              <span className="text-[#E52323]">Built Around You</span>
            </h1>

            <p className="services-hero-anim text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed font-normal">
              We provide end-to-end industrial engineering services designed to deliver quality, safety, and efficiency at every stage of your project lifecycle.
            </p>

            <div className="services-hero-anim pt-2 flex flex-wrap items-center gap-6">
              <button
                onClick={onOpenQuote}
                className="bg-[#E52323] hover:bg-[#C91A1A] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-xl shadow-red-500/20 hover:shadow-red-500/35 hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer font-outfit"
              >
                <span>Let&apos;s Build Together</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#core-services"
                className="text-slate-700 hover:text-[#E52323] font-bold text-sm inline-flex items-center gap-2 relative group py-1 transition-colors border-b-2 border-slate-300 hover:border-[#E52323] font-outfit"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#E52323] group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>

          {/* Right Showcase Image & Badges */}
          <div className="lg:col-span-6 relative lg:pl-4">
            
            {/* Dot Matrix Pattern */}
            <div className="absolute -top-6 -right-6 w-36 h-36 z-0 pointer-events-none opacity-20">
              <svg width="100%" height="100%" fill="none">
                <pattern id="hero-dot-matrix" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" className="fill-red-500" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#hero-dot-matrix)" />
              </svg>
            </div>

            {/* Main Image Frame */}
            <div className="relative w-full h-[360px] sm:h-[440px] rounded-[32px] overflow-hidden shadow-2xl shadow-slate-300/60 border border-slate-200/80 z-10 group">
              <img
                src="/images/hero_plant.png"
                alt="Turbo Tech Industrial Engineering Solutions"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Dark Safety Card */}
            <div className="services-hero-anim absolute -bottom-6 left-4 sm:-left-8 z-20 bg-[#111625] text-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-800/80 flex items-center gap-4 max-w-[290px] sm:max-w-[340px] transition-transform duration-300 hover:scale-[1.02]">
              <div className="w-12 h-12 rounded-full bg-[#E52323] text-white flex items-center justify-center shrink-0 shadow-lg shadow-red-600/40">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-white text-sm sm:text-base leading-snug font-outfit">
                  Safety. Quality. Efficiency.
                </div>
                <div className="text-slate-400 text-xs sm:text-sm mt-0.5 font-normal">
                  Engineering excellence you can rely on.
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom 4 Feature Cards (Pillars Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 lg:mt-24">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="services-hero-anim bg-white rounded-2xl p-7 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-xl hover:border-red-100 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-full bg-red-50 text-[#E52323] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#E52323] group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2.5 font-outfit group-hover:text-[#E52323] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 font-normal">
                    {item.desc}
                  </p>
                </div>
                <div className="w-7 h-[3px] bg-[#E52323] rounded-full group-hover:w-12 transition-all duration-300" />
              </div>
            );
          })}
        </div>

        {/* Scroll To Explore Indicator */}
        <div className="services-hero-anim pt-16 flex flex-col items-center justify-center text-center">
          <div className="w-4 h-7 border-2 border-red-500/40 rounded-full flex justify-center pt-1 mb-2">
            <span className="w-1.5 h-1.5 bg-[#E52323] rounded-full animate-bounce" />
          </div>
          <span className="text-[11px] font-bold tracking-[0.25em] text-slate-400 uppercase font-outfit">
            SCROLL TO EXPLORE
          </span>
          <div className="w-[1px] h-6 bg-gradient-to-b from-red-400 to-transparent mt-2" />
        </div>

      </div>
    </section>
  );
}

