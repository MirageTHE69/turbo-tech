'use client';

import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import IndustriesBar from '@/components/IndustriesBar';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import StatsCounter from '@/components/StatsCounter';
import TrainingSection from '@/components/TrainingSection';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomeClient() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <main className="min-h-screen bg-white text-[#0F1520] relative antialiased selection:bg-[#E31E24] selection:text-white">
      {/* Header Navigation */}
      <Header onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Hero Showcase */}
      <Hero onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Trusted Industries Ticker */}
      <IndustriesBar />

      {/* About Turbo Tech */}
      <AboutSection />

      {/* 10 Services Grid */}
      <ServicesSection />

      {/* Featured Projects Carousel */}
      <ProjectsSection />

      {/* Dynamic Counter Bar */}
      <StatsCounter />

      {/* Skill Training Institute */}
      <TrainingSection />

      {/* Call to Action Banner */}
      <CtaBanner onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Complete Footer */}
      <Footer />

      {/* Interactive Free Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </main>
  );
}
