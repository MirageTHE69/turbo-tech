'use client';

import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import SpotlightCard from '../SpotlightCard';

export default function CoursesGrid({ onOpenQuote }) {
  const officialCourses = [
    {
      title: 'MIG Welding Course',
      badge: 'Hands-on Workshop',
      desc: 'Gas Metal Arc Welding (GMAW/MIG) on industrial steel plates & pipes with live project training and 100% placement support.',
    },
    {
      title: 'TIG Welding Course',
      badge: 'High Precision · 6G',
      desc: 'Gas Tungsten Arc Welding (GTAW/TIG) for stainless steel and high-pressure alloy pipe joints under expert supervision.',
    },
    {
      title: 'Arc Welding Course',
      badge: 'SMAW · All Positions',
      desc: 'Shielded Metal Arc Welding covering flat, horizontal, vertical, and overhead positions up to 6G certification.',
    },
    {
      title: 'Pipe Fitter Training',
      badge: 'Isometric Blueprints',
      desc: 'Practical training on reading isometric drawings, pipe layout, beveling, cutting, edge preparation, and pipe alignment.',
    },
    {
      title: 'Gas Cutting & Grinding',
      badge: 'Oxy-Fuel · Edge Prep',
      desc: 'Oxy-acetylene cutting, plasma torch handling, structural bevel preparation, grinding, and workshop safety.',
    },
    {
      title: 'Industrial Safety Training',
      badge: 'OSHA · HSE Certified',
      desc: 'Industrial hazard identification, risk assessment, Permit to Work (PTW), gas testing, and HSE compliance certification.',
    },
  ];

  return (
    <section id="courses" className="py-24 lg:py-32 bg-[#F9F9F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 max-w-xl">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#E31E24] mb-4">
            Certified Technical Education
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0F1520] font-outfit leading-[1.08]">
            Job-Oriented<br />Training Courses.
          </h2>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {officialCourses.map((crs, idx) => (
            <SpotlightCard
              key={idx}
              className="bg-white border border-slate-100 p-7 hover:shadow-xl hover:border-red-100 group flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Number + badge row */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-black text-slate-100 font-outfit group-hover:text-[#E31E24]/20 transition-colors">
                    0{idx + 1}
                  </span>
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#E31E24] bg-red-50 border border-red-100 px-2.5 py-1 rounded-full font-outfit">
                    <Clock className="w-3 h-3" />
                    <span>{crs.badge}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#0F1520] font-outfit mb-3 group-hover:text-[#E31E24] transition-colors leading-snug">
                  {crs.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {crs.desc}
                </p>
              </div>

              {/* CTA */}
              <div className="pt-5 mt-5 border-t border-slate-100">
                <button
                  onClick={onOpenQuote}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0F1520] group-hover:text-[#E31E24] transition-colors font-outfit"
                >
                  <span>Apply For Admission</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
}
