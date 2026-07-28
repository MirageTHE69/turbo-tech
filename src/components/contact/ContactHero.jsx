'use client';

import React, { useEffect, useRef } from 'react';
import { PhoneCall, ArrowRight } from 'lucide-react';
import gsap from 'gsap';

export default function ContactHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.ch-anim',
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
            <p className="ch-anim eyebrow opacity-0">Contact Us</p>

            <h1 className="ch-anim font-outfit font-black text-[#0F1520] text-4xl sm:text-5xl lg:text-[60px] leading-[1.04] tracking-tight opacity-0">
              Contact{' '}
              <span className="text-[#E31E24]">Turbo Tech.</span>
            </h1>

            <div className="ch-anim w-10 h-[2px] bg-[#E31E24] opacity-0" />

            <p className="ch-anim text-slate-500 text-base leading-[1.8] max-w-md opacity-0">
              Have a project in mind or want to learn more about our services?
              We&apos;d love to hear from you. Our engineering team is ready to respond.
            </p>

            {/* Phone badge */}
            <div className="ch-anim opacity-0">
              <div className="inline-flex items-center gap-5 border border-[#E2DDD8] bg-white px-6 py-4">
                <div className="shrink-0 w-10 h-10 bg-[#E31E24] flex items-center justify-center text-white">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-outfit">Need Immediate Assistance?</p>
                  <a href="tel:+916351149073" className="text-lg font-black text-[#0F1520] hover:text-[#E31E24] transition-colors font-outfit">
                    +91 63511 49073
                  </a>
                </div>
              </div>
            </div>

            <div className="ch-anim opacity-0">
              <a href="#contact-form" className="arrow-link font-outfit text-sm text-[#0F1520] hover:text-[#E31E24]">
                <span>Send Us a Message</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right — image */}
          <div className="ch-anim relative opacity-0">
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#E31E24]/12 pointer-events-none" />
            <div className="relative overflow-hidden">
              <img
                src="/images/hero_plant.png"
                alt="Turbo Tech Engineering Team"
                className="w-full h-[380px] sm:h-[460px] object-cover img-vivid"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 bg-white/95 px-5 py-3">
                <span className="text-[10px] font-black text-[#0F1520] uppercase tracking-widest font-outfit">
                  Mon–Sat: 9 AM – 6 PM IST
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
