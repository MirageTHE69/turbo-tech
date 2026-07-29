'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { target: 13, suffix: '+', label: 'Years of Industry Experience', sub: 'Since 2011' },
  { target: 150, suffix: '+', label: 'Projects Delivered', sub: 'Across India' },
  { target: 150, suffix: '+', label: 'Certified Workforce', sub: 'Trained In-House' },
];

export default function StatsCounter() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Divider lines
      gsap.from('.stat-v-rule', {
        scaleY: 0,
        transformOrigin: 'top',
        duration: 1,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      // Eyebrow + heading
      gsap.fromTo(
        '.stats-header-el',
        { opacity: 0, y: 18 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' },
        }
      );

      // Count up numbers
      sectionRef.current?.querySelectorAll('.stat-number').forEach((el) => {
        const target = parseInt(el.getAttribute('data-target'), 10);
        const obj = { val: 0 };

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
          onEnter: () =>
            gsap.to(obj, {
              val: target,
              duration: 2.2,
              ease: 'power3.out',
              onUpdate: () => { el.textContent = Math.floor(obj.val); },
            }),
        });
      });

      // Fade in each stat block
      gsap.fromTo(
        '.stat-block',
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 bg-white border-y border-[#E2DDD8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="stats-header-el eyebrow mb-4 opacity-0">By the Numbers</p>
            <h2 className="stats-header-el text-3xl sm:text-4xl font-black text-[#0F1520] font-outfit tracking-tight leading-[1.1] opacity-0">
              13 Years of Proven
              <br />
              <span className="text-[#E31E24]">Industrial Delivery.</span>
            </h2>
          </div>
          <p className="stats-header-el text-sm text-slate-400 max-w-xs leading-relaxed opacity-0 md:text-right">
            ISO 9001:2015 certified engineering with a track record across refineries, power plants, and steel mills.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 relative">

          {/* Vertical rules */}
          <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-[#E2DDD8] stat-v-rule origin-top" />
          <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px bg-[#E2DDD8] stat-v-rule origin-top" />

          {stats.map((stat, i) => (
            <div key={i} className="stat-block opacity-0 px-0 md:px-12 first:pl-0 last:pr-0 py-8 md:py-4">

              {/* Giant number */}
              <div className="flex items-end gap-0 mb-3 leading-none">
                <span
                  className="stat-number font-outfit text-[clamp(4rem,9vw,7rem)] font-extralight text-[#0F1520] tracking-[-0.04em]"
                  data-target={stat.target}
                >
                  0
                </span>
                <span className="font-outfit text-[clamp(2rem,5vw,4rem)] font-black text-[#E31E24] tracking-tight mb-1">
                  {stat.suffix}
                </span>
              </div>

              {/* Label + sub */}
              <div className="w-8 h-[1.5px] bg-[#E31E24] mb-3 line-grow" style={{ animationDelay: `${0.3 + i * 0.1}s` }} />
              <p className="text-base font-semibold text-[#0F1520] mb-1 font-outfit">{stat.label}</p>
              <p className="text-xs text-slate-400 font-medium tracking-wide">{stat.sub}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
