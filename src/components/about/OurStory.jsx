'use client';

import React from 'react';
import { Target, Compass, Award, ShieldCheck } from 'lucide-react';

export default function OurStory() {
  return (
    <section id="vision-mission" className="py-24 lg:py-32 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Vision / Mission — horizontal split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100">
          {[
            {
              icon: Target,
              tag: 'Vision',
              heading: "India's most trusted industrial engineering company.",
              body: "Delivering world-class mechanical solutions, developing skilled professionals, and creating long-term value for industries.",
            },
            {
              icon: Compass,
              tag: 'Mission',
              heading: 'Safe, reliable, cost-effective engineering — every project.',
              body: "Bridging the gap between industry and skilled manpower through practical technical education and workforce development.",
            },
          ].map((item, i) => {
            const IconComponent = item.icon;
            return (
              <div key={i} className="bg-white p-10 lg:p-14 group">
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 text-[#E31E24] flex items-center justify-center mb-6 group-hover:bg-[#E31E24] group-hover:text-white group-hover:border-[#E31E24] transition-all duration-300">
                  <IconComponent className="w-5 h-5" />
                </div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#E31E24] mb-3">{item.tag}</p>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F1520] font-outfit leading-snug mb-4">
                  {item.heading}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quality & HSE — 2-col dark strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-3xl overflow-hidden">
          {[
            {
              icon: Award,
              tag: 'Quality Commitment',
              heading: 'Every project, every stage.',
              body: 'Strict Quality Management System across fabrication, construction, installation, and commissioning. Continuous upgrades in machinery, inspection equipment, and training.',
            },
            {
              icon: ShieldCheck,
              tag: 'HSE Policy',
              heading: 'Safety is our highest priority.',
              body: 'Industrial safety standards, hazard identification, risk assessment, and HSE training — every site, zero compromise.',
            },
          ].map((item, i) => {
            const IconComponent = item.icon;
            return (
              <div key={i} className="bg-[#0B0D11] text-white p-10 lg:p-14 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 text-[#E31E24] flex items-center justify-center mb-6 group-hover:bg-[#E31E24] group-hover:text-white group-hover:border-[#E31E24] transition-all duration-300">
                  <IconComponent className="w-5 h-5" />
                </div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#E31E24] mb-3">{item.tag}</p>
                <h3 className="text-2xl font-extrabold text-white font-outfit leading-snug mb-4">
                  {item.heading}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
