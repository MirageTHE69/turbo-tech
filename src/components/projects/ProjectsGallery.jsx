'use client';

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import SpotlightCard from '../SpotlightCard';
import { useCms } from '@/context/CmsContext';

export default function ProjectsGallery({ onOpenQuote }) {
  const { projects } = useCms();
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const rawCategories = Array.from(new Set(projects.map((p) => p.category)));
  const categories = ['All Projects', ...rawCategories];

  const filteredProjects =
    activeCategory === 'All Projects'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Category Filter Pills Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold font-outfit transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#0F1520] text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj, idx) => (
            <SpotlightCard
              key={proj.id || idx}
              className="bg-slate-50 border border-slate-200/80 hover:shadow-xl hover:bg-white hover:border-[#E31E24]/30 group flex flex-col justify-between"
            >
              <div>
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden rounded-t-3xl">
                  <img
                    src={proj.image || '/images/hero_plant.png'}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-outfit">
                    {proj.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-[#0F1520] font-outfit group-hover:text-[#E31E24] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {proj.desc}
                  </p>
                </div>
              </div>

              {/* Metadata Footer Bar */}
              <div className="px-6 pb-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500 font-medium">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-slate-400">Location</span>
                  <span className="font-semibold text-slate-800 font-outfit">{proj.location}</span>
                </div>

                <div>
                  <span className="block text-[10px] uppercase font-bold text-slate-400">Duration</span>
                  <span className="font-semibold text-slate-800 font-outfit">{proj.duration}</span>
                </div>

                <div>
                  <span className="block text-[10px] uppercase font-bold text-slate-400">Year</span>
                  <span className="font-semibold text-slate-800 font-outfit">{proj.year}</span>
                </div>

                <button
                  onClick={onOpenQuote}
                  className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 group-hover:bg-[#E31E24] group-hover:border-[#E31E24] group-hover:text-white transition-all ml-2"
                  aria-label="View Project Details"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
}
