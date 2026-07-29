'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

export default function AboutHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.ah-anim',
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.1, ease: 'power3.out' }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-[#F5F4F0] overflow-hidden border-b border-[#E2DDD8]">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left */}
          <div className="space-y-7">
            <p className="ah-anim eyebrow opacity-0">Company Profile</p>

            <h1 className="ah-anim font-outfit font-black text-[#0F1520] text-4xl sm:text-5xl lg:text-[60px] leading-[1.04] tracking-tight opacity-0">
              About{' '}
              <span className="text-[#E31E24]">Turbo Tech.</span>
            </h1>

            <div className="ah-anim w-10 h-[2px] bg-[#E31E24] opacity-0" />

            <p className="ah-anim text-slate-500 text-base leading-[1.8] max-w-md opacity-0">
              Turbo Tech is an Indian industrial engineering & infrastructure company
              From a vision established in 2011 to a leading industrial contractor across India, Turbo Tech is committed to
              delivering mechanical construction, structural fabrication, piping systems,
              plant maintenance, international &amp; global manpower solutions, civil works, and technical training.
            </p>

            {/* Metrics strip */}
            <div className="ah-anim flex items-stretch border border-[#E2DDD8] w-fit opacity-0">
              {[
                { n: '13+',  l: 'Years Active'         },
                { n: '150+', l: 'Projects Delivered'    },
                { n: '150+', l: 'Certified Technicians' },
                { n: '100%', l: 'HSE Commitment'        },
              ].map((s, i) => (
                <div key={i} className={`px-5 py-4 ${i < 3 ? 'border-r border-[#E2DDD8]' : ''}`}>
                  <div className="text-xl font-black font-outfit text-[#0F1520]">{s.n}</div>
                  <div className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>

            <div className="ah-anim opacity-0">
              <a href="#vision-mission" className="arrow-link font-outfit text-sm text-[#0F1520] hover:text-[#E31E24]">
                <span>View Vision, Mission & Values</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right — image */}
          <div className="ah-anim relative opacity-0">
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#E31E24]/12 pointer-events-none" />
            <div className="relative overflow-hidden">
              <img
                src="/images/hero_plant.png"
                alt="Turbo Tech Industrial Facility"
                className="w-full h-[380px] sm:h-[460px] object-cover img-vivid"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 bg-white/95 px-5 py-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#E31E24]" />
                  <span className="text-[10px] font-black text-[#0F1520] uppercase tracking-widest font-outfit">ISO 9001:2015 Certified</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
