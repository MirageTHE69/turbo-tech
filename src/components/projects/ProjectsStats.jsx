'use client';

import React from 'react';

const stats = [
  { value: '13+',  label: 'Years Industry Track Record', sub: 'Established 2011' },
  { value: '150+', label: 'Projects Completed',        sub: 'Pan-India Delivery'     },
  { value: '100%', label: 'Safety & ISO Compliance',    sub: 'Zero High-Risk Incidents' },
  { value: '150+', label: 'Certified Workforce',       sub: 'Deployable Nationwide' },
];

export default function ProjectsStats() {
  return (
    <section className="bg-[#F5F4F0] border-t border-[#E2DDD8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E2DDD8]">
          {stats.map((st, i) => (
            <div key={i} className="bg-[#F5F4F0] px-8 py-8 group hover:bg-white transition-colors">
              <div className="text-3xl sm:text-4xl font-black font-outfit text-[#0F1520] group-hover:text-[#E31E24] transition-colors leading-none mb-2">
                {st.value}
              </div>
              <div className="w-6 h-px bg-[#E31E24] mb-2.5" />
              <div className="text-sm font-semibold text-[#0F1520] font-outfit">{st.label}</div>
              <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wide mt-0.5">{st.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
