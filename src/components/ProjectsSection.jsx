'use client';

import React, { useRef, useState } from 'react';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { useCms } from '@/context/CmsContext';

const categories = [
  'All',
  'Mechanical Construction',
  'Fabrication & Erection',
  'Industrial Piping',
  'Shutdown & Maintenance',
];

export default function ProjectsSection() {
  const { projects } = useCms();
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) =>
          p.category.toLowerCase().includes(activeCategory.toLowerCase().split(' ')[0])
        );

  const display = (filtered.length > 0 ? filtered : projects).slice(0, 5);

  // Mosaic layout: first card is large (spans 2 rows or 2 cols), rest are smaller
  // Layout: [0] big, [1][2] stacked right, then [3][4] bottom row
  const big   = display[0];
  const side1 = display[1];
  const side2 = display[2];
  const bot1  = display[3];
  const bot2  = display[4];

  return (
    <section
      id="projects"
      className="py-24 lg:py-32 bg-[#0B0D11] text-white border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 space-y-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-5" style={{ color: '#E31E24' }}>Project Portfolio</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white font-outfit leading-[1.06] tracking-tight">
              Executed Key
              <br />
              Engineering Projects.
            </h2>
          </div>

          <a
            href="/projects"
            className="self-start md:self-auto inline-flex items-center gap-3 border border-white/15 px-6 py-3 text-sm font-bold text-white/70 hover:text-white hover:border-white/30 transition-all group font-outfit"
          >
            <span>Explore All ({projects.length})</span>
            <ArrowRight className="w-4 h-4 text-[#E31E24] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/8 pb-5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-[11px] font-bold font-outfit tracking-wide transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-[#E31E24] text-white border-[#E31E24]'
                  : 'border-white/10 text-white/40 hover:text-white hover:border-white/25 bg-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">

          {/* Big card — spans 2 cols on large */}
          {big && (
            <MosaicCard project={big} className="lg:col-span-2 h-[400px] lg:h-[480px]" />
          )}

          {/* Side cards stacked */}
          <div className="flex flex-col gap-px">
            {side1 && <MosaicCard project={side1} className="h-[235px] lg:h-[235px]" />}
            {side2 && <MosaicCard project={side2} className="h-[235px] lg:h-[235px]" />}
          </div>

          {/* Bottom row — full width split 2 */}
          {bot1 && <MosaicCard project={bot1} className="h-[260px]" />}
          {bot2 && (
            <MosaicCard project={bot2} className="h-[260px] sm:col-span-1 lg:col-span-2" />
          )}
        </div>

      </div>
    </section>
  );
}

function MosaicCard({ project, className = '' }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`mosaic-card group cursor-pointer bg-[#0F1219] ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="absolute inset-0">
        <img
          src={project.image || '/images/hero_plant.png'}
          alt={project.title}
          className="w-full h-full object-cover img-vivid transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Base overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D11]/90 via-[#0B0D11]/30 to-transparent" />
      </div>

      {/* Category chip */}
      <div className="absolute top-4 left-4 z-10">
        <span className="text-[9px] font-black uppercase tracking-[0.16em] text-white bg-[#E31E24] px-2.5 py-1 font-outfit">
          {project.category}
        </span>
      </div>

      {/* Bottom content */}
      <div className="mosaic-card-content absolute inset-x-0 bottom-0 z-10 p-6">
        <h3 className="text-base sm:text-lg font-extrabold text-white font-outfit leading-snug mb-2 group-hover:text-[#E31E24] transition-colors duration-300">
          {project.title}
        </h3>

        {/* Meta row — slides up on hover */}
        <div
          className={`flex items-center gap-4 text-[11px] text-white/50 font-semibold transition-all duration-400 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          {project.location && (
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#E31E24]" />
              {project.location}
            </span>
          )}
          {project.duration && (
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#E31E24]" />
              {project.duration}
            </span>
          )}
          <ArrowRight className="w-3.5 h-3.5 text-[#E31E24] ml-auto" />
        </div>
      </div>
    </div>
  );
}
