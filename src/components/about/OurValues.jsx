'use client';

import React from 'react';
import { ShieldCheck, Award, Handshake, Users, Lightbulb, HeartHandshake } from 'lucide-react';

const coreValues = [
  { title: 'Engineering Excellence', desc: 'Precision execution & technical mastery in every project.', icon: Award },
  { title: 'Safety Always',          desc: 'Zero compromise HSE policy protecting teams & assets.',    icon: ShieldCheck },
  { title: 'Integrity',              desc: 'Transparency, ethics, and accountability in all contracts.', icon: Handshake },
  { title: 'Innovation',             desc: 'Modern techniques and state-of-the-art machinery.',         icon: Lightbulb },
  { title: 'Customer Commitment',    desc: 'On-time project delivery tailored to client specifications.', icon: HeartHandshake },
  { title: 'Skilled Workforce',      desc: 'Certified engineers, welders, and technical specialists.',   icon: Users },
];

export default function OurValues() {
  return (
    <section id="values" className="py-24 lg:py-32 bg-[#0B0D11] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-14">
          <p className="eyebrow mb-5" style={{ color: 'rgba(227,30,36,0.85)' }}>Core Operating Values</p>
          <h2 className="text-4xl sm:text-5xl font-black font-outfit text-white leading-[1.06] tracking-tight">
            Principles That Drive
            <br />
            Every Project.
          </h2>
        </div>

        {/* 6 Values — 3-column gap-px grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div key={idx} className="bg-[#0B0D11] p-8 lg:p-10 group hover:bg-white/[0.03] transition-colors relative">
                {/* Top accent */}
                <div className="absolute top-0 left-0 h-[2px] w-0 bg-[#E31E24] group-hover:w-full transition-all duration-500" />

                <div className="w-10 h-10 border border-white/10 text-[#E31E24] flex items-center justify-center mb-6 group-hover:bg-[#E31E24] group-hover:border-[#E31E24] group-hover:text-white transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-base font-bold text-white font-outfit mb-2 group-hover:text-[#E31E24] transition-colors">
                  {val.title}
                </h3>
                <div className="w-6 h-px bg-white/10 mb-3" />
                <p className="text-white/35 text-sm leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
