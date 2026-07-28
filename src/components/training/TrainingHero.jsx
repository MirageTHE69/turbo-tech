'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowRight, BookOpen, Award, Wrench, TrendingUp } from 'lucide-react';
import gsap from 'gsap';

const features = [
  { icon: BookOpen,   title: 'Job-Oriented Courses',   desc: 'Industry-focused curriculum for real-world opportunities.' },
  { icon: Award,      title: 'Certified Trainers',      desc: 'Learn from experienced professionals with proven expertise.' },
  { icon: Wrench,     title: 'Hands-On Workshop',       desc: 'Practical training with modern equipment and live projects.' },
  { icon: TrendingUp, title: 'Placement Assistance',    desc: 'Dedicated placement support to build your career.' },
];

export default function TrainingHero({ onOpenQuote }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.th-anim',
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.1, ease: 'power3.out' }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative pt-28 pb-0 lg:pt-36 bg-[#0B0D11] text-white overflow-hidden">

      {/* Subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 80% 0%, rgba(227,30,36,0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center pb-20 lg:pb-28">

          {/* Left */}
          <div className="space-y-7">
            <p className="th-anim eyebrow opacity-0" style={{ color: 'rgba(227,30,36,0.85)' }}>
              Welding Institute Kushinagar & UP
            </p>

            <h1 className="th-anim font-outfit font-black text-white text-4xl sm:text-5xl lg:text-[60px] leading-[1.04] tracking-tight opacity-0">
              Welding & Fitter
              <br />
              <span className="text-[#E31E24]">Training Institute.</span>
            </h1>

            <div className="th-anim w-10 h-[2px] bg-[#E31E24] opacity-0" />

            <p className="th-anim text-white/50 text-base leading-[1.8] max-w-md opacity-0">
              Turbo Tech is a premier <strong className="text-white/80 font-semibold">welding institute in Kushinagar</strong> offering
              job-oriented <strong className="text-white/80 font-semibold">welding courses in UP with placement assistance</strong>,
              hands-on workshop experience, and certified trainers.
            </p>

            <div className="th-anim flex flex-wrap items-center gap-4 opacity-0">
              <button
                onClick={onOpenQuote}
                className="btn-primary-red btn-magnetic flex items-center gap-2.5 px-7 py-4 text-sm font-bold group"
              >
                <span>Apply For Admission</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#courses" className="arrow-link font-outfit text-sm text-white/60 hover:text-white">
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right — image with sparks */}
          <div className="th-anim relative opacity-0">
            {/* Dot grid accent */}
            <div className="absolute -top-6 -right-6 w-40 h-40 opacity-10 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle, rgba(227,30,36,0.6) 1px, transparent 1px)', backgroundSize: '16px 16px' }}
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#E31E24]/10 pointer-events-none" />

            <div className="relative overflow-hidden">
              <img
                src="/images/training_institute.jpg"
                alt="Welding & Fitter Training Institute Turbo Tech Kushinagar"
                className="w-full h-[380px] sm:h-[460px] object-cover img-vivid"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090D]/60 via-transparent to-transparent pointer-events-none" />

              {/* Sparks */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="spark-particle" style={{ left: '35%', bottom: '25%', animationDelay: '0s' }} />
                <div className="spark-particle" style={{ left: '45%', bottom: '30%', animationDelay: '0.5s' }} />
                <div className="spark-particle" style={{ left: '38%', bottom: '20%', animationDelay: '1s' }} />
              </div>

              <div className="absolute bottom-6 left-6 flex items-stretch gap-0">
                <div className="bg-white/95 px-5 py-3">
                  <div className="text-sm font-black text-[#0F1520] font-outfit">100%</div>
                  <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wide">Placement Support</div>
                </div>
                <div className="bg-[#E31E24] px-5 py-3">
                  <div className="text-sm font-black text-white font-outfit">6+</div>
                  <div className="text-[10px] text-white/70 font-semibold uppercase tracking-wide">Courses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features strip — flush bottom */}
      <div className="border-t border-white/8 bg-[#0F1219]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="bg-[#0F1219] px-8 py-8 group hover:bg-white/[0.03] transition-colors">
                  <div className="w-10 h-10 border border-white/10 text-[#E31E24] flex items-center justify-center mb-5 group-hover:bg-[#E31E24] group-hover:border-[#E31E24] group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white font-outfit mb-2 group-hover:text-[#E31E24] transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-xs text-white/30 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
