'use client';

import React, { useState } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import useScrollReveal from '@/hooks/useScrollReveal';

import Header from '@/components/Header';
import ProjectsHero from '@/components/projects/ProjectsHero';
import ProjectsStats from '@/components/projects/ProjectsStats';
import ProjectsGallery from '@/components/projects/ProjectsGallery';
import ProjectsCta from '@/components/projects/ProjectsCta';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import CursorDot from '@/components/CursorDot';

export default function ProjectsPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  useSmoothScroll();
  useScrollReveal();

  return (
    <main className="min-h-screen bg-white text-[#0F1520] relative antialiased selection:bg-[#E31E24] selection:text-white">
      <div id="cursor-dot" aria-hidden="true" />
      <div id="cursor-ring" aria-hidden="true" />
      <CursorDot />

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
