'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowRight, Wrench } from 'lucide-react';
import { getIcon } from '@/lib/icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useCms } from '@/context/CmsContext';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CoreServicesGrid({ onOpenQuote }) {
  const { services } = useCms();
  const listRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = listRef.current?.querySelectorAll('.srv-row');
      if (!rows) return;
      gsap.fromTo(
        rows,
        { opacity: 0, x: -24 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.07,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: listRef.current,
            start: 'top 80%',
          },
        }
      );
    }, listRef);
    return () => ctx.revert();
  }, [services]);

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#E31E24] mb-4">
              What We Do
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0F1520] font-outfit leading-[1.08]">
              Our Core<br />Engineering Services.
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
            From concept to commissioning, end-to-end solutions built for heavy industry.
          </p>
        </div>

        {/* Horizontal row list */}
        <div ref={listRef} className="divide-y divide-slate-100">
          {services.map((srv, idx) => {
            const IconComponent = getIcon(srv.iconName, Wrench);
            return (
              <div
                key={srv.id || idx}
                className="srv-row group flex items-center gap-6 py-5 cursor-pointer hover:bg-[#F9F9F7] -mx-4 px-4 rounded-xl transition-colors duration-200"
                onClick={onOpenQuote}
              >
                {/* Number */}
                <span className="text-2xl font-black font-outfit text-slate-100 group-hover:text-[#E31E24]/20 transition-colors shrink-0 w-8">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 text-[#E31E24] flex items-center justify-center shrink-0 group-hover:bg-[#E31E24] group-hover:text-white group-hover:border-[#E31E24] transition-all duration-300">
                  <IconComponent className="w-4.5 h-4.5" />
                </div>

                {/* Name */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-[#0F1520] font-outfit group-hover:text-[#E31E24] transition-colors leading-tight">
                    {srv.title}
                  </h3>
                  <p className="text-slate-400 text-xs mt-0.5 line-clamp-1 hidden sm:block">
                    {srv.desc}
                  </p>
                </div>

                {/* Animated arrow */}
                <div className="shrink-0 flex items-center gap-2 text-slate-300 group-hover:text-[#E31E24] transition-colors">
                  <div className="w-6 h-[1px] bg-slate-200 group-hover:bg-[#E31E24] group-hover:w-10 transition-all duration-300" />
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
