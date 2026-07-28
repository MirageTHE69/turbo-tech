'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck, Edit3, HardHat, Cog } from 'lucide-react';
import gsap from 'gsap';

if (typeof window !== 'undefined') {
  const gsap = require('gsap').default;
}

const pillars = [
  { icon: Edit3,      title: 'End-to-End Solutions',  desc: 'From concept to commissioning — every step managed.' },
  { icon: HardHat,    title: 'Safety First',           desc: 'Zero compromise HSE policy protecting teams and assets.' },
  { icon: Cog,        title: 'Quality Assured',        desc: 'ISO 9001:2015 certified processes, global standards.' },
  { icon: ShieldCheck, title: 'On-Time Delivery',      desc: 'Committed to delivering excellence on schedule.' },
];

export default function ServicesHero({ onOpenQuote }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const g = require('gsap').default;
    const ctx = g.context(() => {
      g.fromTo('.svc-hero-anim',
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.1, ease: 'power3.out' }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative pt-28 pb-0 lg:pt-36 bg-[#F5F4F0] overflow-hidden">

      {/* Top content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center pb-20 lg:pb-28">

          {/* Left */}
          <div className="space-y-7">
            <p className="svc-hero-anim eyebrow opacity-0">Our Services</p>

            <h1 className="svc-hero-anim font-outfit font-black text-[#0F1520] text-4xl sm:text-5xl lg:text-[60px] leading-[1.04] tracking-tight opacity-0">
              Engineering Solutions
              <br />
              <span className="text-[#E31E24]">Built Around You.</span>
            </h1>

            <div className="svc-hero-anim w-10 h-[2px] bg-[#E31E24] opacity-0" />

            <p className="svc-hero-anim text-slate-500 text-base leading-[1.8] max-w-md opacity-0">
              We provide end-to-end industrial engineering services designed to
              deliver quality, safety, and efficiency at every stage of your
              project lifecycle.
            </p>

            <div className="svc-hero-anim flex flex-wrap items-center gap-4 opacity-0">
              <button
                onClick={onOpenQuote}
                className="btn-primary-red btn-magnetic flex items-center gap-2.5 px-7 py-4 text-sm font-bold group"
              >
                <span>Let&apos;s Build Together</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a href="#core-services" className="arrow-link font-outfit text-sm text-[#0F1520] hover:text-[#E31E24]">
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right — image with offset frame */}
          <div className="svc-hero-anim relative opacity-0">
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#E31E24]/12 pointer-events-none" />
            <div className="relative overflow-hidden">
              <img
                src="/images/hero_plant.png"
                alt="Turbo Tech Industrial Engineering"
                className="w-full h-[380px] sm:h-[460px] object-cover img-vivid"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

              {/* ISO badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-5 py-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#E31E24]" />
                  <span className="text-[10px] font-black text-[#0F1520] uppercase tracking-widest font-outfit">
                    ISO 9001:2015 Certified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pillars strip — full width, flush to bottom */}
      <div className="border-t border-[#E2DDD8] bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E2DDD8]">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="bg-white px-8 py-8 group hover:bg-[#F5F4F0] transition-colors">
                  <div className="w-10 h-10 border border-[#E2DDD8] text-[#E31E24] flex items-center justify-center mb-5 group-hover:bg-[#E31E24] group-hover:border-[#E31E24] group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#0F1520] font-outfit mb-2 group-hover:text-[#E31E24] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}
