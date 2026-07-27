'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
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

  // Show only 3 featured services on home
  const featured = services.slice(0, 3);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-card-anim', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [featured]);

  return (
    <section id="services" ref={sectionRef} className="py-28 lg:py-36 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#E31E24] mb-4">
              Our Core Services
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0F1520] font-outfit leading-[1.08]">
              What We Build<br />For Industry.
            </h2>
          </div>

          <a
            href="/services"
            className="inline-flex items-center gap-3 text-[#0F1520] font-bold text-sm hover:text-[#E31E24] transition-all group font-outfit shrink-0"
          >
            <span>View All 10 Services</span>
            <div className="w-8 h-[2px] bg-slate-200 group-hover:bg-[#E31E24] group-hover:w-12 transition-all" />
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#E31E24] transition-colors" />
          </a>
        </div>

        {/* 3 Featured Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((service, index) => (
            <div key={service.id || index} className="service-card-anim">
              <ServiceCard service={service} index={index} actionText="Learn More" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
