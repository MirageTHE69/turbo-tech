'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useCms } from '@/context/CmsContext';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectsGallery({ onOpenQuote }) {
  const { projects } = useCms();
  const [activeCategory, setActiveCategory] = useState('All');
  const galleryRef = useRef(null);

  const rawCategories = Array.from(new Set(projects.map((p) => p.category)));
  const categories = ['All', ...rawCategories];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  useEffect(() => {
    if (!galleryRef.current) return;
    const cards = galleryRef.current.querySelectorAll('.pg-card');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power3.out', clearProps: 'transform' }
    );
  }, [filteredProjects]);

  return (
    <section className="py-24 lg:py-32 bg-white border-t border-[#E2DDD8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow mb-5">Delivered Projects</p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0F1520] font-outfit leading-[1.06] tracking-tight">
              Our Work,
              <br />
              Our Legacy.
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-[11px] font-bold font-outfit tracking-wide transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-[#0F1520] text-white border-[#0F1520]'
                    : 'border-[#D0CAC4] text-slate-500 hover:border-[#0F1520] hover:text-[#0F1520] bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry gallery */}
        <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E2DDD8]">
          {filteredProjects.map((proj, idx) => {
            const isFeatured = idx % 7 === 0;
            return (
              <div
                key={proj.id || idx}
                className={`pg-card group relative overflow-hidden bg-slate-900 ${isFeatured ? 'md:col-span-2' : ''}`}
              >
                <div className={`relative w-full overflow-hidden ${isFeatured ? 'h-80' : 'h-60'}`}>
                  <img
                    src={proj.image || '/images/hero_plant.png'}
                    alt={proj.title}
                    className="w-full h-full object-cover img-vivid group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090D]/85 via-[#08090D]/25 to-transparent" />

                  {/* Category chip */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[9px] font-black font-outfit uppercase tracking-[0.16em] bg-[#E31E24] text-white px-2.5 py-1">
                      {proj.category}
                    </span>
                  </div>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className={`font-black font-outfit text-white leading-tight mb-2 group-hover:text-[#E31E24] transition-colors duration-300 ${isFeatured ? 'text-2xl' : 'text-lg'}`}>
                      {proj.title}
                    </h3>

                    <div className="flex items-center gap-4 text-[11px] text-white/50 font-medium mb-3">
                      {proj.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#E31E24]" />
                          {proj.location}
                        </span>
                      )}
                      {proj.year && (
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#E31E24]" />
                          {proj.year}
                        </span>
                      )}
                    </div>

                    <div className="overflow-hidden">
                      <button
                        onClick={onOpenQuote}
                        className="flex items-center gap-2 text-[11px] font-bold text-[#E31E24] translate-y-6 group-hover:translate-y-0 transition-transform duration-300 ease-out"
                      >
                        <span>Similar Project</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            <p className="text-sm">No projects in this category yet.</p>
          </div>
        )}

      </div>
    </section>
  );
}
