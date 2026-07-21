'use client';

import React from 'react';
import { ArrowRight, ShieldCheck, Award, Target, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const coreValues = [
    'Engineering Excellence',
    'Quality First',
    'Safety Always',
    'Integrity & Innovation',
    'Skilled Workforce Development',
    'Long-Term Industrial Partnerships',
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="tag-badge">About Turbo Tech</span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1520] leading-tight font-outfit">
              Your Complete Industrial Engineering & Infrastructure Partner
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Turbo Tech is an Indian industrial engineering company specializing in mechanical construction, structural fabrication, process piping systems, plant maintenance, civil works, fire & safety, and manpower supply.
            </p>

            <p className="text-slate-700 font-semibold text-sm sm:text-base border-l-4 border-[#E31E24] pl-4 py-1 bg-white rounded-r-lg shadow-sm">
              "We are not just a contractor. We are an end-to-end engineering partner delivering solutions from planning and fabrication to maintenance, installation, commissioning, and technical training."
            </p>

            {/* Core Values Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {coreValues.map((val, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800 font-outfit">
                  <CheckCircle2 className="w-4 h-4 text-[#E31E24] shrink-0" />
                  <span>{val}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-6">
              <a
                href="/about"
                className="inline-flex items-center gap-2 btn-primary-red px-6 py-3 rounded-full text-xs font-bold font-outfit"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/training"
                className="inline-flex items-center gap-2 text-slate-700 hover:text-[#E31E24] font-bold text-xs font-outfit"
              >
                <span>Explore Training Institute</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Image Column with Floating Cards */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img
                src="/images/about_team.png"
                alt="Turbo Tech Engineering Team"
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/40 via-transparent to-transparent"></div>

              {/* Floating Badge Card 1: Experience */}
              <div className="absolute bottom-6 left-6 glass-card p-5 rounded-2xl shadow-xl border border-white/80 max-w-[210px]">
                <div className="text-4xl font-extrabold text-[#E31E24] font-outfit leading-none">13+</div>
                <div className="text-xs font-bold text-slate-900 font-outfit mt-1">Years Industry Experience</div>
                <p className="text-[11px] text-slate-500 mt-0.5 font-medium">Delivering world-class execution across India.</p>
              </div>

              {/* Floating Badge Card 2: Quality & Training */}
              <div className="absolute top-6 right-6 glass-card p-4 rounded-2xl shadow-xl border border-white/80 max-w-[200px] hidden sm:block">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs font-outfit">
                  <Award className="w-4 h-4 text-[#E31E24]" />
                  <span>ISO Certified</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1">Strict QA/QC & Dedicated Skill Training Institute</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
