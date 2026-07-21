'use client';

import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import Header from '@/components/Header';
import ProjectsHero from '@/components/projects/ProjectsHero';
import ProjectsStats from '@/components/projects/ProjectsStats';
import ProjectsGallery from '@/components/projects/ProjectsGallery';
import ProjectsCta from '@/components/projects/ProjectsCta';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectsPage() {
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
      <Header onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Projects Hero */}
      <ProjectsHero onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 4-Column Impact Metrics Bar */}
      <ProjectsStats />

      {/* Filterable Projects Gallery & Cards */}
      <ProjectsGallery onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Have a Project in Mind? CTA */}
      <ProjectsCta onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Footer */}
      <Footer />

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </main>
  );
}
