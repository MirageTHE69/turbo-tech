'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play, Volume2, VolumeX, ChevronDown, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero({ onOpenQuote }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const modalVideoRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance Animations for Hero Text Narrative (Explicit fromTo for rock-solid rendering)
      gsap.fromTo(
        '.hero-anim',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out' }
      );

      // 2. Right Side Cards Entrance (Explicit fromTo ensures ALL 3 cards animate to opacity 1)
      gsap.fromTo(
        '.hero-info-card',
        { x: 35, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out', delay: 0.2 }
      );

      // 3. Background Video Subtle Depth Fade on Scroll
      if (videoRef.current) {
        gsap.to(videoRef.current, {
          scale: 1.08,
          opacity: 0.45,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Handle Video Sound Toggle
  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsVideoModalOpen(false);
      }
    };
    if (isVideoModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVideoModalOpen]);

  return (
    <>
      <section
        ref={containerRef}
        className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-[#08090D] text-white pt-24 pb-24 font-plus-jakarta select-none"
      >
        {/* Fullscreen Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="auto"
            poster="/images/hero_plant.png"
            onLoadedData={() => {
              if (typeof window !== 'undefined') {
                ScrollTrigger.refresh();
              }
            }}
            className="hero-video-bg absolute inset-0 w-full h-full object-cover img-vivid-dark"
          >
            <source src="/video/hero-background-vid.mp4" type="video/mp4" />
          </video>

          {/* Minimal dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#08090D]/85 via-[#08090D]/55 to-[#08090D]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-transparent to-transparent" />
        </div>

        {/* Hero Content — left-anchored container */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Eyebrow */}
          <div className="hero-anim flex items-center gap-3 mb-6">
            <span className="w-6 h-[2px] bg-[#E31E24]" />
            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.22em] text-slate-400">
              Industrial Engineering · Kushinagar & UP
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-anim text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] font-outfit mb-6">
            Built for Industry.<br />
            <span className="text-[#E31E24]">Built to Last.</span>
          </h1>

          {/* Single subtitle line */}
          <p className="hero-anim text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed mb-10">
            EPC execution · Mechanical fabrication · Certified manpower — delivered reliably across India.
          </p>

          {/* CTA Row */}
          <div className="hero-anim flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenQuote}
              className="btn-primary-red btn-magnetic px-7 py-4 rounded-full text-sm font-bold flex items-center gap-2.5 group"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center group-hover:bg-[#E31E24] group-hover:border-[#E31E24] transition-all">
                <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />
              </div>
              <span className="text-sm font-semibold">Watch Our Work</span>
            </button>

            {/* Mute toggle */}
            <button
              onClick={toggleAudio}
              aria-label="Toggle Sound"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#E31E24]" />}
            </button>
          </div>

          {/* Scroll hint */}
          <div className="hero-anim mt-16 flex items-center gap-3">
            <div className="w-5 h-9 rounded-full border border-slate-600 flex justify-center pt-1.5">
              <div className="w-1 h-2 bg-[#E31E24] rounded-full animate-bounce" />
            </div>
            <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-slate-500">Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* Lightbox Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-5xl bg-slate-900 border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-slate-950/80">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E31E24] animate-pulse"></div>
                <h3 className="text-sm sm:text-base font-bold text-white font-outfit">
                  Turbo Tech — Industrial Refinery & EPC Operations
                </h3>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video bg-black flex items-center justify-center">
              <video
                ref={modalVideoRef}
                controls
                autoPlay
                className="w-full h-full object-contain"
              >
                <source src="/video/hero-background-vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
