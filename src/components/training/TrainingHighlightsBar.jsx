'use client';

import React from 'react';
import { Hammer, Award, Wrench, Briefcase } from 'lucide-react';

export default function TrainingHighlightsBar() {
  const items = [
    {
      title: 'Hands-on Workshop',
      desc: '80% practical training in live industrial setup.',
      icon: Hammer,
    },
    {
      title: 'Certified Instructors',
      desc: 'Senior engineers with 15+ years site experience.',
      icon: Award,
    },
    {
      title: 'Modern Equipment',
      desc: 'Train on industrial-grade welding rigs & tools.',
      icon: Wrench,
    },
    {
      title: '100% Placement Support',
      desc: 'Direct hiring partnerships with top contractors.',
      icon: Briefcase,
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
