'use client';

import React, { useState } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

import Header from '@/components/Header';
import ServicesHero from '@/components/services/ServicesHero';
import CoreServicesGrid from '@/components/services/CoreServicesGrid';
import MechanicalCapabilities from '@/components/services/MechanicalCapabilities';
import GuaranteesBar from '@/components/services/GuaranteesBar';
import ServicesCta from '@/components/services/ServicesCta';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';

export default function ServicesClient() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  useSmoothScroll();

  return (
    <main className="min-h-screen bg-white text-[#0F1520] relative antialiased selection:bg-[#E31E24] selection:text-white">
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
