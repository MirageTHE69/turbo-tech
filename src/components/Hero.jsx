'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck, Award, Headphones, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero({ onOpenQuote }) {
  const containerRef = useRef(null);
  const heroImageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation
      gsap.from('.hero-anim', {
        y: 50,
        opacity: 0,
        duration: 1.1,
        stagger: 0.14,
        ease: 'power4.out',
      });

      // Floating Glow Mesh Movement
      gsap.to('.hero-mesh-glow', {
        scale: 1.15,
        x: 30,
        y: 20,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // ScrollTrigger 3D Dynamic Scale & Parallax Effect on Hero Frame
      if (heroImageRef.current) {
        gsap.to(heroImageRef.current, {
          scale: 0.96,
          borderRadius: '2.5rem',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      // Parallax Movement for Floating Glass Cards
      gsap.to('.hero-float-card-1', {
        y: -40,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      gsap.to('.hero-float-card-2', {
        y: -25,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to('.hero-float-card-3', {
        y: -50,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 2,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-white bg-grid-pattern">
      {/* Animated Glowing Mesh Orbs */}
      <div className="hero-mesh-glow mesh-glow-red -top-32 -left-32 opacity-70"></div>
      <div className="mesh-glow-blue top-1/4 -right-40 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Hero Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="hero-anim">
              <span className="tag-badge">
                <Sparkles className="w-3.5 h-3.5 text-[#E31E24]" />
                Industrial Engineering Company Kushinagar & UP
              </span>
            </div>

            {/* Exact H1 for Homepage SEO */}
            <h1 className="hero-anim text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F1520] tracking-tight leading-[1.08] font-outfit">
              Industrial Engineering Solutions <br />
              <span className="text-gradient-red">You Can Build On</span>
            </h1>

            <p className="hero-anim text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
              As a premier <strong>industrial engineering company in Kushinagar</strong> delivering <strong>EPC solutions in UP</strong>, Turbo Tech provides turn-key mechanical construction, heavy steel fabrication, piping, plant maintenance, and certified manpower supply across Uttar Pradesh.
            </p>

            {/* CTAs */}
            <div className="hero-anim flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenQuote}
                className="btn-primary-red px-8 py-4 rounded-full text-sm font-bold flex items-center gap-2"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="btn-outline-dark px-8 py-4 rounded-full text-sm font-bold flex items-center gap-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Hero Quick Key Metrics Cards */}
            <div className="hero-anim pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200/80">
              <div className="bg-slate-50/80 backdrop-blur-sm border border-slate-200/80 p-3.5 rounded-2xl hover:border-[#E31E24]/30 hover:bg-white hover:shadow-md transition-all">
                <div className="text-2xl sm:text-3xl font-black text-[#0F1520] font-outfit text-gradient-red">13+</div>
                <div className="text-xs text-slate-500 font-semibold mt-0.5">Years Experience</div>
              </div>
              <div className="bg-slate-50/80 backdrop-blur-sm border border-slate-200/80 p-3.5 rounded-2xl hover:border-[#E31E24]/30 hover:bg-white hover:shadow-md transition-all">
                <div className="text-2xl sm:text-3xl font-black text-[#0F1520] font-outfit">500+</div>
                <div className="text-xs text-slate-500 font-semibold mt-0.5">Projects Delivered</div>
              </div>
              <div className="bg-slate-50/80 backdrop-blur-sm border border-slate-200/80 p-3.5 rounded-2xl hover:border-[#E31E24]/30 hover:bg-white hover:shadow-md transition-all">
                <div className="text-2xl sm:text-3xl font-black text-[#0F1520] font-outfit">300+</div>
                <div className="text-xs text-slate-500 font-semibold mt-0.5">Certified Workforce</div>
              </div>
              <div className="bg-slate-50/80 backdrop-blur-sm border border-slate-200/80 p-3.5 rounded-2xl hover:border-[#E31E24]/30 hover:bg-white hover:shadow-md transition-all">
                <div className="text-2xl sm:text-3xl font-black text-[#0F1520] font-outfit">100%</div>
                <div className="text-xs text-slate-500 font-semibold mt-0.5">ISO 9001 Certified</div>
              </div>
            </div>
          </div>

          {/* Right Hero Image Showcase with Alt Text */}
          <div className="lg:col-span-5 relative">
            <div
              ref={heroImageRef}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 group transition-all duration-500"
            >
              <img
                src="/images/hero_plant.png"
                alt="industrial mechanical construction and plant engineering by Turbo Tech Kushinagar Uttar Pradesh"
                className="w-full h-[460px] sm:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/10 to-transparent"></div>

              {/* Floating Glassmorphism Cards */}
              <div className="absolute top-6 left-6 right-6 sm:right-auto sm:w-64 space-y-3 pointer-events-none">

                {/* Card 1: Safety First */}
                <div className="hero-float-card-1 glass-card p-3.5 rounded-2xl flex items-center gap-3.5 shadow-xl border border-white/80 pointer-events-auto hover:scale-105 transition-transform">
                  <div className="w-10 h-10 rounded-xl bg-[#E31E24]/10 text-[#E31E24] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 font-outfit">Safety First Policy</h4>
                    <p className="text-[11px] text-slate-500 font-medium">HSE Compliant Work</p>
                  </div>
                </div>

                {/* Card 2: ISO Certified */}
                <div className="hero-float-card-2 glass-card p-3.5 rounded-2xl flex items-center gap-3.5 shadow-xl border border-white/80 pointer-events-auto hover:scale-105 transition-transform">
                  <div className="w-10 h-10 rounded-xl bg-[#E31E24]/10 text-[#E31E24] flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 font-outfit">ISO 9001:2015</h4>
                    <p className="text-[11px] text-slate-500 font-medium">Certified Quality</p>
                  </div>
                </div>

                {/* Card 3: Mechanical Construction Company */}
                <div className="hero-float-card-3 glass-card p-3.5 rounded-2xl flex items-center gap-3.5 shadow-xl border border-white/80 pointer-events-auto hover:scale-105 transition-transform">
                  <div className="w-10 h-10 rounded-xl bg-[#E31E24]/10 text-[#E31E24] flex items-center justify-center shrink-0">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 font-outfit">EPC Execution</h4>
                    <p className="text-[11px] text-slate-500 font-medium">Across Uttar Pradesh</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
