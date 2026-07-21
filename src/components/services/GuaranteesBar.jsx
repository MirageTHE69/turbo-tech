'use client';

import React from 'react';
import { ShieldCheck, Award, Clock, Headphones } from 'lucide-react';

export default function GuaranteesBar() {
  const items = [
    {
      title: 'Safety First',
      desc: 'Zero compromise on safety at every step.',
      icon: ShieldCheck,
    },
    {
      title: 'Quality Assured',
      desc: 'International standards and best practices.',
      icon: Award,
    },
    {
      title: 'On-Time Delivery',
      desc: 'Committed to delivering on time, every time.',
      icon: Clock,
    },
    {
      title: '24/7 Support',
      desc: 'Always here to support your operations.',
      icon: Headphones,
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 lg:divide-x divide-slate-200">
          {items.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className={`flex items-start gap-4 pt-4 sm:pt-0 ${idx > 0 ? 'lg:pl-6' : ''}`}>
                <div className="w-12 h-12 rounded-full border border-red-200 bg-red-50 text-[#E31E24] flex items-center justify-center shrink-0">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0F1520] font-outfit">{item.title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
