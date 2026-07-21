'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowRight, Wrench } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useCms } from '@/context/CmsContext';
import { getIcon } from '@/lib/icons';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const { services } = useCms();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-card-anim', {
        y: 60,
        scale: 0.95,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [services]);

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-slate-50 relative overflow-hidden bg-grid-pattern border-y border-slate-200/80">
      {/* Glow Orbs */}
      <div className="mesh-glow-red top-1/3 -right-32 opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="tag-badge">Our Core Services</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F1520] font-outfit">
              Engineering Solutions <br className="hidden sm:inline" />
              <span className="text-gradient-red">That Drive Industry</span>
            </h2>
          </div>

          <a
            href="/services"
            className="inline-flex items-center gap-2 text-[#E31E24] font-extrabold text-sm hover:gap-3 transition-all font-outfit"
          >
            <span>Explore All 10 Services</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Dynamic CMS Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = getIcon(service.iconName, Wrench);
            return (
              <div key={service.id || index} className="service-card-anim">
                <SpotlightCard className="bg-white border border-slate-200/90 p-8 shadow-sm hover:shadow-2xl hover:border-[#E31E24]/50 card-glow-hover group h-full flex flex-col justify-between rounded-3xl transition-all duration-300">
                  <div>
                    {/* Corner Accent Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-500/10 via-transparent to-transparent rounded-bl-full pointer-events-none group-hover:from-[#E31E24]/20 transition-all duration-500"></div>

                    {/* Top Bar: Red Icon Container & Division Number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 text-[#E31E24] flex items-center justify-center shadow-sm group-hover:bg-[#E31E24] group-hover:text-white group-hover:border-[#E31E24] transition-all duration-300 group-hover:scale-110">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <span className="text-2xl font-black font-outfit text-slate-200 group-hover:text-[#E31E24] transition-colors">
                        {service.number || `0${index + 1}`}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-[#0F1520] font-outfit mb-3 group-hover:text-[#E31E24] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 group-hover:text-[#E31E24] transition-colors">
                      View Capability
                    </span>
                    <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#E31E24] group-hover:text-white transition-all group-hover:rotate-45">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
