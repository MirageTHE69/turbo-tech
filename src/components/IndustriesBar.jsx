'use client';

import React from 'react';

const clients = [
  'HPCL',
  'IOCL',
  'MEIL',
  'NSCPL',
  'ArcelorMittal Nippon Steel',
  'Mansi Ganga Engineers',
];

const sectors = [
  'Oil & Gas',
  'Petrochemicals',
  'Chemical Industries',
  'Power Plants',
  'Steel Plants',
  'Infrastructure & EPC',
  'Heavy Engineering',
  'Refineries',
  'Industrial Piping',
  'Fabrication',
];

const clientsDouble = [...clients, ...clients];
const sectorsDouble = [...sectors, ...sectors];

export default function IndustriesBar() {
  return (
    <section id="industries" className="py-16 bg-[#F5F4F0] border-y border-[#E2DDD8] overflow-hidden">
      <div className="space-y-8">

        {/* Top label */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between">
          <p className="eyebrow" style={{ color: '#8B8580' }}>
            Trusted Execution Partner For Industry Leaders
          </p>
          {/* Thin horizontal count */}
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#C5BFB9] hidden sm:block">
            {clients.length} Major Clients
          </span>
        </div>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="w-full h-px bg-[#E2DDD8]" />
        </div>

        {/* Client marquee — large names */}
        <div className="marquee-outer">
          <div className="marquee-track" style={{ animationDuration: '80s' }}>
            {clientsDouble.map((name, i) => (
              <div key={i} className="flex items-center shrink-0 mr-16">
                <span className="text-xl sm:text-2xl font-black font-outfit text-[#0F1520]/15 hover:text-[#0F1520]/50 transition-colors duration-400 tracking-tight cursor-default whitespace-nowrap">
                  {name}
                </span>
                <span className="ml-16 w-1.5 h-1.5 rounded-full bg-[#E31E24]/40 shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Sector tags marquee — reversed */}
        <div className="marquee-outer">
          <div className="marquee-track" style={{ animationDirection: 'reverse', animationDuration: '60s' }}>
            {sectorsDouble.map((name, i) => (
              <div key={i} className="flex items-center shrink-0 mr-10">
                <span className="text-[11px] font-bold font-outfit text-[#8B8580] hover:text-[#E31E24] transition-colors duration-300 uppercase tracking-[0.18em] whitespace-nowrap">
                  {name}
                </span>
                <span className="ml-10 w-1 h-1 rounded-full bg-[#C5BFB9] shrink-0" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
