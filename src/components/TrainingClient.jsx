'use client';

import React, { useState } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

import Header from '@/components/Header';
import TrainingHero from '@/components/training/TrainingHero';
import CoursesGrid from '@/components/training/CoursesGrid';
import TrainingHighlightsBar from '@/components/training/TrainingHighlightsBar';
import TrainingCta from '@/components/training/TrainingCta';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';

export default function TrainingClient() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  useSmoothScroll();

  return (
    <main className="min-h-screen bg-white text-[#0F1520] relative antialiased selection:bg-[#E31E24] selection:text-white">
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
