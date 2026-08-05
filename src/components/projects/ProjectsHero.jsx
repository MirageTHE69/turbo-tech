'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

export default function ProjectsHero({ onOpenQuote }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.ph-anim',
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.1, ease: 'power3.out' }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-[#F5F4F0] overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left */}
          <div className="space-y-7">
            <p className="ph-anim eyebrow opacity-0">Project Portfolio</p>

            <h1 className="ph-anim font-outfit font-black text-[#0F1520] text-4xl sm:text-5xl lg:text-[60px] leading-[1.04] tracking-tight opacity-0">
              Engineering Excellence.
              <br />
              <span className="text-[#E31E24]">Delivered.</span>
            </h1>

            <div className="ph-anim w-10 h-[2px] bg-[#E31E24] opacity-0" />

            <p className="ph-anim text-slate-500 text-base leading-[1.8] max-w-md opacity-0">
              From concept to completion — every project we deliver stands as a
              testament to quality, precision, and industrial reliability.
            </p>

            {/* Inline stats */}
            <div className="ph-anim flex items-stretch border border-[#E2DDD8] w-fit opacity-0">
              {[
                { n: '70+',  l: 'Projects Done' },
                { n: '13+',  l: 'Years Active' },
                { n: '20+',  l: 'Industries Served' },
              ].map((s, i) => (
                <div key={i} className={`px-6 py-4 ${i < 2 ? 'border-r border-[#E2DDD8]' : ''}`}>
                  <div className="text-xl font-black font-outfit text-[#0F1520]">{s.n}</div>
                  <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>

            <div className="ph-anim opacity-0">
              <button onClick={onOpenQuote} className="arrow-link font-outfit text-sm text-[#0F1520] hover:text-[#E31E24]">
                <span>Let&apos;s Build Your Next Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right — image */}
          <div className="ph-anim relative opacity-0">
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#E31E24]/12 pointer-events-none" />
            <div className="relative overflow-hidden">
              <img
                src="/images/hero_plant.png"
                alt="Turbo Tech Project Portfolio"
                className="w-full h-[380px] sm:h-[460px] object-cover img-vivid"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 bg-[#E31E24] px-5 py-3">
                <span className="text-[10px] font-black text-white uppercase tracking-[0.18em] font-outfit">
                  70+ Projects Delivered
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
