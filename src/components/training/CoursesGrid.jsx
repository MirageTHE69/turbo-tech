'use client';

import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

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
    desc: 'Practical training on isometric drawings, pipe layout, beveling, cutting, edge preparation, and pipe alignment.',
  },
  {
    title: 'Gas Cutting & Grinding',
    badge: 'Oxy-Fuel · Edge Prep',
    desc: 'Oxy-acetylene cutting, plasma torch handling, structural bevel preparation, grinding, and workshop safety.',
  },
  {
    title: 'Industrial Safety Training',
    badge: 'OSHA · HSE Certified',
    desc: 'Industrial hazard identification, risk assessment, Permit to Work (PTW), gas testing, and HSE compliance.',
  },
];

export default function CoursesGrid({ onOpenQuote }) {
  return (
    <section id="courses" className="py-24 lg:py-32 bg-white border-t border-[#E2DDD8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow mb-5">Certified Technical Education</p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0F1520] font-outfit leading-[1.06] tracking-tight">
              Job-Oriented
              <br />
              <span className="text-[#E31E24]">Training Courses.</span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-xs leading-relaxed md:text-right">
            Hands-on industrial training with 100% placement support in Kushinagar, UP.
          </p>
        </div>

        {/* Course Cards — gap-px editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E2DDD8]">
          {officialCourses.map((crs, idx) => (
            <div
              key={idx}
              className="bg-white p-8 flex flex-col justify-between group hover:bg-[#F5F4F0] transition-colors relative"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-[#E31E24] group-hover:w-full transition-all duration-500" />

              <div>
                {/* Number + badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-black text-[#0F1520]/6 font-outfit leading-none select-none group-hover:text-[#E31E24]/10 transition-colors">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#E31E24] bg-[#E31E24]/7 border border-[#E31E24]/15 px-2.5 py-1 font-outfit">
                    <Clock className="w-3 h-3" />
                    <span>{crs.badge}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0F1520] font-outfit mb-3 group-hover:text-[#E31E24] transition-colors leading-snug">
                  {crs.title}
                </h3>

                {/* Rule */}
                <div className="w-full h-px bg-[#E2DDD8] mb-4" />

                <p className="text-slate-500 text-sm leading-relaxed">{crs.desc}</p>
              </div>

              {/* CTA */}
              <div className="pt-6 mt-6 border-t border-[#E2DDD8]">
                <button
                  onClick={onOpenQuote}
                  className="arrow-link font-outfit text-sm text-[#0F1520] group-hover:text-[#E31E24]"
                >
                  <span>Apply For Admission</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
