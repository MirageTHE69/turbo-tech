'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play, Volume2, VolumeX, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function SplitWords({ children, className = '', delay = 0 }) {
  const words = String(children).split(' ');
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="word-wrap" style={{ marginRight: '0.3em' }}>
          <span className="word-inner in-view" style={{ transitionDelay: `${delay + i * 0.08}s` }}>
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}

export default function Hero({ onOpenQuote }) {
  const containerRef  = useRef(null);
  const videoRef      = useRef(null);
  const modalVideoRef = useRef(null);

  const [isMuted,          setIsMuted]          = useState(true);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [videoFailed,      setVideoFailed]      = useState(false);

  const stats = [
    { number: '13+',  label: 'Years Experience'    },
    { number: '150+', label: 'Projects Delivered'  },
    { number: '150+', label: 'Certified Workforce' },
  ];

  // ── Force autoplay on mobile ──────────────────────────────
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    // Set all attributes that mobile browsers require
    vid.muted    = true;
    vid.volume   = 0;
    vid.loop     = true;
    vid.playsInline = true;

    const tryPlay = () => {
      const promise = vid.play();
      if (promise !== undefined) {
        promise.catch(() => {
          // Autoplay blocked — mark failed so we show the poster image cleanly
          setVideoFailed(true);
        });
      }
    };

    if (vid.readyState >= 2) {
      tryPlay();
    } else {
      vid.addEventListener('canplay', tryPlay, { once: true });
    }

    return () => {
      vid.removeEventListener('canplay', tryPlay);
    };
  }, []);

  // ── GSAP Animations ───────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-line',
        { scaleX: 0 },
        { scaleX: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
      );
      gsap.fromTo('.hero-eyebrow',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.4 }
      );
      gsap.fromTo('.hero-sub',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.6 }
      );
      gsap.fromTo('.hero-cta',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.75, stagger: 0.12 }
      );
      gsap.fromTo('.hero-stat-item',
        { opacity: 0, x: 24 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.9, stagger: 0.1 }
      );

      // Scroll parallax on video — only desktop
      if (videoRef.current && window.innerWidth >= 768) {
        gsap.to(videoRef.current, {
          scale: 1.1,
          opacity: 0.35,
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

  // ── Escape key closes modal ───────────────────────────────
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setIsVideoModalOpen(false); };
    if (isVideoModalOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isVideoModalOpen]);

  // ── Mute toggle handler ───────────────────────────────────
  const handleMuteToggle = () => {
    if (videoRef.current) {
      const next = !isMuted;
      videoRef.current.muted  = next;
      videoRef.current.volume = next ? 0 : 1;
      setIsMuted(next);
    }
  };

  return (
    <>
      <section
        ref={containerRef}
        className="relative w-full min-h-[100svh] flex items-center overflow-hidden bg-[#08090D] text-white pt-20 pb-14 sm:pt-24 sm:pb-16 select-none"
      >
        {/* ── Video Background ───────────────────────────────── */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {!videoFailed ? (
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/images/hero_plant.png"
              x-webkit-airplay="allow"
              webkit-playsinline="true"
              onError={() => setVideoFailed(true)}
              className="absolute inset-0 w-full h-full object-cover img-vivid-dark"
              style={{ WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' }}
            >
              <source src="/video/hero-background-vid.mp4" type="video/mp4" />
            </video>
          ) : (
            /* Fallback for devices that block autoplay */
            <img
              src="/images/hero_plant.png"
              alt="Turbo Tech Industrial Engineering"
              className="absolute inset-0 w-full h-full object-cover img-vivid-dark"
            />
          )}

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#08090D]/92 via-[#08090D]/65 to-[#08090D]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090D]/80 via-transparent to-[#08090D]/20" />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[300px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(227,30,36,0.1) 0%, transparent 70%)' }}
          />
        </div>

        {/* ── Main Content ───────────────────────────────────── */}
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-center">

            {/* LEFT — Headline + CTA */}
            <div className="max-w-3xl">

              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-6 sm:mb-7">
                <div
                  className="hero-line w-8 sm:w-10 h-[1.5px] bg-[#E31E24] origin-left"
                  style={{ transform: 'scaleX(0)' }}
                />
                <span className="hero-eyebrow text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-white/50 opacity-0">
                  Industrial Engineering · Kushinagar, UP
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-outfit font-black text-white leading-[1.03] tracking-tight mb-5 sm:mb-6">
                <span className="block text-[2.4rem] sm:text-6xl lg:text-[76px]">
                  <SplitWords delay={0.5}>Built for Industry.</SplitWords>
                </span>
                <span className="block text-[2.4rem] sm:text-6xl lg:text-[76px] text-[#E31E24]">
                  <SplitWords delay={0.65}>Built to Last.</SplitWords>
                </span>
              </h1>

              {/* Subtitle */}
              <p className="hero-sub text-white/50 text-sm sm:text-base max-w-lg leading-relaxed mb-8 sm:mb-10 opacity-0">
                EPC execution · Mechanical fabrication · International &amp; global manpower solutions —
                delivered with precision across India.
              </p>

              {/* CTA Row — stacks on mobile */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  onClick={onOpenQuote}
                  className="hero-cta btn-primary-red btn-magnetic flex items-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-bold group opacity-0"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="hero-cta flex items-center gap-2.5 sm:gap-3 text-white/60 hover:text-white transition-colors group opacity-0"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/15 bg-white/5 flex items-center justify-center group-hover:border-[#E31E24] group-hover:bg-[#E31E24] transition-all duration-300">
                    <Play className="w-4 h-4 fill-current translate-x-0.5" />
                  </div>
                  <span className="text-sm font-semibold">Watch Our Work</span>
                </button>

                {/* Mute toggle — only shown when video is playing */}
                {!videoFailed && (
                  <button
                    onClick={handleMuteToggle}
                    aria-label="Toggle Sound"
                    className="hero-cta w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/10 bg-white/5 hover:border-white/25 flex items-center justify-center text-white/40 hover:text-white/80 transition-all opacity-0"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#E31E24]" />}
                  </button>
                )}
              </div>

              {/* Scroll hint */}
              <div className="mt-12 sm:mt-14 flex items-center gap-3 sm:gap-4">
                <div className="relative w-5 h-8 sm:h-9 rounded-full border border-white/20 flex justify-center pt-2 overflow-hidden">
                  <div className="w-[3px] h-3 bg-[#E31E24] rounded-full animate-bounce" />
                </div>
                <span className="text-[9px] font-bold tracking-[0.22em] uppercase text-white/30">
                  Scroll to explore
                </span>
              </div>
            </div>

            {/* RIGHT — Vertical Stat Column (desktop only) */}
            <div className="hidden lg:flex flex-col gap-0 border-l border-white/10 pl-10">
              {stats.map((stat, i) => (
                <div key={i} className="hero-stat-item py-7 border-b border-white/8 last:border-b-0 opacity-0">
                  <div className="text-4xl font-black font-outfit text-white tracking-tight leading-none mb-1.5">
                    {stat.number}
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40 max-w-[130px] leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
              <div className="pt-7">
                <div className="flex items-center gap-2.5 text-[10px] font-bold tracking-widest uppercase text-white/30">
                  <div className="w-2 h-2 rounded-full bg-[#E31E24] animate-pulse" />
                  ISO 9001:2015
                </div>
              </div>
            </div>

            {/* MOBILE — Horizontal stats row below headline */}
          </div>

          {/* Mobile stats row */}
          <div className="flex lg:hidden items-stretch border-t border-white/8 mt-10 pt-8 gap-0">
            {stats.map((stat, i) => (
              <div key={i} className={`flex-1 ${i > 0 ? 'border-l border-white/10 pl-4' : ''}`}>
                <div className="text-2xl font-black font-outfit text-white leading-none mb-1">
                  {stat.number}
                </div>
                <div className="text-[9px] font-semibold uppercase tracking-wider text-white/35 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Video Modal ───────────────────────────────────────── */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/92 backdrop-blur-2xl"
          onClick={(e) => { if (e.target === e.currentTarget) setIsVideoModalOpen(false); }}
        >
          <div className="relative w-full max-w-5xl bg-[#0F1219] border border-white/12 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 border-b border-white/8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#E31E24] animate-pulse" />
                <span className="text-sm font-bold text-white font-outfit">
                  Turbo Tech — Industrial Operations
                </span>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-1.5 text-white/40 hover:text-white hover:bg-white/8 transition-all"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video bg-black">
              <video
                ref={modalVideoRef}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              >
                <source src="/video/hero-background-vid.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
