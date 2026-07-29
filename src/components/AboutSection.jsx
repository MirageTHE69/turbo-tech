'use client';

import React, { useRef, useEffect } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const pillars = [
  'End-to-end EPC execution across India',
  'ISO 9001:2015 certified processes',
  'In-house certified workforce of 150+',
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
          }
        }),
      { threshold: 0.1 }
    );
    sectionRef.current
      ?.querySelectorAll('.scroll-reveal')
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Ensure video is muted and playing programmatically on mount & load
  const setVideoRef = (el) => {
    if (el) {
      videoRef.current = el;
      el.muted = true;
      el.defaultMuted = true;
      const p = el.play();
      if (p !== undefined) {
        p.catch(() => {
          const handleTouch = () => {
            el.play().catch(() => {});
            window.removeEventListener('touchstart', handleTouch);
            window.removeEventListener('click', handleTouch);
          };
          window.addEventListener('touchstart', handleTouch, { once: true });
          window.addEventListener('click', handleTouch, { once: true });
        });
      }
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 sm:py-24 lg:py-32 bg-white border-b border-[#E2DDD8]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[46%_1fr] gap-12 lg:gap-20 items-center">

          {/* LEFT — Vertical Rectangle Video Card */}
          <div className="relative scroll-reveal max-w-lg w-full mx-auto lg:mx-0">

            {/* Offset decorative frame lines */}
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-full h-full border border-[#E31E24]/20 pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 sm:-bottom-7 sm:-right-7 w-full h-full border border-[#E31E24]/8 pointer-events-none" />

            {/* Vertical Rectangle (Portrait aspect ratio) Video Container */}
            <div className="relative w-full h-[460px] sm:h-[540px] lg:h-[580px] rounded-none overflow-hidden bg-[#08090D] border border-[#E2DDD8]">
              <video
                ref={setVideoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster="/images/about_team.png"
                onLoadedData={(e) => {
                  e.target.muted = true;
                  e.target.play().catch(() => {});
                }}
                onCanPlay={(e) => {
                  e.target.muted = true;
                  e.target.play().catch(() => {});
                }}
                className="w-full h-full object-cover img-vivid"
              >
                <source src="/video/about-section-video.mp4" type="video/mp4" />
              </video>

              {/* Subtle dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090D]/70 via-transparent to-transparent pointer-events-none" />

              {/* Floating Stat Chips at bottom */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-end justify-between gap-3 pointer-events-none">
                <div className="bg-white/95 backdrop-blur-md px-4 py-3 sm:px-5 sm:py-3.5 border border-[#E2DDD8] shadow-xl">
                  <div className="text-2xl sm:text-3xl font-black text-[#E31E24] font-outfit leading-none">
                    13+
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-slate-700 font-outfit mt-1 uppercase tracking-wide">
                    Years Experience
                  </div>
                </div>
                <div className="bg-[#E31E24] px-4 py-3 sm:px-5 sm:py-3.5 shadow-xl text-white">
                  <div className="text-2xl sm:text-3xl font-black font-outfit leading-none">
                    150+
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold mt-1 uppercase tracking-wide opacity-90">
                    Projects Done
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="space-y-6 sm:space-y-7 scroll-reveal scroll-reveal-delay-2">

            <div>
              <p className="eyebrow mb-4 sm:mb-5">About Turbo Tech</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F1520] leading-[1.06] font-outfit tracking-tight">
                Your Complete
                <br />
                Industrial Partner.
              </h2>
            </div>

            {/* Red accent rule */}
            <div className="w-10 h-[2px] bg-[#E31E24]" />

            <p className="text-slate-500 text-sm sm:text-base leading-[1.8] max-w-md">
              From EPC execution to fabrication, plant maintenance, and international &amp; global manpower solutions — Turbo Tech delivers end-to-end engineering solutions across India with a proven 13-year track record.
            </p>

            {/* Pillar checklist */}
            <ul className="space-y-3">
              {pillars.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4.5 h-4.5 text-[#E31E24] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">{p}</span>
                </li>
              ))}
            </ul>

            {/* CTA links */}
            <div className="flex flex-wrap items-center gap-5 pt-1">
              <a href="/about" className="arrow-link font-outfit text-sm">
                <span>Company Profile</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-[#DDD8D2] hidden sm:block">|</span>
              <a href="/contact" className="text-xs sm:text-sm font-bold text-slate-400 hover:text-[#E31E24] transition-colors font-outfit">
                Get in Touch →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
