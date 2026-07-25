'use client';

import React, { useState } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import useScrollReveal from '@/hooks/useScrollReveal';

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
import CursorDot from '@/components/CursorDot';

export default function HomeClient() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  useSmoothScroll();
  useScrollReveal();

  return (
    <main className="min-h-screen bg-white text-[#0F1520] relative antialiased selection:bg-[#E31E24] selection:text-white">
      {/* Phase 4: Custom cursor dot + ring (desktop only) */}
      <div id="cursor-dot" aria-hidden="true" />
      <div id="cursor-ring" aria-hidden="true" />
      <CursorDot />

      {/* Header Navigation */}
      <Header onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Hero Showcase */}
      <Hero onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Trusted Industries Ticker */}
      <IndustriesBar />

      {/* About Turbo Tech */}
      <AboutSection />

      {/* 3 Featured Services */}
      <ServicesSection />

      {/* Featured Projects */}
      <ProjectsSection />

      {/* Stats Counter */}
      <StatsCounter />

      {/* Skill Training Institute */}
      <TrainingSection />

      {/* Call to Action Banner */}
      <CtaBanner onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Footer */}
      <Footer />

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </main>
  );
}
