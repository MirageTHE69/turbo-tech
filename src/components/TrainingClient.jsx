'use client';

import React, { useState } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import useScrollReveal from '@/hooks/useScrollReveal';

import Header from '@/components/Header';
import TrainingHero from '@/components/training/TrainingHero';
import CoursesGrid from '@/components/training/CoursesGrid';
import TrainingHighlightsBar from '@/components/training/TrainingHighlightsBar';
import TrainingCta from '@/components/training/TrainingCta';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import CursorDot from '@/components/CursorDot';

export default function TrainingClient() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  useSmoothScroll();
  useScrollReveal();

  return (
    <main className="min-h-screen bg-white text-[#0F1520] relative antialiased selection:bg-[#E31E24] selection:text-white">
      <div id="cursor-dot" aria-hidden="true" />
      <div id="cursor-ring" aria-hidden="true" />
      <CursorDot />

      <Header onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Hero Showcase */}
      <TrainingHero onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Course Offerings Grid */}
      <CoursesGrid onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Workshop Highlights */}
      <TrainingHighlightsBar />

      {/* Call to Action */}
      <TrainingCta onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Footer */}
      <Footer />

      {/* Free Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </main>
  );
}
