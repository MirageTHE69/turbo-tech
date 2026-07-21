'use client';

import React from 'react';
import { Building2, HardHat, Factory, Award } from 'lucide-react';

export default function ProjectsStats() {
  const stats = [
    {
      value: '500+',
      label: 'Projects Completed',
      icon: Building2,
    },
    {
      value: '15+',
      label: 'Years of Experience',
      icon: HardHat,
    },
    {
      value: '20+',
      label: 'Industries Served',
      icon: Factory,
    },
    {
      value: '98%',
      label: 'Client Satisfaction',
      icon: Award,
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y sm:divide-y-0 md:divide-x divide-slate-200">
          {stats.map((st, idx) => {
            const IconComponent = st.icon;
            return (
              <div key={idx} className={`flex items-center gap-4 pt-4 sm:pt-0 ${idx > 0 ? 'md:pl-6' : ''}`}>
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E31E24] flex items-center justify-center shrink-0">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0F1520] font-outfit">
                    {st.value}
                  </div>
                  <div className="text-xs text-slate-500 font-semibold mt-0.5">
                    {st.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
