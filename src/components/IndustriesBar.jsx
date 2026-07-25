'use client';

import React from 'react';

export default function IndustriesBar() {
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

  // Duplicate for seamless infinite loop
  const clientsDouble = [...clients, ...clients];
  const sectorsDouble = [...sectors, ...sectors];

  return (
    <section id="industries" className="py-12 bg-[#080B11] text-white border-y border-white/5 overflow-hidden">
      <div className="space-y-6">

        {/* Label */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500">
            Trusted Execution Partner For Industry Leaders
          </p>
        </div>

        {/* Client Name Marquee */}
        <div className="marquee-outer">
          <div className="marquee-track" style={{ animationDuration: '65s' }}>
            {clientsDouble.map((name, i) => (
              <div
                key={i}
                className="flex items-center shrink-0 mr-12"
              >
                <span className="text-lg sm:text-xl font-black font-outfit text-white/30 hover:text-white transition-colors duration-300 tracking-tight cursor-default whitespace-nowrap">
                  {name}
                </span>
                <span className="ml-12 w-1.5 h-1.5 rounded-full bg-[#E31E24] shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Sector Tags Marquee (reversed direction) */}
        <div className="marquee-outer">
          <div className="marquee-track" style={{ animationDirection: 'reverse', animationDuration: '48s' }}>
            {sectorsDouble.map((name, i) => (
              <div
                key={i}
                className="flex items-center shrink-0 mr-8"
              >
                <span className="text-[11px] font-bold font-outfit text-slate-500 hover:text-[#E31E24] transition-colors duration-300 uppercase tracking-widest whitespace-nowrap">
                  {name}
                </span>
                <span className="ml-8 w-1 h-1 rounded-full bg-slate-700 shrink-0" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
