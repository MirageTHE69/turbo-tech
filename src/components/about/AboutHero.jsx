'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck, Award, Target, Users } from 'lucide-react';
import gsap from 'gsap';

export default function AboutHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-hero-anim', {
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
    <section ref={heroRef} className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Text Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="about-hero-anim">
              <span className="tag-badge">Company Knowledge Profile</span>
            </div>

            <h1 className="about-hero-anim text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F1520] tracking-tight leading-[1.1] font-outfit">
              Engineering Partner. <br />
              Built on <span className="text-[#E31E24]">Excellence.</span>
            </h1>

            <p className="about-hero-anim text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
              Turbo Tech is an Indian industrial engineering & infrastructure company delivering mechanical construction, structural fabrication, piping systems, plant maintenance, manpower supply, civil works, and technical training.
            </p>

            <div className="about-hero-anim pt-2">
              <a
                href="#vision-mission"
                className="inline-flex items-center gap-3 text-[#0F1520] font-bold text-sm hover:text-[#E31E24] transition-all group font-outfit"
              >
                <span>View Vision, Mission & Values</span>
                <div className="w-10 h-[2px] bg-slate-400 group-hover:bg-[#E31E24] group-hover:w-14 transition-all"></div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#E31E24] transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[420px] sm:h-[500px]">
              <div
                className="absolute inset-0 bg-[#0F1520]/10 rounded-3xl transform translate-x-3 translate-y-3"
                style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)' }}
              ></div>

              <div
                className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl group border border-slate-200/50"
                style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)' }}
              >
                <img
                  src="/images/hero_plant.png"
                  alt="Turbo Tech Industrial Facility"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

        </div>

        {/* Key Metrics Bar */}
        <div className="about-hero-anim mt-16 pt-10 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
          <div className="pt-4 md:pt-0">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0F1520] font-outfit">
              13<span className="text-[#E31E24]">+</span>
            </div>
            <div className="text-xs text-slate-500 font-medium mt-1">Years Industry Experience</div>
          </div>

          <div className="pt-4 md:pt-0 md:pl-4">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0F1520] font-outfit">
              500<span className="text-[#E31E24]">+</span>
            </div>
            <div className="text-xs text-slate-500 font-medium mt-1">Projects Delivered</div>
          </div>

          <div className="pt-4 md:pt-0 md:pl-4">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0F1520] font-outfit">
              300<span className="text-[#E31E24]">+</span>
            </div>
            <div className="text-xs text-slate-500 font-medium mt-1">Certified Technicians</div>
          </div>

          <div className="pt-4 md:pt-0 md:pl-4">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0F1520] font-outfit">
              100<span className="text-[#E31E24]">%</span>
            </div>
            <div className="text-xs text-slate-500 font-medium mt-1">HSE & Quality Commitment</div>
          </div>
        </div>

      </div>
    </section>
  );
}
