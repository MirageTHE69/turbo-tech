'use client';

import React, { useState } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

import Header from '@/components/Header';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfoBar from '@/components/contact/ContactInfoBar';
import ContactFormMap from '@/components/contact/ContactFormMap';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';

export default function ContactClient() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  useSmoothScroll();

  return (
    <main className="min-h-screen bg-white text-[#0F1520] relative antialiased selection:bg-[#E31E24] selection:text-white">
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
