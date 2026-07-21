'use client';

import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(currentProgress);

      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Training Institute', href: '/training' },
    { label: 'Industries', href: '/#industries' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3 border-b border-slate-100'
          : 'bg-white/70 backdrop-blur-sm py-5 border-b border-slate-100/50'
      }`}
    >
      {/* Top Scroll Progress Indicator */}
      <div
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-[#E31E24] via-orange-500 to-[#E31E24] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="/">
          <Logo />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-slate-700 hover:text-[#E31E24] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={onOpenQuote}
            className="btn-outline-dark px-5 py-2.5 rounded-full text-xs font-bold tracking-wide flex items-center gap-2 transition-all hover:bg-[#E31E24] hover:border-[#E31E24] hover:text-white"
          >
            <span>Get a Free Quote</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-800 hover:text-[#E31E24] transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 animate-fadeIn shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-[#E31E24] py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full btn-primary-red py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
