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
    '/images/civil_construction.png',
    '/images/fire_safety.png',
    '/images/about_team.png',
  ];
  const cardImage = service.image || defaultImages[index % defaultImages.length];

  return (
    <SpotlightCard
      className={`bg-white border border-slate-200/80 rounded-3xl overflow-hidden group h-full flex flex-col shadow-sm hover:shadow-2xl hover:border-red-200 transition-all duration-500 ${className}`}
    >
      {/* Bright Image Container */}
      <div className="relative h-56 sm:h-60 w-full overflow-hidden shrink-0 bg-slate-900">
        <img
          src={cardImage}
          alt={service.title}
          className="w-full h-full object-cover object-center brightness-[1.08] saturate-[1.2] contrast-[1.05] group-hover:scale-108 transition-all duration-700 ease-out"
        />
        {/* Soft Ambient Light Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
      </div>

      {/* Card body */}
      <div className="p-7 flex-1 flex flex-col justify-between bg-white">
        <div className="space-y-4">
          {/* Header Row: Red Tint Icon Box & Title */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50/90 border border-red-100 text-[#E31E24] flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#E31E24] group-hover:text-white group-hover:border-[#E31E24] transition-all duration-300">
              <IconComponent className="w-6 h-6" />
            </div>

            <div className="flex-1 pt-0.5">
              <h3 className="text-xl font-black text-[#0F1520] font-outfit leading-snug group-hover:text-[#E31E24] transition-colors">
                {service.title}
              </h3>
              <div className="w-8 h-1 bg-[#E31E24] rounded-full mt-2 group-hover:w-14 transition-all duration-300" />
            </div>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 font-normal">
            {service.desc}
          </p>
        </div>

        {/* Footer Action Bar */}
        <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
          {onActionClick ? (
            <button
              onClick={onActionClick}
              className="text-xs font-bold text-slate-800 group-hover:text-[#E31E24] transition-colors font-outfit flex items-center gap-2"
            >
              <span>{actionText}</span>
              <ArrowRight className="w-4 h-4 text-[#E31E24] group-hover:translate-x-1 transition-transform" />
            </button>
          ) : (
            <a
              href="/services"
              className="text-xs font-bold text-slate-800 group-hover:text-[#E31E24] transition-colors font-outfit flex items-center gap-2"
            >
              <span>{actionText}</span>
              <ArrowRight className="w-4 h-4 text-[#E31E24] group-hover:translate-x-1 transition-transform" />
            </a>
          )}

          <div className="w-9 h-9 rounded-full bg-red-50/80 text-[#E31E24] flex items-center justify-center group-hover:bg-[#E31E24] group-hover:text-white transition-all duration-300 shadow-sm">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}
