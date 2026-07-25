'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StatsCounter() {
  const sectionRef = useRef(null);

  const stats = [
    { target: 13, suffix: '+', label: 'Years of Industry Experience' },
    { target: 500, suffix: '+', label: 'Projects Delivered Across India' },
    { target: 300, suffix: '+', label: 'Certified Workforce Strong' },
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
              duration: 2,
              ease: 'power3.out',
              onUpdate: () => {
                counter.innerText = Math.floor(obj.val);
              },
            });
          },
          once: true,
        });
      });

      gsap.from('.stat-divider', {
        scaleX: 0,
        transformOrigin: 'left',
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-10 lg:py-14 bg-[#0B0D11] text-white relative overflow-hidden border-y border-white/5"
    >
      {/* Subtle red ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(227,30,36,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center md:items-start text-center md:text-left py-5 md:py-0 md:px-8 first:pl-0 last:pr-0 group"
            >
              {/* Number */}
              <div className="flex items-end gap-1 mb-2">
                <span
                  className="stat-number text-4xl sm:text-5xl lg:text-6xl font-black font-outfit leading-none text-white tracking-tight group-hover:text-[#E31E24] transition-colors duration-300"
                  data-target={stat.target}
                >
                  0
                </span>
                <span className="text-2xl sm:text-3xl font-black text-[#E31E24] leading-none mb-0.5">
                  {stat.suffix}
                </span>
              </div>

              {/* Red accent line */}
              <div className="stat-divider w-8 h-[2px] bg-[#E31E24] mb-2.5 group-hover:w-14 transition-all duration-300" />

              {/* Label */}
              <p className="text-slate-400 text-xs font-semibold leading-snug tracking-wide max-w-[180px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
