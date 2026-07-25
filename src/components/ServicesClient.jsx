'use client';

import React, { useState } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import useScrollReveal from '@/hooks/useScrollReveal';

import Header from '@/components/Header';
import ServicesHero from '@/components/services/ServicesHero';
import CoreServicesGrid from '@/components/services/CoreServicesGrid';
import MechanicalCapabilities from '@/components/services/MechanicalCapabilities';
import GuaranteesBar from '@/components/services/GuaranteesBar';
import ServicesCta from '@/components/services/ServicesCta';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import CursorDot from '@/components/CursorDot';

export default function ServicesClient() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  useSmoothScroll();
  useScrollReveal();

  return (
    <main className="min-h-screen bg-white text-[#0F1520] relative antialiased selection:bg-[#E31E24] selection:text-white">
      <div id="cursor-dot" aria-hidden="true" />
      <div id="cursor-ring" aria-hidden="true" />
      <CursorDot />

      <Header onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Services Hero */}
      <ServicesHero onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 10 Core Services Cards Grid */}
      <CoreServicesGrid onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Full Mechanical Capabilities Spectrum */}
      <MechanicalCapabilities />

      {/* Guarantees Bar */}
      <GuaranteesBar />

      {/* CTA */}
      <ServicesCta onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Footer */}
      <Footer />

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </main>
  );
}
