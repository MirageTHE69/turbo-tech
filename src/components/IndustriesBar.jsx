'use client';

import React from 'react';
import { Factory, Flame, FlaskConical, Building2, Zap, Layers, Shield, Wrench, HardHat } from 'lucide-react';

export default function IndustriesBar() {
  const clients = [
    { name: 'HPCL', sub: 'Hindustan Petroleum' },
    { name: 'IOCL', sub: 'Indian Oil' },
    { name: 'MEIL', sub: 'Megha Engineering' },
    { name: 'NSCPL', sub: 'Narmada Clean Tech' },
    { name: 'ArcelorMittal Nippon Steel', sub: 'AM/NS India' },
    { name: 'Mansi Ganga', sub: 'Builders & Engineers' },
  ];

  const industries = [
    { name: 'Oil & Gas', icon: Flame },
    { name: 'Petrochemicals', icon: FlaskConical },
    { name: 'Chemical Industries', icon: Factory },
    { name: 'Power Plants', icon: Zap },
    { name: 'Steel Plants', icon: Layers },
    { name: 'Infrastructure & EPC', icon: Building2 },
    { name: 'Heavy Engineering', icon: Wrench },
    { name: 'Refineries', icon: HardHat },
  ];

  return (
    <section id="industries" className="py-10 bg-slate-900 text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Client Logos / Enterprise Partners */}
        <div>
          <div className="text-center md:text-left text-xs font-bold tracking-widest text-slate-400 uppercase font-outfit mb-4">
            Trusted Execution Partner for Industry Leaders
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-[#E31E24]/50 rounded-xl p-3.5 text-center transition-all duration-200 group"
              >
                <div className="text-sm font-extrabold text-white group-hover:text-[#E31E24] font-outfit tracking-tight">
                  {client.name}
                </div>
                <div className="text-[10px] text-slate-400 font-medium truncate mt-0.5">
                  {client.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Industry Sectors Ticker */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs font-bold tracking-widest text-[#E31E24] uppercase shrink-0 font-outfit flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>Sectors Served</span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-3">
            {industries.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors cursor-default"
                >
                  <IconComponent className="w-4 h-4 text-[#E31E24]" />
                  <span className="text-xs font-semibold font-outfit">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
