'use client';

import React from 'react';
import { Target, Compass, ShieldCheck, Award } from 'lucide-react';

export default function OurStory() {
  return (
    <section id="vision-mission" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Vision & Mission Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Vision Card */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 hover:border-[#E31E24]/40 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 text-[#E31E24] flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#E31E24] group-hover:text-white transition-all">
              <Target className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#E31E24] font-outfit">Company Vision</span>
            <h3 className="text-2xl font-extrabold text-[#0F1520] font-outfit mt-2 mb-4">
              Pioneering Trusted Engineering Leadership across India
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To become one of India's most trusted industrial engineering companies by delivering world-class mechanical engineering solutions, developing skilled professionals, and creating long-term value for industries through innovation, quality, and safety.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 hover:border-[#E31E24]/40 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 text-[#E31E24] flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#E31E24] group-hover:text-white transition-all">
              <Compass className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#E31E24] font-outfit">Company Mission</span>
            <h3 className="text-2xl font-extrabold text-[#0F1520] font-outfit mt-2 mb-4">
              Technical Excellence & Workforce Development
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-3">
              To provide safe, reliable, and cost-effective engineering solutions while maintaining the highest standards of quality, technical excellence, environmental responsibility, and customer satisfaction.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To bridge the gap between industry and skilled manpower through practical technical education and workforce development.
            </p>
          </div>

        </div>

        {/* Quality Commitment & HSE Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900 text-white rounded-3xl p-8 lg:p-12 shadow-2xl">
          
          {/* Left Quality Policy */}
          <div className="lg:col-span-6 space-y-4 pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-slate-800 pb-8 lg:pb-0">
            <div className="w-12 h-12 rounded-xl bg-slate-800 text-[#E31E24] flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-outfit text-white">
              Quality Commitment & Management
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Turbo Tech follows a strict Quality Management System to ensure every project is executed according to engineering standards, client specifications, and industry regulations.
            </p>
            <p className="text-slate-400 text-xs leading-relaxed">
              Quality inspections are conducted throughout every stage of fabrication, construction, installation, and commissioning. We continuously upgrade machinery, inspection equipment, and employee training.
            </p>
          </div>

          {/* Right HSE Policy */}
          <div className="lg:col-span-6 space-y-4 pl-0 lg:pl-6">
            <div className="w-12 h-12 rounded-xl bg-slate-800 text-[#E31E24] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-outfit text-white">
              Health, Safety & Environment (HSE)
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              <strong className="text-white font-semibold">Safety is our highest priority.</strong> Turbo Tech maintains a safe working environment by following industrial safety standards, regular training, hazard identification, and risk assessment.
            </p>
            <p className="text-slate-400 text-xs leading-relaxed">
              Every project follows strict HSE procedures to protect employees, clients, equipment, and surrounding environments with zero compromise on safety culture.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
