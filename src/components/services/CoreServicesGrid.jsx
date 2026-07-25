'use client';

import React, { useEffect, useRef } from 'react';
import ServiceCard from '../ServiceCard';
import { useCms } from '@/context/CmsContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CoreServicesGrid({ onOpenQuote }) {
  const { services } = useCms();
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll('.service-grid-card');
      if (!cards) return;
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
          },
        }
      );
    }, gridRef);
    return () => ctx.revert();
  }, [services]);

  return (
    <section className="py-24 lg:py-32 bg-[#F9F9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="tag-badge justify-center">What We Do</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F1520] font-outfit">
            Our Core Engineering Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From concept to commissioning, we deliver comprehensive solutions tailored to meet the unique needs of heavy industries across India.
          </p>
        </div>

        {/* 3-Column Card Grid with ServiceCard */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <div key={srv.id || idx} className="service-grid-card">
              <ServiceCard
                service={srv}
                index={idx}
                actionText="Request Quote"
                onActionClick={onOpenQuote}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
