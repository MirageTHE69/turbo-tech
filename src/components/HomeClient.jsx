'use client';

import React, { useState } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

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

export default function HomeClient() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  useSmoothScroll();

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
