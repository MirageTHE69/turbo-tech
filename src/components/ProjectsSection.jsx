'use client';

import React, { useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';
import { useCms } from '@/context/CmsContext';

export default function ProjectsSection() {
  const scrollRef = useRef(null);
  const { projects } = useCms();
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Mechanical Construction', 'Fabrication & Erection', 'Industrial Piping', 'Shutdown & Maintenance'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase().split(' ')[0]));

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-28 lg:py-36 bg-[#0B0D11] text-white relative overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#E31E24]">
              Project Portfolio
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white font-outfit leading-[1.08]">
              Executed Key<br />Engineering Projects.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white font-bold text-xs font-outfit mr-2 transition-colors"
            >
              <span>Explore All ({projects.length})</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E31E24]" />
            </a>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleScroll('left')}
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 text-slate-300 hover:bg-[#E31E24] hover:text-white hover:border-[#E31E24] flex items-center justify-center transition-all"
                aria-label="Previous Projects"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 text-slate-300 hover:bg-[#E31E24] hover:text-white hover:border-[#E31E24] flex items-center justify-center transition-all"
                aria-label="Next Projects"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-b border-white/10 pb-4">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-[11px] font-bold font-outfit transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#E31E24] text-white'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic CMS Projects Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {(filteredProjects.length > 0 ? filteredProjects : projects).map((proj, idx) => (
            <div
              key={proj.id || idx}
              className="min-w-[280px] sm:min-w-[340px] bg-[#0F1219] border border-white/8 rounded-2xl overflow-hidden group hover:border-[#E31E24]/50 transition-all duration-400 snap-start flex flex-col justify-between"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={proj.image || '/images/hero_plant.png'}
                  alt={proj.title}
                  className="w-full h-full object-cover img-vivid group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1219] via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 bg-[#E31E24] text-white text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider font-outfit">
                  {proj.category}
                </div>
              </div>

              <div className="p-5 space-y-2.5">
                <h3 className="text-lg font-extrabold text-white font-outfit group-hover:text-[#E31E24] transition-colors leading-snug">
                  {proj.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                  {proj.desc}
                </p>
                <div className="flex items-center gap-4 pt-2 text-[11px] text-slate-400 font-semibold border-t border-white/5">
                  {proj.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#E31E24]" />
                      <span>{proj.location}</span>
                    </div>
                  )}
                  {proj.duration && (
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#E31E24]" />
                      <span>{proj.duration}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="px-5 pb-5 pt-1 flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-[#E31E24] transition-colors font-outfit">
                <span>View Engineering Specs</span>
                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-[#E31E24] transition-all">
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
