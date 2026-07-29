'use client';

import React from 'react';

const clientLogos = [
  { name: 'Mansi Ganga Builders & Engineers', logo: '/images/clients/mansi_ganga.jpg' },
  { name: 'MEIL - Megha Engineering & Infrastructures Ltd', logo: '/images/clients/meil.jpg' },
  { name: 'AFCONS Infrastructure', logo: '/images/clients/afcons.jpg' },
  { name: 'NUBERG EPC', logo: '/images/clients/nuberg.png' },
  { name: 'THERMAX', logo: '/images/clients/thermax.png' },
  { name: 'HPCL', logo: null, text: 'HPCL' },
  { name: 'IOCL', logo: null, text: 'IOCL' },
  { name: 'ArcelorMittal Nippon Steel', logo: null, text: 'AM/NS INDIA' },
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

const clientsDouble = [...clientLogos, ...clientLogos, ...clientLogos];
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
        </div>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="w-full h-px bg-[#E2DDD8]" />
        </div>

        {/* Client marquee — logos */}
        <div className="marquee-outer py-2">
          <div className="marquee-track flex items-center" style={{ animationDuration: '45s' }}>
            {clientsDouble.map((c, i) => (
              <div key={i} className="flex items-center shrink-0 mr-12 sm:mr-16 group">
                {c.logo ? (
                  <div className="h-14 sm:h-16 px-6 py-2.5 bg-white border border-[#E2DDD8] rounded-xl flex items-center justify-center shadow-sm group-hover:border-[#E31E24] group-hover:shadow-md transition-all duration-300">
                    <img
                      src={c.logo}
                      alt={c.name}
                      className="max-h-10 sm:max-h-11 w-auto max-w-[140px] sm:max-w-[170px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ) : (
                  <div className="h-14 sm:h-16 px-6 py-2.5 bg-white border border-[#E2DDD8] rounded-xl flex items-center justify-center shadow-sm group-hover:border-[#E31E24] group-hover:shadow-md transition-all duration-300">
                    <span className="text-base sm:text-lg font-black font-outfit text-[#0F1520]/80 group-hover:text-[#E31E24] transition-colors tracking-tight whitespace-nowrap">
                      {c.text}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sector tags marquee — reversed */}
        <div className="marquee-outer">
          <div className="marquee-track" style={{ animationDirection: 'reverse', animationDuration: '50s' }}>
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
