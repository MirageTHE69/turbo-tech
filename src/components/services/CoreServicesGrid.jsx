'use client';

import React from 'react';
import { ArrowRight, Wrench } from 'lucide-react';
import SpotlightCard from '../SpotlightCard';
import { useCms } from '@/context/CmsContext';
import { getIcon } from '@/lib/icons';

export default function CoreServicesGrid({ onOpenQuote }) {
  const { services } = useCms();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="tag-badge justify-center">What We Do</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1520] font-outfit">
            Our Core Engineering Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From concept to commissioning, we deliver comprehensive solutions tailored to meet the unique needs of industries worldwide.
          </p>
        </div>

        {/* Dynamic CMS Numbered Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => {
            const IconComponent = getIcon(srv.iconName, Wrench);
            return (
              <SpotlightCard
                key={srv.id || idx}
                className="bg-slate-50 border border-slate-200/80 p-8 hover:shadow-xl hover:bg-white hover:border-[#E31E24]/30 group flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon & Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 text-[#E31E24] flex items-center justify-center shadow-sm group-hover:bg-[#E31E24] group-hover:text-white group-hover:border-[#E31E24] transition-all duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-xl font-bold font-outfit text-slate-300 group-hover:text-[#E31E24] transition-colors">
                      {srv.number || `0${idx + 1}`}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0F1520] font-outfit mb-3 group-hover:text-[#E31E24] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {srv.desc}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 border-t border-slate-200/60 flex items-center gap-2">
                  <button
                    onClick={onOpenQuote}
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 group-hover:text-[#E31E24] transition-colors font-outfit"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
