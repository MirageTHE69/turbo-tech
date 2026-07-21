'use client';

import React from 'react';
import { ArrowRight, Clock, Hammer } from 'lucide-react';
import SpotlightCard from '../SpotlightCard';
import { useCms } from '@/context/CmsContext';
import { getIcon } from '@/lib/icons';

export default function CoursesGrid({ onOpenQuote }) {
  const { courses } = useCms();

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="tag-badge justify-center">Skill Development</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1520] font-outfit">
            Industry-Driven Technical Programs
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Comprehensive hands-on courses tailored to international industrial standards with 100% placement assistance.
          </p>
        </div>

        {/* Dynamic CMS Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((crs, idx) => {
            const IconComponent = getIcon(crs.iconName, Hammer);
            return (
              <SpotlightCard
                key={crs.id || idx}
                className="bg-slate-50 border border-slate-200/80 p-8 hover:shadow-xl hover:bg-white hover:border-[#E31E24]/30 group flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon & Step Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 text-[#E31E24] flex items-center justify-center shadow-sm group-hover:bg-[#E31E24] group-hover:text-white group-hover:border-[#E31E24] transition-all duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-xl font-bold font-outfit text-slate-300 group-hover:text-[#E31E24] transition-colors">
                      {crs.number || `0${idx + 1}`}
                    </span>
                  </div>

                  {/* Course Duration Tag */}
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#E31E24] bg-red-50 px-3 py-1 rounded-full mb-3 font-outfit">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{crs.badge}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0F1520] font-outfit mb-3 group-hover:text-[#E31E24] transition-colors">
                    {crs.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {crs.desc}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <button
                    onClick={onOpenQuote}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#0F1520] group-hover:text-[#E31E24] transition-colors font-outfit"
                  >
                    <span>Enroll In Course</span>
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
