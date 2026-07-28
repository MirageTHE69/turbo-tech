'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useCms } from '@/context/CmsContext';
import { getIcon } from '@/lib/icons';
import { Wrench } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const defaultImages = [
  '/images/hero_plant.png',
  '/images/welder.png',
  '/images/project_piping.png',
  '/images/fire_safety.png',
  '/images/civil_construction.png',
  '/images/about_team.png',
];

export default function CoreServicesGrid({ onOpenQuote }) {
  const { services } = useCms();
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.csg-card',
        { opacity: 0, y: 32 },
        {
          opacity: 1, y: 0, duration: 0.75, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 80%' },
        }
      );
    }, gridRef);
    return () => ctx.revert();
  }, [services]);

  return (
    <section id="core-services" className="py-24 lg:py-32 bg-white border-t border-[#E2DDD8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow mb-5">What We Do</p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0F1520] font-outfit leading-[1.06] tracking-tight">
              Our Core
              <br />
              <span className="text-[#E31E24]">Engineering Services.</span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-xs leading-relaxed md:text-right">
            End-to-end solutions from concept to commissioning across heavy industry.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E2DDD8]">
          {services.map((srv, idx) => {
            const IconComponent = getIcon(srv.iconName, Wrench);
            const cardImage = srv.image || defaultImages[idx % defaultImages.length];
            const num = String(idx + 1).padStart(2, '0');

            return (
              <div key={srv.id || idx} className="csg-card bg-white group flex flex-col opacity-0">
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-slate-900 shrink-0">
                  <img
                    src={cardImage}
                    alt={srv.title}
                    className="service-panel-img w-full h-full object-cover img-vivid"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-4 right-4 text-4xl font-black font-outfit text-white/10 select-none leading-none">
                    {num}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-7 relative bg-white">
                  <div className="absolute top-0 left-0 h-[2px] w-0 bg-[#E31E24] group-hover:w-full transition-all duration-500" />

                  <div className="flex items-start gap-4 mb-4">
                    <div className="shrink-0 w-10 h-10 border border-[#E2DDD8] text-[#E31E24] flex items-center justify-center group-hover:bg-[#E31E24] group-hover:border-[#E31E24] group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#0F1520] font-outfit leading-snug group-hover:text-[#E31E24] transition-colors pt-0.5">
                      {srv.title}
                    </h3>
                  </div>

                  <div className="w-full h-px bg-[#E2DDD8] mb-4" />
                  <p className="text-slate-500 text-sm leading-relaxed flex-1 line-clamp-3">{srv.desc}</p>

                  <div className="mt-6">
                    <button onClick={onOpenQuote} className="arrow-link font-outfit text-sm">
                      <span>Request Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
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
