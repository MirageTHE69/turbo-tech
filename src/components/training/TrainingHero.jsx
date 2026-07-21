'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowRight, GraduationCap } from 'lucide-react';
import gsap from 'gsap';

export default function TrainingHero({ onOpenQuote }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.training-hero-anim', {
        y: 35,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="training-hero-anim">
              <span className="tag-badge">Welding Institute Kushinagar & UP</span>
            </div>

            <h1 className="training-hero-anim text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F1520] tracking-tight leading-[1.1] font-outfit">
              Welding & Fitter <br />
              <span className="text-[#E31E24]">Training Institute</span>
            </h1>

            <p className="training-hero-anim text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
              Turbo Tech is a premier <strong>welding institute in Kushinagar</strong> offering job-oriented <strong>welding course UP with placement</strong> assistance, hands-on workshop experience, certified trainers, and live industrial project training.
            </p>

            <div className="training-hero-anim flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenQuote}
                className="btn-primary-red px-7 py-3.5 rounded-full text-sm font-bold flex items-center gap-2"
              >
                <span>Apply For Admission</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#courses"
                className="btn-outline-dark px-7 py-3.5 rounded-full text-sm font-bold flex items-center gap-2"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Spark Welder Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[400px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img
                src="/images/welder.png"
                alt="welding course workshop and pipe fitter training at Turbo Tech Kushinagar Uttar Pradesh"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Spark Particles */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="spark-particle" style={{ left: '32%', bottom: '25%', animationDelay: '0s' }}></div>
                <div className="spark-particle" style={{ left: '44%', bottom: '32%', animationDelay: '0.4s' }}></div>
                <div className="spark-particle" style={{ left: '38%', bottom: '22%', animationDelay: '0.8s' }}></div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs font-bold text-[#E31E24] uppercase tracking-widest bg-white/90 px-3 py-1 rounded-full inline-flex items-center gap-1.5 font-outfit">
                  <GraduationCap className="w-3.5 h-3.5" /> Hands-on Workshop & Placement Support
                </span>
                <h4 className="text-xl font-bold font-outfit text-white pt-2">
                  ISO 9001 Certified Skill Development Center
                </h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
