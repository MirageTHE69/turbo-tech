'use client';

import React from 'react';

export default function MechanicalCapabilities() {
  const capabilities = [
    'Plant Structure Fabrication',
    'Structural Steel Erection',
    'Pressure Vessel Fabrication',
    'Storage Tank Fabrication',
    'Boiler Components',
    'Heat Exchangers',
    'Economizers & Headers',
    'Tube Coils Fabrication',
    'Pipeline Fabrication',
    'Industrial Painting',
    'Insulation Work',
    'Equipment Installation',
    'Equipment Alignment',
    'Rotary Equipment Installation',
    'Static Equipment Installation',
    'Instrument Installation',
    'Chimney Erection',
    'Shutdown Maintenance',
    'Hydro Testing',
    'Mechanical Commissioning',
  ];

  const capabilitiesDouble = [...capabilities, ...capabilities];

  return (
    <section className="py-16 lg:py-28 bg-[#0B0D11] text-white border-y border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 mb-10 sm:mb-12">
        <p className="eyebrow mb-4" style={{ color: 'rgba(227,30,36,0.85)' }}>
          Detailed Capabilities
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-outfit text-white leading-[1.08]">
          Mechanical Engineering
          <br className="hidden sm:block" />
          {' '}Execution Spectrum.
        </h2>
      </div>

      {/* Ticker 1 — left to right */}
      <div className="marquee-outer mb-4">
        <div className="marquee-track" style={{ animationDuration: '130s' }}>
          {capabilitiesDouble.map((cap, i) => (
            <div key={i} className="flex items-center shrink-0 mr-10">
              <span className="text-base sm:text-lg font-bold font-outfit text-slate-300 whitespace-nowrap hover:text-[#E31E24] transition-colors cursor-default">
                {cap}
              </span>
              <span className="ml-10 w-1.5 h-1.5 rounded-full bg-[#E31E24]/40 shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Ticker 2 — right to left */}
      <div className="marquee-outer">
        <div className="marquee-track" style={{ animationDirection: 'reverse', animationDuration: '100s' }}>
          {capabilitiesDouble.map((cap, i) => (
            <div key={i} className="flex items-center shrink-0 mr-10">
              <span className="text-sm font-medium font-outfit text-slate-500 whitespace-nowrap hover:text-white transition-colors cursor-default uppercase tracking-wider">
                {cap}
              </span>
              <span className="ml-10 w-1 h-1 rounded-full bg-slate-700 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
