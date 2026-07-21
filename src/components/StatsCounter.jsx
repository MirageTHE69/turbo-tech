'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ShieldCheck, Award, Users, CheckCircle, Clock } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StatsCounter() {
  const sectionRef = useRef(null);

  const stats = [
    { target: 13, suffix: '+', label: 'Years Experience', icon: Clock },
    { target: 500, suffix: '+', label: 'Projects Delivered', icon: Award },
    { target: 300, suffix: '+', label: 'Certified Workforce', icon: Users },
    { target: 100, suffix: '%', label: 'HSE & Safety First', icon: ShieldCheck },
    { target: 100, suffix: '%', label: 'Quality Execution', icon: CheckCircle },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = sectionRef.current.querySelectorAll('.stat-number');

      counters.forEach((counter) => {
        const targetVal = parseInt(counter.getAttribute('data-target'), 10);
        const obj = { val: 0 };

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top 85%',
          onEnter: () => {
            gsap.to(obj, {
              val: targetVal,
              duration: 2.2,
              ease: 'power3.out',
              onUpdate: () => {
                counter.innerText = Math.floor(obj.val);
              },
            });
          },
          once: true,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-white border-y border-slate-200/80 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/90 p-5 rounded-3xl text-center hover:bg-white hover:border-[#E31E24]/40 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 text-[#E31E24] flex items-center justify-center mx-auto mb-3 shadow-sm group-hover:bg-[#E31E24] group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-[#0F1520] font-outfit tracking-tight">
                  <span className="stat-number" data-target={stat.target}>
                    0
                  </span>
                  <span className="text-[#E31E24]">{stat.suffix}</span>
                </div>
                <div className="text-xs font-bold text-slate-600 uppercase tracking-wider mt-1.5 font-outfit">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
