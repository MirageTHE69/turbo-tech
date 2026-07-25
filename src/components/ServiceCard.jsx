'use client';

import React from 'react';
import { ArrowRight, Wrench } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { getIcon } from '@/lib/icons';

export default function ServiceCard({
  service,
  index = 0,
  onActionClick,
  actionText = 'Explore Service',
  className = '',
}) {
  const IconComponent = getIcon(service.iconName, Wrench);

  const defaultImages = [
    '/images/hero_plant.png',
    '/images/welder.png',
    '/images/project_piping.png',
    '/images/about_team.png',
    '/images/civil_construction.png',
    '/images/fire_safety.png',
  ];
  const cardImage = service.image || defaultImages[index % defaultImages.length];

  return (
    <SpotlightCard
      className={`bg-white border border-slate-100 rounded-3xl overflow-hidden group h-full flex flex-col shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-400 ${className}`}
    >
      {/* Image — vivid filter */}
      <div className="relative h-52 w-full overflow-hidden shrink-0 bg-slate-100">
        <img
          src={cardImage}
          alt={service.title}
          className="w-full h-full object-cover img-vivid group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

        {/* Number badge — top right */}
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-[#E31E24] text-white text-[10px] font-black font-outfit px-2.5 py-1 rounded-full">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Icon + title */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-100 text-[#E31E24] flex items-center justify-center shrink-0 group-hover:bg-[#E31E24] group-hover:text-white group-hover:border-[#E31E24] transition-all duration-300">
              <IconComponent className="w-4.5 h-4.5" />
            </div>
            <h3 className="text-lg font-extrabold text-[#0F1520] font-outfit leading-tight group-hover:text-[#E31E24] transition-colors">
              {service.title}
            </h3>
          </div>

          <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
            {service.desc}
          </p>
        </div>

        {/* Footer */}
        <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
          {onActionClick ? (
            <button
              onClick={onActionClick}
              className="text-xs font-bold text-slate-700 group-hover:text-[#E31E24] transition-colors font-outfit flex items-center gap-2"
            >
              <span>{actionText}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          ) : (
            <a
              href="/services"
              className="text-xs font-bold text-slate-700 group-hover:text-[#E31E24] transition-colors font-outfit flex items-center gap-2"
            >
              <span>{actionText}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          )}

          <div className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-[#E31E24] group-hover:text-white transition-all duration-300 border border-slate-100 group-hover:border-[#E31E24]">
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}
