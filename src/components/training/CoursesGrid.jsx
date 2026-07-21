'use client';

import React from 'react';
import { ArrowRight, Clock, Hammer, CheckCircle2, Award, Briefcase, Wrench } from 'lucide-react';
import SpotlightCard from '../SpotlightCard';

export default function CoursesGrid({ onOpenQuote }) {
  const officialCourses = [
    {
      title: 'MIG Welding Course in Kushinagar, UP',
      badge: 'Hands-on Workshop • Certified Trainers',
      desc: 'Comprehensive Gas Metal Arc Welding (GMAW / MIG) on industrial steel plates & pipes with live project training and 100% placement support.',
      highlights: ['Hands-on Workshop Focus', 'Certified Expert Trainers', 'Placement Assistance', 'Live Industrial Projects'],
      iconName: 'Hammer',
    },
    {
      title: 'TIG Welding Course in Kushinagar, UP',
      badge: 'High Precision • 6G Certified',
      desc: 'Specialized Gas Tungsten Arc Welding (GTAW / TIG) for stainless steel and high-pressure alloy pipe joints under expert supervision.',
      highlights: ['Hands-on Workshop Focus', 'Certified Expert Trainers', 'Placement Assistance', 'Live Industrial Projects'],
      iconName: 'Hammer',
    },
    {
      title: 'Arc Welding Course in Kushinagar, UP',
      badge: 'SMAW Masterclass • All Positions',
      desc: 'Shielded Metal Arc Welding (SMAW) training covering flat, horizontal, vertical, and overhead positions up to 6G certification.',
      highlights: ['Hands-on Workshop Focus', 'Certified Expert Trainers', 'Placement Assistance', 'Live Industrial Projects'],
      iconName: 'Hammer',
    },
    {
      title: 'Pipe Fitter Training Course in Kushinagar, UP',
      badge: 'Isometric Blueprint • Template Layout',
      desc: 'Practical training on reading isometric drawings, pipe template layout, beveling, cutting, edge preparation, and pipe alignment.',
      highlights: ['Hands-on Workshop Focus', 'Certified Expert Trainers', 'Placement Assistance', 'Live Industrial Projects'],
      iconName: 'Layers',
    },
    {
      title: 'Gas Cutting & Grinding Course in Kushinagar, UP',
      badge: 'Oxy-Fuel Torch • Edge Prep',
      desc: 'Precision oxy-acetylene cutting, plasma torch handling, structural bevel preparation, grinding operations, and workshop safety.',
      highlights: ['Hands-on Workshop Focus', 'Certified Expert Trainers', 'Placement Assistance', 'Live Industrial Projects'],
      iconName: 'Wrench',
    },
    {
      title: 'Industrial Safety Training Course in Kushinagar, UP',
      badge: 'OSHA Standards • HSE Permit',
      desc: 'Industrial hazard identification, risk assessment, Permit to Work (PTW) protocols, gas testing, and HSE compliance certification.',
      highlights: ['Hands-on Workshop Focus', 'Certified Expert Trainers', 'Placement Assistance', 'Live Industrial Projects'],
      iconName: 'ShieldCheck',
    },
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="tag-badge justify-center">Certified Technical Education</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1520] font-outfit">
            Job-Oriented Training Courses
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            All courses feature 100% practical workshop focus, certified expert trainers, live project practice, and job placement assistance in Kushinagar, Uttar Pradesh.
          </p>
        </div>

        {/* 6 Official Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {officialCourses.map((crs, idx) => (
            <SpotlightCard
              key={idx}
              className="bg-slate-50 border border-slate-200/80 p-8 hover:shadow-xl hover:bg-white hover:border-[#E31E24]/30 group flex flex-col justify-between"
            >
              <div>
                {/* Top Bar: Step Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-[#E31E24] flex items-center justify-center shadow-sm group-hover:bg-[#E31E24] group-hover:text-white transition-all">
                    <Hammer className="w-6 h-6" />
                  </div>
                  <span className="text-xl font-bold font-outfit text-slate-300 group-hover:text-[#E31E24] transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                {/* Course Badge */}
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#E31E24] bg-red-50 px-3 py-1 rounded-full mb-3 font-outfit">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{crs.badge}</span>
                </div>

                <h3 className="text-lg font-bold text-[#0F1520] font-outfit mb-3 group-hover:text-[#E31E24] transition-colors leading-snug">
                  {crs.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {crs.desc}
                </p>

                {/* Checklist */}
                <div className="grid grid-cols-2 gap-2 mb-6 pt-2 border-t border-slate-200/60">
                  {crs.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-1.5 text-[11px] text-slate-700 font-semibold font-outfit">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E31E24] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Link */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <button
                  onClick={onOpenQuote}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0F1520] group-hover:text-[#E31E24] transition-colors font-outfit"
                >
                  <span>Apply For Admission</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
}
