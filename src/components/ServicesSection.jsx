'use client';

import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useCms } from '@/context/CmsContext';
import { getIcon } from '@/lib/icons';
import { Wrench } from 'lucide-react';

const defaultImages = [
  '/images/hero_plant.png',
  '/images/welder.png',
  '/images/project_piping.png',
  '/images/fire_safety.png',
  '/images/civil_construction.png',
  '/images/about_team.png',
];

function ServicePanel({ service, index, actionText = 'Learn More' }) {
  const IconComponent = getIcon(service.iconName, Wrench);
  const cardImage = service.image || defaultImages[index % defaultImages.length];
  const num = String(index + 1).padStart(2, '0');

  return (
    <div className="service-panel group flex flex-col h-full">
      {/* Image */}
      <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-900 shrink-0">
        <img
          src={cardImage}
          alt={service.title}
          className="service-panel-img w-full h-full object-cover img-vivid"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
        <span className="absolute top-4 right-4 text-5xl font-black font-outfit text-white/10 leading-none select-none">
          {num}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-7 bg-white relative">
        {/* Red top reveal line */}
        <div className="absolute top-0 left-0 h-[2px] w-0 bg-[#E31E24] group-hover:w-full transition-all duration-500 ease-out" />

        {/* Icon + Title */}
        <div className="flex items-start gap-4 mb-4">
          <div className="shrink-0 w-10 h-10 bg-[#E31E24]/8 border border-[#E31E24]/15 flex items-center justify-center text-[#E31E24] group-hover:bg-[#E31E24] group-hover:border-[#E31E24] group-hover:text-white transition-all duration-300">
            <IconComponent className="w-5 h-5" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-[#0F1520] font-outfit leading-snug group-hover:text-[#E31E24] transition-colors duration-300 pt-0.5">
            {service.title}
          </h3>
        </div>

        {/* Rule */}
        <div className="w-full h-px bg-[#E2DDD8] mb-4" />

        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-1">
          {service.desc}
        </p>

        {/* Footer link */}
        <div className="mt-6">
          <a href="/services" className="arrow-link font-outfit text-sm">
            <span>{actionText}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const { services } = useCms();
  const sectionRef   = useRef(null);
  const featured     = services.slice(0, 4);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in-view'); }),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 lg:py-32 bg-[#F5F4F0]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 scroll-reveal">
          <div>
            <p className="eyebrow mb-5">Our Services</p>
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-[#0F1520] font-outfit leading-[1.06] tracking-tight">
              What We Build
              <br />
              <span className="text-[#E31E24]">For Industry.</span>
            </h2>
          </div>

          <a
            href="/services"
            className="inline-flex items-center gap-3 self-start md:self-auto shrink-0 border border-[#C5BFB9] bg-white px-6 py-3 text-sm font-bold text-[#0F1520] hover:bg-[#0F1520] hover:text-white hover:border-[#0F1520] transition-all duration-300 group font-outfit"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* 4-column panel grid — separated by 1px dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#DDD8D2]">
          {featured.map((service, i) => (
            <div
              key={service.id || i}
              className={`scroll-reveal scroll-reveal-delay-${i + 1} bg-[#F5F4F0]`}
            >
              <ServicePanel service={service} index={i} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
