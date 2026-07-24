'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowRight, Wrench } from 'lucide-react';
import ServiceCard from './ServiceCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useCms } from '@/context/CmsContext';

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
          {services.map((service, index) => (
            <div key={service.id || index} className="service-card-anim">
              <ServiceCard service={service} index={index} actionText="Explore Service" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
