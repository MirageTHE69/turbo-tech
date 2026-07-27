'use client';

import React from 'react';
import { ArrowRight, Wrench } from 'lucide-react';
import { getIcon } from '@/lib/icons';

export default function ServiceCard({
  service,
  index = 0,
  onActionClick,
  actionText = 'Learn More',
  className = '',
}) {
  const IconComponent = getIcon(service.iconName, Wrench);

  const defaultImages = [
    '/images/hero_plant.png',
    '/images/welder.png',
    '/images/project_piping.png',
    '/images/fire_safety.png',
    '/images/civil_construction.png',
    '/images/about_team.png',
  ];
  const cardImage = service.image || defaultImages[index % defaultImages.length];

  return (
    <div
      className={`bg-white rounded-[24px] border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-red-100 transition-all duration-300 flex flex-col justify-between h-full group relative overflow-hidden ${className}`}
    >
      {/* Top Image Frame */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden shrink-0 bg-slate-900 rounded-t-[24px]">
        <img
          src={cardImage}
          alt={service.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Overlapping Solid Red Square Icon Box */}
      <div className="relative -mt-6 ml-6 z-20 w-12 h-12 rounded-xl bg-[#E52323] text-white flex items-center justify-center shadow-lg shadow-red-600/30 font-bold group-hover:scale-110 transition-transform duration-300">
        <IconComponent className="w-6 h-6 text-white" />
      </div>

      {/* Card Content Body */}
      <div className="p-6 sm:p-7 pt-4 flex-1 flex flex-col justify-between bg-white">
        <div>
          <h3 className="text-lg font-bold text-[#0F172A] font-outfit leading-snug mb-3 group-hover:text-[#E52323] transition-colors mt-2">
            {service.title}
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-3 font-normal">
            {service.desc}
          </p>
        </div>

        {/* Footer Action Row */}
        <div className="pt-5 mt-5 border-t border-slate-100/90 flex items-center justify-between">
          {onActionClick ? (
            <button
              onClick={onActionClick}
              className="text-xs sm:text-sm font-bold text-[#0F172A] group-hover:text-[#E52323] transition-colors font-outfit cursor-pointer"
            >
              {actionText}
            </button>
          ) : (
            <a
              href="/services"
              className="text-xs sm:text-sm font-bold text-[#0F172A] group-hover:text-[#E52323] transition-colors font-outfit"
            >
              {actionText}
            </a>
          )}

          <div className="w-9 h-9 rounded-full bg-red-50 text-[#E52323] flex items-center justify-center group-hover:bg-[#E52323] group-hover:text-white transition-all shadow-sm">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Bottom Red Accent Line on Hover */}
      <div className="w-full h-[3px] bg-transparent group-hover:bg-[#E52323] transition-all duration-300" />
    </div>
  );
}

