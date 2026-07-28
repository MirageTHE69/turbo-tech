'use client';

import React from 'react';
import { ShieldCheck, Award, Clock, Headphones } from 'lucide-react';

const items = [
  { icon: ShieldCheck, title: 'Safety First',      desc: 'Zero compromise on HSE at every project stage.' },
  { icon: Award,       title: 'Quality Assured',   desc: 'ISO certified — international standards applied.' },
  { icon: Clock,       title: 'On-Time Delivery',  desc: 'Committed to schedule, every time, every project.' },
  { icon: Headphones,  title: '24/7 Support',      desc: 'Always here to support your critical operations.' },
];

export default function GuaranteesBar() {
  return (
    <section className="bg-[#F5F4F0] border-t border-[#E2DDD8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E2DDD8]">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-[#F5F4F0] px-8 py-8 flex items-start gap-5 group hover:bg-white transition-colors">
                <div className="shrink-0 w-10 h-10 border border-[#E2DDD8] text-[#E31E24] flex items-center justify-center group-hover:bg-[#E31E24] group-hover:border-[#E31E24] group-hover:text-white transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F1520] font-outfit mb-1 group-hover:text-[#E31E24] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
