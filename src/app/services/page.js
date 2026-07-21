'use client';

import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import Header from '@/components/Header';
import ServicesHero from '@/components/services/ServicesHero';
import CoreServicesGrid from '@/components/services/CoreServicesGrid';
import MechanicalCapabilities from '@/components/services/MechanicalCapabilities';
import GuaranteesBar from '@/components/services/GuaranteesBar';
import ServicesCta from '@/components/services/ServicesCta';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

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
