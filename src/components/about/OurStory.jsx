'use client';

import React from 'react';
import { Target, Compass, Award, ShieldCheck } from 'lucide-react';

const panels = [
  {
    icon: Target,
    tag: 'Vision',
    dark: false,
    heading: "India's most trusted industrial engineering company.",
    body: "Delivering world-class mechanical solutions, developing skilled professionals, and creating long-term value for industries.",
  },
  {
    icon: Compass,
    tag: 'Mission',
    dark: false,
    heading: 'Safe, reliable, cost-effective engineering — every project.',
    body: "Bridging the gap between industry and skilled manpower through practical technical education and workforce development.",
  },
  {
    icon: Award,
    tag: 'Quality Commitment',
    dark: true,
    heading: 'Every project, every stage.',
    body: 'Strict Quality Management System across fabrication, construction, installation, and commissioning. Continuous upgrades in machinery, inspection equipment, and training.',
  },
  {
    icon: ShieldCheck,
    tag: 'HSE Policy',
    dark: true,
    heading: 'Safety is our highest priority.',
    body: 'Industrial safety standards, hazard identification, risk assessment, and HSE training — every site, zero compromise.',
  },
];

export default function OurStory() {
  return (
    <section id="vision-mission" className="py-24 lg:py-32 bg-white border-b border-[#E2DDD8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 space-y-12">

        {/* Header */}
        <div>
          <p className="eyebrow mb-5">Vision & Mission</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0F1520] font-outfit leading-[1.06] tracking-tight">
            Principles That
            <br />
            <span className="text-[#E31E24]">Drive Us Forward.</span>
          </h2>
        </div>

        {/* 2×2 editorial panel grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E2DDD8]">
          {panels.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className={`p-10 lg:p-14 group relative ${p.dark ? 'bg-[#0B0D11] text-white' : 'bg-white text-[#0F1520]'}`}
              >
                {/* Top accent line on hover */}
                <div className="absolute top-0 left-0 h-[2px] w-0 bg-[#E31E24] group-hover:w-full transition-all duration-500" />

                <div className={`w-10 h-10 border flex items-center justify-center mb-6 text-[#E31E24] group-hover:bg-[#E31E24] group-hover:text-white group-hover:border-[#E31E24] transition-all duration-300 ${p.dark ? 'border-white/12' : 'border-[#E2DDD8]'}`}>
                  <Icon className="w-5 h-5" />
                </div>

                <p className="eyebrow mb-4" style={{ color: '#E31E24' }}>{p.tag}</p>
                <h3 className={`text-xl sm:text-2xl font-bold font-outfit leading-snug mb-4 ${p.dark ? 'text-white' : 'text-[#0F1520]'}`}>
                  {p.heading}
                </h3>
                <div className={`w-8 h-px mb-4 ${p.dark ? 'bg-white/15' : 'bg-[#E2DDD8]'}`} />
                <p className={`text-sm leading-relaxed ${p.dark ? 'text-white/40' : 'text-slate-500'}`}>
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
