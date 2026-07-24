'use client';

import React, { useEffect, useRef, useState } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Briefcase, 
  UserCheck, 
  Play, 
  Volume2, 
  VolumeX, 
  ChevronDown, 
  Calendar, 
  Building2, 
  Users, 
  MapPin, 
  Shield, 
  X 
} from 'lucide-react';
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
        className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-slate-950 text-white pt-24 pb-8 lg:pt-28 lg:pb-10 font-plus-jakarta select-none"
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
            className="hero-video-bg absolute inset-0 w-full h-full object-cover scale-100 transition-all duration-700 brightness-90 contrast-105"
          >
            <source src="/video/hero-background-vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Moody Industrial Dark Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/40 z-1" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1520] via-slate-950/30 to-slate-950/50 z-1" />
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 mix-blend-overlay z-1" />
        </div>

        {/* Main Hero Grid Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto w-full py-2 sm:py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Left Hero Narrative Column */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              {/* Category Tag with Red Line */}
              <div className="hero-anim flex items-center gap-2.5">
                <span className="w-7 h-[2.5px] bg-[#E31E24] rounded-full shadow-[0_0_8px_#E31E24]"></span>
                <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.16em] text-slate-300">
                  Industrial Engineering Company Kushinagar & UP
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="hero-anim text-3xl sm:text-5xl lg:text-5xl font-black text-white tracking-tight leading-[1.08] font-outfit">
                Engineering <br />
                Industrial Excellence <br />
                <span className="text-[#E31E24] drop-shadow-[0_4px_20px_rgba(227,30,36,0.35)]">
                  At Every Scale.
                </span>
              </h1>

              {/* Paragraph */}
              <p className="hero-anim text-slate-300 text-sm sm:text-base max-w-lg leading-relaxed font-normal">
                From EPC execution to fabrication and maintenance, we deliver reliable industrial solutions with certified manpower across India.
              </p>

              {/* Action Buttons & Audio Toggle */}
              <div className="hero-anim flex flex-wrap items-center gap-3.5 pt-1">
                <button
                  onClick={onOpenQuote}
                  className="btn-primary-red px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2.5 group shadow-lg shadow-red-950/50"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 backdrop-blur-md transition-all flex items-center gap-2.5 group shadow-md"
                >
                  <div className="w-6 h-6 rounded-full bg-[#E31E24] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-3 h-3 fill-white translate-x-0.5" />
                  </div>
                  <span>Watch Our Work</span>
                </button>

                {/* Audio Control Pill */}
                <button
                  onClick={toggleAudio}
                  aria-label="Toggle Sound"
                  className="p-3 rounded-full text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-900/90 border border-white/15 backdrop-blur-md transition-all"
                  title={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#E31E24]" />}
                </button>
              </div>
            </div>

            {/* Right Side Info Cards - All 3 Cards Guaranteed Visible */}
            <div className="lg:col-span-5 relative flex flex-col gap-3.5 lg:pl-8 items-start lg:items-end">
              <div className="relative w-full max-w-[320px] flex flex-col gap-3.5">
                
                {/* Connecting Vertical Red Accent Line */}
                <div className="absolute left-6 top-5 bottom-5 w-[2px] bg-gradient-to-b from-[#E31E24] via-[#E31E24]/60 to-[#E31E24]/20 z-0" />

                {/* Card 1: ISO 9001:2015 */}
                <div className="hero-info-card relative z-10 bg-slate-950/70 backdrop-blur-xl border border-white/15 rounded-2xl p-3.5 flex items-center gap-4 hover:border-[#E31E24]/60 transition-all duration-200 shadow-xl group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-[#E31E24] flex items-center justify-center shrink-0 group-hover:bg-[#E31E24] group-hover:text-white group-hover:border-[#E31E24] transition-all duration-200">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white font-outfit tracking-wide leading-tight">ISO 9001:2015</h4>
                    <p className="text-[11px] text-slate-400 font-medium mt-0.5">Certified Company</p>
                  </div>
                </div>

                {/* Card 2: 500+ Projects Delivered */}
                <div className="hero-info-card relative z-10 bg-slate-950/70 backdrop-blur-xl border border-white/15 rounded-2xl p-3.5 flex items-center gap-4 hover:border-[#E31E24]/60 transition-all duration-200 shadow-xl group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-[#E31E24] flex items-center justify-center shrink-0 group-hover:bg-[#E31E24] group-hover:text-white group-hover:border-[#E31E24] transition-all duration-200">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white font-outfit tracking-wide leading-tight">500+</h4>
                    <p className="text-[11px] text-slate-400 font-medium mt-0.5">Projects Delivered</p>
                  </div>
                </div>

                {/* Card 3: 13+ Years of Experience */}
                <div className="hero-info-card relative z-10 bg-slate-950/70 backdrop-blur-xl border border-white/15 rounded-2xl p-3.5 flex items-center gap-4 hover:border-[#E31E24]/60 transition-all duration-200 shadow-xl group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-[#E31E24] flex items-center justify-center shrink-0 group-hover:bg-[#E31E24] group-hover:text-white group-hover:border-[#E31E24] transition-all duration-200">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white font-outfit tracking-wide leading-tight">13+</h4>
                    <p className="text-[11px] text-slate-400 font-medium mt-0.5">Years of Experience</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Key Metrics Glass Container & Scroll Indicator */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-2 space-y-3">
          {/* Glass Stats Strip */}
          <div className="hero-anim glass-card-dark rounded-2xl border border-white/15 p-3 sm:p-4 shadow-xl backdrop-blur-xl bg-slate-950/60">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              
              {/* Stat 1 */}
              <div className="flex items-center gap-2.5 pt-1.5 sm:pt-0 sm:px-2.5 first:px-0">
                <Calendar className="w-4 h-4 text-[#E31E24] shrink-0" />
                <div>
                  <div className="text-sm font-black text-white font-outfit leading-tight">13+</div>
                  <div className="text-[10px] text-slate-400 font-medium">Years Experience</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-2.5 pt-1.5 sm:pt-0 sm:px-2.5">
                <Building2 className="w-4 h-4 text-[#E31E24] shrink-0" />
                <div>
                  <div className="text-sm font-black text-white font-outfit leading-tight">500+</div>
                  <div className="text-[10px] text-slate-400 font-medium">Projects Delivered</div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-2.5 pt-1.5 sm:pt-0 sm:px-2.5">
                <Users className="w-4 h-4 text-[#E31E24] shrink-0" />
                <div>
                  <div className="text-sm font-black text-white font-outfit leading-tight">300+</div>
                  <div className="text-[10px] text-slate-400 font-medium">Certified Workforce</div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex items-center gap-2.5 pt-1.5 sm:pt-0 sm:px-2.5">
                <Award className="w-4 h-4 text-[#E31E24] shrink-0" />
                <div>
                  <div className="text-sm font-black text-white font-outfit leading-tight">100%</div>
                  <div className="text-[10px] text-slate-400 font-medium">ISO 9001 Certified</div>
                </div>
              </div>

              {/* Stat 5 */}
              <div className="flex items-center gap-2.5 pt-1.5 sm:pt-0 sm:px-2.5">
                <MapPin className="w-4 h-4 text-[#E31E24] shrink-0" />
                <div>
                  <div className="text-sm font-black text-white font-outfit leading-tight">PAN India</div>
                  <div className="text-[10px] text-slate-400 font-medium">Service Network</div>
                </div>
              </div>

              {/* Stat 6 */}
              <div className="flex items-center gap-2.5 pt-1.5 sm:pt-0 sm:px-2.5">
                <Shield className="w-4 h-4 text-[#E31E24] shrink-0" />
                <div>
                  <div className="text-sm font-black text-white font-outfit leading-tight">Safety First</div>
                  <div className="text-[10px] text-slate-400 font-medium">Zero Compromise</div>
                </div>
              </div>

            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center pt-0.5">
            <a
              href="#industries"
              className="hero-anim inline-flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors group cursor-pointer"
            >
              <div className="w-5 h-8 rounded-full border-2 border-slate-400/60 group-hover:border-white flex justify-center pt-1 transition-colors">
                <div className="w-1 h-2 bg-[#E31E24] rounded-full animate-bounce"></div>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase text-slate-300 group-hover:text-white">
                <span>SCROLL TO EXPLORE</span>
                <ChevronDown className="w-3 h-3 text-[#E31E24] group-hover:translate-y-0.5 transition-transform" />
              </div>
            </a>
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
