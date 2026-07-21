'use client';

import React from 'react';
import { ArrowRight, Hammer, Award, Wrench, Briefcase, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';

export default function TrainingSection() {
  const instituteFeatures = [
    'Modern Industrial Workshop',
    'Heavy Industrial Equipment',
    'Hands-on Practical Training',
    'Certified Expert Trainers',
    'Real Industry Exposure',
    'Job-Oriented Curriculum',
    '100% Placement Support',
    'Safety & HSE Compliance',
    'Practical Skill Assessment',
    'Live Industrial Projects',
  ];

  return (
    <section id="training" className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column - Industrial Welder Photo with Spark Effect */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img
                src="/images/welder.png"
                alt="Turbo Tech Welding & Fitter Training Institute Workshop"
                className="w-full h-[420px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Animated Floating Spark Particles */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="spark-particle" style={{ left: '30%', bottom: '25%', animationDelay: '0s' }}></div>
                <div className="spark-particle" style={{ left: '42%', bottom: '30%', animationDelay: '0.4s' }}></div>
                <div className="spark-particle" style={{ left: '35%', bottom: '20%', animationDelay: '0.8s' }}></div>
                <div className="spark-particle" style={{ left: '48%', bottom: '35%', animationDelay: '1.2s' }}></div>
                <div className="spark-particle" style={{ left: '38%', bottom: '28%', animationDelay: '1.6s' }}></div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="text-xs font-bold text-[#E31E24] uppercase tracking-widest bg-white/95 px-3.5 py-1 rounded-full inline-block font-outfit shadow-sm">
                  Practical Skill Development
                </span>
                <h4 className="text-xl sm:text-2xl font-bold font-outfit text-white">
                  Turbo Tech Welding & Fitter Training Institute
                </h4>
                <p className="text-xs text-slate-300 font-medium">
                  Preparing job-ready technicians through 100% practical workshop training & live project experience.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Text & Feature Grid */}
          <div className="lg:col-span-6 space-y-6">
            <span className="tag-badge">Technical Training Institute</span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1520] font-outfit leading-tight">
              Bridging Industry with <span className="text-[#E31E24]">Skilled Manpower</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Apart from industrial engineering services, Turbo Tech operates a dedicated Welding & Fitter Training Institute that prepares students with practical industrial skills and job-ready technical education according to industrial requirements.
            </p>

            {/* Features Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {instituteFeatures.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#E31E24] shrink-0" />
                  <span className="text-xs font-bold text-slate-800 font-outfit">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-6">
              <a
                href="/training"
                className="btn-primary-red px-6 py-3 rounded-full text-xs font-bold font-outfit flex items-center gap-2"
              >
                <span>View All Courses & Admissions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
