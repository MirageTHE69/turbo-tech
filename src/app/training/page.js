'use client';

import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import Header from '@/components/Header';
import TrainingHero from '@/components/training/TrainingHero';
import CoursesGrid from '@/components/training/CoursesGrid';
import TrainingHighlightsBar from '@/components/training/TrainingHighlightsBar';
import TrainingCta from '@/components/training/TrainingCta';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TrainingPage() {
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

      {/* Training Hero */}
      <TrainingHero onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 6 Technical Courses Grid (01-06) */}
      <CoursesGrid onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Highlights Bar */}
      <TrainingHighlightsBar />

      {/* Admission CTA */}
      <TrainingCta onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Footer */}
      <Footer />

      {/* Admission Request Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </main>
  );
}
