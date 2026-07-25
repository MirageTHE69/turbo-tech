'use client';

import React from 'react';
import { ShieldCheck, Award, Handshake, Users, Lightbulb, HeartHandshake } from 'lucide-react';
import SpotlightCard from '../SpotlightCard';

export default function OurValues() {
  const coreValues = [
    { title: 'Engineering Excellence', desc: 'Precision execution & technical mastery in every project.', icon: Award },
    { title: 'Safety Always', desc: 'Zero compromise HSE policy protecting teams & assets.', icon: ShieldCheck },
    { title: 'Integrity', desc: 'Transparency, ethics, and accountability in all contracts.', icon: Handshake },
    { title: 'Innovation', desc: 'Modern techniques and state-of-the-art machinery.', icon: Lightbulb },
    { title: 'Customer Commitment', desc: 'On-time project delivery tailored to client specifications.', icon: HeartHandshake },
    { title: 'Skilled Workforce', desc: 'Certified engineers, welders, and technical specialists.', icon: Users },
  ];

  return (
    <section id="values" className="py-24 lg:py-32 bg-[#0B0D11] text-white relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(227,30,36,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="mb-16">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#E31E24] mb-4">
            Core Operating Values
          </p>
          <h2 className="text-4xl sm:text-5xl font-black font-outfit text-white leading-[1.08]">
            Principles That Drive<br />Every Project.
          </h2>
        </div>

        {/* 6 Values — 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {coreValues.map((val, idx) => {
            const IconComponent = val.icon;
            return (
              <SpotlightCard
                key={idx}
                className="bg-[#0B0D11] p-8 group hover:bg-white/[0.03] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 text-[#E31E24] flex items-center justify-center mb-5 group-hover:bg-[#E31E24] group-hover:text-white group-hover:border-[#E31E24] transition-all duration-300">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white font-outfit mb-2 group-hover:text-[#E31E24] transition-colors">
                  {val.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {val.desc}
                </p>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
