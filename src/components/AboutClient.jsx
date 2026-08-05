'use client';

import React, { useState } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import useScrollReveal from '@/hooks/useScrollReveal';

import Header from '@/components/Header';
import AboutHero from '@/components/about/AboutHero';
import OurStory from '@/components/about/OurStory';
import OurValues from '@/components/about/OurValues';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import CursorDot from '@/components/CursorDot';

export default function AboutClient() {
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
      <AboutHero />

      {/* Vision, Mission, Quality & HSE */}
      <OurStory />

      {/* Our Values Dark Section */}
      <OurValues />


      {/* Call To Action Banner */}
      <CtaBanner onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Footer */}
      <Footer />

      {/* Free Quote Request Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </main>
  );
}
