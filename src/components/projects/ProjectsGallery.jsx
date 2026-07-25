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

  // Stagger animate cards on filter change
  useEffect(() => {
    if (!galleryRef.current) return;
    const cards = galleryRef.current.querySelectorAll('.project-card');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.55, stagger: 0.06, ease: 'power3.out', clearProps: 'transform' }
    );
  }, [filteredProjects]);

  return (
    <section className="py-24 lg:py-32 bg-[#F9F9F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#E31E24] mb-3">
              Delivered Projects
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0F1520] font-outfit leading-[1.08]">
              Our Work,<br />Our Legacy.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-[11px] font-bold font-outfit transition-all duration-250 ${
                  activeCategory === cat
                    ? 'bg-[#0F1520] text-white'
                    : 'bg-white border border-slate-200 text-slate-500 hover:border-slate-400 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-style gallery grid */}
        <div
          ref={galleryRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filteredProjects.map((proj, idx) => {
            // Every 7th card spans 2 columns (featured)
            const isFeatured = idx % 7 === 0;
            return (
              <div
                key={proj.id || idx}
                className={`project-card group relative overflow-hidden rounded-2xl ${
                  isFeatured ? 'md:col-span-2' : ''
                }`}
              >
                {/* Full image */}
                <div className={`relative w-full overflow-hidden ${isFeatured ? 'h-80' : 'h-56'}`}>
                  <img
                    src={proj.image || '/images/hero_plant.png'}
                    alt={proj.title}
                    className="w-full h-full object-cover img-vivid group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Dark gradient for text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090D]/80 via-[#08090D]/20 to-transparent" />

                  {/* Category tag */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-black font-outfit uppercase tracking-widest bg-white/15 border border-white/20 backdrop-blur-md text-white px-2.5 py-1 rounded-full">
                      {proj.category}
                    </span>
                  </div>

                  {/* Bottom overlay content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className={`font-black font-outfit text-white leading-tight mb-2 group-hover:text-[#E31E24] transition-colors duration-300 ${isFeatured ? 'text-2xl' : 'text-lg'}`}>
                      {proj.title}
                    </h3>

                    {/* Meta row */}
                    <div className="flex items-center gap-4 text-[11px] text-white/60 font-medium">
                      {proj.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {proj.location}
                        </span>
                      )}
                      {proj.year && (
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {proj.year}
                        </span>
                      )}
                    </div>

                    {/* Hover reveal arrow */}
                    <div className="overflow-hidden mt-3">
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

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            <p className="text-sm">No projects in this category yet.</p>
          </div>
        )}

      </div>
    </section>
  );
}
