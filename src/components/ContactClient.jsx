'use client';

import React, { useState } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import useScrollReveal from '@/hooks/useScrollReveal';

import Header from '@/components/Header';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfoBar from '@/components/contact/ContactInfoBar';
import ContactFormMap from '@/components/contact/ContactFormMap';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import CursorDot from '@/components/CursorDot';

export default function ContactClient() {
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
      <ContactHero />

      {/* 4 Cards Info Bar */}
      <ContactInfoBar />

      {/* Form & Map */}
      <ContactFormMap />

      {/* Footer */}
      <Footer />

      {/* Quote Request Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </main>
  );
}
