'use client';

import React, { useEffect, useRef } from 'react';
import { PhoneCall } from 'lucide-react';
import gsap from 'gsap';

export default function ContactHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-hero-anim', {
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

          {/* Left Text Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="contact-hero-anim">
              <span className="tag-badge">Contact Us</span>
            </div>

            <h1 className="contact-hero-anim text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F1520] tracking-tight leading-[1.1] font-outfit">
              Let&apos;s Build <br />
              Something Great <span className="text-[#E31E24]">Together.</span>
            </h1>

            <p className="contact-hero-anim text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
              Have a project in mind or want to learn more about our services? We&apos;d love to hear from you. Reach out to our team and we&apos;ll get back to you soon.
            </p>

            {/* Immediate Assistance Badge */}
            <div className="contact-hero-anim pt-4">
              <div className="inline-flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E31E24] flex items-center justify-center shrink-0">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider font-outfit">
                    Need Immediate Assistance?
                  </span>
                  <a href="tel:+916351149073" className="text-lg font-black text-[#0F1520] hover:text-[#E31E24] transition-colors font-outfit">
                    +91 63511 49073
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Showcase Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[380px] sm:h-[460px]">
              {/* Drop Shadow Frame */}
              <div
                className="absolute inset-0 bg-[#0F1520]/10 rounded-3xl transform translate-x-3 translate-y-3"
                style={{
                  clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)',
                }}
              ></div>

              {/* Main Image Container */}
              <div
                className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl group border border-slate-200/50"
                style={{
                  clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)',
                }}
              >
                <img
                  src="/images/hero_plant.png"
                  alt="Turbo Tech Contact Engineering Team"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
