'use client';

import React from 'react';
import { ArrowRight, ShieldCheck, Wrench } from 'lucide-react';
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
  const serviceNumber = service.number || `0${index + 1}`;

  // Default image fallback if service.image is missing
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
      className={`bg-white border border-slate-200/90 rounded-[28px] shadow-sm hover:shadow-2xl hover:border-red-200 transition-all duration-300 flex flex-col justify-between overflow-hidden group h-full ${className}`}
    >
      {/* Top Banner Image with Floating Red Pill Badge */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900 shrink-0">
        <img
          src={cardImage}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Subtle Overlay Gradient for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-black/20" />

        {/* Top-Left Pill Badge (e.g., 01 SERVICE) */}
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-[#E31E24] text-white px-3.5 py-1.5 rounded-full text-xs font-extrabold font-outfit uppercase tracking-wider flex items-center gap-1.5 shadow-lg border border-white/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{serviceNumber} SERVICE</span>
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-white">
        <div>
          {/* Header Row: Soft Red Tint Icon Box & Title */}
          <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-[#FFF0F0] border border-red-100 text-[#E31E24] flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#E31E24] group-hover:text-white group-hover:border-[#E31E24] transition-all duration-300 group-hover:scale-105">
              <IconComponent className="w-7 h-7" />
            </div>

            <div className="flex-1 pt-0.5">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F1520] font-outfit leading-tight group-hover:text-[#E31E24] transition-colors">
                {service.title}
              </h3>
              {/* Red Accent Line underneath title */}
              <div className="w-10 h-1 bg-[#E31E24] rounded-full mt-2 group-hover:w-16 transition-all duration-300"></div>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
            {service.desc}
          </p>
        </div>

        {/* Bottom Footer Action Link */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
          {onActionClick ? (
            <button
              onClick={onActionClick}
              className="flex items-center gap-2 text-sm font-bold text-slate-800 group-hover:text-[#E31E24] transition-colors font-outfit"
            >
              <span>{actionText}</span>
              <ArrowRight className="w-4 h-4 text-[#E31E24] group-hover:translate-x-1 transition-transform" />
            </button>
          ) : (
            <a
              href="/services"
              className="flex items-center gap-2 text-sm font-bold text-slate-800 group-hover:text-[#E31E24] transition-colors font-outfit"
            >
              <span>{actionText}</span>
              <ArrowRight className="w-4 h-4 text-[#E31E24] group-hover:translate-x-1 transition-transform" />
            </a>
          )}

          {/* Circular Red Action Button */}
          <div className="w-9 h-9 rounded-full bg-[#FFF0F0] text-[#E31E24] flex items-center justify-center group-hover:bg-[#E31E24] group-hover:text-white transition-all duration-300 shadow-sm group-hover:scale-110">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}
