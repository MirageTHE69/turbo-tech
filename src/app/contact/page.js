'use client';

import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import Header from '@/components/Header';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfoBar from '@/components/contact/ContactInfoBar';
import ContactFormMap from '@/components/contact/ContactFormMap';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactPage() {
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

      {/* Contact Hero */}
      <ContactHero />

      {/* 4-Column Contact Info Bar */}
      <ContactInfoBar />

      {/* Two Column Message Form & Map */}
      <ContactFormMap />

      {/* Footer */}
      <Footer />

      {/* Free Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </main>
  );
}
