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
    <section id="projects" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="mesh-glow-blue -top-20 -left-20 opacity-60"></div>
      <div className="mesh-glow-red bottom-0 right-0 opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="tag-badge text-[#E31E24] bg-slate-800 border-slate-700">Project Portfolio</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-outfit">
              Executed Key Engineering Projects
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 text-[#E31E24] font-extrabold text-sm hover:gap-3 transition-all font-outfit mr-2"
            >
              <span>Explore All Projects ({projects.length})</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleScroll('left')}
                className="w-11 h-11 rounded-full border border-slate-700 bg-slate-800 text-slate-300 hover:bg-[#E31E24] hover:text-white hover:border-[#E31E24] flex items-center justify-center shadow-lg transition-all"
                aria-label="Previous Projects"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="w-11 h-11 rounded-full border border-slate-700 bg-slate-800 text-slate-300 hover:bg-[#E31E24] hover:text-white hover:border-[#E31E24] flex items-center justify-center shadow-lg transition-all"
                aria-label="Next Projects"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2 border-b border-slate-800 pb-4">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold font-outfit transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#E31E24] text-white shadow-lg shadow-[#E31E24]/30 scale-105'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
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
              className="min-w-[300px] sm:min-w-[360px] md:min-w-[400px] bg-slate-800/80 border border-slate-700/80 rounded-3xl overflow-hidden shadow-xl group hover:border-[#E31E24]/60 hover:shadow-2xl transition-all duration-500 snap-start flex flex-col justify-between"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={proj.image || '/images/hero_plant.png'}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-[#E31E24] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  {proj.category}
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-extrabold text-white font-outfit group-hover:text-[#E31E24] transition-colors leading-snug">
                  {proj.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                  {proj.desc}
                </p>
                <div className="flex items-center gap-4 pt-2 text-xs text-slate-400 font-semibold border-t border-slate-700/60">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#E31E24]" />
                    <span>{proj.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#E31E24]" />
                    <span>{proj.duration}</span>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-extrabold text-slate-300 group-hover:text-[#E31E24] transition-colors font-outfit">
                <span>View Engineering Specs</span>
                <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-white group-hover:bg-[#E31E24] transition-all">
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
