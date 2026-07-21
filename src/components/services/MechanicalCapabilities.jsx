'use client';

import React from 'react';
import { CheckCircle2, Wrench, Shield, Cpu } from 'lucide-react';

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

  return (
    <section className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="tag-badge text-[#E31E24] bg-slate-800 border-slate-700">Detailed Capabilities</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-white">
              Mechanical Engineering Execution Spectrum
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Turbo Tech executes specialized mechanical work for refineries, petrochemical plants, steel works, and heavy industries across India.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="bg-slate-800/70 hover:bg-slate-800 border border-slate-700/70 hover:border-[#E31E24]/50 p-4 rounded-xl flex items-center gap-3 transition-all duration-200 group"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-700 text-[#E31E24] group-hover:bg-[#E31E24] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold font-outfit text-slate-200 group-hover:text-white">
                {cap}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
