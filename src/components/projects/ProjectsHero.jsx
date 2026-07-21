'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

export default function ProjectsHero({ onOpenQuote }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.projects-hero-anim', {
        y: 35,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Text Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="projects-hero-anim">
              <span className="tag-badge">Our Projects</span>
            </div>

            <h1 className="projects-hero-anim text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F1520] tracking-tight leading-[1.1] font-outfit">
              Engineering Excellence.{' '}
              <span className="text-[#E31E24] block sm:inline">Delivered.</span>
            </h1>

            <p className="projects-hero-anim text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
              We take pride in every project we deliver. From concept to completion, our work stands as a testament to quality, innovation, and reliability.
            </p>

            <div className="projects-hero-anim pt-2">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-3 text-[#0F1520] font-bold text-sm hover:text-[#E31E24] transition-all group font-outfit"
              >
                <span>Let&apos;s Build Your Next Project</span>
                <div className="w-10 h-[2px] bg-slate-400 group-hover:bg-[#E31E24] group-hover:w-14 transition-all"></div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#E31E24] transition-colors" />
              </button>
            </div>
          </div>

          {/* Right Showcase Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[380px] sm:h-[460px]">
              {/* Drop Shadow Frame */}
              <div
                className="absolute inset-0 bg-[#0F1520]/10 rounded-3xl transform translate-x-3 translate-y-3"
                style={{
                  clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)',
                }}
              ></div>

              {/* Main Container */}
              <div
                className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl group border border-slate-200/50"
                style={{
                  clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)',
                }}
              >
                <img
                  src="/images/hero_plant.png"
                  alt="Turbo Tech Delivered Projects"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
