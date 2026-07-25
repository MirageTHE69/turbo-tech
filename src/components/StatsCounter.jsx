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
          start: 'top 80%',
          onEnter: () => {
            gsap.to(obj, {
              val: targetVal,
              duration: 2.4,
              ease: 'power3.out',
              onUpdate: () => {
                counter.innerText = Math.floor(obj.val);
              },
            });
          },
          once: true,
        });
      });

      // Section lines animate in
      gsap.from('.stat-divider', {
        scaleX: 0,
        transformOrigin: 'left',
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 bg-[#0B0D11] text-white relative overflow-hidden border-y border-white/5"
    >
      {/* Subtle red glow behind center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(227,30,36,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center md:items-start text-center md:text-left py-10 md:py-0 md:px-12 first:pl-0 last:pr-0 group"
            >
              {/* Big number */}
              <div className="flex items-end gap-1 mb-3">
                <span
                  className="stat-number text-6xl sm:text-7xl lg:text-8xl font-black font-outfit leading-none text-white tracking-tight group-hover:text-[#E31E24] transition-colors duration-500"
                  data-target={stat.target}
                >
                  0
                </span>
                <span className="text-3xl sm:text-4xl font-black text-[#E31E24] leading-none mb-1">
                  {stat.suffix}
                </span>
              </div>

              {/* Animated line */}
              <div className="stat-divider w-12 h-[2px] bg-[#E31E24] mb-4 group-hover:w-20 transition-all duration-500" />

              {/* Label */}
              <p className="text-slate-400 text-xs sm:text-sm font-medium leading-snug tracking-wide max-w-[180px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
