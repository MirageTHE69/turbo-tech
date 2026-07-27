'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { useCms } from '@/context/CmsContext';

export default function ServicesSection() {
  const { services } = useCms();

  // Display 4 featured services on home landing page
  const featured = services.slice(0, 4);

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#FAFAFC] relative overflow-hidden">
      
      {/* Background Graphic: Concentric Curves on Right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-20 z-0 overflow-hidden hidden md:block">
        <svg viewBox="0 0 500 500" fill="none" className="w-full h-full text-red-500">
          <circle cx="350" cy="250" r="120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="350" cy="250" r="200" stroke="currentColor" strokeWidth="1" />
          <circle cx="350" cy="250" r="280" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="350" cy="250" r="360" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-[#E52323] text-xs font-extrabold tracking-widest uppercase">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E52323] inline-block animate-pulse" />
              OUR SERVICES
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0F172A] tracking-tight leading-[1.12] font-outfit">
              What We Build <br />
              <span className="text-[#E52323]">For Industry.</span>
            </h2>

            <div className="w-12 h-1 bg-[#E52323] rounded-full my-3" />

            <p className="text-slate-500 text-sm sm:text-base max-w-xl leading-relaxed font-normal">
              End-to-end engineering solutions delivering strength, precision, and performance across every industrial sector.
            </p>
          </div>

          <a
            href="/services"
            className="inline-flex items-center gap-3 bg-white border border-slate-200/80 hover:border-slate-300 px-6 py-3 rounded-full text-slate-800 font-bold text-sm shadow-sm hover:shadow transition-all group font-outfit cursor-pointer shrink-0 self-start md:self-auto"
          >
            <span>View All Services</span>
            <div className="w-8 h-8 rounded-full bg-red-50 text-[#E52323] flex items-center justify-center group-hover:bg-[#E52323] group-hover:text-white transition-all shadow-sm">
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>
        </div>

        {/* 4 Featured Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((service, index) => (
            <div key={service.id || index}>
              <ServiceCard service={service} index={index} actionText="Learn More" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
